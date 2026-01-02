export type Priority = 'low' | 'medium' | 'high';
export type Status = 'todo' | 'in-progress' | 'completed';

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  status: Status;
  dueDate: Date;
  tags: string[];
  createdAt: Date;
}

export interface Project {
  id: string;
  name: string;
  color: string;
  taskCount: number;
}

export interface TimeBlock {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  color: string;
}
