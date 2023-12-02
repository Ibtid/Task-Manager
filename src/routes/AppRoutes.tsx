import { Navigate, Route, Routes } from "react-router-dom";
import UiPaths from "../paths/uiPaths";
import Layout from "../components/common/layout/Layout";
import TasksPage from "../pages/Tasks";
import AddTaskPage from "../pages/AddTask";
import NotFoundPage from "../pages/NotFound";
import EditTaskPage from "../pages/EditTask";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to={UiPaths.TasksList} />} />
        <Route path={UiPaths.TasksList} element={<TasksPage />} />
        <Route path={UiPaths.AddTask} element={<AddTaskPage />} />
        <Route path={UiPaths.EditTask} element={<EditTaskPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
