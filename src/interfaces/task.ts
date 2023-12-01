export interface ITask {
  id: number;
  title: string;
  description: string;
  status: "todo" | "completed" | "in progress";
  due: string;
}

export interface ITasksState {
  todos: ITask[];
  selectedTask:ITask|null
}

export interface ITaskCardProps{
  id: number;
  title: string;
  description: string;
  status: 'todo' | 'completed' | 'in progress';
  due: string;
}