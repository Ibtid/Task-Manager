import { FC, Fragment, useEffect, useState } from "react";
import { TaskCard } from "./TaskCard.component";
import SortByStatusDropdown from "../common/dropdowns/SortByStatus.dropdown";
import SortByDateDropdown from "../common/dropdowns/SortByDate.dropdown";
import { ConfirmationCardModal, Spinkit } from "../../modals/index";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, editTodo, deleteTodo, selectTodos } from "../../todosSlice";
import dispatch from "../../dispatch/dispatch";
import actions from "../../dispatch/actions";
import { ITask } from "../../interfaces/task";

export const TaskList: FC = () => {
  const todos = useSelector(selectTodos);
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
  }, []);

  return (
    <Fragment>
      {loading && <Spinkit/>}
      {/* <ConfirmationCardModal taskName={"Gardening"} onConfirm={()=>{}} onCancel={()=>{}}/> */}
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
        {tasks.map((todo) => (
          <TaskCard
            title={todo.title}
            status={todo.status}
            key={todo.id}
            id={todo.id}
            description={todo.description}
            due={todo.due}
          />
        ))}
      </div>
    </Fragment>
  );
};
