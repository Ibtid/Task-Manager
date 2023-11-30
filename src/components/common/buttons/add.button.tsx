import React, { FC } from "react";
import addIcon from "../../../img/add.svg";
import { useNavigate } from "react-router-dom";
import UiPaths from "../../../paths/uiPaths";

interface IButton{
  onClick:()=>void
}

const AddButton:FC<IButton> = ({onClick}) => {
  let navigate = useNavigate()
  return (
    <button onClick={()=>navigate(UiPaths.AddTask)} className="flex items-center text-white font-semibold border-2 border-white py-2 px-2 sm:px-3 rounded cursor-pointer transition duration-300 ease-in-out hover:bg-blue-600 sm:mr-4">
    <img
      src={addIcon}
      alt="add"
      className="inline h-4 w-4 sm:h-5 sm:w-5 mr-0 lg:mr-2"
    />
    <div className="hidden lg:inline">Add Task</div>
  </button>
  );
};

export default AddButton;