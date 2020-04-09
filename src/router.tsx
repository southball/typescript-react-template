import * as React from 'react';
import { HashRouter } from 'react-router-dom';

const AppRouter = ({ children }: { children: React.ReactNode }) => (
  <HashRouter>
    {children}
  </HashRouter>
);

export default AppRouter;
