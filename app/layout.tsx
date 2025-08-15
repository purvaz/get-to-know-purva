import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Wix_Madefor_Text } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const wixFont = Wix_Madefor_Text({
  weight: ['400', '500', '600'], // Choose desired weights
  subsets: ['latin'],
  variable: '--font-wix',
});

export const metadata: Metadata = {
  title: "Get To Know Purva",
  description: "A modern personal website to showcase my work, achievements, and interests.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body
        className={`${wixFont.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
