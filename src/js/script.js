// Hamburger Open
let hamBtnOpen = document.querySelector('.js-ham-btn-open');
hamBtnOpen.addEventListener('click', hamOpen);

function hamOpen() {
  let hamIsOpen = document.querySelector('.hamburger');
  hamIsOpen.classList.remove('hidden');
  headerInvisible();
};

// Header Invisible
function headerInvisible() {
  let headerInvisible = document.querySelector('.js-header');
  headerInvisible.classList.add('hidden');
  headerInvisible.classList.remove('visible');
};

// Hamburger Close
let hamBtnClose = document.querySelector('.js-ham-btn-close');
hamBtnClose.addEventListener('click', hamClose);

function hamClose() {
  let hamIsClose = document.querySelector('.hamburger');
  hamIsClose.classList.add('hidden');
  headerVisible();
};

// Header Visible
function headerVisible() {
  let headerVisible = document.querySelector('.js-header');
  headerVisible.classList.add('visible');
  headerVisible.classList.remove('hidden');
};

// Page Loader
function pageLoader(value) {
  let pageOpen = document.querySelector('.' + value);
  let pageReset = document.querySelectorAll('.js-page');
  pageReset.forEach(function(page) {
    page.classList.remove('visible');
    page.classList.add('hidden');
  });
  pageOpen.classList.remove('hidden');
  pageOpen.classList.add('visible');
  headerVisible();
};