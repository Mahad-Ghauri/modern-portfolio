"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <Card className="bg-gray-800/50 border-gray-700 h-full shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>

                  <div className="space-y-6">
                    <motion.a
                      href="mailto:mahadghauri222@gmail.com"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-all duration-300 group shadow-[0_0_10px_rgba(59,130,246,0.1)]"
                    >
                      <Mail className="w-6 h-6 text-blue-400 mr-4 group-hover:text-blue-300 filter drop-shadow-[0_0_3px_rgba(59,130,246,0.5)]" />
                      <div>
                        <div className="text-white font-medium">Email</div>
                        <div className="text-gray-400">mahadghauri222@gmail.com</div>
                      </div>
                    </motion.a>

                    <motion.a
                      href="tel:+923102027781"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-all duration-300 group shadow-[0_0_10px_rgba(16,185,129,0.1)]"
                    >
                      <Phone className="w-6 h-6 text-green-400 mr-4 group-hover:text-green-300 filter drop-shadow-[0_0_3px_rgba(16,185,129,0.5)]" />
                      <div>
                        <div className="text-white font-medium">Phone</div>
                        <div className="text-gray-400">+92 310 2027781</div>
                      </div>
                    </motion.a>

                    <motion.a
                      href="https://github.com/Mahad-Ghauri"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-all duration-300 group shadow-[0_0_10px_rgba(139,92,246,0.1)]"
                    >
                      <Github className="w-6 h-6 text-purple-400 mr-4 group-hover:text-purple-300 filter drop-shadow-[0_0_3px_rgba(139,92,246,0.5)]" />
                      <div>
                        <div className="text-white font-medium">GitHub</div>
                        <div className="text-gray-400">@Mahad-Ghauri</div>
                      </div>
                    </motion.a>

                    <motion.a
                      href="https://www.linkedin.com/in/mahad-ghauri-b59911353"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-all duration-300 group shadow-[0_0_10px_rgba(59,130,246,0.1)]"
                    >
                      <Linkedin className="w-6 h-6 text-blue-500 mr-4 group-hover:text-blue-400 filter drop-shadow-[0_0_3px_rgba(59,130,246,0.5)]" />
                      <div>
                        <div className="text-white font-medium">LinkedIn</div>
                        <div className="text-gray-400">Mahad Ghauri</div>
                      </div>
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-gray-800/50 border-gray-700 shadow-[0_0_20px_rgba(139,92,246,0.15)]">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.1)]"
                        required
                      />
                    </div>

                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.1)]"
                        required
                      />
                    </div>

                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 resize-none shadow-[0_0_10px_rgba(59,130,246,0.1)]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 transform hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
