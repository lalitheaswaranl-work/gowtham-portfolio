"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, X, Send, Sparkles, RotateCcw, User, ArrowUpRight } from "lucide-react";
import { ChatMessage } from "@/lib/types";

const suggestedPrompts = [
  "What is Gowtham's experience with SAP MM?",
  "What was his role as SPE Procurement at Cognizant?",
  "How did he achieve cost savings at Rax Tech?",
  "Tell me about his hardware sourcing at Eubix",
  "How can I contact Gowtham for an interview?",
];

function formatMarkdown(text: string) {
  const lines = text.split("\n");
  return (
    <div className="space-y-1.5 text-xs sm:text-sm leading-relaxed">
      {lines.map((line, index) => {
        const trimmed = line.trim();
        if (trimmed.startsWith("• ") || trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
          const content = trimmed.slice(2);
          return (
            <div key={index} className="flex items-start gap-2 pl-2">
              <span className="text-blue-500 font-bold">•</span>
              <span dangerouslySetInnerHTML={{ __html: inlineMarkdown(content) }} />
            </div>
          );
        }
        if (!trimmed) {
          return <div key={index} className="h-1" />;
        }
        return (
          <p
            key={index}
            dangerouslySetInnerHTML={{ __html: inlineMarkdown(line) }}
          />
        );
      })}
    </div>
  );
}

function inlineMarkdown(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-900 dark:text-white">$1</strong>')
    .replace(/`([^`]+)`/g, '<code class="px-1 py-0.5 rounded bg-black/10 dark:bg-white/10 font-mono text-[11px]">$1</code>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-sky-400 underline font-medium hover:opacity-80">$1</a>');
}

export function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hello! I am Gowtham Balamurugan's **AI Procurement Copilot**, powered by Google Gemini. Ask me about Gowtham's experience with SAP MM, his 48-hour PO SLA compliance at Cognizant, strategic sourcing achievements, or contact details.",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function handleSend(textToSend = input) {
    const trimmed = textToSend.trim();
    if (!trimmed || loading) return;

    const userMsgId = `user-${Date.now()}`;
    const assistantMsgId = `assistant-${Date.now()}`;

    const newMessages: ChatMessage[] = [
      ...messages,
      { id: userMsgId, role: "user", content: trimmed },
      { id: assistantMsgId, role: "assistant", content: "" },
    ];

    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const historyPayload = messages
        .filter((m) => m.id !== "welcome")
        .map((m) => ({ role: m.role, content: m.content }));

      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          history: historyPayload,
        }),
      });

      if (!response.body) {
        throw new Error("No response body");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMsgId ? { ...msg, content: accumulated } : msg
          )
        );
      }
    } catch {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantMsgId
            ? {
                ...msg,
                content:
                  "I apologize, but I could not reach the server right now. Please feel free to reach out to Gowtham directly at [gowthambalamurugan02@gmail.com](mailto:gowthambalamurugan02@gmail.com) or call [+91-6374844527](tel:+916374844527).",
              }
            : msg
        )
      );
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content:
          "Conversation reset. How can I help you evaluate Gowtham Balamurugan's procurement & supply chain credentials?",
      },
    ]);
  }

  return (
    <>
      {/* Floating Trigger Pill */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open AI Procurement Copilot"
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-full neu-btn-primary group shadow-2xl transition-all duration-300 ${
          open ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"
        }`}
      >
        <div className="relative">
          <Bot className="w-5 h-5 text-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
        </div>
        <div className="text-left">
          <div className="text-xs font-bold text-white flex items-center gap-1">
            <span>AI Copilot</span>
            <Sparkles className="w-3 h-3 text-amber-300" />
          </div>
          <div className="text-[10px] text-blue-100 font-medium">Ask about Gowtham</div>
        </div>
      </button>

      {/* Chat Dialog Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full sm:max-w-xl h-[85vh] sm:h-[650px] neu-card-lg flex flex-col overflow-hidden animate-in slide-in-from-bottom-6 duration-200 bg-[var(--card-bg)] shadow-2xl">
            {/* Header */}
            <div className="px-5 py-4 border-b border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-2xl neu-inset flex items-center justify-center text-blue-600 dark:text-sky-400">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>Gowtham's AI Copilot</span>
                    <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-[10px] font-semibold text-blue-600 dark:text-sky-400">
                      Gemini Grounded
                    </span>
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Procurement, SAP MM & Supply Chain Intelligence
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleReset}
                  title="Reset Chat"
                  className="w-8 h-8 rounded-full neu-btn flex items-center justify-center text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 text-xs"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setOpen(false)}
                  title="Close Assistant"
                  className="w-8 h-8 rounded-full neu-btn flex items-center justify-center text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
              {messages.map((msg) => {
                const isAssistant = msg.role === "assistant";
                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2.5 ${
                      isAssistant ? "justify-start" : "justify-end"
                    }`}
                  >
                    {isAssistant && (
                      <div className="w-7 h-7 rounded-xl neu-card-sm shrink-0 flex items-center justify-center text-blue-600 dark:text-sky-400 mt-1">
                        <Bot className="w-3.5 h-3.5" />
                      </div>
                    )}
                    <div
                      className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm ${
                        isAssistant
                          ? "neu-card text-slate-800 dark:text-slate-200"
                          : "neu-btn-primary text-white"
                      }`}
                    >
                      {isAssistant ? (
                        msg.content ? (
                          formatMarkdown(msg.content)
                        ) : (
                          <div className="flex items-center gap-1.5 py-1 text-slate-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" />
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce [animation-delay:0.2s]" />
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce [animation-delay:0.4s]" />
                          </div>
                        )
                      ) : (
                        <p>{msg.content}</p>
                      )}
                    </div>
                    {!isAssistant && (
                      <div className="w-7 h-7 rounded-xl neu-card-sm shrink-0 flex items-center justify-center text-slate-600 dark:text-slate-300 mt-1">
                        <User className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Chips */}
            <div className="px-4 py-2 border-t border-slate-200/40 dark:border-slate-800/40 overflow-x-auto flex items-center gap-2 no-scrollbar">
              {suggestedPrompts.map((prompt, i) => (
                <button
                  key={i}
                  disabled={loading}
                  onClick={() => handleSend(prompt)}
                  className="shrink-0 px-3 py-1.5 rounded-full neu-pill text-[11px] font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 flex items-center gap-1 transition-transform hover:scale-[1.02]"
                >
                  <span>{prompt}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 sm:p-4 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about SAP MM, PR/PO SLA, cost savings..."
                disabled={loading}
                className="flex-1 neu-inset px-4 py-2.5 text-xs sm:text-sm bg-transparent text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send query"
                className={`w-10 h-10 rounded-xl neu-btn-primary flex items-center justify-center text-white shrink-0 ${
                  loading || !input.trim() ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
