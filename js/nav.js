const menuItem = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

menuItem.addEventListener('click', () => {
	navbar.classList.toggle('change');
});
