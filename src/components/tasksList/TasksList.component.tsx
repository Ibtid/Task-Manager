import { FC, Fragment, useEffect, useState } from "react";
import { TaskCard } from "./TaskCard.component";
import FilterByStatusDropdown from "../common/dropdowns/FilterByStatus.dropdown";
import FilterByDateDropdown from "../common/dropdowns/FilterByDate.dropdown";
import { Spinkit } from "../../modals/index";
import { useSelector } from "react-redux";
import { selectTodos } from "../../redux/todosSlice";
import dispatch from "../../dispatch/dispatch";
import actions from "../../dispatch/actions";
import { ITask } from "../../interfaces/task";
import { filterTasks } from "../../utils/filterTasks";

export const TaskList: FC = () => {
  let todos: ITask[] = useSelector(selectTodos);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const [selectedDateOptions, setSelectedDateOptions] = useState<string[]>([]);
  const [selectedStatusOptions, setSelectedStatusOptions] = useState<string[]>(
    []
  );

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const tasksFromResponse = await dispatch({
          action: actions.getTask, // Note the correction here
          headerParams: {},
          body: {},
          token: "",
        });
        if (tasksFromResponse.data != null) {
          if (
            selectedStatusOptions.length === 0 &&
            selectedDateOptions.length === 0
          ) {
            setTasks(todos);
          } else {
            setTasks(
              filterTasks(todos, selectedStatusOptions, selectedDateOptions)
            );
          }
        }else{
          alert('Something went wrong')
        }
      } catch (error) {
        alert('Something went wrong')
        console.error("Error fetching tasks:", error);
      }
      setLoading(false);
    })();
  }, [todos, selectedDateOptions, selectedStatusOptions]);

  return (
    <Fragment>
      {loading && <Spinkit />}
      <div className="text-white p-4 mt-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className=""></div>
          <div className="flex space-x-4">
            <FilterByStatusDropdown
              selectedOptions={selectedStatusOptions}
              setSelectedOptions={setSelectedStatusOptions}
            />
            <FilterByDateDropdown
              selectedOptions={selectedDateOptions}
              setSelectedOptions={setSelectedDateOptions}
            />
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
        {tasks.length===0 && !loading && <div className="text-3xl">No tasks found</div>}
      </div>
    </Fragment>
  );
};
