import React from 'react';
import ReactDOM from 'react-dom/client';

function CustomButton() {
  return <button>Click me!</button>;
}

const htmlDiv = document.querySelector('#root');
const root = ReactDOM.createRoot(htmlDiv);
const element = <CustomButton/>;
root.render(element);
