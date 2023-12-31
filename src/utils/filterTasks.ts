import { ITask } from "../interfaces/task";

export const filterTasks = (
  todos: ITask[],
  selectedStatusOptions: string[],
  selectedDateOptions: string[]
): ITask[] => {
  return todos.filter((todo) => {
    //Filter based on status
    const statusMatch = selectedStatusOptions.includes(todo.status);
    //Filter based on date
    const dateMatch = selectedDateOptions.some((option) => {
      const dueDate = new Date(todo.due);
      const today = new Date();
      switch (option) {
        case "Due Today":
          return dueDate.toDateString() === today.toDateString();
        case "Over Due":
          return dueDate < today;
        case "Due in Future":
          return dueDate > today;
        default:
          return false;
      }
    });
    if (
      selectedDateOptions.length === 0 &&
      selectedStatusOptions.length !== 0
    ) {
      return statusMatch;
    } else if (
      selectedDateOptions.length !== 0 &&
      selectedStatusOptions.length === 0
    ) {
      return dateMatch;
    } else return statusMatch && dateMatch;
  });
};
