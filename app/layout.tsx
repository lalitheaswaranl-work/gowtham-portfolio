import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/main-nav";
import { AiAssistant } from "@/components/ai-assistant";
import { SplashIntro } from "@/components/splash-intro";
import { SiteFooter } from "@/components/site-footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gowtham Balamurugan | SPE Procurement & Supply Chain Specialist",
  description:
    "Professional portfolio of Gowtham Balamurugan — SPE Procurement Specialist with deep expertise in SAP MM, PR-to-PO SLA compliance, strategic sourcing, and supply chain operations.",
  keywords: [
    "Gowtham Balamurugan",
    "SPE Procurement",
    "Purchase Engineer",
    "Supply Chain Management",
    "SAP MM",
    "Cognizant",
    "Rax Tech International",
    "Eubix Technologies",
    "Strategic Sourcing",
    "Electronics Procurement",
  ],
  authors: [{ name: "Gowtham Balamurugan" }],
  openGraph: {
    title: "Gowtham Balamurugan | SPE Procurement & Supply Chain Specialist",
    description:
      "Explore procurement workflows, SAP MM operations, strategic sourcing results, and interact with the AI Procurement Copilot.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('gowtham-theme');
                if (saved === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} font-sans min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] antialiased transition-colors duration-300`}>
        <ThemeProvider>
          <SplashIntro />
          <MainNav />
          <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>
          <AiAssistant />
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
