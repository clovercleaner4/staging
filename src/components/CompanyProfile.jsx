'use client';
import React from 'react';
import { ShieldCheck, MapPin, Phone, Building2, User } from 'lucide-react';

const CompanyProfile = () => {
    return (
        <section className="py-16 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-10">
                    <span className="text-primary font-bold text-sm block mb-2 tracking-wider">COMPANY</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                        会社概要
                    </h2>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <table className="w-full text-left text-sm md:text-base">
                        <tbody>
                            <tr className="border-b border-slate-100">
                                <th className="bg-slate-50 py-4 px-6 font-bold text-slate-600 w-1/3 md:w-1/4">屋号</th>
                                <td className="py-4 px-6 text-slate-800 font-bold">Clover cleaner（クローバークリーナー）</td>
                            </tr>
                            <tr className="border-b border-slate-100">
                                <th className="bg-slate-50 py-4 px-6 font-bold text-slate-600">代表者</th>
                                <td className="py-4 px-6 text-slate-800">野村 貴典</td>
                            </tr>
                            <tr className="border-b border-slate-100">
                                <th className="bg-slate-50 py-4 px-6 font-bold text-slate-600">所在地</th>
                                <td className="py-4 px-6 text-slate-800">
                                    〒486-0808<br />
                                    愛知県春日井市堀ノ内町北1-65
                                </td>
                            </tr>
                            <tr className="border-b border-slate-100">
                                <th className="bg-slate-50 py-4 px-6 font-bold text-slate-600">保有資格</th>
                                <td className="py-4 px-6 text-slate-800">
                                    <ul className="list-disc list-inside space-y-1 text-slate-600">
                                        <li>ビルクリーニング技能士</li>
                                        <li>建築物環境衛生管理技術者</li>
                                        <li>防犯設備士</li>
                                        <li>古物商許可証</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Recruitment Section */}
                <div className="mt-16 bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-200">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary">
                            <User size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800">アルバイト募集</h3>
                    </div>
                    <div className="space-y-4 text-slate-700 leading-relaxed">
                        <p className="font-bold text-lg">一緒に働いてくれるスタッフを募集しています！</p>
                        <ul className="grid gap-3">
                            <li className="flex items-start gap-2">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                                <span>未経験者歓迎！丁寧に指導いたします。</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                                <span>週1日から、短時間でもOK。主婦・主夫の方も活躍中。</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                                <span>詳細については、お問い合わせフォームまたは公式LINEよりお気軽にご連絡ください。</span>
                            </li>
                        </ul>
                        <div className="mt-8">
                            <a href="#contact" className="inline-flex items-center gap-2 text-primary font-bold border-b-2 border-primary hover:text-primary-dark hover:border-primary-dark transition-all">
                                採用について問い合わせる
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyProfile;
