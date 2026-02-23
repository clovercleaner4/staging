'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { m, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo-v2.webp';
import SmartLink from './SmartLink';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100 shadow-sm py-4">
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">

                {/* Logo - Left */}
                <a href="#" className="flex items-center gap-2 md:gap-3 group" aria-label="ホームへ戻る">
                    <Image src={logo} alt="Clover cleaner logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" priority />
                    <div className="flex flex-col">
                        <span className="text-[9px] md:text-[11px] font-bold text-primary tracking-wider leading-none mb-1">Clover cleaner</span>
                        <span className="text-lg md:text-2xl font-extrabold text-slate-800 tracking-tighter leading-none group-hover:text-primary transition-colors whitespace-nowrap">
                            クローバークリーナー
                        </span>
                        <span className="text-[9px] md:text-[10px] font-medium text-slate-500 tracking-wider whitespace-nowrap mt-1">春日井のハウスクリーニング</span>
                    </div>
                </a>

                {/* Desktop Navigation - Center */}
                <div className="hidden md:flex items-center gap-8">
                    <SmartLink href="#hero" className="text-base font-bold text-slate-600 hover:text-primary transition-colors">ホーム</SmartLink>
                    <SmartLink href="#area" className="text-base font-bold text-slate-600 hover:text-primary transition-colors">対応エリア</SmartLink>
                    <SmartLink href="#services" className="text-base font-bold text-slate-600 hover:text-primary transition-colors">サービス料金</SmartLink>
                    <SmartLink href="#why-us" className="text-base font-bold text-slate-600 hover:text-primary transition-colors">選ばれる理由</SmartLink>
                </div>

                {/* Desktop CTA & Mobile Toggle - Right */}
                <div className="flex items-center gap-4">
                    <a
                        href="#contact"
                        className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-full font-bold text-sm shadow-md hover:bg-primary-light hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                    >
                        無料お見積り・ご相談
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-slate-800 p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <m.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-stone-100 overflow-hidden shadow-xl"
                    >
                        <div className="p-4 flex flex-col gap-2">
                            <a href="#hero" className="text-slate-700 font-bold py-3 px-4 hover:bg-slate-50 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>ホーム</a>
                            <a href="#area" className="text-slate-700 font-bold py-3 px-4 hover:bg-slate-50 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>対応エリア</a>
                            <a href="#services" className="text-slate-700 font-bold py-3 px-4 hover:bg-slate-50 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>サービス</a>
                            <a href="#why-us" className="text-slate-700 font-bold py-3 px-4 hover:bg-slate-50 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>こだわり</a>
                            <div className="pt-2">
                                <a href="#contact" className="flex items-center justify-center gap-2 w-full py-4 bg-secondary text-white rounded-xl font-bold text-lg shadow-md" onClick={() => setIsMobileMenuOpen(false)}>
                                    無料お見積り・ご相談
                                </a>
                            </div>
                        </div>
                    </m.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Header;
