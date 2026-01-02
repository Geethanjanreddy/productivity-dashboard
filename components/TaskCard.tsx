'use client'

import { motion } from 'framer-motion'
import { Calendar, Tag, Trash2, Circle, CheckCircle2, Clock } from 'lucide-react'
import { Task } from '@/types'
import { format } from 'date-fns'

interface TaskCardProps {
  task: Task
  onToggleStatus: (id: string) => void
  onDelete: (id: string) => void
  index: number
}

export default function TaskCard({ task, onToggleStatus, onDelete, index }: TaskCardProps) {
  const priorityColors = {
    high: 'from-red-500 to-orange-500',
    medium: 'from-yellow-500 to-amber-500',
    low: 'from-green-500 to-emerald-500'
  }

  const statusIcons = {
    todo: <Circle className="w-5 h-5" />,
    'in-progress': <Clock className="w-5 h-5" />,
    completed: <CheckCircle2 className="w-5 h-5" />
  }

  const statusColors = {
    todo: 'text-gray-400',
    'in-progress': 'text-neon-cyan',
    completed: 'text-green-500'
  }

  const isOverdue = new Date(task.dueDate) < new Date() && task.status !== 'completed'

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="glass-dark rounded-2xl p-6 hover-lift card-hover group"
    >
      {/* Priority Indicator */}
      <div className={`h-2 w-full rounded-full bg-gradient-to-r ${priorityColors[task.priority]} mb-4`} />

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2 group-hover:text-neon-cyan transition-colors">
            {task.title}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2">
            {task.description}
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onDelete(task.id)}
          className="ml-4 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
        >
          <Trash2 className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {task.tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 flex items-center gap-1"
          >
            <Tag className="w-3 h-3" />
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        {/* Due Date */}
        <div className={`flex items-center gap-2 text-sm ${isOverdue ? 'text-red-400' : 'text-gray-400'}`}>
          <Calendar className="w-4 h-4" />
          <span>{format(new Date(task.dueDate), 'MMM dd, yyyy')}</span>
          {isOverdue && (
            <span className="px-2 py-0.5 bg-red-500/20 text-red-400 rounded text-xs font-semibold">
              Overdue
            </span>
          )}
        </div>

        {/* Status Toggle */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onToggleStatus(task.id)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors ${statusColors[task.status]} hover:bg-white/10`}
        >
          {statusIcons[task.status]}
          <span className="text-xs font-medium capitalize">{task.status.replace('-', ' ')}</span>
        </motion.button>
      </div>
    </motion.div>
  )
}
