import React from 'react'
import { BasicTiltCard } from './projectCards'
import { image } from 'framer-motion/client'

const projects = () => {
  const projectData = [
    {
      title: "Scalable Real-time Chat Application",
      description: "Built cross-platform chat app with Socket.io and Redis for 1,000+ concurrent users. Deployed on AWS with CI/CD and achieved 99.95% uptime, <500ms message latency.",
      technologies: ["LangChain", "Langgraph", "Searchxng", "CI/CD", "TypeScript","Nextjs", "Convex","clerk"],
      period: "May 2025 - Jun 2025",
      image: "/chatapp.avif",
      link: "https://convex-121chats.vercel.app/",
      github:"https://github.com/amantiwari57/convex-121chats"
    },
    {
      title: "E-commerce Recommendation System",
      description: "A modern AI-powered product recommendation system built with Next.js, Qdrant vector database, and Google Gemini embeddings. AI natural langguage search.",
      technologies: ["Next.js 15", "Qdrant DB", "Google Gemini AI", "TypeScript", "Tailwind CSS","Docker"],
      period: "Jan 2025 - Mar 2025",
      image: "/vectordb.webp",
      github: "https://github.com/amantiwari57/ecom-reccomdendations"
    },
    {
      title: "Cryptonium - JS Hash Utility Library",
      description: "Published open-source NPM package with 100+ weekly downloads. Supports MD5, SHA variants with custom pipelines for frontend and backend hashing.",
      technologies: ["TypeScript", "NPM", "CI/CD", "Jest"],
      period: "Jun 2025 - Jul 2025",
      image: "/npm.png",
      link: "https://www.npmjs.com/package/cryptonium",
      github: "https://github.com/amantiwari57/cryptonium"
    },
     {
      title: "Secure Agent Messaging",
      description: "A robust, production-ready TCP communication protocol implementation with dynamic keep-alive functionality, designed to serve as the foundation for secure communication systems.",
      technologies: ["TypeScript", "Node.js", "TCP","Encryption","RealTime communication" ],
      period: "Aug 2025 - Present",
      image: "/tcp.jpg",
      // link: "https://www.npmjs.com/package/cryptonium",
      github: "https://github.com/amantiwari57/SecureAgentMessaging"
    },
    {
      title: "Whatsapp Architecture Research",
      description: "Chat Express is a robust developer tool designed to facilitate the rapid development of scalable, real-time chat applications. It provides a comprehensive backend architecture that manages socket connections, message exchanges, and user interactions seamlessly.",
      technologies: ["Socket.IO", "Redis", "Express","Secure Authentication","Docker" ],
      period: "Aug 2025 - Present",
      image: "/whatsapp.webp",
      // link: "https://www.npmjs.com/package/cryptonium",
      github: "https://github.com/amantiwari57/whatsapp-architecture"
    },
    
  ]

  return (
    <div id="projects" className='flex flex-col items-center justify-center py-20 px-4'>
      <h1 className='text-5xl font-bold mb-6'>My Projects</h1>
      <p className='text-lg text-gray-600 mb-10'>Here are some of the key projects I've worked on:</p>      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto w-full gap-6'>
        {projectData.map((project, index) => (
          <BasicTiltCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default projects