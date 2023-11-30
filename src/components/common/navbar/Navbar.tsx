import React, { FC, Fragment } from "react";
import AddButton from "../buttons/add.button";
import { useNavigate } from "react-router-dom";
import UiPaths from "../../../paths/uiPaths";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Task Manager</div>
          <div className="flex space-x-4">
            <AddButton onClick={() => navigate(UiPaths.AddTask)} />
          </div>
        </div>
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
