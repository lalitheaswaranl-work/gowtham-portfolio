import { NextResponse } from "next/server";
import { getProcurementContext, generateLocalFallbackAnswer } from "@/lib/gemini-context";

export const runtime = "nodejs";

const streamHeaders = {
  "Content-Type": "text/plain; charset=utf-8",
  "Cache-Control": "no-cache, no-transform",
  "Connection": "keep-alive",
  "X-Accel-Buffering": "no",
};

function createTextStream(text: string) {
  const encoder = new TextEncoder();
  const words = text.split(/(\s+)/);

  return new ReadableStream({
    async start(controller) {
      for (const word of words) {
        controller.enqueue(encoder.encode(word));
        await new Promise((resolve) => setTimeout(resolve, 15));
      }
      controller.close();
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = body?.message?.trim();
    const history = Array.isArray(body?.history) ? body.history : [];

    if (!message) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    const apiKey =
      process.env.GEMINI_API_KEY ||
      process.env.GOOGLE_API_KEY ||
      process.env.GOOGLE_AI_KEY ||
      process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    // If Gemini API Key is configured, attempt real-time Gemini generation
    if (apiKey) {
      try {
        const systemPrompt = getProcurementContext();

        // Build Gemini contents payload with history
        const contents: Array<{ role: string; parts: Array<{ text: string }> }> = [];

        // Include last 6 conversation exchanges
        const recentHistory = history.slice(-6);
        for (const item of recentHistory) {
          contents.push({
            role: item.role === "assistant" ? "model" : "user",
            parts: [{ text: item.content }],
          });
        }

        // Add current user query
        contents.push({
          role: "user",
          parts: [{ text: message }],
        });

        const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        const geminiResponse = await fetch(geminiEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            system_instruction: {
              parts: [{ text: systemPrompt }],
            },
            contents,
            generationConfig: {
              temperature: 0.3,
              maxOutputTokens: 1000,
            },
          }),
        });

        if (geminiResponse.ok) {
          const result = await geminiResponse.json();
          const generatedText =
            result?.candidates?.[0]?.content?.parts?.[0]?.text || "";

          if (generatedText) {
            return new Response(createTextStream(generatedText), {
              headers: { ...streamHeaders, "X-Provider": "Google-Gemini" },
            });
          }
        }
      } catch (err) {
        console.warn("Gemini API call failed, falling back to local grounded answers:", err);
      }
    }

    // High-precision local fallback response engine
    const fallbackText = generateLocalFallbackAnswer(message);
    return new Response(createTextStream(fallbackText), {
      headers: { ...streamHeaders, "X-Provider": "Grounded-Local-Copilot" },
    });
  } catch (error) {
    console.error("Assistant API error:", error);
    return NextResponse.json({ error: "Failed to generate answer" }, { status: 500 });
  }
}
