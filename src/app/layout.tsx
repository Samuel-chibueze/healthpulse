import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


import Navbar from "./components/navbar";
import Footer from './components/footer';
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E health pulse ",
  description: "e health pulse solving problems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-900`}>
        <Navbar />
        <NextTopLoader
  color="#2299DD"
  initialPosition={0.08}
  crawlSpeed={200}
  height={3}
  crawl={true}
  easing="ease"
  speed={200}
  shadow="0 0 10px #2299DD, 0 0 5px #2299DD"
  template='<div class="bar" role="bar"><div class="peg"></div></div>'
  zIndex={1600}
  showAtBottom={false}
/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
