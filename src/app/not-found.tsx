"use client";

import { usePathname } from 'next/navigation';
import NotFound from "@/components/NotFound";

export default function RootNotFound() {
  const pathname = usePathname();
  
  // Determine language based on pathname
  let lang: 'en' | 'de' = 'de'; // default to German
  
  if (pathname && pathname.startsWith('/en')) {
    lang = 'en';
  } else if (pathname && pathname.startsWith('/de')) {
    lang = 'de';
  }
  // For root paths (/ and /career), use German (default)
  
  return <NotFound lang={lang} />;
} 