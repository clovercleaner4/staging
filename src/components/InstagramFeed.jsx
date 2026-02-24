'use client';
import React, { useState } from 'react';
import Script from 'next/script';
import { Instagram, Loader2 } from 'lucide-react';
import { m } from 'framer-motion';

const InstagramFeed = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [shouldLoad, setShouldLoad] = useState(false);

    return (
        <section id="instagram" className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <span className="text-secondary-heavy font-bold tracking-wider uppercase mb-2 block flex items-center justify-center gap-2">
                        <Instagram size={20} />
                        Official Instagram
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
                        作業実績・日々の様子
                    </h2>

                    {/* Behold Widget Script - Truly Lazy: Only load when component is visible */}
                    {shouldLoad && (
                        <Script
                            src="https://w.behold.so/widget.js"
                            strategy="afterInteractive"
                            onLoad={() => setIsLoaded(true)}
                        />
                    )}

                    {/* Behold Widget - Container with placeholder to unblock main thread */}
                    <m.div
                        onViewportEnter={() => setShouldLoad(true)}
                        className="mt-8 min-h-[400px] md:min-h-[600px] w-full flex items-center justify-center bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden relative"
                    >
                        {!isLoaded && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-800 gap-3">
                                <Loader2 className="animate-spin text-primary" size={32} />
                                <p className="text-sm font-bold">Instagramを準備中...</p>
                            </div>
                        )}
                        {shouldLoad && <behold-widget feed-id="paIXvyuWhGgcRB2rhoS1"></behold-widget>}
                    </m.div>

                    <div className="mt-8 text-center">
                        <a
                            href="https://www.instagram.com/clovercleaner4/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 text-primary-heavy font-extrabold hover:underline"
                        >
                            <Instagram size={20} />
                            @clovercleaner4 をフォローする
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;
