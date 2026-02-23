'use client';

import React, { useState, useEffect, useRef } from 'react';

/**
 * InViewLoader prevents the hydrated JavaScript of a component from 
 * being processed until it is actually near the viewport.
 * This effectively implements "Interactive Islands" locally.
 * Using native IntersectionObserver to avoid dependencies.
 */
const InViewLoader = ({ children, threshold = 0.1, rootMargin = '200px', placeholder = null }) => {
    const [shouldRender, setShouldRender] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        if (!window.IntersectionObserver) {
            setShouldRender(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldRender(true);
                    observer.disconnect();
                }
            },
            { threshold, rootMargin }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    // Also trigger on hover as a fallback for faster interaction
    const handlePointerEnter = () => {
        if (!shouldRender) setShouldRender(true);
    };

    return (
        <div ref={containerRef} onPointerEnter={handlePointerEnter} className="contents">
            {shouldRender ? children : placeholder || <div className="min-h-[100px]" />}
        </div>
    );
};

export default InViewLoader;
