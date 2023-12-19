// Hamburger Open
let hamBtnOpen = document.querySelector('.js-ham-btn-open');
hamBtnOpen.addEventListener('click', hamOpen);

function hamOpen() {
  let hamIsOpen = document.querySelector('.hamburger');
  let headerVisible = document.querySelector('.js-header');
  hamIsOpen.classList.remove('hidden');
  headerVisible.classList.remove('visible');
  headerVisible.classList.add('hidden');
};

// Hamburger Close
let hamBtnClose = document.querySelector('.js-ham-btn-close');
hamBtnClose.addEventListener('click', hamClose);

function hamClose() {
  let hamIsClose = document.querySelector('.hamburger');
  let headerVisible = document.querySelector('.js-header');
  hamIsClose.classList.add('hidden');
  headerVisible.classList.add('visible');
  headerVisible.classList.remove('hidden');
};

// Page Loader
function pageLoader(value) {
  let pageOpen = document.querySelector('.' + value);
  let pageReset = document.querySelectorAll('.js-page');
  let headerVisible = document.querySelector('.js-header');
  pageReset.forEach(function(page) {
    page.classList.remove('visible');
    page.classList.add('hidden');
  });
  pageOpen.classList.remove('hidden');
  pageOpen.classList.add('visible');
  headerVisible.classList.add('visible');
  headerVisible.classList.remove('hidden');
};