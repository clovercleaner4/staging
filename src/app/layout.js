import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "../components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
