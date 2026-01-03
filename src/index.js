import "./css/reset.css"
import "./css/header.css"
import "./css/home/content.css"
import "./css/contact/contact.css"
import "./css/menu/menu.css"

import logo from "./img/navbar/logo.png";

import seafoodImage from './img/home/top-img/sea-food.png';

import breakfastImage from './img/home/catalogue/breakfast.png';
import drinksImage from './img/home/catalogue/drinks.png';
import mealsImage from './img/home/catalogue/meal.png';
import saladImage from './img/home/catalogue/salad.png';

import { BREAKFAST_OBJECTS, DRINK_OBJECTS, LUNCH_DINNER_OBJECTS, SALAD_OBJECTS } from './libs/menu.js'

class restaurant {
  bodyRef = document.body;
  contentDivElement = document.createElement('div');
  prev = "";

  constructor() {
    this.contentDivElement.className = "content";
    this.#render();
  }

  #render(tab = "home") {
    if (this.prev !== tab) {
      this.bodyRef.innerHTML = "";
      this.contentDivElement.innerHTML = "";
      if (tab === "home") {
        this.#renderHeader();
        this.#renderHomeContent();

        this.prev = "home";
      }
      else if (tab === "menu") {
        this.#renderHeader("menu");
        this.bodyRef.appendChild(this.contentDivElement.appendChild(this.#renderMenuPage()));
        this.prev = "menu";
      }
      else if (tab === "contact") {
        this.#renderHeader("contact");
        this.bodyRef.appendChild(this.contentDivElement.appendChild(this.#renderContactPage()));
        this.prev = "contact";
      }
    }
  }

  /* HEADER */
  #renderHeader(tab = "home") {

    const headerElement = document.createElement('header');
    const navElement =
      document.createElement('nav');

    const navInnerHTML =
      `
      <img src ="${logo}" class = "logo"> 
      </img>

      <div class="header-buttons">
        <button class = "nav-button ${tab === "home" ? "chosen-tab" : ""} home-button">
          Home
        </button>

        <button class = "nav-button ${tab === "menu" ? "chosen-tab" : ""} menu-button">
          Menu
        </button>

        <button class = "nav-button ${tab === "contact" ? "chosen-tab" : ""} contact-button">
          Contact
        </button>
      <div>
    `;

    navElement.innerHTML = navInnerHTML;
    headerElement.appendChild(navElement);
    this.bodyRef.appendChild(headerElement);

    const homeBtn = document.querySelector(".home-button");
    homeBtn.addEventListener("click", () => {
      this.#render();
    });

    const menuBtn = document.querySelector(".menu-button");
    menuBtn.addEventListener("click", () => {
      this.#render("menu");
    });

    const contactBtn = document.querySelector(".contact-button");
    contactBtn.addEventListener("click", () => {
      this.#render("contact");
    });
  }
  /* HEADER */

  /* CONTENT */

  #renderHomeContent() {
    this.contentDivElement.appendChild(this.#renderHomeIntro());
    this.contentDivElement.appendChild(this.#renderHomeAbout());
    this.contentDivElement.appendChild(this.#renderHomeCatalogue());
    this.bodyRef.appendChild(this.contentDivElement);

    const innterMenuButton = document.querySelector(".inner-menu-button");
    innterMenuButton.addEventListener("click", () => {
      this.#render("menu");
    });

    const contactMenuButton = document.querySelector(".inner-contact-button");
    contactMenuButton.addEventListener("click", () => {
      this.#render("contact");
    });
  }

  #renderHomeIntro() {
    const introDivElement = document.createElement('div');
    introDivElement.className = "intro-section"
    const introDivElementInnerHTML =
      `
    <div class = "intro-description">
      <p class = "intro-header">Welcome to the Odin Food Shack</p>
      <p>Established in 1912 - Family Run, Fresh Classic Food</p>
      <div>
        <button class = "intro-buttons view-menu inner-menu-button">View Menu &rarr;</button>
        <button class = "intro-buttons contact-us inner-contact-button">Contact Us &rarr;</button>
      </div>
    </div>
    <img src = "${seafoodImage}" class ="intro-image"/>
    `;
    introDivElement.innerHTML = introDivElementInnerHTML;
    return introDivElement;
  }

  #renderHomeAbout() {
    const aboutDivElement = document.createElement('div');
    aboutDivElement.className = "about-section"
    const aboutDivElementInnerHTML =
      `
      <div class="about-section-inner">
        <h1>About Us</h1>
        <div class ="about-desc">
        The Odin Food Shack is a family-owned restaurant. Founded in 1912 by a Norwegian couple, we have been proudly serving the Bronx ever since, serving dishes such as lobster to our specialty the Odin Clam Chowder.
        </div>
      </div>
    `;
    aboutDivElement.innerHTML = aboutDivElementInnerHTML;
    return aboutDivElement;
  }

  #renderHomeCatalogue() {
    const catalogueDivElement = document.createElement('div');
    catalogueDivElement.className = "catalogue-section";
    const catalogueDivElementInnerHTML =
      `
    <div class = "catalogue-section-inner">
      <div class = "catalogue-card">
        <img src = "${breakfastImage}" />
        <p class = "category">
          Breakfast
        </p>
      </div>

      <div class = "catalogue-card">
        <img src = "${drinksImage}"/>
        <p class = "category">
          Drinks
        </p>
      </div>

      <div class = "catalogue-card">
        <img src = "${mealsImage}" />
        <p class = "category">
          Lunch & Dinner
        </p>
      </div>

      <div class = "catalogue-card">
        <img src = "${saladImage}" />
        <p class = "category">
          Salads
        </p>
      </div>
    </div>
    `;
    catalogueDivElement.innerHTML = catalogueDivElementInnerHTML;
    return catalogueDivElement;
  }


  /* CONTACT */

  #renderContactPage() {
    const contactPageElement = document.createElement('div');
    contactPageElement.className = "contact-page-section";
    const contactPageElementInnerHTML =
      `
    <div class = "contact-card">
      <div class = "contact">
        <h1>
        CONTACT/VISIT US AT:
        </h1>
        <p>
        Address: 1234 Bronx. St.
        </p>
        <p>
        Phone Number: (123)-456-7890
        </p>
        <p>
        Owner Names: John and Jane Doe
        </p>
        <p>
        Email: odinshack123@gmail.com
        </p>
      </div>

      <div class = "special-credit">
        <h1>
        SPECIAL CREDIT
        </h1>
        <p>
        Credits to:
        Richard Nguyen, our fantastic web developer!
        (Contact him at his "Git" or whatever its called: <a href="https://github.com/richardnguyen165">https://github.com/richardnguyen165</a>)
        </p>
      </div>
    </div>
    `;
    contactPageElement.innerHTML = contactPageElementInnerHTML;
    return contactPageElement;
  }

