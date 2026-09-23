import React from "react";

interface NeuCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "raised" | "inset" | "flat";
  className?: string;
}

export function NeuCard({
  children,
  size = "md",
  variant = "raised",
  className = "",
  ...props
}: NeuCardProps) {
  let shadowClass = "neu-card";
  if (variant === "inset") {
    shadowClass = size === "sm" ? "neu-inset-sm" : "neu-inset";
  } else if (variant === "raised") {
    if (size === "sm") shadowClass = "neu-card-sm";
    if (size === "lg") shadowClass = "neu-card-lg";
  } else {
    shadowClass = "border border-[var(--card-border)] bg-[var(--card-bg)]";
  }

  return (
    <div className={`${shadowClass} p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}
