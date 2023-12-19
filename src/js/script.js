let hamburgerBtnOpen = document.querySelector('.js-ham-btn-open');
hamburgerBtnOpen.addEventListener('click', hamburgerOpener);

let hamburgerBtnClose = document.querySelector('.js-ham-btn-close');
hamburgerBtnClose.addEventListener('click', hamburgerCloser);


function hamburgerOpener() {
  let hamburgerIsOpen = document.querySelector('.js-ham');
  let pageIsOpen = document.querySelectorAll('.js-page');
  hamburgerIsOpen.classList.add('show');
  hamburgerIsOpen.classList.remove('hide');
  pageIsOpen.forEach(function(page) {
    page.classList.remove('show');
    page.classList.add('hide');
  })
};

function hamburgerCloser() {
  let hamburgerIsOpen = document.querySelector('.js-ham');
  let pageIsOpen = document.querySelectorAll('.active');
  hamburgerIsOpen.classList.add('hide');
  hamburgerIsOpen.classList.remove('show');
  pageIsOpen.forEach(function(page) {
    page.classList.remove('hide');
    page.classList.add('show');
  })
};