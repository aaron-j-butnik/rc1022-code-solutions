import React from 'react';
import ReactDOm from 'react-dom/client';
import { CustomSwitch } from './toggle-switch';

const container = document.querySelector('#root');
const root = ReactDOm.createRoot(container);
const element = <CustomSwitch/>;
root.render(element);
