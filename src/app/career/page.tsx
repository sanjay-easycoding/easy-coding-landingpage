'use client';

import { useState } from 'react';
import CareerHero from "@/components/CareerHero";
import CareerValues from "@/components/CareerValues";
import CareerPerks from "@/components/CareerPerks";
import CareerJobs from "@/components/CareerJobs";
import CareerCTA from "@/components/CareerCTA";
import { ApplyModal, ResumeModal } from "@/components/CareerModals";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  office: string;
  type: string;
  icon: React.ReactNode;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export default function CareerPage() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const handleApplyJob = (job: Job) => {
    setSelectedJob(job);
    setIsApplyModalOpen(true);
  };

  const handleSendResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseApplyModal = () => {
    setIsApplyModalOpen(false);
    setSelectedJob(null);
  };

  const handleCloseResumeModal = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <CareerHero />
        <CareerValues />
        <CareerPerks />
        <CareerJobs onApplyJob={handleApplyJob} />
        <CareerCTA onSendResume={handleSendResume} />
      </main>
      <Footer />

      {/* Modals */}
      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={handleCloseApplyModal}
        job={selectedJob}
      />
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={handleCloseResumeModal}
      />
    </LanguageProvider>
  );
} 