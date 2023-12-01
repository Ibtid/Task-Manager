export interface ITask {
  id: number;
  title: string;
  description: string;
  status: "todo" | "completed" | "in progress";
  due: String;
}

export interface ITasksState {
  todos: ITask[];
}

export interface ITaskResponse {
    
}
