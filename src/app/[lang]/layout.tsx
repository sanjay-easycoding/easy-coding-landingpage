import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { LanguageProvider } from "@/context/LanguageContext";
import LangAttribute from "@/components/LangAttribute";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EasyCoding - Innovative Software Solutions",
  description: "We develop custom applications that drive your business forward. From web apps to mobile solutions - we turn your vision into reality.",
};

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{
    lang: string;
  }>;
}

export default async function Layout({ children, params }: LayoutProps) {
  const { lang } = await params;
  
  // Validate that lang is either 'de' or 'en'
  if (lang !== 'de' && lang !== 'en') {
    notFound();
  }

  return (
    <>
      <LangAttribute lang={lang} />
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
      <Footer lang={lang} />
    </>
  );
} 