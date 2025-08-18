import React from "react";

interface ShinyTextProps {
  disabled?: boolean;
  speed?: number;
  className?: string;
  children: React.ReactNode;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  disabled = false,
  speed = 5,
  className = "",
  children,
}) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`text-[#b5b5b5a4] bg-clip-text inline-block ${disabled ? "" : "animate-shine"} ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(255, 255, 255, 1) 40%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 1) 60%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        animationDuration: animationDuration,
      }}>
      {children}
    </div>
  );
};

export { ShinyText };
