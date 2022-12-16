import React from 'react';
import ReactDOM from 'react-dom/client';
import { PasswordInput } from './validated-input';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
const element = <PasswordInput />;

root.render(element);
