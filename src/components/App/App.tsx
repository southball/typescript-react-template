import * as React from 'react';

import './App.scss';
import image from './image.png';

const App = () => (
  <div>
    <h1 className="title">Welcome to the TypeScript-React Template!</h1>
    <p className="content">You have successfully built the application.</p>
    <img src={image} />
  </div>
);

export default App;
