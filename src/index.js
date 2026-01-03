import "./css/reset/reset.css"
import "./css/header/header.css"
import "./css/home/content.css"
import "./css/contact/contact.css"
import "./css/menu/menu.css"

import renderHeader from "./header";
import { renderHomeContent } from "./home";
import { renderMenuPage } from "./menu";
import renderContactPage from "./contact";


const bodyRef = document.body;
const contentDivElement = document.createElement('div');
contentDivElement.className = "content";

export function render(tab = "home") {
  const prev = localStorage.getItem("prev") || "";
  if (prev !== tab) {
    bodyRef.innerHTML = "";
    contentDivElement.innerHTML = "";
    if (tab === "home") {
      bodyRef.appendChild(renderHeader());
      connectHeader();
      bodyRef.appendChild(renderHomeContent(contentDivElement));
      localStorage.setItem("prev", "home");

      const innerMenuButton = document.querySelector(".inner-menu-button");
      innerMenuButton.addEventListener("click", () => {
        render("menu");
      });

      const contactMenuButton = document.querySelector(".inner-contact-button");
      contactMenuButton.addEventListener("click", () => {
        render("contact");
      });
    }
    else if (tab === "menu") {
      bodyRef.appendChild(renderHeader("menu"));
      connectHeader();
      bodyRef.appendChild(contentDivElement.appendChild(renderMenuPage()));
      localStorage.setItem("prev", "menu");
    }
    else if (tab === "contact") {
      bodyRef.appendChild(renderHeader("contact"));
      connectHeader();
      bodyRef.appendChild(contentDivElement.appendChild(renderContactPage()));
      localStorage.setItem("prev", "contact");
    }
  }
}

function connectHeader(){
  const homeBtn = document.querySelector(".home-button");
  homeBtn.addEventListener("click", () => {
    render();
  });

  const menuBtn = document.querySelector(".menu-button");
  menuBtn.addEventListener("click", () => {
    render("menu");
  });

  const contactBtn = document.querySelector(".contact-button");
  contactBtn.addEventListener("click", () => {
    render("contact");
  });
}

render();

export default render;