import "./style.css";
const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");
const navTogle = document.getElementById("nav-togle");

if (navTogle) {
	navTogle.addEventListener("click", () => {
		navMenu.classList.add("show-menu");
		console.log("click");
	});
}
if (navClose) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove("show-menu");
	});
}

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
	const navMenu = document.getElementById("nav-menu");
	navMenu.classList.remove("show-menu");
};
navLink.forEach((link) => {
	link.addEventListener("click", linkAction);
});
const shadowHeader = () => {
	const header = document.getElementById("header");
  // console.log(header);
  
	window.scrollY > 50
		? header.classList.add("shadow-header")
		: header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);
