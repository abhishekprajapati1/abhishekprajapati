import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/lightmode.css';
import App from './components/App';
import ThemeContextWrapper from './contexts/ThemeContextWrapper';






const element = (
  <ThemeContextWrapper>
    <>
      <App />

    </>
  </ThemeContextWrapper>
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  element
);


