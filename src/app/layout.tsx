import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"], // crucial for Russian support
  display: "swap",
});

export const metadata: Metadata = {
  title: "StarDrop - Монетизируйте свой Telegram-канал",
  description: "Самый простой способ продавать цифровые товары и эксклюзивный контент через Telegram Stars.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
