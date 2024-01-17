// Hamburger Open
let hamBtnOpen = document.querySelector('.js-ham-btn-open');
hamBtnOpen.addEventListener('click', hamOpen);
function hamOpen() {
  let hamIsOpen = document.querySelector('.js-ham');
  hamIsOpen.classList.add('wave-in');
  hamIsOpen.classList.remove('hidden');
};

// Hamburger Close
let hamBtnClose = document.querySelector('.js-ham-btn-close');
hamBtnClose.addEventListener('click', hamClose);
function hamClose() {
  let hamIsClose = document.querySelector('.js-ham');
  hamIsClose.classList.add('wave-out');
  hamIsClose.classList.remove('wave-in');
  setTimeout(timer, 300);
    function timer() {
      hamIsClose.classList.add('hidden');
      hamIsClose.classList.remove('wave-out');
    }
};

// Page Loader
function pageLoader(value) {
  let pageOpen = document.querySelector('.' + value);
  let pageReset = document.querySelectorAll('.js-page');
  pageReset.forEach(function(page) {
    hamClose();
    page.classList.remove('visible');
    page.classList.add('hidden');
  });
  pageOpen.classList.remove('hidden');
  pageOpen.classList.add('visible');
};