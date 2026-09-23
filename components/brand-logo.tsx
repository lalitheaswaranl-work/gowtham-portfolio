import React from "react";

interface BrandLogoProps {
  size?: number;
  className?: string;
  glow?: boolean;
}

export function BrandLogo({ size = 44, className = "", glow = true }: BrandLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none shrink-0 transition-transform duration-300 ${className}`}
      aria-label="Gowtham Balamurugan Logo"
    >
      <defs>
        {/* Deep Luxury Cobalt-to-Navy Background */}
        <linearGradient id="cleanGLogoBg" x1="15%" y1="10%" x2="85%" y2="90%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="50%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#0B132B" />
        </linearGradient>

        {/* Specular Rim Highlight */}
        <linearGradient id="cleanGRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.1" />
        </linearGradient>

        {/* Monogram Pure White-Platinum Face */}
        <linearGradient id="cleanGFace" x1="20%" y1="10%" x2="80%" y2="90%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>

        {/* Subtle Tech Cyan Bevel Gradient */}
        <linearGradient id="cleanGBevelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0.4" />
        </linearGradient>

        {/* Soft Ambient Elevation Shadow */}
        <filter id="cleanGClayShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#090D16" floodOpacity="0.4" />
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#1D4ED8" floodOpacity="0.25" />
        </filter>

        {/* Clean Letterform Drop Shadow */}
        <filter id="cleanGShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#0B132B" floodOpacity="0.45" />
        </filter>
      </defs>

      {/* Outer Squircle Container */}
      <rect
        x="6"
        y="6"
        width="108"
        height="108"
        rx="28"
        fill="url(#cleanGLogoBg)"
        filter={glow ? "url(#cleanGClayShadow)" : undefined}
      />

      {/* Chamfered Specular Rim Hairline */}
      <rect
        x="7.5"
        y="7.5"
        width="105"
        height="105"
        rx="26.5"
        fill="none"
        stroke="url(#cleanGRimGrad)"
        strokeWidth="1.5"
      />

      {/* 3D Depth Extrusion Shadow for "G" */}
      <path
        d="M 82, 38
           A 32 32 0 0 0 60, 26
           A 34 34 0 0 0 26, 60
           A 34 34 0 0 0 60, 94
           A 32 32 0 0 0 88, 76
           L 88, 58
           L 58, 58
           A 6 6 0 0 0 58, 70
           L 74, 70
           L 74, 72
           A 22 22 0 0 1 60, 82
           A 22 22 0 0 1 38, 60
           A 22 22 0 0 1 60, 38
           A 20 20 0 0 1 76, 46
           A 6 6 0 0 0 84, 46
           Z"
        fill="#080E1E"
        opacity="0.5"
        transform="translate(0, 3)"
      />

      {/* Sculpted Iconic "G" Monogram */}
      <path
        d="M 82, 36
           A 32 32 0 0 0 60, 24
           A 34 34 0 0 0 26, 58
           A 34 34 0 0 0 60, 92
           A 32 32 0 0 0 88, 74
           L 88, 56
           L 58, 56
           A 6 6 0 0 0 58, 68
           L 74, 68
           L 74, 70
           A 22 22 0 0 1 60, 80
           A 22 22 0 0 1 38, 58
           A 22 22 0 0 1 60, 36
           A 20 20 0 0 1 76, 44
           A 6 6 0 0 0 84, 44
           Z"
        fill="url(#cleanGFace)"
        filter="url(#cleanGShadow)"
      />

      {/* Top Edge Specular Light Reflection */}
      <path
        d="M 40, 38
           A 32 32 0 0 1 60, 24
           A 32 32 0 0 1 80, 34"
        stroke="#FFFFFF"
        strokeWidth="1.75"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* Inner Tech Accent: Luminous Cyan Crossbar Chamfer */}
      <path
        d="M 58, 68
           L 82, 68"
        stroke="url(#cleanGBevelGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Active Operational Pulse Dot */}
      <circle cx="98" cy="22" r="5" fill="#10B981" />
      <circle cx="98" cy="22" r="7" stroke="#10B981" strokeWidth="1.5" strokeOpacity="0.4" />
    </svg>
  );
}
