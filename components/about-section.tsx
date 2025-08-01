"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, GraduationCap } from "lucide-react"

export default function AboutSection() {
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
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent pointer-events-none"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">Who I Am</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Application and Web Developer passionate about building cross-platform mobile applications using
                    Flutter, with over 1 year of experience leveraging Supabase and Firebase. Skilled in creating
                    dynamic, responsive web designs and user-friendly interfaces. Proficient in a range of technologies,
                    including JavaScript, C#. Currently expanding into the field of Artificial Intelligence to enhance
                    future-ready development capabilities.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="w-5 h-5 mr-3 text-blue-400" />
                      <span>Born: 10th November 2004</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-5 h-5 mr-3 text-purple-400" />
                      <span>Based in: Multan, Pakistan</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <GraduationCap className="w-5 h-5 mr-3 text-pink-400" />
                      <span>Student at Air University</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30 hover:from-blue-500/30 hover:to-blue-600/30 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">1+</div>
                    <div className="text-gray-300">Years Experience</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/30 hover:from-purple-500/30 hover:to-purple-600/30 transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                    <div className="text-gray-300">Projects Built</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 border-pink-500/30 hover:from-pink-500/30 hover:to-pink-600/30 transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.2)]">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-pink-400 mb-2">4th</div>
                    <div className="text-gray-300">Semester</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-500/30 hover:from-green-500/30 hover:to-green-600/30 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">5th</div>
                    <div className="text-gray-300">Semester</div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
