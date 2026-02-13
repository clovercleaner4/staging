'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, CheckCircle, Star, ShieldCheck } from 'lucide-react';
import topImage from '../assets/top.jpg';

const Hero = () => {
    return (
        <section id="hero" className="relative w-full overflow-hidden bg-stone-50 pt-24 pb-12 lg:pt-32 lg:pb-20">

            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Content Side (Left on Desktop, Bottom on Mobile) */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10 lg:pl-12 xl:pl-20">

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            {/* Brand Tagline */}
                            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-green-100 text-green-800 font-bold border border-green-200">
                                <span className="tracking-wide text-sm md:text-base">名古屋・近隣エリア相談可</span>
                            </div>

                            {/* Main Headline */}
                            <h1 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-slate-800 mb-6 leading-[1.4] tracking-tight">
                                エアコン・水回りの<span className="text-primary relative inline-block">
                                    汚れ
                                    <span className="absolute bottom-1 left-0 w-full h-3 bg-primary/20 -z-10 rounded-sm"></span>
                                </span>、<br />
                                プロの技術で徹底洗浄。
                            </h1>

                            {/* Subtext */}
                            <p className="text-slate-600 mb-8 text-base md:text-xl font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
                                お掃除から、プチ修繕・遺品整理まで。<br />
                                フットワーク軽く対応いたします。
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                                <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-primary-dark transition-all transform hover:-translate-y-1">
                                    無料お見積り・ご相談
                                </a>
                                <a href="#services" className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:border-primary hover:text-primary transition-all">
                                    サービス一覧
                                </a>
                            </div>

                            {/* Trust Badges */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 lg:mb-0">
                                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
                                    <CheckCircle className="text-green-500" size={18} />
                                    <span className="text-sm font-bold text-slate-600">損害保険加入済</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
                                    <Star className="text-yellow-400" size={18} />
                                    <span className="text-sm font-bold text-slate-600">口コミ高評価</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image Side (Right on Desktop, Top on Mobile) */}
                    <div className="w-full lg:w-1/2 relative z-0">
                        {/* Right Content - Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative w-full max-w-lg mx-auto lg:max-w-none lg:mx-0"
                        >
                            {/* Decorative Background for Profile */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl blur-2xl -z-10"></div>

                            {/* Image Container with Mask/Shape */}
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-500 aspect-square max-w-md mx-auto">
                                <Image
                                    src={topImage}
                                    alt="代表：野村貴典"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />

                                {/* Floating Badge on Image - Expanded for Couple Info */}
                                <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-xl border border-white/50 flex flex-col gap-1">
                                    <h3 className="font-bold text-slate-800 text-xs md:text-sm border-b border-slate-200 pb-1 mb-0.5">
                                        夫婦で営む、地域密着のお掃除屋さん
                                    </h3>
                                    <p className="text-[10px] md:text-xs text-slate-600 leading-normal font-medium">
                                        春日井で夫婦で活動するアットホームなお店です。大手にはない<br className="md:hidden" />家族のような親しみやすさと責任感で、丁寧に作業します。
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
