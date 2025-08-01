"use client"

import { motion } from "framer-motion"

interface SectionDividerProps {
  variant?: "wave" | "slant"
  flip?: boolean
}

export default function SectionDivider({ variant = "wave", flip = false }: SectionDividerProps) {
  const getPath = () => {
    switch (variant) {
      case "wave":
        return flip
          ? "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          : "M0,0L48,21.3C96,43,192,85,288,106.7C384,128,480,128,576,122.7C672,117,768,107,864,96C960,85,1056,75,1152,80C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      case "slant":
        return flip ? "M1440 320L0 160 0 0 1440 0 1440 320z" : "M0 0L1440 160 1440 320 0 320 0 0z"
      default:
        return ""
    }
  }

  return (
    <div className="relative w-full h-24 md:h-32 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute w-full h-full"
      >
        <svg
          className="absolute bottom-0 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={variant === "wave" ? "0 0 1440 320" : "0 0 1440 320"}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="dividerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <path
            fill="url(#dividerGradient)"
            filter="url(#glow)"
            d={getPath()}
            className="transition-all duration-300"
          ></path>
        </svg>
      </motion.div>
    </div>
  )
}
