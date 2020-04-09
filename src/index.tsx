import * as React from 'react';
import * as ReactDOM from 'react-dom';

import AppRouter from './router';
import App from './components/App/App';

ReactDOM.render(
  <AppRouter>
    <App />
  </AppRouter>,
  document.getElementById('app'),
);
