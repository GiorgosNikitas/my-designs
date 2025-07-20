import React, { useRef } from "react";
import "./GlowContainer.scss";

export interface GlowContainerProps {
    children: React.ReactNode;
    className?: string;
}

export const GlowContainer: React.FC<GlowContainerProps> = ({
    children,
    className = ""
}) => {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <div
            className={`glow-container ${className}`}
            ref={containerRef}
        >
            {children}
        </div>
    );
};