// Hamburger toggle
let hamburgerBtnOpen = document.querySelector('.js-ham-btn-open');
hamburgerBtnOpen.addEventListener('click', hamburgerOpener);

let hamburgerBtnClose = document.querySelector('.js-ham-btn-close');
hamburgerBtnClose.addEventListener('click', hamburgerCloser); 

// Megnyitja a hamburgert
function hamburgerOpener() {
  let hamburger = document.querySelector('.js-ham');
    hamburger.classList.remove('hide');
    hamburger.classList.add('show');
    PagesCloser();
};

// Eltünteti a hamburgert
function hamburgerCloser() {
  let hamburger = document.querySelector('.js-ham');
    hamburger.classList.remove('show');
    hamburger.classList.add('hide');
    PagesOpener();
};

// Eltünteti az összes oldalt ha a hamburgert megnyitjuk
function PagesCloser() {
  let pages = document.querySelectorAll('.js-page');
    pages.forEach(function(page) {
    page.classList.remove('show');
    page.classList.add('hide');
  });
};

// Visszahozza az összes oldalt ha a hamburgert bezárjuk
function PagesOpener() {
  let pages = document.querySelectorAll('.js-page');
    pages.forEach(function(page) {
    page.classList.remove('hide');
    page.classList.add('show');
  });
};