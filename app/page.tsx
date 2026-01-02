'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Plus, 
  Search, 
  Filter, 
  Calendar, 
  CheckCircle2, 
  Circle, 
  Clock,
  TrendingUp,
  Zap,
  Target,
  BarChart3
} from 'lucide-react'
import { Task, Priority, Status } from '@/types'
import TaskCard from '@/components/TaskCard'
import StatCard from '@/components/StatCard'
import AddTaskModal from '@/components/AddTaskModal'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState<Status | 'all'>('all')
  const [filterPriority, setFilterPriority] = useState<Priority | 'all'>('all')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [mounted, setMounted] = useState(false)

  // Initialize with sample data
  useEffect(() => {
    setMounted(true)
    const sampleTasks: Task[] = [
      {
        id: '1',
        title: 'Design System Components',
        description: 'Create reusable UI components for the design system',
        priority: 'high',
        status: 'in-progress',
        dueDate: new Date(2026, 0, 5),
        tags: ['Design', 'UI/UX'],
        createdAt: new Date(2025, 11, 28)
      },
      {
        id: '2',
        title: 'API Integration',
        description: 'Integrate REST API endpoints for user authentication',
        priority: 'high',
        status: 'todo',
        dueDate: new Date(2026, 0, 8),
        tags: ['Backend', 'API'],
        createdAt: new Date(2025, 11, 29)
      },
      {
        id: '3',
        title: 'Write Documentation',
        description: 'Document all API endpoints and component usage',
        priority: 'medium',
        status: 'todo',
        dueDate: new Date(2026, 0, 10),
        tags: ['Documentation'],
        createdAt: new Date(2025, 11, 30)
      },
      {
        id: '4',
        title: 'Performance Optimization',
        description: 'Optimize bundle size and improve page load times',
        priority: 'high',
        status: 'in-progress',
        dueDate: new Date(2026, 0, 6),
        tags: ['Performance', 'Frontend'],
        createdAt: new Date(2026, 0, 1)
      },
      {
        id: '5',
        title: 'User Testing Session',
        description: 'Conduct usability testing with 5 users',
        priority: 'medium',
        status: 'completed',
        dueDate: new Date(2026, 0, 3),
        tags: ['Testing', 'UX'],
        createdAt: new Date(2025, 11, 27)
      },
      {
        id: '6',
        title: 'Database Migration',
        description: 'Migrate from PostgreSQL to MongoDB',
        priority: 'low',
        status: 'todo',
        dueDate: new Date(2026, 0, 15),
        tags: ['Database', 'Backend'],
        createdAt: new Date(2026, 0, 2)
      }
    ]
    setTasks(sampleTasks)
    setFilteredTasks(sampleTasks)
  }, [])

  // Filter tasks based on search and filters
  useEffect(() => {
    let filtered = tasks

    if (searchQuery) {
      filtered = filtered.filter(task => 
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    if (filterStatus !== 'all') {
      filtered = filtered.filter(task => task.status === filterStatus)
    }

    if (filterPriority !== 'all') {
      filtered = filtered.filter(task => task.priority === filterPriority)
    }

    setFilteredTasks(filtered)
  }, [tasks, searchQuery, filterStatus, filterPriority])

  const addTask = (task: Omit<Task, 'id' | 'createdAt'>) => {
    const newTask: Task = {
      ...task,
      id: Date.now().toString(),
      createdAt: new Date()
    }
    setTasks(prev => [newTask, ...prev])
  }

  const updateTask = (id: string, updates: Partial<Task>) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, ...updates } : task
    ))
  }

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  const toggleTaskStatus = (id: string) => {
    setTasks(prev => prev.map(task => {
      if (task.id === id) {
        const statusOrder: Status[] = ['todo', 'in-progress', 'completed']
        const currentIndex = statusOrder.indexOf(task.status)
        const nextStatus = statusOrder[(currentIndex + 1) % statusOrder.length]
        return { ...task, status: nextStatus }
      }
      return task
    }))
  }

  // Calculate statistics
  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.status === 'completed').length,
    inProgress: tasks.filter(t => t.status === 'in-progress').length,
    highPriority: tasks.filter(t => t.priority === 'high' && t.status !== 'completed').length
  }

  const completionRate = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen relative">
      {/* Animated background particles */}
      <div className="bg-particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="flex relative z-10">
        {/* Sidebar */}
        <Sidebar 
          isOpen={isSidebarOpen} 
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)} 
        />

        {/* Main Content */}
        <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
          <Header 
            onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
            isSidebarOpen={isSidebarOpen}
          />

          <main className="p-8">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h1 className="text-5xl font-display font-bold mb-4 gradient-text">
                Your Productivity Hub
              </h1>
              <p className="text-xl text-gray-400">
                Manage your tasks, track progress, and achieve your goals
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <StatCard
                title="Total Tasks"
                value={stats.total}
                icon={<Target className="w-6 h-6" />}
                color="cyan"
                delay={0.1}
              />
              <StatCard
                title="Completed"
                value={stats.completed}
                icon={<CheckCircle2 className="w-6 h-6" />}
                color="purple"
                delay={0.2}
              />
              <StatCard
                title="In Progress"
                value={stats.inProgress}
                icon={<Clock className="w-6 h-6" />}
                color="pink"
                delay={0.3}
              />
              <StatCard
                title="Completion Rate"
                value={`${completionRate}%`}
                icon={<TrendingUp className="w-6 h-6" />}
                color="orange"
                delay={0.4}
              />
            </div>

            {/* Search and Filter Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-dark rounded-2xl p-6 mb-8"
            >
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search tasks..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent transition-all"
                  />
                </div>

                {/* Status Filter */}
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value as Status | 'all')}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent transition-all cursor-pointer"
                >
                  <option value="all">All Status</option>
                  <option value="todo">To Do</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>

                {/* Priority Filter */}
                <select
                  value={filterPriority}
                  onChange={(e) => setFilterPriority(e.target.value as Priority | 'all')}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-purple focus:border-transparent transition-all cursor-pointer"
                >
                  <option value="all">All Priority</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>

                {/* Add Task Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(true)}
                  className="bg-gradient-to-r from-neon-cyan to-neon-purple text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-neon-cyan/50 transition-all"
                >
                  <Plus className="w-5 h-5" />
                  Add Task
                </motion.button>
              </div>
            </motion.div>

            {/* Tasks Grid */}
            <AnimatePresence mode="popLayout">
              {filteredTasks.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-20"
                >
                  <Zap className="w-16 h-16 mx-auto mb-4 text-gray-600" />
                  <h3 className="text-2xl font-bold text-gray-400 mb-2">No tasks found</h3>
                  <p className="text-gray-500">Try adjusting your filters or create a new task</p>
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredTasks.map((task, index) => (
                    <TaskCard
                      key={task.id}
                      task={task}
                      onToggleStatus={toggleTaskStatus}
                      onDelete={deleteTask}
                      index={index}
                    />
                  ))}
                </div>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>

      {/* Add Task Modal */}
      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={addTask}
      />
    </div>
  )
}
