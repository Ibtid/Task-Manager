import { FC, Fragment } from "react";
import { TaskCard } from "./TaskCard.component";
import SortByStatusDropdown from "../common/dropdowns/SortByStatus.dropdown";
import SortByDateDropdown from "../common/dropdowns/SortByDate.dropdown";
import{ConfirmationCardModal} from "../../modals/index";
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, editTodo, deleteTodo, selectTodos } from '../../todosSlice';


export const TaskList: FC = () => {
  const todos = useSelector(selectTodos);
  return (
    <Fragment>
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
        {todos.map((todo)=>(
          <TaskCard/>
        ))}
      </div>
    </Fragment>
  );
};
