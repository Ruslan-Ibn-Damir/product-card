function logWeather (city, weather) {
  console.log(`Сейчас в ${city} температура - ${weather} градусов по Цельсию.`);
}
logWeather('Москва', 20);

const speedOfLight = 299792458;

function checkSpeed (speed) {
  if (speed > speedOfLight) {
    console.log('Сверхсветовая скорость');
  } else if (speed === speedOfLight) {
    console.log('Скорость света');
  } else {
    console.log('Субсветовая скорость');
  }
} 
  checkSpeed (300000000);
  checkSpeed (299792458);
  checkSpeed (200000000);

let productName = 'Iphone 16 Pro';
let productPrice = 1000;

function buyProduct (budget) {
  if (budget >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    const missingAmount = productPrice - budget;
    console.log(`Вам не хватает ${missingAmount}$, пополните баланс.`);
  }
}
buyProduct(630)
buyProduct(2500)

function showMessage (message) {
  console.log(message);
}
showMessage ('Hi!')

const myName = 'Ruslan'
const country = 'Kazakhstan'
let age = 23