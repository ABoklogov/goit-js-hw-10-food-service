// import './sass/main.scss';
import menuCardsTpl from './templates/menu-card.hbs';
import cards from './JS/menu.json';

const menuContainerEl = document.querySelector('.js-menu');
const cardsMarkup = createMenuCardsMarkup(cards);

menuContainerEl.insertAdjacentHTML('beforeend', cardsMarkup);

function createMenuCardsMarkup(cards) {
    return cards.map(menuCardsTpl).join('');
};

// Изменение темы:

const checkboxEl = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


if (localStorage.getItem('topic') === null) {
    body.classList.add(Theme.LIGHT);
    localStorage.setItem('topic', Theme.LIGHT);

    
};

if (localStorage.getItem('topic') === Theme.LIGHT) {
    body.classList.add(Theme.LIGHT);
} else if (localStorage.getItem('topic') === Theme.DARK) {
    body.classList.add(Theme.DARK);
}

checkboxEl.addEventListener('change', onChangeTopicClick);

function onChangeTopicClick() {
    if (localStorage.getItem('topic') === Theme.LIGHT) {
        body.classList.replace(Theme.LIGHT, Theme.DARK);
        localStorage.setItem('topic', Theme.DARK);
    } else if (localStorage.getItem('topic') === Theme.DARK) {
        body.classList.replace(Theme.DARK, Theme.LIGHT);
        localStorage.setItem('topic', Theme.LIGHT);
    };
};
