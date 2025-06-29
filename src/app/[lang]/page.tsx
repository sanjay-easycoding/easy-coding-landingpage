import Hero from "@/components/Hero";

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  return <Hero lang={lang as 'de' | 'en'} />;
} 