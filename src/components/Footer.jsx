'use client';
import React from 'react';
import Image from 'next/image';
import logo from '../assets/cloverlogo.webp';
import SmartLink from './SmartLink';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
                    {/* Brand Info - Left Column */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-3 mb-4">
                            <a href="#" className="flex items-center gap-3" aria-label="ホーム（トップページ）へ戻る">
                                <Image src={logo} alt="Clover cleaner logo" className="w-10 h-10 object-contain" />
                                <div className="flex flex-col">
                                    <span className="text-lg font-bold text-white tracking-tight leading-tight">Clover cleaner</span>
                                    <span className="text-[10px] font-bold text-slate-300 tracking-widest leading-none">クローバークリーナー</span>
                                </div>
                            </a>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                            「エアコン・水回りの汚れ、プロの技術で徹底洗浄。」
                        </p>
                        <div className="mt-4 text-sm text-slate-200 font-medium">
                            <p>〒486-0808</p>
                            <p>愛知県春日井市堀ノ内町北1-65</p>
                            <p className="mt-2 text-xs text-slate-400 font-bold">
                                対応エリア：春日井市、小牧市、名古屋市、多治見市、瀬戸市など
                            </p>
                        </div>
                    </div>

                    {/* Links - Center Column (Block Centered, Text Left) */}
                    <div className="flex flex-col items-center">
                        <div className="w-fit text-left">
                            <h4 className="font-bold text-lg mb-4 text-white">メニュー</h4>
                            <ul className="space-y-2 text-sm">
                                <li><SmartLink href="#hero" className="hover:text-primary transition-colors">トップページ</SmartLink></li>
                                <li><SmartLink href="#services" className="hover:text-primary transition-colors">サービス・料金</SmartLink></li>
                                <li><SmartLink href="#area" className="hover:text-primary transition-colors">対応エリア</SmartLink></li>
                                <li><SmartLink href="#why-us" className="hover:text-primary transition-colors">選ばれる理由</SmartLink></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info - Right Column */}
                    <div className="flex flex-col items-center md:items-start md:pl-12">
                        <h4 className="font-bold text-lg mb-4 text-white">お問い合わせ</h4>
                        <div className="flex flex-col gap-3 items-center md:items-start">
                            <a href="#contact" className="text-primary-heavy font-bold hover:underline transition-colors">お問い合わせフォーム</a>
                            <p className="text-slate-400 text-xs mt-2 font-bold">
                                LINEまたはフォームよりご連絡ください。
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col justify-center items-center gap-4 text-xs text-slate-500 text-center">
                    <p>&copy; 2026 Clover Cleaner. All rights reserved.</p>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
