const scroll = new SmoothScroll('a[href*="#"]');

const navbar = document.querySelector('.nav');

const hero = document.querySelector('.hero').offsetTop;
const about = document.querySelector('.about').offsetTop;
const services = document.querySelector('.services').offsetTop;
const gallery = document.querySelector('.gallery').offsetTop;
const blog = document.querySelector('.blog').offsetTop;
const contact = document.querySelector('.contact').offsetTop;

const navItems = document.querySelectorAll('.nav__item');

const navMobileList = document.querySelector('.nav__mobile-list');
const hamburgerBtn = document.querySelector('.nav__hamburger')
let mobileNavOpen = false;

function activateNavItem(index) {
  navItems.forEach(item => item.classList.remove('nav__item--active'));
  navItems[index].classList.add('nav__item--active');
}

window.addEventListener('scroll', function (e) {
  const offset = window.pageYOffset;
  if (offset > 100) {
    navbar.classList.add('nav--scrolled');
  } else if (offset <= 100 && !mobileNavOpen) {
    navbar.classList.remove('nav--scrolled');
  }


  if (offset < about) {
    activateNavItem(0);
  } else if (offset >= about && offset < services) {
    activateNavItem(1);
  } else if (offset >= services && offset < gallery) {
    activateNavItem(2);
  } else if (offset >= gallery && offset < blog) {
    activateNavItem(3);
  } else if (offset >= blog && offset < contact) {
    activateNavItem(4);
  } else if (offset >= contact) {
    activateNavItem(5);
  }
});

hamburgerBtn.addEventListener('click', function (e) {
  mobileNavOpen = !mobileNavOpen
  if (!navbar.classList.contains('nav--scrolled')) {
    navbar.classList.add('nav--scrolled')
  }
  navMobileList.classList.toggle('nav__mobile-list--active')
});