'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import { Instagram, Loader2, ExternalLink } from 'lucide-react';
import { m, AnimatePresence } from 'framer-motion';

const InstagramFeed = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [useFallback, setUseFallback] = useState(false);
    const [shouldFetch, setShouldFetch] = useState(false);
    const [widgetLoaded, setWidgetLoaded] = useState(false);

    useEffect(() => {
        if (!shouldFetch) return;

        const fetchPosts = async () => {
            try {
                const response = await fetch('https://feeds.behold.so/paIXvyuWhGgcRB2rhoS1');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();

                // CRITICAL FIX: The API returns an object with a 'posts' array
                if (data && Array.isArray(data.posts)) {
                    // Show 4 images for a balanced 2x2 grid
                    setPosts(data.posts.slice(0, 4));
                } else if (Array.isArray(data)) {
                    setPosts(data.slice(0, 4));
                } else {
                    throw new Error('Invalid Data Structure');
                }
                setIsLoading(false);
            } catch (err) {
                console.error('Custom Instagram Feed failed, falling back to widget:', err);
                setUseFallback(true);
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, [shouldFetch]);

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
                </div>

                <m.div
                    onViewportEnter={() => setShouldFetch(true)}
                    className="mt-8 w-full min-h-[400px] flex items-center justify-center bg-slate-50 rounded-2xl border border-slate-100 relative overflow-hidden"
                >
                    <AnimatePresence mode="wait">
                        {isLoading ? (
                            <m.div
                                key="loader"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 flex flex-col items-center justify-center text-slate-800 gap-3 bg-slate-50 z-20"
                            >
                                <Loader2 className="animate-spin text-primary" size={32} />
                                <p className="text-sm font-bold">Instagramを読み込み中...</p>
                            </m.div>
                        ) : useFallback ? (
                            <m.div
                                key="fallback"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="w-full h-full p-4"
                            >
                                <Script
                                    src="https://w.behold.so/widget.js"
                                    type="module"
                                    strategy="afterInteractive"
                                    crossOrigin="anonymous"
                                    onLoad={() => setWidgetLoaded(true)}
                                />
                                <behold-widget feed-id="paIXvyuWhGgcRB2rhoS1"></behold-widget>
                                {!widgetLoaded && (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 gap-2">
                                        <Loader2 className="animate-spin" size={24} />
                                        <p className="text-xs">Widget loading...</p>
                                    </div>
                                )}
                            </m.div>
                        ) : (
                            <m.div
                                key="grid"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 w-full p-4 md:p-8"
                            >
                                {posts.map((post, index) => (
                                    <m.a
                                        key={post.id}
                                        href={post.permalink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="group relative aspect-square overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 ring-1 ring-slate-100"
                                    >
                                        <Image
                                            src={post.mediaUrl}
                                            alt={post.caption || "Instagram Post"}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                            unoptimized={true}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                            <div className="text-white flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                                <ExternalLink size={18} />
                                                <span className="text-[10px] md:text-xs font-bold tracking-widest">VIEW ON INSTAGRAM</span>
                                            </div>
                                        </div>
                                    </m.a>
                                ))}
                            </m.div>
                        )}
                    </AnimatePresence>
                </m.div>

                <div className="mt-12 text-center">
                    <a
                        href="https://www.instagram.com/clovercleaner4/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-slate-50 text-primary-heavy px-8 py-4 rounded-full font-extrabold shadow-sm hover:shadow-md hover:bg-white transition-all border border-slate-100"
                    >
                        <Instagram size={20} />
                        @clovercleaner4 をフォローする
                    </a>
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;
