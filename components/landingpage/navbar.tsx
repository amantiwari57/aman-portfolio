"use client"
import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from '../ui/navigation-menu'
import { smoothScrollTo } from '@/lib/scroll-utils'

export function NavBarLandingPage() {
  const navItems = [
    {
      name: 'Home',
      url: '#hero',
      icon: Home,
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        smoothScrollTo('hero');
      },
    },
    {
      name: 'About',
      url: '#about',
      icon: User,
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        smoothScrollTo('about');
      },
    },
    {
      name: 'Projects',
      url: '#projects',
      icon: Briefcase,
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        smoothScrollTo('projects');
      },
    },
    {
      name: 'Resume',
      url: 'https://cdn.dualdevs.in/AMAN%20TIWARI_Full%20Stack%20Software%20Engineer.pdf',
      icon: FileText,
      // No onClick for Resume, let it be a normal link
    },
  ]

  return <NavBar items={navItems} />
}