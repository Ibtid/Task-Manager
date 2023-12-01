import { FC, Fragment, useEffect, useState } from "react";
import { TaskCard } from "./TaskCard.component";
import SortByStatusDropdown from "../common/dropdowns/SortByStatus.dropdown";
import SortByDateDropdown from "../common/dropdowns/SortByDate.dropdown";
import {  Spinkit } from "../../modals/index";
import { useSelector } from "react-redux";
import {selectTodos } from "../../todosSlice";
import dispatch from "../../dispatch/dispatch";
import actions from "../../dispatch/actions";
import { ITask } from "../../interfaces/task";

export const TaskList: FC = () => {
  let todos:ITask[] = useSelector(selectTodos);
  const [tasks, setTasks] = useState<ITask[]>([])
  const [loading, setLoading] = useState<Boolean>(false)

  useEffect(() => {
    (async () => {
      setLoading(true)
      try {
        const tasksFromResponse = await dispatch({
          action: actions.getTask, // Note the correction here
          headerParams: {},
          body: {},
          token: '',
        });
        if(tasksFromResponse.data!=null){
          setTasks(todos)
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
      setLoading(false)
    })();
  }, [todos]);

  return (
    <Fragment>
      {loading && <Spinkit/>}
      <div className="text-white p-4 mt-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className=""></div>
          <div className="flex space-x-4">
            <SortByStatusDropdown />
            <SortByDateDropdown />
          </div>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-4 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 p-4">
        {tasks.map((task) => (
          <TaskCard
            title={task.title}
            status={task.status}
            key={task.id}
            id={task.id}
            description={task.description}
            due={task.due}
          />
        ))}
      </div>
    </Fragment>
  );
};
