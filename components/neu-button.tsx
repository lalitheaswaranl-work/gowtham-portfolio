import React from "react";

interface NeuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "primary" | "pill" | "inset";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function NeuButton({
  children,
  variant = "default",
  size = "md",
  className = "",
  ...props
}: NeuButtonProps) {
  let baseClass = "neu-btn";
  if (variant === "primary") baseClass = "neu-btn-primary";
  if (variant === "pill") baseClass = "neu-pill hover:scale-[1.02] active:scale-[0.98]";
  if (variant === "inset") baseClass = "neu-inset active:neu-btn";

  let sizeClass = "px-5 py-2.5 text-sm";
  if (size === "sm") sizeClass = "px-3.5 py-1.5 text-xs";
  if (size === "lg") sizeClass = "px-7 py-3.5 text-base";

  return (
    <button
      className={`inline-flex items-center justify-center font-medium gap-2 transition-all cursor-pointer ${baseClass} ${sizeClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
