import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { IMAGES } from '../constants';

const Area = () => {
    return (
        <section id="area" className="py-24 bg-orange-50/50 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-primary font-bold tracking-wider uppercase mb-2 block bg-white/50 inline-block px-4 py-1 rounded-full text-sm">Service Area</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                        春日井市から<br className="sm:hidden" />30km圏内対応
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        春日井市を中心に、小牧市・名古屋市守山区など近隣エリアへ。<br />
                        フットワーク軽く、最短即日で駆けつけます。
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-6xl mx-auto">

                    {/* Google Map Iframe */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full md:w-1/2 aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104273.6934259838!2d136.9405615809706!3d35.24765275822368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60037a4e6988891f%3A0xc3f6f4d547f877!2z5aU055-l55yM5pil5pel5LqV5biC!5e0!3m2!1sja!2sjp!4v1705845000000!5m2!1sja!2sjp"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Kasugai City Map"
                        ></iframe>
                    </motion.div>

                    {/* List of areas */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white p-6 rounded-2xl shadow-md border border-slate-100"
                        >
                            <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                                メイン対応エリア
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {['春日井市', '小牧市', '名古屋市守山区', '北名古屋市'].map(city => (
                                    <span key={city} className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg font-medium text-sm">
                                        {city}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white p-6 rounded-2xl shadow-md border border-slate-100"
                        >
                            <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-primary"></div>
                                その他のエリア
                            </h3>
                            <p className="text-slate-600 text-sm mb-3">
                                愛知県内・岐阜県南部など、近隣エリアも柔軟に対応可能です。<br />
                                まずは一度お問い合わせください。
                            </p>
                        </motion.div>


                    </div>

                </div>
            </div>
        </section>
    );
};

export default Area;
