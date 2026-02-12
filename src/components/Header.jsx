'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/cloverlogo.png';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100 shadow-sm py-4">
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">

                {/* Logo - Left */}
                <a href="#" className="flex items-center gap-2 md:gap-3 group">
                    <Image src={logo} alt="Clover Cleaner Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                    <div className="flex flex-col">
                        <span className="text-[10px] md:text-xs font-bold text-slate-500 tracking-wider whitespace-nowrap">春日井のハウスクリーニング</span>
                        <span className="text-base md:text-xl font-extrabold text-slate-800 tracking-tight leading-none group-hover:text-primary transition-colors whitespace-nowrap">
                            クローバークリーナー
                        </span>
                    </div>
                </a>

                {/* Desktop Navigation - Center */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#hero" className="text-base font-bold text-slate-600 hover:text-primary transition-colors">ホーム</a>
                    <a href="#area" className="text-base font-bold text-slate-600 hover:text-primary transition-colors">対応エリア</a>
                    <a href="#services" className="text-base font-bold text-slate-600 hover:text-primary transition-colors">サービス料金</a>
                    <a href="#why-us" className="text-base font-bold text-slate-600 hover:text-primary transition-colors">選ばれる理由</a>
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
                        className="md:hidden text-slate-800"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
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
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Header;
