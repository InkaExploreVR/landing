const menuBurguer = document.querySelector('#menuBurguer');
const menuDropdown = document.querySelector('.menu__dropdown');
const header = document.querySelector('.header');

//Menu Toggle navegation
menuBurguer.addEventListener('click', () => {
  menuBurguer.classList.toggle('fa-times');
  menuDropdown.classList.toggle('menu-disabled');
});

document.querySelectorAll('.menu__item').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const url = link.getAttribute('href');
    const isInternalUrl = url[0] === '#';
    if (isInternalUrl) {
      const linkSection = url.slice(1);
      const section = document.getElementById(linkSection);
      window.scroll({
        top:
          section.getBoundingClientRect().top +
          window.scrollY -
          header.getBoundingClientRect().height,
        behavior: 'smooth',
      });
      menuBurguer.classList.toggle('fa-times');
      menuDropdown.classList.toggle('menu-disabled');
    } else window.location.href = url;
  });
});
