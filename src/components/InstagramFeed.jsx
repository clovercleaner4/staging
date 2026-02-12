'use client';

import React from 'react';
import { Instagram } from 'lucide-react';

const InstagramFeed = () => {
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

                    {/* Elfsight Platform Script */}
                    <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>

                    {/* Widget Container */}
                    <div className="mt-8 max-w-6xl mx-auto min-h-[400px] flex items-center justify-center bg-slate-50 rounded-2xl border-2 border-dashed border-slate-300">
                        <div className="text-center p-8">
                            <p className="text-lg font-bold text-slate-600 mb-2">Instagramウィジェット設置エリア</p>
                            <p className="text-slate-500 mb-4">Elfsightなどの外部ツールで発行したコードをここに貼り付けると表示されます。</p>
                            <a
                                href="https://elfsight.com/instagram-feed-instalink/"
                                target="_blank"
                                className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm hover:bg-primary-dark transition-colors"
                            >
                                ウィジェットを作成する（無料）
                            </a>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <a
                            href="https://www.instagram.com/show_327/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 text-primary font-bold hover:underline"
                        >
                            <Instagram size={20} />
                            @show_327 をフォローする
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;
