'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Instagram, Loader2, ExternalLink } from 'lucide-react';
import { m, AnimatePresence } from 'framer-motion';

const InstagramFeed = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [shouldFetch, setShouldFetch] = useState(false);

    useEffect(() => {
        if (!shouldFetch) return;

        const fetchPosts = async () => {
            try {
                const response = await fetch('https://feeds.behold.so/paIXvyuWhGgcRB2rhoS1');
                if (!response.ok) throw new Error('Failed to fetch Instagram feed');
                const data = await response.json();
                // Take only first 6 posts
                setPosts(data.slice(0, 6));
                setIsLoading(false);
            } catch (err) {
                console.error('Error fetching Instagram feed:', err);
                setError(err.message);
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
                    className="mt-8 w-full min-h-[400px]"
                >
                    <AnimatePresence mode="wait">
                        {isLoading ? (
                            <m.div
                                key="loader"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center justify-center py-20 bg-slate-50 rounded-2xl border border-slate-100"
                            >
                                <Loader2 className="animate-spin text-primary mb-3" size={32} />
                                <p className="text-slate-800 font-bold">Instagramを読み込み中...</p>
                            </m.div>
                        ) : error ? (
                            <div className="text-center py-10 text-slate-500">
                                <p>フィードを読み込めませんでした。Instagramで直接ご覧ください。</p>
                            </div>
                        ) : (
                            <m.div
                                key="grid"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
                            >
                                {posts.map((post, index) => (
                                    <m.a
                                        key={post.id}
                                        href={post.permalink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group relative aspect-square overflow-hidden rounded-xl bg-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
                                    >
                                        <Image
                                            src={post.mediaUrl}
                                            alt={post.caption || "Instagram Post"}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            sizes="(max-width: 768px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div className="text-white flex flex-col items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                <ExternalLink size={24} />
                                                <span className="text-xs font-bold tracking-wider">VIEW ON INSTAGRAM</span>
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
