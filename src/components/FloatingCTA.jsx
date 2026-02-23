'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { m, AnimatePresence } from 'framer-motion';

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
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-6 left-6 right-6 z-40 md:hidden"
                >
                    <a
                        href="https://lin.ee/0KObu0H"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LINEでお問い合わせ・お見積り"
                        className="flex items-center justify-center gap-3 w-full py-4 bg-[#06C755] text-white rounded-2xl font-extrabold text-lg shadow-2xl border-2 border-white/20"
                    >
                        <MessageCircle size={24} fill="white" />
                        <span className="text-base font-extrabold tracking-wider">LINEで見積もり</span>
                    </a>
                </m.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingCTA;
