import CareerHero from '@/components/CareerHero';

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export default async function CareerPage({ params }: PageProps) {
  const { lang } = await params;
  return <CareerHero lang={lang as 'de' | 'en'} />;
} 