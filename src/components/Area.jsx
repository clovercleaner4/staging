'use client';
import React, { useRef, useEffect } from 'react';
import { m, useInView } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
// import { MapContainer, TileLayer, Circle, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// Fix for Leaflet marker icons in React
// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const Area = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    /*
    useEffect(() => {
        // Fix for Leaflet marker icons in React
        // Only run on client side
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: icon.src,
            iconUrl: icon.src,
            shadowUrl: iconShadow.src,
        });
    }, []);
    */

    // Kasugai City Coordinates (Approx center/city hall)
    const position = [35.2493, 136.9677];
    const radius = 30000; // 30km in meters

    return (
        <section id="area" className="py-20 bg-stone-50 relative overflow-hidden">


            <div className="container mx-auto px-4 relative z-10" ref={ref}>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6">
                        対応エリア
                    </h2>
                    <p className="text-sm md:text-xl font-bold text-slate-700 bg-white/80 inline-block px-4 md:px-8 py-3 rounded-full shadow-sm backdrop-blur-sm border border-slate-100 whitespace-nowrap">
                        春日井市を中心におよそ30km圏内
                    </p>
                    <p className="mt-4 text-slate-700 font-medium">
                        ※エリア外でも対応できる場合がございます。<br className="md:hidden" />まずはお気軽にご相談ください。
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
                    {/* Map Representation - Placeholder */}
                    <m.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-3xl overflow-hidden shadow-xl border-4 border-white/50 relative h-[400px] z-0"
                    >
                        <iframe
                            src="https://www.google.com/maps/d/u/5/embed?mid=1RB8Kk5MjcRDpgjQA88QSfVv62N2_mug&ehbc=2E312F"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="春日井市周辺30km対応エリア"
                            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                        ></iframe>
                        <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded text-xs text-blue-600 underline pointer-events-auto">
                            <a href="https://www.google.com/maps/d/viewer?mid=1RB8Kk5MjcRDpgjQA88QSfVv62N2_mug&ehbc=2E312F" target="_blank" rel="noopener noreferrer">
                                拡大地図を表示
                            </a>
                        </div>
                    </m.div>

                    {/* Text / Promise */}
                    <m.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                                <Navigation size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">フットワークの軽さが自慢です</h3>
                                <p className="text-slate-700 leading-relaxed font-medium">
                                    「今日来てほしい」「急ぎで頼みたい」そんなご要望にも、スケジュールの許す限り全力で対応いたします。
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                <MapPin size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">出張費無料（半径30km）</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    拠点（春日井）からおおよそ30km圏内であれば、出張費は原則いただきません。その他のエリアもお気軽にご相談ください。
                                </p>
                            </div>
                        </div>
                    </m.div>
                </div>
            </div>
        </section>
    );
};

export default Area;
