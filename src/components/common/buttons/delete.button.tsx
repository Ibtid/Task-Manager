import React from "react";
import deleteIcon from "../../../img/delete.svg";
const DeleteButton = () => {
  return (
    <button className="flex items-center bg-red-500 text-white font-semibold py-2 px-2 sm:px-3 rounded cursor-pointer transition duration-300 ease-in-out hover:bg-red-600 mb-2 sm:mb-0 sm:mr-4">
    <img
      src={deleteIcon}
      alt="delete"
      className="inline h-4 w-4 sm:h-5 sm:w-5 mr-0 lg:mr-2"
    />
    <div className="hidden lg:inline">Delete</div>
  </button>
  );
};

export default DeleteButton;
