// Have to import links manually

import englishBreakfastImg from "../img/menu/breakfast/english-breakfast.png";
import newYorkBagelImg from "../img/menu/breakfast/new-york-bagel.png"
import pastramiEggsImg from "../img/menu/breakfast/pastrami-and-eggs.png";

import lemonadeImg from "../img/menu/drinks/lemonade.png";
import orangeJuiceImg from "../img/menu/drinks/orange-juice.png";
import martiniImg from "../img/menu/drinks/martini.png";

import cornedBeefImg from "../img/menu/lunch-and-dinner/corned-beef.png";
import hotDogImg from "../img/menu/lunch-and-dinner/new-york-hot-dog.png";
import clamChowderImg from "../img/menu/lunch-and-dinner/odin-clam-chowder.png";

import caesarSaladImg from "../img/menu/salads/caesar-salad.png";
import fruitSaladImg from "../img/menu/salads/fruit-salad.png";
import italianSaladImg from "../img/menu/salads/italian-salad.png";

export const BREAKFAST_OBJECTS = [
  {
    name: "English Breakfast",
    price: "$15",
    img_link: englishBreakfastImg
  },
  {
    name: "New York Bagel",
    price: "$15",
    img_link: newYorkBagelImg
  },
  {
    name: "Pastrami and Eggs",
    price: "$15",
    img_link: pastramiEggsImg
  }
];

export const DRINK_OBJECTS = [
  {
    name: "Lemonade",
    price: "$5",
    img_link: lemonadeImg
  },
  {
    name: "Orange Juice",
    price: "$5",
    img_link: orangeJuiceImg
  },
  {
    name: "Martini",
    price: "$7",
    img_link: martiniImg
  }
];

export const LUNCH_DINNER_OBJECTS = [
  {
    name: "Corned Beef",
    price: "$10",
    img_link: cornedBeefImg
  },
  {
    name: "New York Hot Dog",
    price: "$10",
    img_link: hotDogImg
  },
  {
    name: "Odin Clam Chowder",
    price: "$10",
    img_link: clamChowderImg
  }
];

export const SALAD_OBJECTS = [
  {
    name: "Caesar Salad",
    price: "$8",
    img_link: caesarSaladImg
  },
  {
    name: "Fruit Salad",
    price: "$8",
    img_link: fruitSaladImg
  },
  {
    name: "Italian Salad",
    price: "$8",
    img_link: italianSaladImg
  },
];
