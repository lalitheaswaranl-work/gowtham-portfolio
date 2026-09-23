"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { BrandLogo } from "@/components/brand-logo";

export function SplashIntro() {
  const [stage, setStage] = useState<"emerge" | "pulse" | "zoom" | "done">("emerge");
  const finishedRef = useRef(false);

  const finishIntro = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    try {
      sessionStorage.setItem("gb_portfolio_intro_seen_v1", "true");
      document.documentElement.classList.add("intro-seen");
    } catch {
      // Ignore
    }
    setStage("done");
  }, []);

  useEffect(() => {
    // Check if user has already seen the intro this session
    try {
      if (sessionStorage.getItem("gb_portfolio_intro_seen_v1")) {
        document.documentElement.classList.add("intro-seen");
        setStage("done");
        return;
      }
    } catch {
      // Ignore
    }

    // Stage 1 -> Stage 2: Pulse & illuminate with cyan glow after 1200ms
    const pulseTimer = setTimeout(() => {
      setStage("pulse");
    }, 1200);

    // Stage 2 -> Stage 3: Cinematic Zoom-In Camera Push after 2000ms
    const zoomTimer = setTimeout(() => {
      setStage("zoom");
    }, 2000);

    // Stage 3 -> Complete: Cleanly unmount after 2750ms
    const doneTimer = setTimeout(() => {
      finishIntro();
    }, 2750);

    // Keyboard handler for Esc key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        finishIntro();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(pulseTimer);
      clearTimeout(zoomTimer);
      clearTimeout(doneTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [finishIntro]);

  if (stage === "done") {
    return null;
  }

  const isZooming = stage === "zoom";
  const isPulsing = stage === "pulse";

  return (
    <div
      id="portfolio-splash-overlay"
      role="dialog"
      aria-label="Welcome Intro"
      aria-modal="true"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center select-none overflow-hidden transition-opacity duration-500 ${
        isZooming ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100dvh",
        background: "radial-gradient(circle at 50% 50%, #0f172a 0%, #090d16 65%, #030712 100%)",
      }}
    >
      {/* Background Animated Tech Rings */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        {/* Ambient Radial Glow */}
        <div
          className={`w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full bg-blue-500/20 blur-3xl transition-all duration-1000 ${
            isPulsing ? "scale-125 bg-sky-500/30" : isZooming ? "scale-[3] opacity-0" : "scale-100"
          }`}
        />

        {/* Concentric Tech Circuit Rings */}
        <div
          className={`absolute w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border border-blue-500/20 transition-all duration-1000 ${
            isPulsing ? "scale-110 border-sky-400/40 animate-spin" : isZooming ? "scale-[3] opacity-0" : "scale-95"
          }`}
          style={{ animationDuration: "18s" }}
        />
        <div
          className={`absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-full border border-dashed border-white/10 transition-all duration-1000 ${
            isPulsing ? "scale-110 border-sky-400/25" : isZooming ? "scale-[4] opacity-0" : "scale-95"
          }`}
        />
      </div>

      {/* Explicit Skip Button */}
      <button
        type="button"
        onClick={finishIntro}
        className="absolute top-6 right-6 z-20 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide text-white/80 hover:text-white bg-white/10 hover:bg-white/20 active:bg-white/30 backdrop-blur-md border border-white/15 transition-all duration-200 cursor-pointer flex items-center gap-1.5 shadow-lg"
        aria-label="Skip intro"
      >
        <span>Skip</span>
        <span className="opacity-50 text-[10px] ml-0.5">ESC</span>
      </button>

      {/* Center 3D "G" Logo Container with Cinematic Camera Push-In Zoom */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center transform-gpu transition-all ${
          isZooming
            ? "scale-[6] sm:scale-[9] md:scale-[13] lg:scale-[16] opacity-0 duration-700 ease-in"
            : isPulsing
            ? "scale-105 opacity-100 duration-700 ease-out"
            : "scale-100 opacity-100 duration-700 ease-out"
        }`}
        style={{
          willChange: "transform, opacity",
        }}
      >
        {/* Responsive 3D "G" Brand Logo */}
        <div className="relative">
          <div className="block sm:hidden">
            <BrandLogo size={96} glow={!isZooming} />
          </div>
          <div className="hidden sm:block md:hidden">
            <BrandLogo size={118} glow={!isZooming} />
          </div>
          <div className="hidden md:block">
            <BrandLogo size={138} glow={!isZooming} />
          </div>
        </div>

        {/* Candidate Identifier Typography */}
        <div
          className={`mt-6 sm:mt-8 px-4 text-center space-y-1.5 transition-all duration-500 max-w-[90vw] ${
            isZooming ? "opacity-0 scale-90" : "opacity-100 scale-100"
          }`}
        >
          <div className="font-mono text-sm sm:text-base lg:text-lg font-bold uppercase tracking-[0.25em] text-white/95 truncate">
            Gowtham Balamurugan
          </div>
          <div className="text-[11px] sm:text-xs lg:text-sm font-semibold tracking-[0.18em] text-sky-400/90 uppercase leading-tight">
            SPE Procurement &amp; Supply Chain Specialist
          </div>
        </div>
      </div>
    </div>
  );
}