  /* MENU */
  #renderMenuPage() {
    const menuPageDivElement = document.createElement('div');
    menuPageDivElement.className = "menu-section";
    const menuPageDivElementInnerHTML =
      `
        <div class = "menu-breakfast menu-food-section">
          <p class = "menu-food-title">BREAKFAST</p>
          <div class = "food-object-container">
            ${this.#renderFoodItems("breakfast")}
          </div>
        </div>

        <div class = "menu-lunch-dinner menu-food-section">
          <p class = "menu-food-title">LUNCH & DINNER</p>
          <div class = "food-object-container">
            ${this.#renderFoodItems("lunch-dinner")}
          </div>
        </div>

        <div class = "menu-salads menu-food-section">
          <p class = "menu-food-title">SALADS</p>
          <div class = "food-object-container">
            ${this.#renderFoodItems("salads")}
          </div>
        </div>

        <div class = "menu-drinks menu-food-section">
          <p class = "menu-food-title">DRINKS</p>
          <div class = "food-object-container">
            ${this.#renderFoodItems("drinks")}
          </div>
        </div>
    `;
    menuPageDivElement.innerHTML = menuPageDivElementInnerHTML;
    return menuPageDivElement;
  }

  #renderFoodItems(typeOfFood) {
    let foodElements = "";
    let FOOD_OBJECTS;
    if (typeOfFood === "breakfast") {
      FOOD_OBJECTS = BREAKFAST_OBJECTS;
    }
    else if (typeOfFood === "drinks") {
      FOOD_OBJECTS = DRINK_OBJECTS;
    }
    else if (typeOfFood === "lunch-dinner") {
      FOOD_OBJECTS = LUNCH_DINNER_OBJECTS;
    }
    else {
      FOOD_OBJECTS = SALAD_OBJECTS;
    }


    for (const food of FOOD_OBJECTS) {
      foodElements +=
        `
      <div class = "food-object">
        <img src = ${food.img_link} />
        <p>${food.name}</p>
        <p>${food.price}</p>
      </div>
      `
    }
    return foodElements;
  }
}


new restaurant();