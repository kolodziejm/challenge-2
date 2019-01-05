const navbar = document.querySelector('.nav');

window.addEventListener('scroll', function (e) {
  const offset = window.pageYOffset;
  if (offset > 100) {
    navbar.classList.add('nav--scrolled');
  } else {
    navbar.classList.remove('nav--scrolled');
  }
});