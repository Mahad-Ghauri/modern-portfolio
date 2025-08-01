"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Calendar } from "lucide-react"

const projects = [
  {
    title: "IWENT - Event Registration App",
    description:
      "Dynamic, full-stack event registration and event creation with visually appealing and responsive animated UI/UX as a startup initiative.",
    tech: ["Flutter", "Supabase", "Google Maps", "Firebase"],
    github: "https://github.com/igmoiiz/iWent",
    demo: "https://v0-iw-ent-landing-page.vercel.app/",
    image: "/placeholder.svg?height=300&width=400&text=IWENT",
    period: "July 2025",
    gradient: "from-purple-500 to-pink-600",
    status: "Startup Initiative",
  },
  {
    title: "Globe Guide - Tour Guide App",
    description:
      "Full-stack tour guide application with visually appealing and responsive animated UI/UX design, integrated with real-time chatbot support.",
    tech: ["Flutter", "Supabase", "Firebase", "Google Maps", "Real-time Chat"],
    github: "https://github.com/Mahad-Ghauri/Tour_guide-main.git",
    image: "/images/tour-guide-icon.png",
    period: "April 2025 - June 2025",
    gradient: "from-blue-500 to-teal-600",
  },
  {
    title: "KONEXEA - Social Media Platform",
    description:
      "Dynamic, full-stack social media with integrated e-commerce platform, real-time chat, and enhanced user support as a Semester Project.",
    tech: ["Flutter", "Supabase", "Firebase", "Real-time Chat", "E-commerce"],
    github: "https://github.com/Mahad-Ghauri/Social-Swap-Main.git",
    image: "/images/konexea-logo.png",
    period: "March 2025 - May 2025",
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    title: "QUIZIZEN - Digital Quiz Platform",
    description:
      "Digital quiz competition platform for students to get hands-on experience with interactive quizzes, Supabase authentication and web viewers for blogs.",
    tech: ["Flutter", "Supabase", "Web Viewers", "Authentication"],
    github: "https://github.com/Mahad-Ghauri/Digital_Quiz_Competition_Platform.git",
    image: "/images/quizizen-logo.png",
    period: "May 2025 - June 2025",
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    title: "Car Dealership Website",
    description:
      "Frontend car dealership website with visually appealing and responsive animated design. Planning Google Maps integration and full-stack development.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com/Mahad-Ghauri/Car-DealerShip-Website.git",
    image: "/placeholder.svg?height=300&width=400&text=Car+Dealership",
    period: "March 2024 - June 2024",
    gradient: "from-gray-600 to-gray-800",
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-900/5 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div key={project.title} variants={itemVariants}>
                <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group h-full shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="w-full h-48 rounded-lg mb-6 relative overflow-hidden bg-gray-700 flex items-center justify-center">
                      {project.image.includes("placeholder") ? (
                        <div
                          className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                        >
                          <div className="text-white text-xl font-bold opacity-80">{project.title.split(" ")[0]}</div>
                        </div>
                      ) : (
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      )}
                      {project.status && (
                        <div className="absolute top-4 right-4 bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          {project.status}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center text-gray-400 text-sm mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.period}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4 flex-grow text-sm leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      {project.demo && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-blue-500 text-blue-400 hover:bg-blue-500/10 bg-transparent"
                          onClick={() => window.open(project.demo, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
