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
  description: "春日井市を中心に、小牧・名古屋へ出張。夫婦で営む丁寧なお掃除屋です。エアコン、水回り、遺品整理まで対応。",
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
