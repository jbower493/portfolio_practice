// loader

const loader = document.getElementsByClassName('loader')[0];
console.log(loader);

window.addEventListener('load', () => {
  loader.classList.add('hidden');
});

// nav

const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});