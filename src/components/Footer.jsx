import React from 'react';
import logo from '../assets/cloverlogo.png';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <img src={logo} alt="Clover Cleaner Logo" className="w-8 h-8 object-contain" />
                            <span className="text-xl font-bold text-white tracking-tight">クローバークリーナー</span>
                        </div>
                        <p className="text-sm leading-relaxed max-w-sm">
                            〒486-0828 愛知県春日井市堀ノ内町北一丁目６５番地<br />
                            代表：野村　貴典<br /><br />
                            春日井市を中心としたハウスクリーニング・便利屋サービス。<br />
                            「困った」を解決し、快適な暮らしをお届けします。
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Service</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#services" className="hover:text-secondary transition-colors">定期清掃</a></li>
                            <li><a href="#services" className="hover:text-secondary transition-colors">フロアメンテナンス</a></li>
                            <li><a href="#services" className="hover:text-secondary transition-colors">ガラス・外壁清掃</a></li>
                            <li><a href="#services" className="hover:text-secondary transition-colors">日常清掃代行</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-secondary transition-colors">会社概要</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">採用情報</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">プライバシーポリシー</a></li>
                            <li><a href="#contact" className="hover:text-secondary transition-colors">お問い合わせ</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 text-center text-xs">
                    &copy; {new Date().getFullYear()} Clover Cleaner. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
