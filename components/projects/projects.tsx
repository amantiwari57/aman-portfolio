import React from 'react'
import { BasicTiltCard } from './projectCards'

const projects = () => {
  const projectData = [
    {
      title: "Scalable Real-time Chat Application",
      description: "Built cross-platform chat app with Socket.io and Redis for 1,000+ concurrent users. Deployed on AWS with CI/CD and achieved 99.95% uptime, <500ms message latency.",
      technologies: ["Socket.io", "Redis", "AWS", "CI/CD"],
      period: "May 2025 - Jun 2025"
    },
    {
      title: "Smart Contract Web3 Freelance Platform",
      description: "Developed cross-platform Web3 freelance marketplace with Solidity smart contracts and React. Integrated WalletConnect/MetaMask and enabled crypto escrow transactions.",
      technologies: ["Solidity", "React", "Web3.js", "MetaMask", "IPFS"],
      period: "Jan 2025 - Mar 2025"
    },
    {
      title: "Cryptonium - JS Hash Utility Library",
      description: "Published open-source NPM package with 100+ weekly downloads. Supports MD5, SHA variants with custom pipelines for frontend and backend hashing.",
      technologies: ["TypeScript", "NPM", "CI/CD", "Jest"],
      period: "Jun 2025 - Jul 2025"
    }
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