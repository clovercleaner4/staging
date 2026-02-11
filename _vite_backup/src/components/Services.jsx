import React, { useState } from 'react';
import { Wind, Droplets, Home, Hammer, ChevronDown, Building2, Briefcase, ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
    const [openCategory, setOpenCategory] = useState(null);

    const toggleCategory = (index) => {
        setOpenCategory(openCategory === index ? null : index);
    };

    // Personal Services Data
    const individualServices = [
        {
            id: 'ac',
            title: 'エアコンクリーニング',
            subtitle: 'Air Conditioner',
            icon: Wind,
            color: 'text-blue-500',
            bgColor: 'bg-blue-50',
            description: 'プロの技術で内部のカビやホコリを徹底洗浄。空気も気分もスッキリと。',
            merit: '節電効果・アレルギー対策・嫌なニオイの除去',
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
            subtitle: 'Water Area',
            icon: Droplets,
            color: 'text-cyan-500',
            bgColor: 'bg-cyan-50',
            description: '頑固な水垢や油汚れもプロの技でピカピカに。毎日使う場所だからこそ清潔に。',
            merit: '除菌・消臭・素材を傷つけないプロの洗浄',
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
            subtitle: 'Room & Balcony',
            icon: Home,
            color: 'text-orange-500',
            bgColor: 'bg-orange-50',
            description: '熟練の技術でフローリングも窓も美しく蘇らせます。',
            merit: '部屋が明るくなる・資産価値の維持',
            items: [
                { name: 'フローリング洗浄・ワックス', price: '1,000円〜 / 1帖' },
                { name: '窓ガラス・サッシ', price: '3,000円〜 / 1枠' },
                { name: 'ベランダ・バルコニー', price: '10,000円〜' },
                { name: '空室まるごとクリーニング', price: '要見積もり' },
            ]
        },
        {
            id: 'special',
            title: '遺品整理・特殊清掃',
            subtitle: 'Special Cleaning',
            icon: Briefcase,
            color: 'text-purple-500',
            bgColor: 'bg-purple-50',
            description: '「遠方で整理に行けない」「精神的に辛い」...そんなお悩みにも心に寄り添い対応します。',
            merit: '秘密厳守・迅速丁寧・お墓掃除も対応',
            items: [
                { name: '遺品整理・生前整理', price: '要見積もり' },
                { name: 'ゴミ屋敷の片付け', price: '要見積もり' },
                { name: '特殊清掃（孤独死・事故現場）', price: '要見積もり' },
                { name: 'お墓掃除代行', price: '15,000円〜' },
                { name: '消臭・消毒作業', price: '要見積もり' },
            ]
        },
        {
            id: 'other',
            title: 'その他・困りごと（便利屋サービス）',
            subtitle: 'Handyman Service',
            icon: Hammer,
            color: 'text-green-500',
            bgColor: 'bg-green-50',
            description: '「掃除屋さんに頼んでもいいの？」ということでも大歓迎。便利屋として、暮らしの小さなお困りごとを解決します。',
            merit: '電球1個から対応・地域密着の柔軟性',
            items: [
                { name: '家具組み立て・移動', price: '3,000円〜 / 1時間' },
                { name: '不用品回収', price: '要見積もり' },
                { name: '電球交換', price: '1,000円〜 / 1箇所' },
                { name: '草むしり・剪定', price: '3,000円〜 / 1時間' },
                { name: 'その他、「ちょっと手伝って」', price: '要相談' },
            ]
        }
    ];

    // Corporate Services Data
    const corporateServices = [
        {
            id: 'office',
            title: '店舗・オフィスクリーニング',
            description: 'その「汚れ」がお客様を遠ざけているかもしれません。プロの清掃で、集客力と働く環境を向上させます。',
            items: [
                '床洗浄・ワックスがけ', '業務用エアコン分解洗浄', 'ガラス・サッシ清掃', 'トイレ・給湯室の定期清掃', 'カーペット洗浄'
            ],
            merits: [
                '清潔感アップで企業イメージ向上',
                '従業員のモチベーションアップ',
                '定期契約でコスト削減'
            ]
        },
        {
            id: 'realestate',
            title: '空室・不動産向けクリーニング',
            description: 'アパート・マンションの入退去に伴う原状回復もお任せください。次の入居者様が気持ちよく新生活を始められる状態にします。',
            items: [
                '退去後の室内全体クリーニング', 'クロス・床の張り替え', '修繕・リフォーム', '共用部の定期清掃', '古家・空き家の管理'
            ],
            merits: [
                '迅速な現状回復で空室期間を短縮',
                'クロスの張り替えなどもワンストップ対応',
                'オーナー様の手間を削減'
            ]
        }
    ];

    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-primary font-bold text-sm block mb-2 tracking-wider">SERVICE MENU</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-6">
                        サービス・料金
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        個人のお客様から法人・店舗様まで。<br />
                        明確な料金とプロの技術で、あらゆる「キレイ」と「解決」をお届けします。
                    </p>
                </div>

                {/* --- INDIVIDUAL SERVICES --- */}
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-10 pb-4 border-b border-stone-200">
                        <Home className="text-primary" size={32} />
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                            個人のお客様 <span className="text-base font-normal text-slate-500 ml-2">Home Services</span>
                        </h3>
                    </div>

                    <div className="grid gap-6">
                        {individualServices.map((category, index) => (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white border border-stone-100 rounded-2xl shadow-sm overflow-hidden group hover:border-primary/20 transition-all"
                            >
                                <button
                                    onClick={() => toggleCategory(index)}
                                    className="w-full flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 hover:bg-stone-50 transition-colors text-left gap-6"
                                >
                                    <div className="flex items-center gap-6 w-full">
                                        <div className={`hidden md:flex w-20 h-20 rounded-2xl ${category.bgColor} items-center justify-center ${category.color} group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                                            <category.icon size={40} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 md:hidden mb-3">
                                                <div className={`p-3 rounded-xl ${category.bgColor} ${category.color}`}>
                                                    <category.icon size={24} />
                                                </div>
                                            </div>
                                            <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
                                                <h3 className="text-xl md:text-2xl font-bold text-slate-800">{category.title}</h3>
                                                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">{category.subtitle}</span>
                                            </div>
                                            <p className="text-slate-600 font-medium mb-2">{category.description}</p>
                                            <div className="inline-flex items-center gap-1.5 text-xs md:text-sm text-primary font-bold bg-primary/5 px-3 py-1 rounded-full">
                                                <CheckCircle2 size={14} />
                                                {category.merit}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`p-3 rounded-full bg-stone-100 text-slate-400 transition-transform duration-300 self-end md:self-center ${openCategory === index ? 'rotate-180' : ''}`}>
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
                                                        <div key={i} className="flex items-center justify-between bg-white p-4 rounded-xl border border-stone-200 hover:border-primary/30 transition-colors">
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
                </div>


                {/* --- CORPORATE SERVICES --- */}
                <div>
                    <div className="flex items-center gap-4 mb-10 pb-4 border-b border-stone-200">
                        <Building2 className="text-slate-700" size={32} />
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                            法人・店舗様 <span className="text-base font-normal text-slate-500 ml-2">Corporate Services</span>
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {corporateServices.map((service, index) => (
                            <div key={service.id} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-stone-100 flex flex-col h-full">
                                <div className="h-2 bg-slate-800 w-full"></div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <h4 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">{service.title}</h4>
                                    <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                                        {service.description}
                                    </p>

                                    <div className="mb-6">
                                        <h5 className="text-sm font-bold text-slate-400 mb-3 uppercase tracking-wider">主な作業内容</h5>
                                        <ul className="grid grid-cols-1 gap-2">
                                            {service.items.map((item, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                                        <h5 className="text-sm font-bold text-primary mb-2 flex items-center gap-2">
                                            <CheckCircle2 size={16} /> 導入メリット
                                        </h5>
                                        <ul className="space-y-1">
                                            {service.merits.map((merit, mIdx) => (
                                                <li key={mIdx} className="text-xs md:text-sm text-slate-600 pl-6 indent-[-1.5em] before:content-['・'] before:mr-1">
                                                    {merit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="p-6 pt-0 mt-auto">
                                    <a href="#contact" className="flex items-center justify-center gap-2 w-full py-4 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 transition-colors">
                                        法人見積もりを依頼する <ArrowRight size={18} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Additional Info Box */}
                <div className="mt-20 bg-stone-100 rounded-2xl p-6 md:p-10">
                    <h4 className="font-bold text-slate-700 mb-6 border-b border-stone-300 pb-2 inline-block">ご利用案内</h4>
                    <div className="grid md:grid-cols-2 gap-y-4 gap-x-12 text-sm md:text-base text-slate-600">
                        <p><span className="font-bold text-slate-800 block mb-1">駐車場代について</span> 駐車スペースがない場合は、付近のコインパーキング代を実費でご負担いただきます。</p>
                        <p><span className="font-bold text-slate-800 block mb-1">お支払い方法</span> 現金、またはPayPayがご利用いただけます。法人様は請求書払いも可能です（要相談）。</p>
                        <p><span className="font-bold text-slate-800 block mb-1">キャンセルについて</span> 作業前日17時までのご連絡でキャンセル料はかかりません。</p>
                        <p><span className="font-bold text-slate-800 block mb-1">保険について</span> 万が一の破損等に備え、損害賠償保険に加入しております。安心してご依頼ください。</p>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-slate-600 mb-6 font-medium text-lg">メニューにない作業もお気軽にご相談ください</p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-full font-bold text-xl shadow-xl shadow-primary/30 hover:bg-primary-light transition-all transform hover:-translate-y-1"
                    >
                        <Phone size={24} className="fill-current" />
                        無料お見積もり・ご相談
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
