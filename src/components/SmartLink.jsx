'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

/**
 * SmartLink wraps Next.js Link to provide speculative loading control.
 * It delays prefetching until:
 * 1. The page's LCP is finished (approximate via load event or timeout).
 * 2. Device is not in Data Saver mode.
 * 3. Battery is sufficient (> 20%).
 * 4. Device has enough CPU cores (avoiding jank on low-end devices).
 */
const SmartLink = ({ href, children, ...props }) => {
    const [shouldPrefetch, setShouldPrefetch] = useState(false);

    useEffect(() => {
        // 1. Initial Delay - Focus all bandwidth on initial paint
        const initialDelay = 2000; // 2 seconds delay

        const checkConditions = () => {
            // Connection check (Data Saver)
            const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            if (conn && (conn.saveData || /2g|slow-2g/.test(conn.effectiveType))) {
                return false;
            }

            // Battery check
            if ('getBattery' in navigator) {
                navigator.getBattery().then(battery => {
                    if (battery.level < 0.2 && !battery.charging) {
                        setShouldPrefetch(false);
                        return;
                    }
                });
            }

            // CPU check (Hardware Concurrency)
            if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 2) {
                return false;
            }

            return true;
        };

        const timer = setTimeout(() => {
            if (checkConditions()) {
                setShouldPrefetch(true);
            }
        }, initialDelay);

        return () => clearTimeout(timer);
    }, []);

    // If prefetch is explicitly passed in props, we respect it, 
    // otherwise we use our smart condition.
    const prefetchValue = props.prefetch !== undefined ? props.prefetch : shouldPrefetch;

    return (
        <Link href={href} {...props} prefetch={prefetchValue}>
            {children}
        </Link>
    );
};

export default SmartLink;
