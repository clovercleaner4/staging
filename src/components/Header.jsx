import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/cloverlogo.png';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100 shadow-sm py-4">
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">

                {/* Logo - Made Stronger/Larger */}
                <a href="#" className="flex items-center gap-3 group">
                    <img src={logo} alt="Clover Cleaner Logo" className="w-12 h-12 object-contain" />
                    <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-500 tracking-wider">春日井のハウスクリーニング</span>
                        <span className="text-xl font-extrabold text-slate-800 tracking-tight leading-none group-hover:text-primary transition-colors">
                            クローバークリーナー
                        </span>
                    </div>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#area" className="text-base font-bold text-slate-600 hover:text-primary transition-colors">対応エリア</a>
                    <a href="#services" className="text-base font-bold text-slate-600 hover:text-primary transition-colors">サービス料金</a>
                    <a href="#why-us" className="text-base font-bold text-slate-600 hover:text-primary transition-colors">選ばれる理由</a>

                    <a
                        href="#contact"
                        className="flex items-center gap-2 px-6 py-2.5 bg-[#06C755] text-white rounded-full font-bold text-sm shadow-md hover:bg-[#05b34c] hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                    >
                        LINE / お問い合わせ
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-800"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
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
                            <a href="#area" className="text-slate-700 font-bold py-3 px-4 hover:bg-slate-50 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>対応エリア</a>
                            <a href="#services" className="text-slate-700 font-bold py-3 px-4 hover:bg-slate-50 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>サービス</a>
                            <a href="#why-us" className="text-slate-700 font-bold py-3 px-4 hover:bg-slate-50 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>こだわり</a>
                            <div className="pt-2">
                                <a href="#contact" className="flex items-center justify-center gap-2 w-full py-4 bg-[#06C755] text-white rounded-xl font-bold text-lg shadow-md" onClick={() => setIsMobileMenuOpen(false)}>
                                    LINE / お問い合わせ
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
