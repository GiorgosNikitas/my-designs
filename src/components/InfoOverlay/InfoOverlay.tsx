import React, { useRef } from "react";
import "./InfoOverlay.scss";
import { IoIosInformationCircle } from "react-icons/io";

export interface InfoOverlayProps {
    text: string;
    infoText: string;
    className?: string;
}

export const InfoOverlay: React.FC<InfoOverlayProps> = ({
    text,
    infoText,
    className = ""
}) => {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <div
            className={`info-overlay ${className}`}
            ref={containerRef}
        >
            <p>{text}</p>
            <div className="icon-container">
                <IoIosInformationCircle className="info-icon" />
                <div className="info-container">
                    <div className="info-text">{infoText}</div>
                    <div className="arrow"></div>
                </div>
            </div>
        </div>
    );
};