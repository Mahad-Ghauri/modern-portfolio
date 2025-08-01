"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Enhanced particle properties
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      opacity: number
      pulse: number
      pulseSpeed: number
    }> = []

    // Color palette for particles
    const colors = [
      "rgba(59, 130, 246, opacity)", // blue
      "rgba(139, 92, 246, opacity)", // purple
      "rgba(236, 72, 153, opacity)", // pink
      "rgba(16, 185, 129, opacity)", // emerald
    ]

    // Create particles with enhanced properties
    for (let i = 0; i < 150; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)]
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        size: Math.random() * 3 + 0.5,
        color: color.replace("opacity", (Math.random() * 0.5 + 0.2).toString()),
        opacity: Math.random() * 0.5 + 0.2,
        pulse: 0,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      })
    }

    const animate = () => {
      // Create a gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(15, 23, 42, 1)") // dark blue
      gradient.addColorStop(1, "rgba(30, 41, 59, 1)") // slate

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add subtle nebula effect
      const nebulaGradient = ctx.createRadialGradient(
        canvas.width * 0.5,
        canvas.height * 0.3,
        0,
        canvas.width * 0.5,
        canvas.height * 0.3,
        canvas.width * 0.8,
      )
      nebulaGradient.addColorStop(0, "rgba(79, 70, 229, 0.03)") // indigo
      nebulaGradient.addColorStop(0.5, "rgba(236, 72, 153, 0.02)") // pink
      nebulaGradient.addColorStop(1, "rgba(15, 23, 42, 0)") // transparent

      ctx.fillStyle = nebulaGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Pulse effect
        particle.pulse += particle.pulseSpeed
        const pulseFactor = Math.sin(particle.pulse) * 0.5 + 0.5
        const currentSize = particle.size * (0.8 + pulseFactor * 0.4)
        const currentOpacity = particle.opacity * (0.8 + pulseFactor * 0.4)

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle with glow effect
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2)

        // Create glow effect
        const glowColor = particle.color.replace("opacity", (currentOpacity * 0.5).toString())
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, currentSize * 3)
        gradient.addColorStop(0, particle.color.replace("opacity", currentOpacity.toString()))
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = gradient
        ctx.fill()

        // Draw the actual particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2)
        ctx.fillStyle = particle.color.replace("opacity", currentOpacity.toString())
        ctx.fill()

        // Draw connections with enhanced visuals
        particles.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)

            // Create gradient line
            const gradient = ctx.createLinearGradient(particle.x, particle.y, otherParticle.x, otherParticle.y)

            const startColor = particle.color.replace("opacity", (0.15 * (1 - distance / 150)).toString())
            const endColor = otherParticle.color.replace("opacity", (0.15 * (1 - distance / 150)).toString())

            gradient.addColorStop(0, startColor)
            gradient.addColorStop(1, endColor)

            ctx.strokeStyle = gradient
            ctx.lineWidth = 0.5 * (1 - distance / 150)
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
}
