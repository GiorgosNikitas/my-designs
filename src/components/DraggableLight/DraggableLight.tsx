import React, { useEffect, useRef, useState } from "react";
import "./DraggableLight.scss";

function placeRandomLetters(containerId: string) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    for (let i = 0; i < 100; i++) {
        const letter = letters[Math.floor(Math.random() * letters.length)];
        const span = document.createElement("span");

        span.textContent = letter;
        span.style.position = "absolute";
        span.style.left = `${Math.random() * containerWidth}px`;
        span.style.top = `${Math.random() * containerHeight + 30}px`;

        container.appendChild(span);
    }
}

function DraggableLight() {
    const lightRef = useRef<HTMLDivElement>(null);
    const shadowRef = useRef<HTMLDivElement>(null);
    const ropeRef = useRef<HTMLDivElement>(null);

    const updateLightShadow = (lightX: number, lightY: number, lightHeight: number) => {
        shadowRef.current!.style.left = `${lightX}px`;
        shadowRef.current!.style.top = `${lightY + lightHeight}px`;
    }

    const updateRope = (lightX: number, lightY: number) => {
        const rope = ropeRef.current;
        if (!rope) return;

        // Horizontal center of the light
        const lightCenterX = lightX;

        // Start at top center of screen (fixed)
        const startX = window.innerWidth / 2;
        const startY = 0;

        const deltaX = lightCenterX - startX;
        const deltaY = lightY - startY;

        const length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

        rope.style.width = `${length}px`;
        rope.style.transform = `rotate(${angle}deg)`;
        rope.style.transformOrigin = "top left";
        rope.style.left = `${startX}px`;
        rope.style.top = `${startY}px`;
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        const light = lightRef.current;
        if (!light) return;

        const lightRect = light.getBoundingClientRect();
        const lightHeight = lightRect.height;

        const move = (moveEvent: MouseEvent) => {
            const x = moveEvent.clientX;
            const y = moveEvent.clientY;
            light.style.left = `${x}px`;
            light.style.top = `${y}px`;
            updateRope(x, y);
            updateLightShadow(x, y, lightHeight);
        };

        const stop = () => {
            document.removeEventListener("mousemove", move);
            document.removeEventListener("mouseup", stop);
            light.style.top = "0px";
            light.style.left = "50%";
            shadowRef.current!.style.left = "50%";
            shadowRef.current!.style.top = `${lightRect.y + lightHeight}px`;
            updateRope(window.innerWidth / 2, 0); // back to default if needed
        };

        document.addEventListener("mousemove", move);
        document.addEventListener("mouseup", stop);
    };

    useEffect(() => {
        requestAnimationFrame(() => {
            const light = lightRef.current;
            const shadow = shadowRef.current;

            if (light && shadow) {
                light.style.top = '0px';
                light.style.left = '50%';

                const lightRect = light.getBoundingClientRect();
                const lightWidth = lightRect.width;

                shadow.style.width = `${lightWidth * 10}px`;
                shadow.style.left = `50%`;
                shadow.style.transform = 'translateX(-50%)';
                shadow.style.top = `90px`;

                updateRope(lightRect.left + lightRect.width / 2, lightRect.top);
            }

            placeRandomLetters("random-letter-container");
        });
    }, []);

    return (
        <div className="draggable-light-container">
            <div ref={ropeRef} className="rope"></div>
            <div
                ref={lightRef}
                className="draggable-light"
                onMouseDown={handleMouseDown}
            ></div>
            <div ref={shadowRef} className="light-shadow"></div>
            <div id="random-letter-container"></div>
        </div>
    );
}

export default DraggableLight;