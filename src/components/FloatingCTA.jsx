'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingCTA = () => {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-6 left-6 z-40 md:hidden"
                >
                    <a
                        href="https://lin.ee/0KObu0H"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#06C755] text-white px-5 py-3 rounded-full shadow-lg font-bold text-sm tracking-wide hover:opacity-90 transition-opacity active:scale-95"
                    >
                        <MessageCircle size={24} fill="white" />
                        <span className="text-base">LINEで見積もり</span>
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingCTA;
