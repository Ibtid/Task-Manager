import React, { FC } from "react";
import editIcon from "../../../img/edit.svg";
import { IButton } from "../../../interfaces/button";

const EditButton:FC<IButton> = ({onClick}) => {
  return (
    <button onClick={onClick} className="flex items-center bg-slate-700 transition duration-300 ease-in-out hover:bg-slate-800 text-white font-semibold py-2 px-2 sm:px-3 rounded cursor-pointer ml-4 mr-2 mb-2 sm:mb-0 sm:mr-4">
      <img src={editIcon} alt="edit" className="inline h-4 w-4 sm:h-5 sm:w-5  mr-0 lg:mr-2" />
      <div className="hidden lg:inline">Edit</div>
    </button>
  );
};

export default EditButton;
