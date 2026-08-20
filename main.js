const productCard = document.querySelector('.card');
const changeColorCard1Btn = document.querySelector('#change-color-card1-button');

console.log('Product Card:', productCard);
console.log('Change Color Button:', changeColorCard1Btn);

changeColorCard1Btn.addEventListener('click', () => {
  productCard.style.backgroundColor = 'lightblue';
});


const productCards = document.querySelectorAll('.card');
const changeColorCardsBtn = document.querySelector('#change-color-cards-all-button');

console.log('All Product Cards:', productCards);
console.log('Change Color Cards All Button:', changeColorCardsBtn);

changeColorCardsBtn.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = 'lightgreen');
});

const openGoogleBtn = document.querySelector('#open-google-button');

console.log('Open Google Button:', openGoogleBtn);

openGoogleBtn.addEventListener('click', () => {
  window.open('https://www.google.com');
});

const noticeBtn = document.querySelector('#notice-button');

console.log('Notice Button:', noticeBtn);

noticeBtn.addEventListener('click',openGoogle);

function openGoogle() {
  const answer = confirm('Вы уверены, что хотите открыть страницу Google.com?');
  if (answer === true) {
    window.open('https://www.google.com');
  }
}

const outputConsoleLogBtn = document.querySelector('#output-console-log-button');

outputConsoleLogBtn.addEventListener('click',() => {
  outputConsoleLog('Это сообщение в консоли!');
});

function outputConsoleLog(message) {
  alert('Это сообщение ввиде уведомления.');
  console.log(message);
}

const outputTitleConsoleBtn = document.querySelector('.products__title');

console.log('Output Title Console Button:', outputTitleConsoleBtn);
outputTitleConsoleBtn.addEventListener('mouseover',function() {
  console.log(outputTitleConsoleBtn.textContent);
})

const buttonColorChange = document.querySelector('.button-color-change');

buttonColorChange.addEventListener('click', () => {
  buttonColorChange.classList.toggle('green-button');
});