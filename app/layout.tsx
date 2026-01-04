import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "automatric",
  description: "Map and recommendations for places you can see magic machines",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="mt-4 text-center"><Link href="/">Automatric</Link> • <Link href="/categories">Categories</Link> • <Link href="/places">View all</Link></div>
        {children}
        <div className="mt-4 text-xs text-center">Automatric • From Binney, {new Date().getFullYear()}</div>
      </body>
    </html>
  );
}
