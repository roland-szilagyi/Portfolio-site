// Hamburger toggle
let hamburgerBtn = document.querySelector('.js-ham-btn');
hamburgerBtn.addEventListener('click', hamburgerToggle);

function hamburgerToggle() {
  let links = document.querySelector('.js-ham-links');
  if ( links.classList.contains('hide') ) {
    links.classList.remove('hide');
    links.classList.add('show');
  }
  else if ( links.classList.contains('show') ) {
    links.classList.remove('show');
    links.classList.add('hide');
  }
};