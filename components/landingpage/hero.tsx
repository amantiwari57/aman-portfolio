"use client"
import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Github, Linkedin, Mail, Download, Code, Terminal, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface FloatingElementProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

const FloatingElement: React.FC<FloatingElementProps> = ({ 
  children, 
  delay = 0, 
  duration = 3,
  className = ""
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -10, 0],
        rotate: [0, 1, -1, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

interface TypewriterTextProps {
  text: string
  delay?: number
  speed?: number
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  delay = 0, 
  speed = 50 
}) => {
  const [displayText, setDisplayText] = React.useState('')
  const [currentIndex, setCurrentIndex] = React.useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }
    }, currentIndex === 0 ? delay : speed)

    return () => clearTimeout(timer)
  }, [currentIndex, text, delay, speed])

  return (
    <span className="relative">
      {displayText}
      <motion.span
        className="inline-block w-0.5 h-6 bg-primary ml-1"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </span>
  )
}

interface ParticleProps {
  x: number
  y: number
  size: number
  delay: number
}

const Particle: React.FC<ParticleProps> = ({ x, y, size, delay }) => {
  return (
    <motion.div
      className="absolute rounded-full bg-primary/20"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
      }}
      animate={{
        scale: [0, 1, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  )
}

const ParticleField: React.FC = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 3,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <Particle
          key={particle.id}
          x={particle.x}
          y={particle.y}
          size={particle.size}
          delay={particle.delay}
        />
      ))}
    </div>
  )
}

interface SkillBadgeProps {
  skill: string
  icon: React.ReactNode
  delay: number
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      className="cursor-pointer"
    >
      <Badge variant="secondary" className="flex items-center gap-2 px-3 py-2 text-sm bg-background/50 backdrop-blur-sm border-border/50 hover:bg-background/80 transition-colors">
        {icon}
        {skill}
      </Badge>
    </motion.div>
  )
}

const DeveloperHero: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  const skills = [
    { name: "React.js", icon: <Code className="w-4 h-4" /> },
    { name: "TypeScript", icon: <Terminal className="w-4 h-4" /> },
    { name: "Node.js", icon: <Zap className="w-4 h-4" /> },
    { name: "Python", icon: <Terminal className="w-4 h-4" /> },
    { name: "AWS", icon: <Zap className="w-4 h-4" /> },
    { name: "Docker", icon: <Code className="w-4 h-4" /> },
  ]

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section 
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden"
    >
      <ParticleField />
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
      
      {/* Floating Elements */}
      <FloatingElement delay={0} className="absolute top-20 left-10 opacity-30 pointer-events-none">
        <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm" />
      </FloatingElement>
      
      <FloatingElement delay={1} className="absolute top-40 right-20 opacity-20 pointer-events-none">
        <div className="w-24 h-24 rounded-lg bg-secondary/30 backdrop-blur-sm rotate-45" />
      </FloatingElement>
      
      <FloatingElement delay={2} className="absolute bottom-32 left-20 opacity-25 pointer-events-none">
        <div className="w-12 h-12 rounded-full bg-accent/40 backdrop-blur-sm" />
      </FloatingElement>

      <motion.div
        className="relative container mx-auto px-4 z-[60]"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Hi, I'm Aman Tiwari
            </motion.h1>
            
            <div className="text-2xl md:text-4xl text-muted-foreground font-medium">
              <TypewriterText 
                text="Full Stack Developer" 
                delay={1000}
                speed={100}
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Experienced in scalable application architecture and cloud-native deployments for high-performance platforms. 
            Specialized in React, Node.js, Docker, Kubernetes, and AWS with proven expertise in microservices and streamlined workflows.
          </motion.p>

          {/* Skills */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto"
          >
            {skills.map((skill, index) => (
              <SkillBadge
                key={skill.name}
                skill={skill.name}
                icon={skill.icon}
                delay={2 + index * 0.1}
              />
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="mailto:amantiwari7057@gmail.com"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-lg font-medium text-white shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </a>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://cdn.dualdevs.in/AMAN%20TIWARI_Full%20Stack%20Software%20Engineer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background/50 px-8 py-3 text-lg font-medium shadow-sm transition-colors hover:bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center gap-6"
          >
            {[
              { icon: Github, href: "https://github.com/amantiwari57", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "mailto:amantiwari7057@gmail.com", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="p-3 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-background/80 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3 + index * 0.1 }}
              >
                <social.icon className="w-6 h-6 text-foreground" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default DeveloperHero