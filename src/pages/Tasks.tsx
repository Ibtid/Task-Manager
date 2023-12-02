import { FC, Fragment } from "react";
import { TaskList } from "../components/tasksList/TasksList.component";

const TasksPage: FC = () => {
  return (
    <Fragment>
      <TaskList />
    </Fragment>
  );
};

export default TasksPage;
