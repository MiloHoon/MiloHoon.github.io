// Target all elements to save to constants
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
var allpages = document.querySelectorAll(".page");

// Show page1 initially
show(1);

// Function to hide all pages
function hideall() {
    for (let onepage of allpages) { // Go through all subtopic pages
        onepage.style.display = "none"; // Hide it
    }
}

// Function to show selected page no
function show(pgno) { 
    hideall();
    // Select the page based on the parameter passed in
    let onepage = document.querySelector("#page" + pgno);
    // Show the page
    onepage.style.display = "block";
}

/* Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function */
page1btn.addEventListener("click", function () {
    show(1);
});
page2btn.addEventListener("click", function () {
    show(2);
});
page3btn.addEventListener("click", function () {
    show(3);
});

/* For Hamburger Icon */
const hamBtn = document.querySelector("#hamIcon");
const menuItemsList = document.querySelector(".menuItems");

// Toggle the active class for the menu items list
hamBtn.addEventListener("click", function () {
    toggleMenus();
    hamBtn.classList.toggle("rotated");
});

// Move the toggleMenus() function to the global scope
function toggleMenus() {
    menuItemsList.classList.toggle("active");
}

/* For Image Hiding */
// Get references to all trick image and text containers
const trickImageContainers = document.querySelectorAll(".tricksImage");

// Add click event listener to each trick image container
trickImageContainers.forEach((trickImage, index) => {
    trickImage.addEventListener("click", function () {
        toggleTrickText(index);
    });
});

// Function to toggle trick text container visibility
function toggleTrickText(index) {
    const trickText = document.getElementById(`trickTextContainer${index + 1}`);
    trickText.classList.toggle("hidden");
}