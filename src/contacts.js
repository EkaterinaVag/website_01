import './styles/styles.scss';

import CardContacts from './assets/card-img-contact-page.jpg';
import Logo from './assets/logo.png';

const card = document.querySelector('.card--light-gray');
const header = document.querySelector('.header__logo-link');

const cardContacts = new Image();
cardContacts.src = CardContacts;
cardContacts.classList.add('card__image--contact-page');

const logo = new Image();
logo.src = Logo;
logo.classList.add('header__logo');

card.prepend(cardContacts);
header.appendChild(logo);
