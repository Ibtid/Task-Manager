import { FC, Fragment } from 'react';

import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './routes/AppRoutes';

const App: FC = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
