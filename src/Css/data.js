import mcUrl from "./../img/200x300mC.jpg";
import sweetGreen from "./../img/sweetGreen.jpg";
import starBucks from "./../img/starbucks_092623224.jpg";
const data = [
  {
    name: "McDonalds",
    title: "American-Fast Food-Burgers",
    time: "20-30 min",
    price: "$5.99 Delivery Fee",
    url: mcUrl,
  },
  {
    name: "Sweetgreen",
    title: "Healthly-Salads",
    time: "30-45 min",
    price: "$4.99 Delivery Fee",
    url: sweetGreen,
  },
  {
    name: "Starbucks",
    title: "cafe - Breakfast and Brunch",
    time: "10-20 min",
    price: "$3.99 Delivery Fee",
    url: starBucks,
  },
  {
    name: "McDonalds",
    title: "American-Fast Food-Burgers",
    time: "20-30 min",
    price: "$5.99 Delivery Fee",
    url: mcUrl,
  },
  {
    name: "Starbucks",
    title: "cafe - Breakfast and Brunch",
    time: "10-20 min",
    price: "$3.99 Delivery Fee",
    url: starBucks,
  },
  {
    name: "Sweetgreen",
    title: "Healthly-Salads",
    time: "30-45 min",
    price: "$4.99 Delivery Fee",
    url: sweetGreen,
  },
];
const checkList = [
  { name: "Pepperoni 1$", check: false },
  { name: "Soussage 1$", check: false },
  { name: "Canadian Bacon 1$", check: false },
  { name: "Onions 1$", check: false },
  { name: "Green Pepper 1$", check: false },
  { name: "Spicy sausages 1$", check: false },
  { name: "Diced Tomatos 1$", check: false },
  { name: "Black Olivies 1$", check: false },
  { name: "Pineapple 1$", check: false },
  { name: "Extra Cheese 1$", check: false },
];
let aray = [
  { size: "SMALL   10$", price: 10 },
  { size: "MEDİUM   14$", price: 14 },
  { size: "LARGE   17$", price: 17 },
];
const radioArray = [
  { name: "original Red", check: false },
  { name: "Garlic Ranch", check: false },
  { name: "BBQ Source", check: false },
  { name: "Sprach Aifredo", check: false },
];

export { data, checkList, aray, radioArray };
