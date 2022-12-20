import React from 'react';
import ReactDOM from 'react-dom/client';
import { Accordion } from './accordion';

const info = [
  {
    id: 1,
    language: 'Hypertext Markup Language',
    textContent: 'The HyperText Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.'
  },
  {
    id: 2,
    language: 'Cascading Style Sheets',
    textContent: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.'
  },
  {
    id: 3,
    language: 'JavaScript',
    textContent: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScrirpt specification. JavaScript has curlybacket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.'
  }
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Accordion info={info} />);
