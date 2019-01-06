import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@twitchseventeen/spacing-css/dist/spacing.min.css';
import Main from './routes';
import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
