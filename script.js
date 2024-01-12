const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
  carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
  if (!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
  // If the carousel is at the beginning, scroll to the end
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
    carousel.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  // Clear existing timeout & start autoplay if mouse is not hovering over carousel
  clearTimeout(timeoutId);
  if (!wrapper.matches(":hover")) autoPlay();
}

/*const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
  // Autoplay the carousel after every 2500 ms
  timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();*/

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId_8));
/*wrapper.addEventListener("mouseleave", autoPlay);*/




const wrapper_8 = document.querySelector(".wrapper_8");
const carousel_8 = document.querySelector(".carousel_8");
const firstCard_8Width = carousel_8.querySelector(".card_8").offsetWidth;
const arrowBtns_8 = document.querySelectorAll(".wrapper_8 i");
const carousel_8Childrens = [...carousel_8.children];

let isDragging_8 = false, isAutoPlay_8 = true, startX_8, startScrollLeft_8, timeoutId_8;

// Get the number of cards that can fit in the carousel at once
let card_8PerView = Math.round(carousel_8.offsetWidth / firstCard_8Width);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carousel_8Childrens.slice(-card_8PerView).reverse().forEach(card_8 => {
  carousel_8.insertAdjacentHTML("afterbegin", card_8.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carousel_8Childrens.slice(0, card_8PerView).forEach(card_8 => {
  carousel_8.insertAdjacentHTML("beforeend", card_8.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel_8.classList.add("no-transition");
carousel_8.scrollLeft = carousel_8.offsetWidth;
carousel_8.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns_8.forEach(btn => {
  btn.addEventListener("click", () => {
    carousel_8.scrollLeft += btn.id == "left" ? -firstCard_8Width : firstCard_8Width;
  });
});

const dragStart_8 = (e) => {
  isDragging_8 = true;
  carousel_8.classList.add("dragging_8");
  // Records the initial cursor and scroll position of the carousel
  startX_8 = e.pageX;
  startScrollLeft_8 = carousel_8.scrollLeft;
}

const dragging_8 = (e) => {
  if (!isDragging_8) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel_8.scrollLeft = startScrollLeft_8 - (e.pageX - startX_8);
}

const dragStop_8 = () => {
  isDragging_8 = false;
  carousel_8.classList.remove("dragging_8");
}

const infiniteScroll_8 = () => {
  // If the carousel is at the beginning, scroll to the end
  if (carousel_8.scrollLeft === 0) {
    carousel_8.classList.add("no-transition");
    carousel_8.scrollLeft = carousel_8.scrollWidth - (2 * carousel_8.offsetWidth);
    carousel_8.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if (Math.ceil(carousel_8.scrollLeft) === carousel_8.scrollWidth - carousel_8.offsetWidth) {
    carousel_8.classList.add("no-transition");
    carousel_8.scrollLeft = carousel_8.offsetWidth;
    carousel_8.classList.remove("no-transition");
  }

  // Clear existing timeout & start autoplay if mouse is not hovering over carousel
  clearTimeout(timeoutId_8);
  if (!wrapper_8.matches(":hover")) autoPlay();
}

/*const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
  // Autoplay the carousel after every 2500 ms
  timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();*/

carousel_8.addEventListener("mousedown", dragStart_8);
carousel_8.addEventListener("mousemove", dragging_8);
document.addEventListener("mouseup", dragStop_8);
carousel_8.addEventListener("scroll", infiniteScroll_8);
wrapper_8.addEventListener("mouseenter", () => clearTimeout(timeoutId_8));
/*wrapper.addEventListener("mouseleave", autoPlay);*/





const wrapper_7 = document.querySelector(".wrapper_7");
const carousel_7 = document.querySelector(".carousel_7");
const firstCard_7Width = carousel_7.querySelector(".card_7").offsetWidth;
const arrowBtns_7 = document.querySelectorAll(".wrapper_7 i");
const carousel_7Childrens = [...carousel_7.children];

let isDragging_7 = false, isAutoPlay_7 = true, startX_7, startScrollLeft_7, timeoutId_7;

// Get the number of cards that can fit in the carousel at once
let card_7PerView = Math.round(carousel_7.offsetWidth / firstCard_7Width);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carousel_7Childrens.slice(-card_7PerView).reverse().forEach(card_7 => {
  carousel_7.insertAdjacentHTML("afterbegin", card_7.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carousel_7Childrens.slice(0, card_7PerView).forEach(card_7 => {
  carousel_7.insertAdjacentHTML("beforeend", card_7.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel_7.classList.add("no-transition");
carousel_7.scrollLeft = carousel_7.offsetWidth;
carousel_7.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns_7.forEach(btn => {
  btn.addEventListener("click", () => {
    carousel_7.scrollLeft += btn.id == "left" ? -firstCard_7Width : firstCard_7Width;
  });
});

const dragStart_7 = (e) => {
  isDragging_7 = true;
  carousel_7.classList.add("dragging_7");
  // Records the initial cursor and scroll position of the carousel
  startX_7 = e.pageX;
  startScrollLeft_7 = carousel_7.scrollLeft;
}

const dragging_7 = (e) => {
  if (!isDragging_7) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel_7.scrollLeft = startScrollLeft_7 - (e.pageX - startX_7);
}

const dragStop_7 = () => {
  isDragging_7 = false;
  carousel_7.classList.remove("dragging_7");
}

const infiniteScroll_7 = () => {
  // If the carousel is at the beginning, scroll to the end
  if (carousel_7.scrollLeft === 0) {
    carousel_7.classList.add("no-transition");
    carousel_7.scrollLeft = carousel_7.scrollWidth - (2 * carousel_7.offsetWidth);
    carousel_7.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if (Math.ceil(carousel_7.scrollLeft) === carousel_7.scrollWidth - carousel_7.offsetWidth) {
    carousel_7.classList.add("no-transition");
    carousel_7.scrollLeft = carousel_7.offsetWidth;
    carousel_7.classList.remove("no-transition");
  }

  // Clear existing timeout & start autoplay if mouse is not hovering over carousel
  clearTimeout(timeoutId_7);
  if (!wrapper_7.matches(":hover")) autoPlay();
}

/*const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
  // Autoplay the carousel after every 2500 ms
  timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();*/

carousel_7.addEventListener("mousedown", dragStart_7);
carousel_7.addEventListener("mousemove", dragging_7);
document.addEventListener("mouseup", dragStop_7);
carousel_7.addEventListener("scroll", infiniteScroll_7);
wrapper_7.addEventListener("mouseenter", () => clearTimeout(timeoutId_7));
/*wrapper.addEventListener("mouseleave", autoPlay);*/






function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Добавление плавности прокрутки
  });
}


function scrollToHeight100vh() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth' // Добавление плавности прокрутки
    });
}

function scrollToHeight200vh() {
  window.scrollTo({
    top: window.innerHeight * 2,
    behavior: 'smooth' // Добавление плавности прокрутки
  });
}

function scrollToHeight300vh() {
  window.scrollTo({
    top: window.innerHeight * 3,
    behavior: 'smooth' // Добавление плавности прокрутки
  });
}

function scrollToHeight400vh() {
  window.scrollTo({
    top: window.innerHeight * 4,
    behavior: 'smooth' // Добавление плавности прокрутки
  });
}

function scrollToHeight600vh() {
  window.scrollTo({
    top: window.innerHeight * 6,
    behavior: 'smooth' // Добавление плавности прокрутки
  });
}
  
function scrollToHeight750vh() {
  // Проверяем, соответствует ли ширина экрана условиям медиа-запросов
  var mediaQuery1200 = window.matchMedia("(min-width: 1200px)");
  var mediaQuery992To1119 = window.matchMedia("(min-width: 992px) and (max-width: 1119px)");
  var mediaQuery768To991 = window.matchMedia("(min-width: 768px) and (max-width: 991px)");
  var mediaQuery768To991 = window.matchMedia("(min-width: 576px) and (max-width: 767px)");
  var mediaQuery768To991 = window.matchMedia("(max-width: 575px)");

  
  if (mediaQuery1200.matches) {
    // Выполняем код для ширины экрана (min-width: 1200px)
    window.scrollTo({
      top: window.innerHeight * 7.2,
      behavior: 'smooth'
    });
  } else if (mediaQuery992To1119.matches) {
    // Выполняем код для ширины экрана (min-width: 992px) and (max-width: 1119px)
    window.scrollTo({
      top: window.innerHeight * 7,
      behavior: 'smooth'
    });
  } else if (mediaQuery768To991.matches) {
    // Выполняем код для ширины экрана (min-width: 992px) and (max-width: 1119px)
    window.scrollTo({
      top: window.innerHeight * 7,
      behavior: 'smooth'
    });
  }
}

function scrollToHeight850vh() {
  window.scrollTo({
    top: window.innerHeight * 8.2,
    behavior: 'smooth' // Добавление плавности прокрутки
  });
}