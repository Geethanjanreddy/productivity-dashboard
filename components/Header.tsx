'use client'

import { motion } from 'framer-motion'
import { Menu, Bell, Search, User } from 'lucide-react'
import { useState, useEffect } from 'react'

interface HeaderProps {
  onMenuClick: () => void
  isSidebarOpen: boolean
}

export default function Header({ onMenuClick, isSidebarOpen }: HeaderProps) {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-dark border-b border-white/10 px-8 py-4 sticky top-0 z-30"
    >
      <div className="flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-white/10 rounded-xl transition-colors"
          >
            <Menu className="w-6 h-6 text-gray-400" />
          </motion.button>

          <div className="hidden md:block">
            <p className="text-sm text-gray-400">
              {currentTime.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            <p className="text-xs text-gray-500">
              {currentTime.toLocaleTimeString('en-US')}
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 hover:bg-white/10 rounded-xl transition-colors"
          >
            <Bell className="w-6 h-6 text-gray-400" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-electric-pink rounded-full animate-pulse" />
          </motion.button>

          {/* User Profile */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 rounded-xl transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-semibold text-white">GeethanjanRedy</p>
              <p className="text-xs text-gray-400">Developer</p>
            </div>
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}
