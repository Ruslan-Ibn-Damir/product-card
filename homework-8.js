// 3 Личные данные пользователя
const user = {
  name: "Руслан",
  surname: "Каюмов",
  age: "23",
  email: "ruslansmt111@gmail.com",
  phone: "8-707-977-03-49",
  address: "Казахстан, г. Шымкент",
}

// 4 Информация о транспортном средстве
const vehicle = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  color: "Серебристый",
  modelNumber: "XV70",
}
const ownerVehicle = user

// 5 функция на проверку наличия максимальной скорости в объекте транспортного средства
function addMaxSpeed(vehicle) {
  if ('maxSpeed' in vehicle) {
    return;
  }
  vehicle.maxSpeed = 220;
}

// 6 функция с выводом свойства объекта в консоль
function logVehicleProperty(car, property) {
  console.log(car[property]);
}
logVehicleProperty(vehicle, 'make');

// 7 Массив
const fruits = ['Яблоко', 'Банан', 'Апельсин',];

// 8 Массив объектов-игр
const games = [
  { title: 'The Witcher 3', developer: 'CD Projekt Red', releaseYear: 2015,},
  { title: 'GTA V', developer: 'Rockstar Games', releaseYear: 2013,},
  { title: 'Cyberpunk 2077', developer: 'CD Projekt Red', releaseYear: 2020,}
];

games.push({
  title: 'Red Dead Redemption 2',
  developer: 'Rockstar Games',
  releaseYear: 2018,
});

// 9 объединение массивов
const mobileGames = [
  { title: 'PUBG Mobile', developer: 'Tencent', releaseYear: 2018 },
  { title: 'Genshin Impact', developer: 'miHoYo', releaseYear: 2020 }
];
const allGames = [...games, ...mobileGames];
console.log(allGames);

// 10 функция на фильтрацию игр по году выпуска
function checkGamesByYear(gamesArray) {
  return gamesArray.map((game) => ({
    ...game,
    isRare: game.releaseYear > 2000
  }));
}
console.log(checkGamesByYear(allGames));