import './style.css'
import 'remixicon/fonts/remixicon.css'
import { Navbar } from './components/Navbar/Navbar.js'
import { Hero } from './components/Hero/Hero.js'
import { Courses } from './components/Courses/Courses.js'
import { ImageMarquee } from './components/ImageMarquee/ImageMarquee.js'

import { Banner } from './components/Banner/Banner.js'
import { Footer } from './components/Footer/Footer.js'

// import Lenis from 'lenis'
// import 'lenis/dist/lenis.css'

const app = document.querySelector('#app');
function render(){
  app.innerHTML = 
  `
    ${Navbar()}
    ${Hero()}
    ${ImageMarquee()}
    ${Courses()}
    ${Banner()}
    ${Footer()}
    
    `;
};

render();

//toggle button for mobile menu
const menuBtn = document.querySelector('.menu');
const menu = document.querySelector('#menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// //Initialize Lenis
// const lenis = new Lenis({
//   autoRaf: true,
// });

// // Listen for the scroll event and log the event data
// lenis.on('scroll', (e) => {
//   console.log(e);
// });



