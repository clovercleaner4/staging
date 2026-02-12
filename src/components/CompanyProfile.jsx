'use client';
import React from 'react';
import { ShieldCheck, MapPin, Phone, Building2, User } from 'lucide-react';

const CompanyProfile = () => {
    return (
        <section className="py-16 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-10">
                    <span className="text-primary font-bold text-sm block mb-2 tracking-wider">dw</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                        会社概要
                    </h2>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <table className="w-full text-left text-sm md:text-base">
                        <tbody>
                            <tr className="border-b border-slate-100">
                                <th className="bg-slate-50 py-4 px-6 font-bold text-slate-600 w-1/3 md:w-1/4">屋号</th>
                                <td className="py-4 px-6 text-slate-800 font-bold">Clover Cleaner（クローバークリーナー）</td>
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
                            <tr>
                                <th className="bg-slate-50 py-4 px-6 font-bold text-slate-600">加入保険</th>
                                <td className="py-4 px-6 text-slate-800 font-bold text-blue-600 flex items-center gap-2">
                                    <ShieldCheck size={18} />
                                    三井住友海上 賠償責任保険加入
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default CompanyProfile;
