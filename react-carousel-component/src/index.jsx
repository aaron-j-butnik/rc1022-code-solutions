import React from 'react';
import ReactDom from 'react-dom/client';
import Carousel from './carousel';

const images = [
  {
    id: 1,
    img: '../images/ghastly.png'
  },
  {
    id: 2,
    img: '../images/haunter.webp'
  },
  {
    id: 3,
    img: '../images/gengar.png'
  },
  {
    id: 4,
    img: '../images/abra.png'
  },
  {
    id: 5,
    img: '../images/alakazam.png'
  }
];

const container = document.querySelector('#root');
const root = ReactDom.createRoot(container);
root.render(<Carousel imgSrc={images}/>);
