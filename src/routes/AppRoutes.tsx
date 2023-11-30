import { Fragment, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import UiPaths from "../paths/uiPaths";
import Navbar from "../components/common/navbar/Navbar";

const NotFoundPage = lazy(() => import("../pages/NotFound"));
const TasksPage = lazy(() => import("../pages/Tasks"));

const AppRoutes = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route index element={<Navigate to={UiPaths.TasksList} />} />
        <Route path={UiPaths.TasksList} element={<TasksPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Fragment>
  );
};

export default AppRoutes;
