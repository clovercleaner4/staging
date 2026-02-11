import React, { useState } from 'react';
import { Wind, Droplets, Home, Hammer, ChevronDown, ChevronUp, AlertCircle, Phone, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
    const [openCategory, setOpenCategory] = useState(null);

    const toggleCategory = (index) => {
        setOpenCategory(openCategory === index ? null : index);
    };

    const categories = [
        {
            id: 'ac',
            title: 'エアコンクリーニング',
            icon: Wind,
            color: 'text-blue-500',
            bgColor: 'bg-blue-50',
            description: 'プロの技術で内部のカビやホコリを徹底洗浄。',
            items: [
                { name: '壁掛けタイプ（お掃除機能なし）', price: '12,000円〜' },
                { name: '壁掛けタイプ（お掃除機能付き）', price: '18,000円〜' },
                { name: '天井埋め込みタイプ', price: '25,000円〜' },
                { name: '室外機洗浄', price: '3,000円〜' },
                { name: '防カビコート', price: '2,000円〜' },
            ]
        },
        {
            id: 'water',
            title: '水回りクリーニング',
            icon: Droplets,
            color: 'text-cyan-500',
            bgColor: 'bg-cyan-50',
            description: 'キッチン、浴室、トイレなど、水垢や油汚れをピカピカに。',
            items: [
                { name: 'キッチン（換気扇・レンジフード除く）', price: '15,000円〜' },
                { name: 'レンジフード（換気扇）', price: '13,000円〜' },
                { name: '浴室（バスルーム）', price: '16,000円〜' },
                { name: '洗面所', price: '8,000円〜' },
                { name: 'トイレ', price: '8,000円〜' },
                { name: '水回り数点セット（お得です）', price: '要見積もり' },
            ]
        },
        {
            id: 'room',
            title: 'お部屋・ベランダ',
            icon: Home,
            color: 'text-orange-500',
            bgColor: 'bg-orange-50',
            description: 'フローリングや窓、ベランダなど、お部屋全体をこれっぽっちも汚しません。',
            items: [
                { name: 'フローリング洗浄・ワックス', price: '1,000円〜 / 1帖' },
                { name: '窓ガラス・サッシ', price: '3,000円〜 / 1枠' },
                { name: 'ベランダ・バルコニー', price: '10,000円〜' },
                { name: '空室まるごとクリーニング', price: '要見積もり' },
            ]
        },
        {
            id: 'other',
            title: 'その他・困りごと',
            icon: Hammer,
            color: 'text-green-500',
            bgColor: 'bg-green-50',
            description: '電球交換から家具の組み立て、不用品回収まで。',
            items: [
                { name: '不用品回収・遺品整理', price: '要見積もり' },
                { name: '家具組み立て・移動', price: '3,000円〜 / 1時間' },
                { name: '電球交換', price: '1,000円〜 / 1箇所' },
                { name: '草むしり・剪定', price: '3,000円〜 / 1時間' },
                { name: 'その他、「ちょっと手伝って」', price: '要相談' },
            ]
        }
    ];

    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold text-sm block mb-2 tracking-wider">SERVICE MENU</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
                        サービス・料金
                    </h2>
                    <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
                        明確な料金設定で安心。汚れ具合による追加料金は一切いただきません。<br />
                        お見積もりは無料ですので、まずはお気軽にご相談ください。
                    </p>
                </div>

                <div className="grid gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white border border-stone-100 rounded-2xl shadow-sm overflow-hidden"
                        >
                            <button
                                onClick={() => toggleCategory(index)}
                                className="w-full flex items-center justify-between p-6 md:p-8 hover:bg-stone-50 transition-colors text-left"
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`hidden md:flex w-16 h-16 rounded-2xl ${category.bgColor} items-center justify-center ${category.color}`}>
                                        <category.icon size={32} />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 md:hidden mb-2">
                                            <div className={`p-2 rounded-lg ${category.bgColor} ${category.color}`}>
                                                <category.icon size={20} />
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-800">{category.title}</h3>
                                        </div>
                                        <h3 className="hidden md:block text-2xl font-bold text-slate-800 mb-2">{category.title}</h3>
                                        <p className="text-slate-500 text-sm md:text-base">{category.description}</p>
                                    </div>
                                </div>
                                <div className={`p-2 rounded-full bg-stone-100 text-slate-400 transition-transform duration-300 ${openCategory === index ? 'rotate-180' : ''}`}>
                                    <ChevronDown size={24} />
                                </div>
                            </button>

                            <AnimatePresence>
                                {openCategory === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 border-t border-stone-100 bg-stone-50/50">
                                            <div className="grid md:grid-cols-2 gap-4 mt-6">
                                                {category.items.map((item, i) => (
                                                    <div key={i} className="flex items-center justify-between bg-white p-4 rounded-xl border border-stone-200">
                                                        <span className="font-bold text-slate-700">{item.name}</span>
                                                        <span className="font-bold text-primary">{item.price}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info Box */}
                <div className="mt-12 bg-stone-100 rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                    <div className="flex gap-4">
                        <AlertCircle className="text-slate-400 flex-shrink-0" size={24} />
                        <div className="text-sm text-slate-600 space-y-2">
                            <p><span className="font-bold text-slate-800">駐車場代について:</span> 駐車スペースがない場合は、付近のコインパーキング代を実費でご負担いただきます。</p>
                            <p><span className="font-bold text-slate-800">お支払い方法:</span> 現金、またはPayPayがご利用いただけます。</p>
                            <p><span className="font-bold text-slate-800">キャンセルについて:</span> 作業前日17時までのご連絡でキャンセル料はかかりません。</p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-slate-600 mb-6 font-medium">メニューにない作業もお気軽にご相談ください</p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold text-lg shadow-lg hover:bg-primary-light transition-all transform hover:-translate-y-1"
                    >
                        <Phone size={20} className="fill-current" />
                        無料お見積もり・ご相談
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
