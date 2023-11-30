import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import UiPaths from '../paths/uiPaths';

const NotFoundPage = lazy(() => import('../pages/NotFound'));
const TasksPage = lazy(()=> import('../pages/Tasks'))

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Navigate to={UiPaths.TasksList} />} />
      <Route path={UiPaths.TasksList} element={<TasksPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
