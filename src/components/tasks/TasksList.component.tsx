import { FC, Fragment } from "react";
import { TaskCard } from "./TaskCard.component";
import sortIcon from "../../img/sort.svg";
import SortByStatusDropdown from "../common/dropdowns/SortByStatus.dropdown";
import SortByDateDropdown from "../common/dropdowns/SortByDate.dropdown";
import AddButton from "../common/buttons/add.button";

export const TaskList: FC = () => {
  return (
    <Fragment>
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Task Manager</div>
          <div className="flex space-x-4">
            <AddButton/>
          </div>
        </div>
      </header>
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
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </Fragment>
  );
};
