"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/resume/mahad-ghauri-resume.pdf"
    link.download = "Mahad-Ghauri-Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!isMounted) return null // 👈 This avoids hydration mismatch

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[100px] animate-pulse delay-700" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="w-48 h-48 mx-auto mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse" />
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-md animate-pulse" />
            <img
              src="/images/profile.jpg"
              alt="Muhammad Mahad Ghauri"
              className="w-full h-full rounded-full object-cover border-4 border-white/20 relative z-10"
            />
          </div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Muhammad Mahad Ghauri
          </span>
        </motion.h1>

        <motion.h2 variants={itemVariants} className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 font-light">
          Flutter Developer | Full-Stack Mobile Engineer | Web Developer
        </motion.h2>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Application and Web Developer passionate about building cross-platform mobile applications using Flutter, with
          over 1 year of experience leveraging Supabase and Firebase and Node.js
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 transform hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
            onClick={handleDownload}
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transform hover:scale-105 transition-all duration-300 bg-transparent shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            onClick={() => window.open("https://github.com/Mahad-Ghauri", "_blank")}
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transform hover:scale-105 transition-all duration-300 bg-transparent shadow-[0_0_15px_rgba(139,92,246,0.2)]"
            onClick={() => window.open("https://www.linkedin.com/in/mahad-ghauri-b59911353", "_blank")}
          >
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white transform hover:scale-105 transition-all duration-300 bg-transparent shadow-[0_0_15px_rgba(236,72,153,0.2)]"
            onClick={() => window.open("mailto:mahad@example.com", "_blank")}
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </Button>
        </motion.div>

        <motion.div variants={itemVariants} className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            <div className="w-1 h-3 bg-gray-400 rounded-full mx-auto mt-2 animate-pulse" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
