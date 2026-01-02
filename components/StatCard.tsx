'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface StatCardProps {
  title: string
  value: string | number
  icon: ReactNode
  color: 'cyan' | 'purple' | 'pink' | 'orange'
  delay: number
}

export default function StatCard({ title, value, icon, color, delay }: StatCardProps) {
  const colorClasses = {
    cyan: 'from-neon-cyan to-blue-500',
    purple: 'from-neon-purple to-purple-600',
    pink: 'from-electric-pink to-pink-600',
    orange: 'from-warm-orange to-orange-600'
  }

  const glowColors = {
    cyan: 'shadow-neon-cyan/30',
    purple: 'shadow-neon-purple/30',
    pink: 'shadow-electric-pink/30',
    orange: 'shadow-warm-orange/30'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
      className="glass-dark rounded-2xl p-6 relative overflow-hidden group cursor-pointer"
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[color]} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${colorClasses[color]} text-white shadow-lg ${glowColors[color]}`}>
            {icon}
          </div>
        </div>

        <motion.h3 
          className="text-4xl font-bold text-white mb-2"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
        >
          {value}
        </motion.h3>
        
        <p className="text-gray-400 text-sm font-medium">{title}</p>
      </div>

      {/* Decorative corner element */}
      <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${colorClasses[color]} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
    </motion.div>
  )
}
