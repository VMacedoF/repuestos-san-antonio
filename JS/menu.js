document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");

  toggle.addEventListener("click", function () {
    nav.classList.toggle("active");
    toggle.classList.toggle("active");
  });
});

// Menú desplegable para móviles
const dropdownToggle = document.querySelector('.dropbtn');
const dropdownMenu = document.querySelector('.dropdown-content');

if (dropdownToggle && dropdownMenu) {
  dropdownToggle.addEventListener('click', function (e) {
    e.preventDefault();
    dropdownMenu.classList.toggle('show-dropdown');
  });
}

