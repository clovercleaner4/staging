import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, Smile } from 'lucide-react';
import honnin04 from '../assets/honninn04.jpg'; // Import custom image

const WhyUs = () => {
    const reasons = [
        {
            icon: Users,
            title: "顔が見えるお付き合い",
            text: "担当スタッフが責任を持って対応します。「野村さん、いつもありがとう」と言っていただける関係を目指しています。"
        },
        {
            icon: Zap,
            title: "プロならではの仕上がり",
            text: "家庭用洗剤では落ちない汚れも、業務用の機材とノウハウで徹底的にキレイにします。"
        },
        {
            icon: Smile,
            title: "気持ちのよい挨拶とマナー",
            text: "清掃技術だけでなく、挨拶や身だしなみも大切にしています。安心して任せていただけるスタッフがお伺いします。"
        }
    ];

    return (
        <section id="why-us" className="py-24 bg-sky-50 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    <motion.div
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
                                <motion.div
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
                                </motion.div>
                            ))}

                            {/* Qualifications Section */}
                            <motion.div
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
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Image Composition */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2 relative"
                    >
                        {/* Main Image - Using honninn04 for specific request */}
                        <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white">
                            <img src={honnin04} alt="Representative Nomura" className="w-full h-auto" />

                            {/* Overlay Card - Reassurance */}
                            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur px-6 py-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4 max-w-xs">
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-slate-500 mb-1">代表：野村 貴典</span>
                                    <span className="text-lg font-extrabold text-primary">「私がお伺い致します」</span>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-secondary/10 rounded-[2rem] -rotate-3"></div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default WhyUs;
