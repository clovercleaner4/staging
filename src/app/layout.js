import { M_PLUS_Rounded_1c, Inter } from "next/font/google";
import Script from "next/script";
import { LazyMotion, domAnimation } from "framer-motion";
import "./globals.css";
import JsonLd from "../components/JsonLd";

const mPlusRounded = M_PLUS_Rounded_1c({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-m-plus-rounded",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://clover-cleaner.com"; // Placeholder - update when domain is final

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "春日井市のエアコンクリーニング｜クローバークリーナー【女性スタッフ同行可】",
    template: "%s | クローバークリーナー"
  },
  description: "春日井市を中心に、小牧・名古屋へ出張。夫婦で営む丁寧なお掃除屋です。エアコン、水回り、遺品整理までプロの技術で徹底洗浄。女性スタッフ同行可能で一人暮らしの女性も安心。",
  keywords: ["春日井市", "エアコンクリーニング", "ハウスクリーニング", "お掃除代行", "小牧市", "名古屋市", "プロの掃除", "女性スタッフ同行"],
  authors: [{ name: "クローバークリーナー" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "春日井市のエアコンクリーニング｜クローバークリーナー",
    description: "プロの技術でカビをリセット！春日井市を中心に丁寧なお掃除サービスを提供しています。",
    url: SITE_URL,
    siteName: "クローバークリーナー",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "春日井市のエアコンクリーニング｜クローバークリーナー",
    description: "プロの技術でカビをリセット！丁寧なお掃除で空気をスッキリ。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const GA_MEASUREMENT_ID = "G-GLYE2VVLY1"; // clovercleaner4 official GA ID

  return (
    <html lang="ja">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body
        className={`${mPlusRounded.variable} ${inter.variable} font-sans antialiased`}
      >
        <JsonLd />
        <LazyMotion features={domAnimation}>
          {children}
        </LazyMotion>
      </body>
    </html>
  );
}
