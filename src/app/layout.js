import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "春日井市のエアコンクリーニング｜クローバークリーナー【女性スタッフ同行可】",
  description: "春日井市・小牧市でエアコンクリーニングやキッチン清掃をお探しなら、クローバークリーナーへ。プロの技術と「顔が見える」安心感で、しつこい汚れも徹底洗浄。見積もり無料・最短即日対応も可能です。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
