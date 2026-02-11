import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle, Star, ShieldCheck } from 'lucide-react';
import cleanRoom from '../assets/clean_living_room.png';

const Hero = () => {
    return (
        <section id="hero" className="relative w-full overflow-hidden bg-stone-50 pt-24 pb-12 lg:pt-32 lg:pb-20">

            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Content Side (Left on Desktop, Bottom on Mobile) */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10">

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            {/* Brand Tagline */}
                            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-green-100 text-green-800 font-bold border border-green-200">
                                <CheckCircle size={18} className="fill-current text-green-600" />
                                <span className="tracking-wide text-sm md:text-base">春日井市のお困りごと解決隊</span>
                            </div>

                            {/* Main Headline */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 mb-6 leading-[1.2] tracking-tight">
                                家の<span className="text-secondary relative inline-block">
                                    困りごと
                                    <span className="absolute bottom-1 left-0 w-full h-3 bg-secondary/20 -z-10 rounded-sm"></span>
                                </span>なら、<br />
                                なんでも解決。
                            </h1>

                            {/* Subtext */}
                            <p className="text-slate-600 mb-8 text-lg md:text-xl font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
                                エアコン・水回りのお掃除から、<br />
                                <span className="text-slate-800 font-bold">遺品整理・特殊清掃</span>まで。<br />
                                <span className="font-bold text-slate-800">春日井市から30km圏内</span>、最短即日で駆けつけます。<br />
                                どのような状態でも、まずはご相談ください。
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center w-full">
                                <a
                                    href="#services"
                                    className="px-8 py-4 bg-secondary hover:bg-secondary-light text-white rounded-full font-bold text-lg shadow-xl shadow-secondary/30 transition-all hover:-translate-y-1 active:translate-y-0 w-full sm:w-auto flex items-center justify-center gap-3"
                                >
                                    <Star size={22} />
                                    サービス・料金を見る
                                </a>
                            </div>

                            {/* Trust Indicators */}
                            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8 text-sm text-slate-500 font-bold">
                                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-stone-100">
                                    <Star size={18} className="text-yellow-400 fill-current" />
                                    <span>見積もり無料</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-stone-100">
                                    <ShieldCheck size={18} className="text-green-500" />
                                    <span>損害保険加入済</span>
                                </div>
                            </div>

                        </motion.div>
                    </div>

                    {/* Image Side (Right on Desktop, Top on Mobile) */}
                    <div className="w-full lg:w-1/2 relative z-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Blob Background Effect */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-green-100 to-blue-100 rounded-full blur-3xl opacity-60 -z-10" />

                            {/* Image Container with Mask/Shape */}
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src={cleanRoom}
                                    alt="Clean Living Room"
                                    className="w-full h-auto object-cover object-center"
                                />

                                {/* Floating Badge on Image */}
                                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-5 py-3 rounded-2xl shadow-lg border border-white/50 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                                        ✨
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-slate-500">プロの仕上がり</span>
                                        <span className="text-sm font-extrabold text-slate-800">清潔な空間をお届け</span>
                                    </div>
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
