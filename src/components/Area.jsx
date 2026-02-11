import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

const Area = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="area" className="py-20 bg-stone-50 relative overflow-hidden">
            {/* Background Map Element (Abstract) */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" className="text-primary" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10" ref={ref}>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6">
                        対応エリア
                    </h2>
                    <p className="text-xl font-bold text-slate-700 bg-white/80 inline-block px-8 py-3 rounded-full shadow-sm backdrop-blur-sm border border-slate-100">
                        春日井市を中心におよそ30km圏内
                    </p>
                    <p className="mt-4 text-slate-600">
                        ※エリア外でも対応できる場合がございます。<br className="md:hidden" />まずはお気軽にご相談ください。
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
                    {/* Cloud/List Representation */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-3xl p-8 shadow-xl border-4 border-white/50 relative"
                    >
                        <div className="absolute -top-4 -left-4 bg-primary text-white font-bold px-4 py-2 rounded-lg shadow-lg rotate-[-5deg]">
                            春日井市拠点
                        </div>

                        <div className="flex flex-wrap gap-3 justify-center content-center h-full min-h-[200px]">
                            {['春日井市', '小牧市', '名古屋市守山区', '北名古屋市', '豊山町', '尾張旭市', '瀬戸市', '多治見市', '江南市', '岩倉市', '犬山市'].map((city, index) => (
                                <span
                                    key={city}
                                    className={`
                                        px-4 py-2 rounded-full font-bold text-slate-600 bg-slate-100 border border-slate-200
                                        ${index < 3 ? 'text-lg bg-green-50 text-green-700 border-green-200' : 'text-sm'}
                                    `}
                                >
                                    {city}
                                </span>
                            ))}
                            <span className="px-4 py-2 rounded-full font-bold text-slate-400 text-sm border border-dashed border-slate-300">
                                その他周辺エリア
                            </span>
                        </div>
                    </motion.div>

                    {/* Text / Promise */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                                <Navigation size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">最短即日で駆けつけます</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    フットワークの軽さが自慢です。「今日来てほしい」「急ぎで頼みたい」そんなご要望にも、スケジュールの許す限り全力で対応いたします。
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                <MapPin size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">出張費について</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    対応エリア内であれば、出張費は原則いただきません。エリア外の場合でも、ガソリン代・高速代程度の実費のみで対応可能な場合が多いですので、まずはご相談ください。
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Area;
