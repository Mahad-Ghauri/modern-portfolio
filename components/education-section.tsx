"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, Award } from "lucide-react"

export default function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

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
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent pointer-events-none"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Science in Computer Science</h3>
                        <h4 className="text-xl text-green-400 font-semibold">Air University, Multan Campus</h4>
                      </div>
                      <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                        <Calendar className="w-5 h-5 mr-2" />
                        <span>2023 – Present</span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Award className="w-5 h-5 text-yellow-400 mr-3 filter drop-shadow-[0_0_3px_rgba(250,204,21,0.5)]" />
                          <span className="text-gray-300">Currently in 5th Semester</span>
                        </div>
                        <div className="flex items-center">
                          <Award className="w-5 h-5 text-blue-400 mr-3 filter drop-shadow-[0_0_3px_rgba(59,130,246,0.5)]" />
                          <span className="text-gray-300">CGPA: 3.52</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div>
                          <p className="text-gray-300">Strong foundation in OOP and core programming principles</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0 shadow-[0_0_5px_rgba(59,130,246,0.5)]"></div>
                          <p className="text-gray-300">Scalable projects with clean architecture</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0 shadow-[0_0_5px_rgba(139,92,246,0.5)]"></div>
                          <p className="text-gray-300">Active in extracurricular activities</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
