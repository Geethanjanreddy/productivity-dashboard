'use client'

import { motion } from 'framer-motion'
import { 
  LayoutDashboard, 
  CheckSquare, 
  Calendar, 
  BarChart3, 
  Settings, 
  User,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: CheckSquare, label: 'Tasks', active: false },
    { icon: Calendar, label: 'Calendar', active: false },
    { icon: BarChart3, label: 'Analytics', active: false },
    { icon: Settings, label: 'Settings', active: false },
    { icon: User, label: 'Profile', active: false },
  ]

  return (
    <motion.aside
      initial={false}
      animate={{ width: isOpen ? 256 : 80 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed left-0 top-0 h-screen glass-dark border-r border-white/10 z-40"
    >
      <div className="flex flex-col h-full p-4">
        {/* Logo */}
        <div className="flex items-center justify-between mb-8 h-16">
          <motion.div
            initial={false}
            animate={{ opacity: isOpen ? 1 : 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center font-display font-bold text-white text-xl">
              P
            </div>
            {isOpen && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-xl font-display font-bold gradient-text"
              >
                ProDash
              </motion.span>
            )}
          </motion.div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.label}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                item.active
                  ? 'bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 text-white border border-neon-cyan/30'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {isOpen && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="font-medium"
                >
                  {item.label}
                </motion.span>
              )}
            </motion.button>
          ))}
        </nav>

        {/* Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onToggle}
          className="flex items-center justify-center w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all mt-4"
        >
          {isOpen ? (
            <ChevronLeft className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-400" />
          )}
        </motion.button>
      </div>
    </motion.aside>
  )
}
