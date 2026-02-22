'use client';

import React from 'react';

const JsonLd = () => {
    const businessData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Clover cleaner（クローバークリーナー）",
        "image": "https://clover-cleaner.com/cloverlogo.png",
        "@id": "https://clover-cleaner.com",
        "url": "https://clover-cleaner.com",
        "telephone": "080-XXXX-XXXX", // Placeholder
        "priceRange": "¥8,000 - ¥30,000",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "堀ノ内町北1-65",
            "addressLocality": "春日井市",
            "addressRegion": "愛知県",
            "postalCode": "486-0808",
            "addressCountry": "JP"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 35.247184, // Approximate for Horinouchi, Kasugai
            "longitude": 137.009439
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        },
        "sameAs": [
            "https://www.instagram.com/clover_cleaner/"
        ]
    };

    const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "洗剤のニオイや安全性は大丈夫ですか？ペットがいるので心配です。",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ご安心ください。Clover cleanerでは、頑固な油汚れまでしっかり落とすために専用洗剤を使用しておりますが、同時に「残さない清掃」を大切にしています。汚れを落とした後の「すすぎ」と「水拭き」を徹底し、洗剤成分やニオイが残らない状態に仕上げておりますので、ペットや小さなお子様がいるご家庭でも安心してお使いいただけます。"
                }
            },
            {
                "@type": "Question",
                "name": "古いエアコンでもクリーニングできますか？",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "はい、可能です。ただし、製造から10年以上経過している機種については、プラスチック部品の劣化による破損リスクがあるため、補償の対象外となる場合がございます。"
                }
            },
            {
                "@type": "Question",
                "name": "女性スタッフに来てもらうことはできますか？",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "はい、可能です。当店は夫婦で活動しており、女性スタッフの同行をご希望の際は、ご予約時にお気軽にお申し付けください。"
                }
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
            />
        </>
    );
};

export default JsonLd;
