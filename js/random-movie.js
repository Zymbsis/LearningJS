import { filteredData } from './arrayOfMovieData.js';
const moviesArray = filteredData;
const filteredArray = [];
for (let i = 0; i < moviesArray.length - 1; i++) {
  if (
    moviesArray[i].contributionQuestions.edges[0].node.entity.primaryImage
      .url !==
    moviesArray[i + 1].contributionQuestions.edges[0].node.entity.primaryImage
      .url
  ) {
    filteredArray.push(moviesArray[i]);
    // console.log(
    //   moviesArray[i].contributionQuestions.edges[0].node.entity.primaryImage
    //     .url,
    // );
  }
}

// console.log(filteredArray);

// const arr = [];
// for (const item of moviesArray) {
// console.log(item.contributionQuestions.edges[0].node.entity.primaryImage.url);

//   arr.push(
//     `<img width="200" height="200" src=${item.contributionQuestions.edges[0].node.entity.primaryImage.url}>`,
//   );
// }
// document.body.insertAdjacentHTML('afterbegin', arr.join('\n\n'));
// console.log(arr.join('\n\n'));

const header = makeTag('header', ['header', 'header-container']);
const main = makeTag('main', 'main-container');
const logoLink = makeTag(
  'a',
  ['logo-link', 'test'],
  { href: 'index.html', name: 'sitelogo', alt: 'random' },
  '__ RandoMovie.JS',
);
const container = makeTag('div', 'container');
const generateButton = makeTag(
  'button',
  'regenerate',
  { type: 'button' },
  'Get another three awesome movies!',
);
const footer = makeTag('footer', ['footer', 'footer-container'], {
  id: 'footer',
});

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
  return html;
}

const arrayForRandomIndex = [];
let randomIndex;
function generateRandomIndex() {
  do {
    randomIndex = Math.round(filteredArray.length * Math.random());
  } while (arrayForRandomIndex.some(item => item === randomIndex));
  return randomIndex;
}

function randomMoviePicker() {
  for (let i = 0; i < 3; i++) {
    generateRandomIndex();
    arrayForRandomIndex.push(randomIndex);
    console.log(arrayForRandomIndex.toSorted((a, b) => a - b));
    const imageSrc =
      filteredArray[randomIndex].contributionQuestions.edges[0].node.entity
        .primaryImage.url;
    const imageAlt = filteredArray[randomIndex].originalTitleText.text;
    const movieContainer = `<div class="movie-container"><a class="poster-link" href="https://www.google.com/search?q=${filteredArray[
      randomIndex
    ].originalTitleText.text.replace(
      /[\s]/g,
      '+',
    )}+watch+online" target="blank"><img class="movie-image" src=${imageSrc} alt=${imageAlt} width="300" height="450"></a></div>`;
    container.insertAdjacentHTML('beforeend', movieContainer);
  }
}

document.body.prepend(header, main, footer);
header.prepend(logoLink);
main.prepend(container, generateButton);
randomMoviePicker();

generateButton.addEventListener('click', randomMoviePicker);

generateButton.addEventListener('click', () =>
  generateButton.scrollIntoView({ behavior: 'smooth' }),
);
