import { filteredData } from './arrayOfMovieData.js';

const moviesArray = filteredData;

function makeTag(tagName, classes, attObj, userText) {
  const html = document.createElement(tagName);
  if (classes) {
    if (Array.isArray(classes)) {
      classes.forEach(x => html.classList.add(x));
    } else {
      html.classList.add(classes);
    }
  }
  for (const attribute in attObj) {
    html.setAttribute(`${attribute}`, `${attObj[attribute]}`);
  }
  html.textContent = userText;
  // console.log(html);
  return html;
}

///// makeButton створює html елемент button із бажаними типом, класом та текстом;
///// приймає параметри type (рядок), classes (рядок або масив рядків) та userText (рядок);

function makeButton(type, classes, userText) {
  const button = document.createElement('button');
  if (classes) {
    if (Array.isArray(classes)) {
      classes.forEach(x => button.classList.add(x));
    } else {
      button.classList.add(classes);
    }
  }
  button.type = type;
  button.textContent = userText;
  return button;
}

///// randomMoviePicker створює html елемент що містить n кількість фільмів, узятих з бази з топ-240 фільмів;
///// Фільми зберігаються у масиві обʼєктів, кожен з яких містить дані про фільм, у тому числі і постер;

// function check(a) {
//   const value =
//     moviesArray[randomIndex].contributionQuestions.edges[0].node.entity.primaryImage
//       .url;
//   if (
//     moviesArray[randomIndex].contributionQuestions.edges[0].node.entity.primaryImage
//       .url
//   ) {
//     return value;
//   } else {
//     randomIndex = Math.round(moviesArray.length * Math.random());
//   }
// }

function randomMoviePicker(n) {
  const movieContainer = makeTag('div', 'container');
  for (let i = 0; i < n; i++) {
    const randomIndex = Math.round(moviesArray.length * Math.random());
    const imageSrc =
      moviesArray[randomIndex].contributionQuestions.edges[0].node.entity
        .primaryImage.url;
    const imageAlt = moviesArray[randomIndex].originalTitleText.text;
    const movieCard = makeTag('div', 'movie-container');
    const poster = makeTag('img', 'movie-image', {
      width: 300,
      height: 450,
      src: imageSrc,
      alt: imageAlt,
    });
    const link = makeTag('a', 'poster-link', {
      href: `https://www.google.com/search?q=${moviesArray[
        randomIndex
      ].originalTitleText.text.replace(/[\s]/g, '+')}+watch+online`,
      target: 'blank',
    });
    link.appendChild(poster);
    movieCard.appendChild(link);
    movieContainer.appendChild(movieCard);
  }
  return movieContainer;
}

///// assembleBaseHtml - збирає структуру сторінки. Приймає обʼєкт, який містить пари key: value, де:
///// key - батьківський елемент, створений викликом функції makeTag() або document.querySelector();
///// value - масив дочірніх елементів, створених за допомогою makeTag();
///// наприклад { body: [header, main, footer], header: [logoLink], main: [container] };

function assembleBaseHtml(obj) {
  for (const item in obj) {
    const parent = document.querySelector(item);
    for (const child of obj[item]) {
      parent.insertAdjacentElement('afterbegin', child);
    }
  }
}

function getListener(element, eventType, callbackFn) {
  element.addEventListener(eventType, e => callbackFn());
}

////////// Після цього вже руцями викликаємо створюємо бажані елементи та викликаємо відповідні функції //////////

const header = makeTag('header', ['header', 'header-container']);
const main = makeTag('main', 'main-container');
const footer = makeTag('footer', ['footer', 'footer-container']);
const logoLink = makeTag(
  'a',
  ['logo-link', 'test'],
  { href: 'index.html', name: 'sitelogo', alt: 'random' },
  '__ RandoMovie.JS',
);

const generateButton = makeButton(
  'button',
  'regenerate',
  'Get another three awesome movies!',
);

assembleBaseHtml({
  body: [footer, main, header],
  header: [logoLink],
  main: [generateButton, randomMoviePicker(3)],
});

document
  .querySelector('.regenerate')
  .addEventListener('click', () =>
    document
      .querySelector('.container')
      .insertAdjacentHTML('beforeend', randomMoviePicker(3).innerHTML),
  );
