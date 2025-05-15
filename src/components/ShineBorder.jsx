import React from "react";
import './ShineBorder.css';

export function ShineBorder({
    borderRadius = 8,
    borderWidth = 2,
    duration = 12,
    colors = ["#ffb274", "#6adefd", "#12ffebfb", "#c8a0f6",],
    className = "",
    children,
    isOn=false,
}) {
    const gradientColor =
        Array.isArray(colors) ? colors.join(", ") : colors;

    return (
        <div
            style={{
                position: 'relative',
                display: "inline-block",
                borderRadius: `${borderRadius}px`,
                padding: `${borderWidth}px`,
            }}
            className={className}
        >
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: `${borderRadius}px`,
                    background: `radial-gradient(circle, transparent, ${gradientColor}, transparent)`,
                    backgroundSize: "300% 300%",
                    animationPlayState: isOn ? "running" : "paused",
                    animation: `shine ${duration}s linear infinite`,
                    pointerEvents: "none",
                    maskImage: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                }}
            ></div>
            <div
                style={{
                    position: "relative",
                    padding: 2,
                    borderRadius: `${borderRadius}px`,
                    background: "linear-gradient(155deg, #1940ff, #8c0ade, #ff05b4)",
                }}
            >
                {children}
            </div>
        </div>
    );
}
