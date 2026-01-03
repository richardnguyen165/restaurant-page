import render from ".";
import logo from "./img/navbar/logo.png";

export function renderHeader(tab = "home") {

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
  return headerElement;
};

export default renderHeader;