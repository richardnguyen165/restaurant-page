import "./css/reset.css"
import "./css/header.css"
import "./css/home/content.css"

import logo from "./img/navbar/logo.png";

import seafoodImage from './img/top-img/sea-food.png';
import bronxImage from './img/about/bronx.png';

import breakfastImage from './img/catalogue/breakfast.png';
import drinksImage from './img/catalogue/drinks.png';
import mealsImage from './img/catalogue/meal.png';
import saladImage from './img/catalogue/salad.png';

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
      const findHeader = document.querySelector("header");
      if (findHeader) {
        findHeader.remove();
      }

      this.contentDivElement.innerHTML = "";
      if (tab === "home") {
        this.#renderHeader();
        this.#renderHomeContent();
        this.prev = "home";
      }
      else if (tab === "menu") {
        this.#renderHeader("menu");
        this.prev = "menu";
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

        <button class = "nav-button ${tab === "nav" ? "chosen-tab" : ""} menu-button">
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
  }
  /* HEADER */

  /* CONTENT */

  #renderHomeContent() {
    this.contentDivElement.appendChild(this.#renderHomeIntro());
    this.contentDivElement.appendChild(this.#renderHomeAbout());
    this.contentDivElement.appendChild(this.#renderHomeCatalogue());
    // contentDivElement.appendChild(this.#renderReview());
    // contentDivElement.appendChild(this.#renderFooter());
    this.bodyRef.appendChild(this.contentDivElement);
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
        <button class = "intro-buttons">View Menu &rarr;</button>
        <button class = "intro-buttons">Contact Us &rarr;</button>
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
    `;
    catalogueDivElement.innerHTML = catalogueDivElementInnerHTML;
    return catalogueDivElement;
  }


  /* CONTENT */

}


new restaurant();