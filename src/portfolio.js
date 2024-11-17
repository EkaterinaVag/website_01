import './styles/styles.scss';

import Logo from './assets/logo.png';

import handleCarouselScroll from './scripts/handleCarouselScroll.js';

handleCarouselScroll();

const header = document.querySelector('.header__logo-link');

const logo = new Image();
logo.src = Logo;
logo.classList.add('header__logo');

header.appendChild(logo);
