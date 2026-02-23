'use client';
import React from 'react';
import Image from 'next/image';
import { m } from 'framer-motion';
import { Users, Zap, Smile } from 'lucide-react';
import representative from '../assets/representative.webp'; // Import custom image

const WhyUs = () => {
    const reasons = [
        {
            icon: Users,
            title: "夫婦で営む安心感",
            text: "「知らない男性を家に入れるのは不安…」という方もご安心ください。女性スタッフ（妻）の同行も可能ですので、女性の一人暮らしでも気軽に頼んでいただけます。"
        },
        {
            icon: Zap,
            title: "プロならではの仕上がり",
            text: "家庭用洗剤では落ちない汚れも、業務用の機材とノウハウで徹底的にキレイにします。春日井の水回り・エアコンはお任せを。"
        },
        {
            icon: Smile,
            title: "気持ちのよい挨拶とマナー",
            text: "清掃技術だけでなく、挨拶や身だしなみも大切にしています。地元・春日井の皆様に安心して任せていただけるスタッフがお伺いします。"
        }
    ];

    return (
        <section id="why-us" className="py-24 bg-sky-50 relative overflow-hidden">
            <div className="container mx-auto px-4 lg:pl-16 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    <m.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1"
                    >
                        <span className="text-primary font-bold tracking-wider uppercase mb-2 block">Why Choose Us</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-slate-800">
                            選ばれる理由は、<br />
                            <span className="text-primary">「人柄」</span>と<span className="text-primary">「技術」</span>です。
                        </h2>
                        <div className="space-y-8">
                            {reasons.map((item, index) => (
                                <m.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                    className="flex gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-primary/30 transition-colors"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-2 text-slate-800">{item.title}</h3>
                                        <p className="text-slate-600 leading-relaxed text-sm">
                                            {item.text}
                                        </p>
                                    </div>
                                </m.div>
                            ))}

                            {/* Qualifications Section */}
                            <m.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="mt-8 pt-8 border-t border-slate-200"
                            >
                                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">保有資格</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["ビルクリーニング技能士", "建築物環境衛生管理技術者", "防犯設備士", "古物商"].map((qual, idx) => (
                                        <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
                                            {qual}
                                        </span>
                                    ))}
                                </div>
                            </m.div>
                        </div>
                    </m.div>

                    {/* Right Image Composition */}
                    <m.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2 flex flex-col items-center justify-center relative"
                    >
                        {/* Decorative Background for Profile */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl blur-2xl -z-10"></div>

                        {/* Profile Image Container - Rounded Rectangle */}
                        <div className="relative w-72 h-[26rem] md:w-80 md:h-[28rem] rounded-3xl overflow-hidden shadow-2xl border-4 border-white mb-6">
                            <Image
                                src={representative}
                                alt="Representative Nomura"
                                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 768px) 300px, 400px"
                            />
                        </div>

                        {/* Text Card - Floating Effect */}
                        <m.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white/95 backdrop-blur px-8 py-4 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center relative z-10 max-w-xs"
                        >
                            <h3 className="text-sm font-bold text-slate-700 mb-2 mt-1">代表：野村 貴典</h3>
                            <div className="w-8 h-1 bg-secondary rounded-full mb-3"></div>
                            <p className="text-base font-bold text-slate-600 leading-relaxed">
                                ひと仕事、ひと手間を<br />大切にします。
                            </p>
                        </m.div>

                    </m.div>

                </div>
            </div>
        </section>
    );
};

export default WhyUs;
