import { BREAKFAST_OBJECTS, DRINK_OBJECTS, LUNCH_DINNER_OBJECTS, SALAD_OBJECTS } from "./libs/menu.js";

/* MENU */
export function renderMenuPage() {
  const menuPageDivElement = document.createElement('div');
  menuPageDivElement.className = "menu-section";
  const menuPageDivElementInnerHTML =
    `
        <div class = "menu-breakfast menu-food-section">
          <p class = "menu-food-title">BREAKFAST</p>
          <div class = "food-object-container">
            ${renderFoodItems("breakfast")}
          </div>
        </div>

        <div class = "menu-lunch-dinner menu-food-section">
          <p class = "menu-food-title">LUNCH & DINNER</p>
          <div class = "food-object-container">
            ${renderFoodItems("lunch-dinner")}
          </div>
        </div>

        <div class = "menu-salads menu-food-section">
          <p class = "menu-food-title">SALADS</p>
          <div class = "food-object-container">
            ${renderFoodItems("salads")}
          </div>
        </div>

        <div class = "menu-drinks menu-food-section">
          <p class = "menu-food-title">DRINKS</p>
          <div class = "food-object-container">
            ${renderFoodItems("drinks")}
          </div>
        </div>
    `;
  menuPageDivElement.innerHTML = menuPageDivElementInnerHTML;
  return menuPageDivElement;
}

export function renderFoodItems(typeOfFood) {
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