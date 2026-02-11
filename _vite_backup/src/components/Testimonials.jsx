import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: "春日井市 S様 (40代)",
        type: "エアコンクリーニング",
        text: "初めての依頼で不安でしたが、スタッフのご夫婦がとても気さくで安心しました。作業も丁寧で、真っ黒な汚水が出た時は驚きました！空気が綺麗になった気がします。",
        stars: 5,
        tag: "主婦"
    },
    {
        id: 2,
        name: "小牧市 K様 (70代)",
        type: "水回りセット",
        text: "高齢で高いところの掃除ができず困っていました。店長さんが「ついでに電球も変えておきましょうか？」と声をかけてくれて感動しました。またお願いします。",
        stars: 5,
        tag: "シニア"
    },
    {
        id: 3,
        name: "春日井市 美容室オーナー様",
        type: "定期清掃",
        text: "お店の床のワックスがけをお願いしました。大手より柔軟に対応してくれるし、地元の話で盛り上がれるのが良いですね。ピカピカで気持よく営業できています。",
        stars: 5,
        tag: "店舗"
    }
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-orange-50/50">
            <div className="container mx-auto px-4 md:px-8">

                <div className="text-center mb-16">
                    <span className="text-secondary font-bold tracking-wider uppercase text-sm">Customer Voice</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mt-2">
                        お客様からの<span className="text-primary">嬉しいお言葉</span>
                    </h2>
                    <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
                        春日井・小牧エリアのお客様からたくさんの「ありがとう」をいただいています。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-md border border-stone-100 relative group hover:-translate-y-1 transition-transform duration-300"
                        >
                            <Quote className="absolute top-6 right-6 text-orange-100 fill-current w-10 h-10 group-hover:text-orange-200 transition-colors" />

                            <div className="flex gap-1 mb-4">
                                {[...Array(item.stars)].map((_, i) => (
                                    <Star key={i} size={18} className="text-yellow-400 fill-current" />
                                ))}
                            </div>

                            <p className="text-slate-700 leading-relaxed font-medium mb-6 min-h-[5rem]">
                                "{item.text}"
                            </p>

                            <div className="border-t border-stone-100 pt-4 flex items-center justify-between">
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm">{item.name}</h4>
                                    <span className="text-xs text-slate-500 font-medium bg-slate-100 px-2 py-0.5 rounded mr-2">{item.type}</span>
                                </div>
                                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md">
                                    {item.tag}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>



            </div>
        </section>
    );
};

export default Testimonials;
