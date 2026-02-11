import React from 'react';
import { Building2, Home, Sparkles, Wind, Droplets, Wrench, Hammer, Grid, CheckCircle2 } from 'lucide-react';
import sagyo01 from '../assets/sagyo01.jpg';
import sagyo02 from '../assets/sagyo02.jpg';

const Services = () => {
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

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Corporate Section */}
                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full -mr-8 -mt-8 opacity-50"></div>

                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary">
                                <Building2 size={24} strokeWidth={2} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800">企業様向け</h3>
                                <p className="text-sm text-slate-500">オフィス・店舗の美観維持</p>
                            </div>
                        </div>

                        <ul className="space-y-4 relative z-10">
                            {corporateServices.map((service, index) => (
                                <li key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100/50">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary flex-shrink-0">
                                        <service.icon size={16} />
                                    </div>
                                    <span className="font-bold text-slate-700">{service.name}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 pt-6 border-t border-slate-200">
                            <p className="text-sm text-slate-600 leading-relaxed">
                                定期清掃からスポット対応まで、ビジネス環境を清潔に保つお手伝いをいたします。
                            </p>
                        </div>
                    </div>

                    {/* Individual Section */}
                    <div className="bg-orange-50/50 rounded-3xl p-8 border border-orange-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full -mr-8 -mt-8 opacity-50"></div>

                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-500">
                                <Home size={24} strokeWidth={2} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800">個人のお客様</h3>
                                <p className="text-sm text-slate-500">快適な住まいづくり</p>
                            </div>
                        </div>

                        <ul className="space-y-4 relative z-10">
                            {individualServices.map((service, index) => (
                                <li key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-orange-100/50">
                                    <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0">
                                        <service.icon size={16} />
                                    </div>
                                    <span className="font-bold text-slate-700">{service.name}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 pt-6 border-t border-orange-200/50">
                            <p className="text-sm text-slate-600 leading-relaxed">
                                普段のお掃除から専門的なクリーニング・修繕まで、お住まいの困りごとを解決します。
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-slate-100 px-6 py-3 rounded-full text-slate-600 text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        お見積もりは無料です。お気軽にご相談ください。
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
