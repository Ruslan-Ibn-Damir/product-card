import { products } from "./products.js";

const productsList = document.querySelector(".products__list");
const productTemplate = document.getElementById("product-template");

const productsMap = products.reduce((acc, product) => {
  acc[product.name] = product.purpose;

  return acc;
}, {});

console.log(productsMap);

function getCardsCount() {
  const input = prompt("Сколько карточек отобразить? От 1 до 5");

  if (input === null) {
    return products.length;
  }

  const count = Number(input);

  if (!Number.isInteger(count) || count < 1 || count > 5) {
    alert("Введите целое число от 1 до 5.");
    return getCardsCount();
  }

  return count;
}

function renderProducts(productsArray, limit) {
  productsList.innerHTML = "";

  const displayedProducts = productsArray.slice(0, limit);

  displayedProducts.forEach((product) => {
    const clone = productTemplate.content.cloneNode(true);

    const image = clone.querySelector(".card__img");
    image.src = product.image;
    image.alt = product.alt;

    clone.querySelector(".card__desc").textContent = product.desc;
    clone.querySelector(".card__name").textContent = product.name;
    clone.querySelector(".card__purpose").textContent = product.purpose;
    clone.querySelector(".price__value").textContent = product.price;

    const compoundList = clone.querySelector(".card__compound");

    product.compound.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.classList.add("card__component");
      listItem.textContent = item;
      compoundList.append(listItem);
    });

    productsList.append(clone);
  });
}

const cardsCount = getCardsCount();

renderProducts(products, cardsCount);