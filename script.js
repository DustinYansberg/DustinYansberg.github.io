function OpenResume() {
  window.open("/assets/PDF/DUSTIN.YANSBERG.Resume.pdf", "_blank");
}

// when the user click on the menu button, open it in a drop down
function ToggleMenu() {
  document.getElementById("menuDropdown").classList.toggle("show");
  document.getElementById("dropbtn").classList.toggle("bg-a");
}

// When the mouse hovers over a project element
function ProjectMouseOver(elem) {
  elem.classList.toggle("show-flex");
}

// Dark mode toggle
function ToggleDarkMode() {
  let elements = document.querySelectorAll(
    "div",
    "a",
    "img",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p",
    "ul",
    "li",
    "button",
    "input"
  );
  document.body.classList.toggle("dark-mode1");
  elements.forEach((element) => {
    if (element.classList.contains("block-emphasis")) {
      console.log(element);
      element.classList.toggle("dark-mode2");
    } else {
      element.classList.toggle("dark-mode1");
    }
  });

  let element = document.getElementById("dropbtn");
  // console.log(element.src);
  // console.log(element.src[element.src.length - 5]);
  element.src[element.src.length - 5] == "t"
    ? (element.src = "./assets/Icons/menu-drk.png")
    : (element.src = "./assets/Icons/menu-light.png");
}

const scrollToId = (elemId) => document.getElementById(elemId).scrollIntoView();

// CAROUSEL STUFF

const track = document.querySelector(".carousel__track");
