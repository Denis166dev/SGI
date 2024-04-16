import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';

function Root() {
  return (
    <>
      <App />
    </>
  );
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

reportWebVitals();
