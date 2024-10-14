import "./style.css";
import Swiper from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";
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

const swiper = new Swiper(".favorites__swiper", {
	// modules: [Autoplay],
	loop: true,
	grabCursor: true,
	slidesPerView: "auto",
	centeredSlides: "auto",
	// autoplay:{
	// 	delay: 3000,
	// 	disableOnInteraction: false,
	// 	stopOnLastSlide: false,
	// }
});

const scrollUp = () => {
	const scrollUp = document.getElementById("scrollup");
	window.scrollY >= 450
		? scrollUp.classList.add("show-scroll")
		: scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
	const scrollDown = window.scrollY;
	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute("id"),
			sectionClass = document.querySelector(
				".nav__menu a[href*=" + sectionId + "]"
			);
		if (
			scrollDown > sectionTop &&
			scrollDown <= sectionTop + sectionHeight
		) {
			sectionClass.classList.add("active-link");
		} else {
			sectionClass.classList.remove("active-link");
		}
	});
};
window.addEventListener("scroll", scrollActive);
