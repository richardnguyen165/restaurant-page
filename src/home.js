import seafoodImage from './img/home/top-img/sea-food.png';
import breakfastImage from './img/home/catalogue/breakfast.png';
import drinksImage from './img/home/catalogue/drinks.png';
import mealsImage from './img/home/catalogue/meal.png';
import saladImage from './img/home/catalogue/salad.png';


export function renderHomeContent(contentDivElement) {
  contentDivElement.appendChild(renderHomeIntro());
  contentDivElement.appendChild(renderHomeAbout());
  contentDivElement.appendChild(renderHomeCatalogue());
  return contentDivElement;
}

export function renderHomeIntro() {
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

export function renderHomeAbout() {
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

export function renderHomeCatalogue() {
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