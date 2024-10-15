import "./style.css";
import Swiper from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { ScrollReveal } from "./scripts/scrollreveal.min.js";

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

const sr = ScrollReveal({
	origin: "top",
	distance: "60px",
	duration: 2000,
	delay: 300,
	reset:true
});

sr.reveal(".home__data, .favorites__container, .footer__container");
sr.reveal(".home__circle, .home__img", { delay: 600, scale: 0.5 });
sr.reveal(".home__chips-1, .home__chips-2, .home__chips-3", {
	delay: 100,
	interval: 100,
});
sr.reveal(".home__leaf", { delay: 100, interval: 100 });
sr.reveal(".home__tomato-1, .home__tomato-2", { delay: 100, interval: 100 });
sr.reveal(".care__img, .contact__img", { origin: "left" });
sr.reveal(".care__list, .contact__data", { origin: "right" });
sr.reveal(".banner__item, .products__card", { interval: 100 });
