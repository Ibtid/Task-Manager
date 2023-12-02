import React, { FC, Fragment } from "react";
import AddButton from "../buttons/add.button";
import { useLocation, useNavigate } from "react-router-dom";
import UiPaths from "../../../paths/uiPaths";
import { Outlet, Link } from "react-router-dom";
import BackButton from "../buttons/back.button";

const Layout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <Fragment>
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Task Manager</div>
          <div className="flex space-x-4">
            {pathname == "/list" ? (
              <AddButton onClick={() => navigate(UiPaths.AddTask)} />
            ) : (
              <BackButton onClick={() => navigate(UiPaths.TasksList)} />
            )}
          </div>
        </div>
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Layout;
