import './styles/styles.scss';

import CardMain from './assets/card-img-main-page.jpg';
import Logo from './assets/logo.png';

const card = document.querySelector('.card');
const header = document.querySelector('.header__logo-link');

const cardMain = new Image();
cardMain.src = CardMain;
cardMain.classList.add('card__image--main-page');

const logo = new Image();
logo.src = Logo;
logo.classList.add('header__logo');

card.appendChild(cardMain);
header.appendChild(logo);
