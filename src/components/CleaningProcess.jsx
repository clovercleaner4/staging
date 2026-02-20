'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import bunkai from '../assets/bunkai.jpg';
import yojo from '../assets/yojo.jpg';
import yojozentai from '../assets/yojozentai.jpg';
import senjo from '../assets/senjo.jpg';
import parts from '../assets/parts.jpg';
import tearai from '../assets/tearai.jpg';
import osuiato from '../assets/osuiato.jpg';
import kabi from '../assets/kabi.jpg';
import gaikanmae from '../assets/gaikanmae.jpg';
import gaikanato from '../assets/gaikanato.jpg';

const CleaningProcess = () => {
    const steps = [
        {
            id: 1,
            title: '本体分解',
            description: '構造を熟知したプロの手際で、基盤までしっかり露出。',
            image: bunkai,
            tag: 'プロの技術'
        },
        {
            id: 2,
            title: '徹底養生',
            description: '電装部の保護と、お部屋を汚さないための二重の備え。',
            image: yojo,
            imageDetail: yojozentai,
            tag: '安心・安全'
        },
        {
            id: 3,
            title: '内部の高圧洗浄',
            description: '薬剤と高圧水で、アルミフィンの奥のカビを徹底除去。',
            image: senjo,
            imageSub: kabi,
            tag: '徹底除去'
        },
        {
            id: 4,
            title: '乾燥＆パーツ洗浄',
            description: '本体を乾燥させている間に、外したパーツを隅々まで手洗い。',
            image: parts,
            imageSub: tearai,
            tag: 'こだわり',
            highlight: true
        },
        {
            id: 5,
            title: '防カビコート',
            description: '仕上げに抗菌剤を噴霧し、菌の繁殖を長期間抑制。',
            image: gaikanato, // Using finished image for coat step if no specific coat image
            tag: '無料サービス'
        }
    ];

    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-bold text-sm block mb-2 tracking-wider">CLEANING PROCESS</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-6">
                        プロの「こだわり」工程
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        クローバークリーナーのエアコン掃除は、単なる「清掃」ではありません。<br />
                        11年の経験に基づいた徹底的な工程で、新品同様の環境を復活させます。
                    </p>
                </div>

                {/* --- PROCESS STEPS --- */}
                <div className="space-y-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
                        >
                            <div className="w-full md:w-1/2">
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl opacity-10 blur-xl group-hover:opacity-20 transition-opacity"></div>
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-slate-200">
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            className="w-full aspect-video object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                                        />
                                        {step.imageSub && (
                                            <div className="absolute bottom-4 right-4 w-1/3 rounded-lg overflow-hidden border-2 border-white shadow-lg">
                                                <Image src={step.imageSub} alt="Detail" className="w-full" />
                                            </div>
                                        )}
                                        {step.imageDetail && (
                                            <div className="absolute top-4 left-4 w-1/3 rounded-lg overflow-hidden border-2 border-white shadow-lg">
                                                <Image src={step.imageDetail} alt="Overall" className="w-full" />
                                            </div>
                                        )}
                                        <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                            STEP 0{step.id}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 text-left">
                                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-bold mb-4">
                                    {step.tag}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">{step.title}</h3>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* --- IMPACT SECTION --- */}
                <div className="mt-32">
                    <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 opacity-20 blur-[100px]"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500 opacity-20 blur-[100px]"></div>

                        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                            <div className="lg:w-1/2">
                                <span className="text-blue-400 font-bold tracking-widest uppercase mb-4 block">IMPACT RESULT</span>
                                <h3 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
                                    これがカビと悪臭の正体。<br />
                                    <span className="text-blue-400">「衝撃の汚水」</span>
                                </h3>
                                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                    洗浄後にバケツに溜まった真っ黒な汚れ。これが毎日吸い込んでいた空気の源です。喘息やアレルギーの原因となるハウスダストを、プロの技術で一掃します。
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700">
                                        <div className="text-2xl mb-2">🤧</div>
                                        <div className="text-sm font-bold text-slate-300">アレルギー対策</div>
                                    </div>
                                    <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700">
                                        <div className="text-2xl mb-2">⚡</div>
                                        <div className="text-sm font-bold text-slate-300">電気代の節約</div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square lg:aspect-video transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                                    <Image src={osuiato} alt="Dirty Water" className="h-full w-full object-cover" />
                                    <div className="absolute inset-0 bg-black/20"></div>
                                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded">洗浄後の汚水</div>
                                </div>
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square lg:aspect-video transform rotate-3 hover:rotate-0 transition-transform duration-500 mt-8 lg:mt-12">
                                    <Image src={kabi} alt="Dirty Parts" className="h-full w-full object-cover" />
                                    <div className="absolute inset-0 bg-black/20"></div>
                                    <div className="absolute bottom-3 left-3 bg-red-600 text-white text-[10px] px-2 py-1 rounded">洗浄前のカビ</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- BEFORE / AFTER --- */}
                <div className="mt-32">
                    <div className="text-center mb-16">
                        <h3 className="text-2xl md:text-4xl font-extrabold text-slate-800">新品のような輝きの復活</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                                <Image src={gaikanmae} alt="Before" className="w-full aspect-[4/3] object-cover" />
                                <div className="absolute top-4 left-4 bg-slate-800/80 backdrop-blur-md text-white px-4 py-1 rounded-full text-sm font-bold">BEFORE</div>
                            </div>
                            <p className="text-center font-bold text-slate-500">洗浄前の様子</p>
                        </div>
                        <div className="space-y-4">
                            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                                <Image src={gaikanato} alt="After" className="w-full aspect-[4/3] object-cover" />
                                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">AFTER</div>
                            </div>
                            <p className="text-center font-bold text-blue-600">洗浄後の驚きの結果</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CleaningProcess;
