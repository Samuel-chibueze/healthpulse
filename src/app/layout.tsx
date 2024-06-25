import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


import Navbar from "./components/navbar";
import Footer from './components/footer';

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
        {children}
        <Footer />
      </body>
    </html>
  );
}
