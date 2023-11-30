import { FC, Fragment } from "react";
import calender from "../../img/calender.svg";
import EditButton from "../common/buttons/edit.buttons";
import DeleteButton from "../common/buttons/delete.button";
import UiPaths from "../../paths/uiPaths";
import { useNavigate } from "react-router-dom";
import StatusComponent from "../common/status/Status.component";

interface ITaskCardProps{
  id: number;
  title: string;
  description: string;
  status: 'todo' | 'completed' | 'in progress';
  due: String;
}

export const TaskCard: FC<ITaskCardProps> = ({id,title,description,status,due}) => {
  let navigate = useNavigate()
  return (
    <Fragment>
      <div className="bg-slate-50 p-6 rounded-lg shadow-md max-w-lg mx-auto sm:max-w-xl lg:max-w-2xl xl:max-w-3xl w-72 md:w-80 lg:w-96">
        <div className="flex flex-col items-center justify-between lg:flex-row mb-6">
          <div className="text-2xl lg:text-2xl font-semibold mb-4 lg:mb-0">{title}</div>
          <div className="flex items-center text-xs md:text-sm">
            <div className="bg-gray-200 pt-1 pb-1 pr-2 pl-2 text rounded-l-md flex items-center">
              <img
                src={calender}
                alt="calender"
                className="inline h-4 w-4 sm:h-5 sm:w-5 md:mr-1"
              />
              <div className="hidden md:inline">Due</div>
            </div>
            <div className="bg-gray-100 pt-1 pb-1 pr-2 pl-2 rounded-r-md">{due}</div>
          </div>
        </div>
        <div className="text-gray-700 mb-8 text-md md:text-lg">{description}</div>
        <div className="flex flex-row items-center">
          <StatusComponent status={status}/>
          <EditButton onClick={()=>{navigate(UiPaths.EditTask)}}/>
          <DeleteButton/>
        </div>
      </div>
    </Fragment>
  );
};