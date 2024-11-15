"use strict";

//Hämta element från HTML
const hamburgerEl = document.querySelector(".hamburger");
const navMenuEl = document.querySelector(".nav-menu");
const navMobile = document.querySelector(".nav-mobil")

//Eventlistener för toggla menyn
hamburgerEl.addEventListener("click", toggleMenu);


//Aktivera klass för hamburgermenyn
function toggleMenu() {
    hamburgerEl.classList.toggle("active");
    navMenuEl.classList.toggle("active");
    navMobile.classList.toggle("active");

    // Toggle meny text
    const menuTextEl = document.querySelector(".menu-text");
    if (menuTextEl.innerHTML === "Meny") {
        menuTextEl.innerHTML = "Stäng";
    } else {
        menuTextEl.innerHTML = "Meny";
    }

    //Kalla på funktion för klick på länk
    closeDropDown();
}


//vid klick på länk ska dropdown meny stängas
function closeDropDown() {
    const linksEl = document.querySelectorAll(".nav-link");

    linksEl.forEach((link) => {
        link.addEventListener("click", toggleMenu);
    })
}