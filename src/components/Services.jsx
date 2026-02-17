'use client';
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
                { name: '壁掛けタイプ（お掃除機能なし）', price: '8,000円〜' },
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
                { name: 'キッチン・換気扇セット', price: '25,000円〜' },
                { name: 'レンジフード（換気扇）', price: '13,000円〜' },
                { name: '浴室クリーニング', price: '15,000円〜' },
                { name: 'トイレ清掃', price: '8,000円〜' },
                { name: '洗面所', price: '8,000円〜' },
                { name: '※セットで頼むとお得です！ご相談ください。', price: '' },
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
            title: '遺品整理・生前整理',
            subtitle: 'Special Cleaning',
            icon: Briefcase,
            color: 'text-purple-500',
            bgColor: 'bg-purple-50',
            description: '「遠方で整理に行けない」「精神的に辛い」...そんなお悩みにも心に寄り添い対応します。',
            merit: '【特徴】秘密厳守・迅速丁寧・お墓掃除も対応',
            items: [
                { name: '遺品整理・生前整理', price: '要見積もり' },
                { name: 'ゴミ屋敷の片付け', price: '要見積もり' },
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
                { name: '網戸の張り替え', price: '3,000円〜 / 1枚' },
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

                {/* --- FEATURED SERVICE: AIR CONDITIONER --- */}
                <div className="bg-white rounded-3xl shadow-xl border border-blue-100 overflow-hidden mb-24 relative">
                    <div className="bg-blue-600 text-white p-6 md:p-8 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-50 pattern-grid-lg"></div>
                        <h3 className="text-2xl md:text-4xl font-extrabold relative z-10 mb-2">エアコンクリーニング</h3>
                        <p className="text-blue-100 font-bold relative z-10">春日井市内で年間実績多数！<br className="md:hidden" />カビとニオイを徹底除去</p>
                    </div>

                    <div className="p-6 md:p-10">
                        {/* 1. Strong Points */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            <div className="bg-blue-50 p-6 rounded-2xl text-center">
                                <span className="text-4xl mb-3 block">💧</span>
                                <h4 className="font-bold text-slate-800 mb-2">高圧洗浄で徹底除去</h4>
                                <p className="text-sm text-slate-600">市販のスプレーでは落ちない奥のカビまで洗い流します。</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-2xl text-center">
                                <span className="text-4xl mb-3 block">🌱</span>
                                <h4 className="font-bold text-slate-800 mb-2">エコ洗剤で安心</h4>
                                <p className="text-sm text-slate-600">哺乳瓶も洗える安全な洗剤を使用。ペットや赤ちゃんにも安心です。</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-2xl text-center">
                                <span className="text-4xl mb-3 block">🛡️</span>
                                <h4 className="font-bold text-slate-800 mb-2">防カビコート無料</h4>
                                <p className="text-sm text-slate-600">キレイな状態を長持ちさせるコーティングを標準仕上げとしています。</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-2xl text-center">
                                <span className="text-4xl mb-3 block">🚚</span>
                                <h4 className="font-bold text-slate-800 mb-2">出張費無料（半径30km）</h4>
                                <p className="text-sm text-slate-600">拠点（春日井）から30km圏内は無料！その他のエリアもお気軽にご相談ください。</p>
                            </div>
                        </div>

                        {/* Season Tip */}
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-10 flex items-start gap-3">
                            <div className="bg-amber-100 p-2 rounded-full shrink-0 text-amber-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></svg>
                            </div>
                            <div>
                                <h5 className="font-bold text-amber-800 mb-1">エアコン掃除は「今（2月）」がチャンス！</h5>
                                <p className="text-sm text-amber-700 leading-relaxed">
                                    夏本番（5月以降）は予約が殺到します。<br className="hidden md:block" />
                                    <strong>今（2月）</strong>なら希望日で予約が取りやすく、本格的な暑さが来る前にカビをリセットできるベストシーズンです。
                                </p>
                            </div>
                        </div>

                        {/* 2. Pricing */}
                        <div className="mb-10">
                            <h4 className="text-xl font-bold text-slate-800 border-l-4 border-blue-500 pl-4 mb-6">料金表（税込）</h4>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm">
                                            <th className="p-4 font-medium">タイプ</th>
                                            <th className="p-4 font-medium">料金目安</th>
                                            <th className="p-4 font-medium">作業時間</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-700">
                                        <tr className="border-b border-stone-100">
                                            <td className="p-4 font-bold">通常壁掛けタイプ（お掃除機能なし）</td>
                                            <td className="p-4 font-bold text-blue-600 text-lg">8,000円〜</td>
                                            <td className="p-4 text-sm">約90分</td>
                                        </tr>
                                        <tr className="border-b border-stone-100">
                                            <td className="p-4 font-bold">お掃除機能付きタイプ</td>
                                            <td className="p-4 font-bold text-blue-600 text-lg">18,000円〜</td>
                                            <td className="p-4 text-sm">約120分〜</td>
                                        </tr>
                                        <tr className="border-b border-stone-100">
                                            <td className="p-4 font-bold">天井埋め込みタイプ</td>
                                            <td className="p-4 font-bold text-blue-600 text-lg">25,000円〜</td>
                                            <td className="p-4 text-sm">約150分〜</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold">室外機洗浄</td>
                                            <td className="p-4 font-bold text-slate-600">3,000円 / 台</td>
                                            <td className="p-4 text-sm">約15分</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-slate-400 mt-2">※汚れ具合や設置状況により、作業時間は前後する場合がございます。</p>
                        </div>

                        {/* 3. Process Flow */}
                        <div>
                            <h4 className="text-xl font-bold text-slate-800 border-l-4 border-blue-500 pl-4 mb-6">作業の流れ</h4>
                            <div className="grid md:grid-cols-4 gap-4">
                                <div className="text-center">
                                    <div className="bg-slate-100 rounded-xl aspect-video mb-3 flex items-center justify-center p-2 border-2 border-dashed border-slate-300">
                                        <p className="font-bold text-slate-500 text-[10px] leading-tight">
                                            ここに<br />
                                            <span className="text-red-500 text-xs">【養生・分解中】</span><br />
                                            の写真
                                        </p>
                                    </div>
                                    <p className="font-bold text-slate-700 mb-1">1. 養生・分解</p>
                                    <p className="text-xs text-slate-500">周りを汚さないようしっかり保護し、カバーを外します。</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-slate-100 rounded-xl aspect-video mb-3 flex items-center justify-center p-2 border-2 border-dashed border-slate-300">
                                        <p className="font-bold text-slate-500 text-[10px] leading-tight">
                                            ここに<br />
                                            <span className="text-red-500 text-xs">【高圧洗浄中】</span><br />
                                            の写真
                                        </p>
                                    </div>
                                    <p className="font-bold text-slate-700 mb-1">2. 高圧洗浄</p>
                                    <p className="text-xs text-slate-500">専用の洗剤と高圧洗浄機で、内部の汚れを一気に洗い流します。</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-slate-100 rounded-xl aspect-video mb-3 flex items-center justify-center p-2 border-2 border-dashed border-slate-300">
                                        <p className="font-bold text-slate-500 text-[10px] leading-tight">
                                            ここに<br />
                                            <span className="text-red-500 text-xs">【パーツ洗浄中】</span><br />
                                            の写真
                                        </p>
                                    </div>
                                    <p className="font-bold text-slate-700 mb-1">3. パーツ洗浄</p>
                                    <p className="text-xs text-slate-500">外したカバーなどのパーツも、浴室や外の洗い場をお借りしてきれいに洗います。</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-slate-100 rounded-xl aspect-video mb-3 flex items-center justify-center p-2 border-2 border-dashed border-slate-300">
                                        <p className="font-bold text-slate-500 text-[10px] leading-tight">
                                            ここに<br />
                                            <span className="text-red-500 text-xs">【防カビコーティング中】</span><br />
                                            の写真
                                        </p>
                                    </div>
                                    <p className="font-bold text-slate-700 mb-1">4. 防カビ・組立</p>
                                    <p className="text-xs text-slate-500">仕上げに防カビコート（無料）を行い、元通りに組み立てます。</p>
                                </div>
                            </div>
                        </div>

                        {/* Photo Opportunities for User */}
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            {/* Left: Dirty Water */}
                            <div className="text-center">
                                <div className="bg-slate-200 rounded-xl aspect-video flex items-center justify-center border-2 border-dashed border-slate-400 relative overflow-hidden mb-4">
                                    <div className="text-center p-4">
                                        <p className="font-bold text-slate-600 mb-1">
                                            <span className="text-xl block mb-2">😱</span>
                                            ここに<span className="font-bold text-slate-800">【真っ黒な汚水】</span><br />
                                            の写真
                                        </p>
                                        <p className="text-[10px] text-slate-500 mt-2">
                                            （明るい場所で撮影すると◎）
                                        </p>
                                    </div>
                                </div>
                                <p className="font-bold text-slate-700 leading-relaxed text-sm md:text-base">
                                    衝撃の黒い水！<br />
                                    <span className="text-slate-600 font-normal text-xs md:text-sm">
                                        これがカビや悪臭の正体です。根こそぎ洗い流しました。<br />
                                        <span className="font-bold text-red-600">喘息の原因や、最近何故か体調が優れない…その理由はここにあるかもしれません。</span>
                                    </span>
                                </p>
                            </div>

                            {/* Right: Clean Parts */}
                            <div className="text-center">
                                <div className="bg-slate-200 rounded-xl aspect-video flex items-center justify-center border-2 border-dashed border-primary/50 relative overflow-hidden mb-4">
                                    <div className="text-center p-4">
                                        <p className="font-bold text-slate-600 mb-1">
                                            <span className="text-xl block mb-2">✨</span>
                                            ここに<span className="font-bold text-slate-800">【洗浄後の内部】</span><br />
                                            の写真
                                        </p>
                                        <p className="text-[10px] text-slate-500 mt-2">
                                            （輝きが伝わるように！）
                                        </p>
                                    </div>
                                </div>
                                <p className="font-bold text-primary leading-relaxed text-sm md:text-base">
                                    新品のような輝き！<br />
                                    <span className="text-slate-600 font-normal text-xs md:text-sm">風速も回復し、節電効果も期待できます。</span>
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="bg-blue-50 p-4 text-center border-t border-blue-100">
                        <p className="text-blue-800 font-bold text-sm md:text-base">
                            「もっと早く頼めばよかった！」<br className="md:hidden" />そんな感動をお届けします。
                        </p>
                    </div>
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



                <div className="mt-16 text-center">
                    <p className="text-slate-600 mb-6 font-medium text-lg">メニューにない作業もお気軽にご相談ください</p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-full font-bold text-xl shadow-xl shadow-primary/30 hover:bg-primary-light transition-all transform hover:-translate-y-1"
                    >
                        無料お見積もり・ご相談
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
