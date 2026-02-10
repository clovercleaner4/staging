import React from 'react';
import { Phone, Mail, ArrowRight, MessageCircle } from 'lucide-react';
import heroStaff from '../assets/hero_staff.png'; // Use real staff image
import { IMAGES } from '../constants';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative bg-slate-50">
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-slate-900 z-0" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

                    {/* Left: Contact Info & Image */}
                    <div className="md:w-1/2 relative bg-primary-dark text-white p-12 flex flex-col justify-between">
                        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
                            <img src={heroStaff} alt="Contact" className="w-full h-full object-cover" />
                        </div>
                        <div className="relative z-10">
                            <span className="text-white/80 font-bold tracking-wider uppercase mb-2 block">Contact Us</span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                お見積り・ご相談<br />無料です
                            </h2>
                            <p className="text-white/90 mb-8 font-medium">
                                「いくらくらいかかる？」「こんなこと頼める？」<br />
                                まずは、あなたの疑問をお聞かせください。<br />
                                しつこい営業は一切いたしません。
                            </p>

                            <a href="tel:0568XXXXXX" className="flex items-center gap-4 mb-4 bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-white text-primary-dark flex items-center justify-center flex-shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-white/80">お電話でのお問合わせ (9:00 - 18:00)</p>
                                    <p className="text-2xl font-bold tracking-wide">0568-XX-XXXX</p>
                                </div>
                            </a>

                            <a href="#" className="flex items-center gap-4 mb-8 bg-[#06C755] p-4 rounded-xl hover:bg-[#05b34c] transition-colors cursor-pointer text-white shadow-lg border border-white/10">
                                <div className="w-12 h-12 rounded-full bg-white text-[#06C755] flex items-center justify-center flex-shrink-0">
                                    <MessageCircle size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-white/90">LINEで手軽に相談</p>
                                    <p className="text-xl font-bold tracking-wide">公式LINEはこちら</p>
                                </div>
                            </a>
                        </div>

                        <div className="relative z-10 mt-8">
                            <p className="text-xs text-white/60">春日井市・小牧市・名古屋市守山区周辺</p>
                        </div>
                    </div>

                    {/* Right: Simple Form */}
                    <div className="md:w-1/2 p-12 bg-white">
                        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                            <Mail className="text-secondary" />
                            Webからのお問い合わせ
                        </h3>
                        <form action="https://api.staticforms.xyz/submit" method="post" className="space-y-4">
                            {/* Static Forms Configuration */}
                            <input type="hidden" name="accessKey" value="sf_2f76059311430f0k7bhngcna" />
                            <input type="hidden" name="subject" value="Contact Form Submission" />
                            <input type="hidden" name="redirectTo" value="" />

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">お名前 <span className="text-red-500">*</span></label>
                                <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="例：春日井 太郎" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">メールアドレス <span className="text-red-500">*</span></label>
                                <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="example@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">ご相談内容</label>
                                <textarea name="message" rows="4" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="お気軽にどうぞ"></textarea>
                            </div>
                            <button type="submit" className="w-full py-4 bg-secondary hover:bg-secondary-light text-white font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all hover:-translate-y-1 active:translate-y-0">
                                送信する
                                <ArrowRight size={18} />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
