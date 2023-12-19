// Hamburger toggle
let hamburgerBtnOpen = document.querySelector('.js-ham-btn-open');
hamburgerBtnOpen.addEventListener('click', hamburgerOpener);

let hamburgerBtnClose = document.querySelector('.js-ham-btn-close');
hamburgerBtnClose.addEventListener('click', hamburgerCloser); 

function hamburgerOpener() {
  let links = document.querySelector('.js-ham-links');
    links.classList.remove('hide');
    links.classList.add('show');
};
    
function hamburgerCloser() {
  let links = document.querySelector('.js-ham-links');
    links.classList.remove('show');
    links.classList.add('hide');
};