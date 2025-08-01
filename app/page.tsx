"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ExperienceSection from "@/components/experience-section"
import EducationSection from "@/components/education-section"
import CertificationsSection from "@/components/certifications-section"
import ContactSection from "@/components/contact-section"
import AnimatedBackground from "@/components/animated-background"
import SectionDivider from "@/components/section-divider"

export default function Portfolio() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        element?.scrollIntoView({ behavior: "smooth" })
      }
    }

    document.addEventListener("click", handleSmoothScroll)
    return () => document.removeEventListener("click", handleSmoothScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <SectionDivider variant="wave" />
        <AboutSection />
        <SectionDivider variant="slant" />
        <SkillsSection />
        <SectionDivider variant="wave" flip />
        <ProjectsSection />
        <SectionDivider variant="slant" flip />
        <ExperienceSection />
        <SectionDivider variant="wave" />
        <EducationSection />
        <SectionDivider variant="slant" />
        <CertificationsSection />
        <SectionDivider variant="wave" flip />
        <ContactSection />
      </main>
    </div>
  )
}
