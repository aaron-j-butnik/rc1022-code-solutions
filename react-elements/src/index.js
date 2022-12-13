import React from 'react';
import ReactDom from 'react-dom/client';

const newElement = React.createElement('h1', null, 'Hello, React!');

console.log(newElement);

const container = document.querySelector('#root');

const root = ReactDom.createRoot(container);

root.render(newElement);
