'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';

// Placeholder data - in a real implementation we would fetch this from Instagram API
const instagramPosts = [
    { id: 1, type: 'image', url: 'https://images.unsplash.com/photo-1581578731117-104f2a8d23e9?w=500&auto=format&fit=crop&q=60', caption: 'エアコンクリーニングのビフォーアフター！この黒い水がカビです😱 #エアコン掃除 #春日井' },
    { id: 2, type: 'image', url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500&auto=format&fit=crop&q=60', caption: 'キッチンのレンジフードもピカピカに✨ 油汚れもお任せください。 #キッチン掃除 #ハウスクリーニング' },
    { id: 3, type: 'image', url: 'https://images.unsplash.com/photo-1527513972-fce843124237?w=500&auto=format&fit=crop&q=60', caption: 'お庭の草むしりも承ります🌱 暑い日は大変ですよね。プロにお任せを！ #便利屋 #草むしり' },
    { id: 4, type: 'image', url: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?w=500&auto=format&fit=crop&q=60', caption: '退去後の空室クリーニング完了。次の方に気持ちよく住んでいただけますように🙏 #原状回復 #引越し' },
];

const InstagramFeed = () => {
    return (
        <section id="instagram" className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div>
                        <span className="text-secondary font-bold tracking-wider uppercase mb-2 block flex items-center gap-2">
                            <Instagram size={20} />
                            Official Instagram
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
                            作業実績・日々の様子
                        </h2>
                        <p className="mt-4 text-slate-600 max-w-2xl">
                            現場のビフォーアフターや、作業中の様子を更新しています。<br />
                            「こんな汚れも落ちる？」など、参考にしてください！
                        </p>
                    </div>

                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full font-bold shadow-md hover:shadow-lg hover:opacity-90 transition-all transform hover:-translate-y-1"
                    >
                        <Instagram size={20} />
                        フォローする
                    </a>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {instagramPosts.map((post, index) => (
                        <motion.a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative aspect-square overflow-hidden rounded-xl bg-slate-100 shadow-sm block"
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <ExternalLink className="text-white" size={24} />
                            </div>

                            <Image
                                src={post.url}
                                alt={post.caption}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Simple Caption Overlay on hover */}
                            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                <p className="line-clamp-2">{post.caption}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Mobile View More */}
                <div className="mt-8 text-center md:hidden">
                    <a href="https://instagram.com" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                        Instagramでもっと見る <ArrowRight size={16} />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default InstagramFeed;
