'use client';
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { m, AnimatePresence } from 'framer-motion';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const questions = [
        {
            q: '洗剤のニオイや安全性は大丈夫ですか？ペットがいるので心配です。',
            a: 'ご安心ください。Clover cleanerでは、頑固な油汚れまでしっかり落とすために専用洗剤を使用しておりますが、同時に「残さない清掃」を大切にしています。汚れを落とした後の「すすぎ」と「水拭き」を徹底し、洗剤成分やニオイが残らない状態に仕上げておりますので、ペットや小さなお子様がいるご家庭でも安心してお使いいただけます。'
        },
        {
            q: '古いエアコンでもクリーニングできますか？',
            a: 'はい、可能です。ただし、製造から10年以上経過している機種については、プラスチック部品の劣化による破損リスクがあるため、補償の対象外となる場合がございます。事前にメーカーと型番をお知らせいただければ確認いたします。'
        },
        {
            q: '雨の日でも作業は可能ですか？',
            a: 'はい、室内機・室外機ともに雨天でも作業可能です。ただし、屋根のない場所での室外機洗浄など、安全確保が難しい暴風雨の場合は日程変更をご相談させていただくことがございます。'
        },
        {
            q: '駐車スペースがない場合はどうなりますか？',
            a: 'お客様宅に駐車スペースがない場合、近隣のコインパーキングを利用させていただきます。その際、駐車料金の実費のみお客様にご負担をお願いしております。'
        },
        {
            q: '女性スタッフに来てもらうことはできますか？',
            a: 'はい、可能です。当店は夫婦で活動しており、女性スタッフの同行をご希望の際は、ご予約時にお気軽にお申し付けください。一人暮らしの女性のお客様も安心してご利用いただけます。'
        },
        {
            q: '支払い方法は何がありますか？',
            a: '作業完了後に「現金」または「PayPay」でお支払いいただけます。法人のお客様につきましては、請求書払い（銀行振込）も対応可能ですのでご相談ください。'
        },
        {
            q: 'キャンセルした場合、料金はかかりますか？',
            a: '作業前日17時までのご連絡であれば、キャンセル料は一切かかりません。それ以降のキャンセルにつきましては、規定のキャンセル料をいただく場合がございます。'
        }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold text-sm block mb-2 tracking-wider">FAQ</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6">
                        よくあるご質問
                    </h2>
                    <p className="text-slate-500 max-w-xl mx-auto">
                        お客様からよくいただくご質問をまとめました。
                    </p>
                </div>

                <div className="space-y-4">
                    {questions.map((item, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                            >
                                <div className="flex items-start gap-4 pr-4">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-sm mt-0.5">Q</span>
                                    <span className="font-bold text-slate-700 md:text-lg">{item.q}</span>
                                </div>
                                <div className={`text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <m.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 pl-4 md:pl-[4.5rem]">
                                            <p className="text-slate-700 leading-relaxed font-bold italic">
                                                {item.a}
                                            </p>
                                        </div>
                                    </m.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
