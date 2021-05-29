// import './sass/main.scss';
import menuCardsTpl from './templates/menu-card.hbs';
import cards from './JS/menu.json';

const menuContainerEl = document.querySelector('.js-menu');
const cardsMarkup = createMenuCardsMarkup(cards);

menuContainerEl.insertAdjacentHTML('beforeend', cardsMarkup);

function createMenuCardsMarkup(cards) {
    return cards.map(menuCardsTpl).join('');
};