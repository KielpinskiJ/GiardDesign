/* eslint-disable no-unused-vars, no-undef */
document.addEventListener('DOMContentLoaded', function() {
  var macy = Macy({
    container: '#macy-container',
    trueOrder: false,
    waitForImages: false,
    margin: 8,
    columns: 5,
    breakAt: {
      576: 2,
      1920: 3,
      2560: 4,
    },
  });
});

const expandButton = document.querySelector('.expand-button');
const gradientOverlay = document.querySelector('.gradient-overlay');

let expanded = false;

expandButton.addEventListener('click', () => {
  expanded = !expanded;
  if (expanded) {
    expandButton.textContent = 'Zwiń';
    gradientOverlay.style.opacity = '0';
    document.querySelectorAll('.hidden').forEach(item => item.style.display = 'block');
  } else {
    expandButton.textContent = 'Rozwiń';
    gradientOverlay.style.opacity = '0.8';
    document.querySelectorAll('.hidden').forEach(item => item.style.display = 'none');
  }
  macy.runOnImageLoad(function() {
    macy.recalculate(true);
  }, true);
});




const burgerButton = document.querySelector('.burger-button');
const mobileMenu = document.querySelector('.mobile-menu');
const closeButton = document.querySelector('.close-button');

burgerButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  document.body.style.overflow = 'hidden';
});

closeButton.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  document.body.style.overflow = 'auto';
});
