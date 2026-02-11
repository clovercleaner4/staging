import React from 'react';
import { Building2, Home, Sparkles, Wind, Droplets, Wrench, Hammer, Grid, CheckCircle2 } from 'lucide-react';
import sagyo01 from '../assets/sagyo01.jpg';
import sagyo02 from '../assets/sagyo02.jpg';
import sagyo03 from '../assets/sagyo03.jpg';

const Services = () => {
    // Original 3 cards data
    const mainServices = [
        {
            title: "日常のお掃除",
            desc: "忙しいあなたに代わって、掃除機がけや拭き掃除を行います。",
            img: sagyo01,
            price: "5,500円 / 1時間",
        },
        {
            title: "お店の床・ガラス",
            desc: "小さなお店や事務所の美観維持。定期的な訪問も可能です。",
            img: sagyo02,
            price: "要見積もり",
        },
        {
            title: "スポット清掃",
            desc: "「ここだけキレイにしたい」というご要望もお気軽に。",
            img: sagyo03,
            price: "8,800円〜 / 1箇所",
        }
    ];

    const corporateServices = [
        { name: "床ワックス", icon: Sparkles },
        { name: "ガラス清掃", icon: Grid },
        { name: "業務用エアコン清掃", icon: Wind },
        { name: "水回り清掃", icon: Droplets },
        { name: "大型営繕", icon: Hammer },
    ];

    const individualServices = [
        { name: "ルームクリーニング", icon: Home },
        { name: "スポット清掃", icon: Sparkles },
        { name: "簡単な詰まり抜き", icon: Droplets },
        { name: "エアコンクリーニング", icon: Wind },
        { name: "水回り等の修繕", icon: Wrench },
    ];

    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold text-sm block mb-2 tracking-wider">SERVICE MENU</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                        サービス内容
                    </h2>
                    <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
                        法人様から個人のお客様まで、幅広いクリーニング・メンテナンスに対応いたします。
                    </p>
                </div>

                {/* Restored Main 3 Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {mainServices.map((service, index) => (
                        <div key={index} className="bg-stone-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                            <div className="h-48 relative">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className={`w-full h-full object-cover ${index === 0 ? 'object-center' : 'object-top'}`}
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">
                                    {service.price}
                                </div>
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-lg font-bold text-slate-800 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 text-sm mb-4 flex-grow">
                                    {service.desc}
                                </p>
                                <div className="pt-4 border-t border-stone-200 mt-auto">
                                    <span className="block text-xs text-slate-500 mb-1">参考料金</span>
                                    <span className="text-xl font-bold text-primary">{service.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Detailed List Section (Corporate & Individual) */}
                <div className="bg-slate-50 rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold text-slate-800">取り扱いサービス一覧</h3>
                        <p className="text-slate-500 mt-2">上記以外にも様々な対応が可能です</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                        {/* Corporate */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <Building2 className="text-primary" size={28} />
                                <h4 className="text-xl font-bold text-slate-800">企業様・店舗様</h4>
                            </div>
                            <ul className="space-y-3">
                                {corporateServices.map((service, index) => (
                                    <li key={index} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-200">
                                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary flex-shrink-0">
                                            <service.icon size={16} />
                                        </div>
                                        <span className="font-medium text-slate-700">{service.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Individual */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <Home className="text-orange-500" size={28} />
                                <h4 className="text-xl font-bold text-slate-800">個人のお客様</h4>
                            </div>
                            <ul className="space-y-3">
                                {individualServices.map((service, index) => (
                                    <li key={index} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-orange-200">
                                        <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0">
                                            <service.icon size={16} />
                                        </div>
                                        <span className="font-medium text-slate-700">{service.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-50 px-6 py-4 rounded-full text-slate-700 text-sm font-medium border border-blue-100">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        「こんなこと頼める？」もお気軽にご相談ください
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
