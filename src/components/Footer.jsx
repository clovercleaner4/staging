'use client';
import React from 'react';
import Image from 'next/image';
import logo from '../assets/cloverlogo.webp';
import { Instagram } from 'lucide-react';
import SmartLink from './SmartLink';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
                    {/* Brand Info - Left Column */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-3 mb-4">
                            <a href="#hero" className="flex items-center gap-3" aria-label="クローバークリーナー ホームへ">
                                <Image src={logo} alt="" className="w-10 h-10 object-contain" />
                                <div className="flex flex-col">
                                    <span className="text-lg font-bold text-white tracking-tight leading-tight">Clover cleaner</span>
                                    <span className="text-[10px] font-bold text-slate-300 tracking-widest leading-none">クローバークリーナー</span>
                                </div>
                            </a>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-bold">
                            「エアコン・水回りの汚れ、プロの技術で徹底洗浄。」
                        </p>
                        <div className="mt-6 text-sm text-slate-200 font-medium">
                            <p>〒486-0808</p>
                            <p>愛知県春日井市堀ノ内町北1-65</p>
                            <p className="mt-2 text-xs text-slate-300 font-bold">
                                対応エリア：春日井市、小牧市、名古屋市、多治見市、瀬戸市など
                            </p>
                        </div>
                        <div className="mt-6 flex gap-4">
                            <a
                                href="https://www.instagram.com/clovercleaner4/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="公式Instagramを見る"
                                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                            >
                                <Instagram size={20} className="text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Links - Center Column (Block Centered, Text Left) */}
                    <div className="flex flex-col items-center">
                        <div className="w-fit text-left">
                            <h4 className="font-bold text-lg mb-4 text-slate-300">メニュー</h4>
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
                        <h4 className="font-bold text-lg mb-4 text-slate-300">お問い合わせ</h4>
                        <div className="flex flex-col gap-3 items-center md:items-start">
                            <a href="#contact" className="text-primary-light font-bold hover:underline transition-colors" aria-label="お問い合わせフォームへ">お問い合わせフォーム</a>
                            <p className="text-slate-300 text-xs mt-2 font-bold">
                                LINEまたはフォームよりご連絡ください。
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col justify-center items-center gap-1 md:gap-2 text-[10px] md:text-xs text-slate-500 text-center">
                    <p>
                        <span className="block md:inline">&copy; 2026 Clover Cleaner. All rights reserved.</span>
                        <span className="hidden md:inline mx-2 text-slate-700">|</span>
                        <span className="block md:inline mt-1 md:mt-0">
                            Produced by <a href="https://showtimeboxx.com/creative/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors">SHOWTIMEBOXX CRIATIVE</a>
                        </span>
                    </p>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
