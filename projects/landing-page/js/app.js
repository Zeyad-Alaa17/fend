/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */


/**
 * End Global Variables
 * Start Helper Functions
 *
 */


/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// Build navigation bar
function buildNav() {
    let el = document.getElementById("navbar__list");
    let list = document.querySelectorAll('[data-nav]');   //Get all elements with data-nav attribute


    //Add sections to navigation bar
    for (const section of list) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.className = "menu__link"
        a.href = "#" + section.id;              //Add section id to anchor to link sections with navigation bar
        a.innerText = section.getAttribute('data-nav');
        li.appendChild(a);
        el.appendChild(li)
    }
}


// Add class 'active' to section when near top of viewport
function setActive() {

    setTimeout(this, 0);
    let list = document.querySelectorAll('[data-nav]');
    let heights = [];

    for (const section of list) {       //Get distance from viewport for each section
        heights.push(section.getBoundingClientRect().top);
    }
    let min = Math.min(...heights.map(Math.abs));  //Get minimum absolute distance
    for (const section of list) {
        section.classList.toggle("active", section.getBoundingClientRect().top === min)     //Toggle section as active if closest to viewport
    }
}


/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
document.addEventListener('DOMContentLoaded', buildNav);


// Set sections as active
document.addEventListener("scroll", function () {
    const backToTopButton = document.getElementById("back-to-top")
    if (document.body.scrollTop > 500) {
        backToTopButton.style.opacity = "100%";
    } else {
        backToTopButton.style.opacity = "0%";
    }

    setActive()
})
