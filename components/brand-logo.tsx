import React, { useId } from "react";

interface BrandLogoProps {
  size?: number;
  className?: string;
  glow?: boolean;
}

export function BrandLogo({ size = 44, className = "", glow = true }: BrandLogoProps) {
  const rawId = useId();
  const uid = rawId.replace(/[^a-zA-Z0-9_-]/g, "");
  const bgId = `cleanGLogoBg_${uid}`;
  const rimId = `cleanGRimGrad_${uid}`;
  const faceId = `cleanGFace_${uid}`;
  const clayShadowId = `cleanGClayShadow_${uid}`;
  const shadowId = `cleanGShadow_${uid}`;

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
        <linearGradient id={bgId} x1="15%" y1="10%" x2="85%" y2="90%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="50%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#0B132B" />
        </linearGradient>

        {/* Specular Rim Highlight */}
        <linearGradient id={rimId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.15" />
        </linearGradient>

        {/* Monogram Pure White-Platinum Face */}
        <linearGradient id={faceId} x1="20%" y1="10%" x2="80%" y2="90%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>

        {/* Soft Ambient Elevation Shadow */}
        <filter id={clayShadowId} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#090D16" floodOpacity="0.4" />
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#1D4ED8" floodOpacity="0.25" />
        </filter>

        {/* Clean Letterform Drop Shadow */}
        <filter id={shadowId} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#080E1E" floodOpacity="0.45" />
        </filter>
      </defs>

      {/* Outer Squircle Container */}
      <rect
        x="6"
        y="6"
        width="108"
        height="108"
        rx="28"
        fill={`url(#${bgId})`}
        filter={glow ? `url(#${clayShadowId})` : undefined}
      />

      {/* Chamfered Specular Rim Hairline */}
      <rect
        x="7.5"
        y="7.5"
        width="105"
        height="105"
        rx="26.5"
        fill="none"
        stroke={`url(#${rimId})`}
        strokeWidth="1.5"
      />

      {/* 3D Depth Extrusion Shadow for "G" */}
      <path
        d="M 83, 36 A 29 29 0 1 0 89, 64 L 89, 56 L 58, 56"
        fill="none"
        stroke="#080E1E"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(0, 3.5)"
        opacity="0.6"
      />

      {/* Sculpted Iconic "G" Monogram */}
      <path
        d="M 83, 36 A 29 29 0 1 0 89, 64 L 89, 56 L 58, 56"
        fill="none"
        stroke={`url(#${faceId})`}
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={`url(#${shadowId})`}
      />

      {/* Inner Tech Accent: Luminous Cyan Crossbar Chamfer */}
      <path
        d="M 64, 56 L 83, 56"
        stroke="#38BDF8"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Active Operational Pulse Dot */}
      <circle cx="98" cy="22" r="5" fill="#10B981" />
      <circle cx="98" cy="22" r="7" stroke="#10B981" strokeWidth="1.5" strokeOpacity="0.4" />
    </svg>
  );
}
