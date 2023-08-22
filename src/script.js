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
const expandButtonSpan = document.querySelector('.expand-button-span');
const collapseButtonSpan = document.querySelector('.collapse-button-span');
const galleryContainer = document.querySelector('.gallery');
const gradientOverlay = document.querySelector('.gradient-overlay');

let expanded = false;

expandButton.addEventListener('click', () => {
  expanded = !expanded;
  if (expanded) {
    expandButtonSpan.classList.add('hidden');
    collapseButtonSpan.classList.remove('hidden');
    galleryContainer.classList.add('expanded');
    gradientOverlay.style.opacity = '0';
  } else {
    expandButtonSpan.classList.remove('hidden');
    collapseButtonSpan.classList.add('hidden');
    galleryContainer.classList.remove('expanded');
    gradientOverlay.style.opacity = '0.8';
  }
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

const dropdownTrigger = document.querySelector('.dropdown-trigger');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownTrigger.addEventListener('click', () => {
  dropdownContent.classList.toggle('hidden');
  positionDropdown();
});

document.addEventListener('click', (event) => {
  if (!dropdownTrigger.contains(event.target)) {
    dropdownContent.classList.add('hidden');
  }
});

const offerButton = document.querySelector('.offer-button');

function positionDropdown() {
  const buttonRect = offerButton.getBoundingClientRect();
  dropdownContent.style.top = `${buttonRect.bottom}px`;
  dropdownContent.style.left = `${buttonRect.left}px`;
}


const searchContainer = document.querySelector('.search-bar');
const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');

searchIcon.addEventListener('click', () => {
  searchContainer.classList.toggle('active');
  if (searchContainer.classList.contains('active')) {
    searchInput.focus();
  } else {
    searchInput.blur();
  }
});

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    searchContainer.classList.remove('active');
    searchInput.value = '';
    searchInput.blur();
  }
});

AOS.init({
  once: true,
});

Fancybox.bind('[data-fancybox="gallery"]', {

});