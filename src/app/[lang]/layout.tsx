import type { Metadata } from "next";

import "../globals.css";
import { notFound } from "next/navigation";
import LangAttribute from "@/components/LangAttribute";



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
      {children}
    </>
  );
} 