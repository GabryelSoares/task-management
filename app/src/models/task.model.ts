export type TaskStatus = 'doing' | 'done' | 'todo';

export interface Task {
  id?: string;
  title: string;
  status: TaskStatus;
  user?: string;
}
