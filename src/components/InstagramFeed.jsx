'use client';

import React from 'react';
import { Instagram } from 'lucide-react';

const InstagramFeed = () => {
    React.useEffect(() => {
        const d = document, s = d.createElement("script");
        s.type = "module";
        s.src = "https://w.behold.so/widget.js";
        d.head.append(s);
    }, []);
    return (
        <section id="instagram" className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <span className="text-secondary font-bold tracking-wider uppercase mb-2 block flex items-center justify-center gap-2">
                        <Instagram size={20} />
                        Official Instagram
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
                        作業実績・日々の様子
                    </h2>

                    {/* Behold Widget - Container with min-height to prevent CLS */}
                    <div className="mt-8 min-h-[400px] md:min-h-[600px] w-full flex items-center justify-center bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
                        <behold-widget feed-id="paIXvyuWhGgcRB2rhoS1"></behold-widget>
                    </div>

                    <div className="mt-8 text-center">
                        <a
                            href="https://www.instagram.com/clovercleaner4/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 text-primary font-bold hover:underline"
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
