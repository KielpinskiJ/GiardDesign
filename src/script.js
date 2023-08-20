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
