"use strict";

const humburgerMenu = document.querySelector(".the-humburger-click");
const humburger = document.querySelector(".div-humburger");
const bodyBlure = document.querySelector("body");
const humburgerMenuClose = document.querySelector(".humburger");

const HeroSection = document.querySelector(".Hero-section");
const divAboutSction = document.querySelector(".div-about-sction");
const divSkilsSection = document.querySelector(".div-skils-section");
const divProjectsSection = document.querySelector(".div-projects-section");
const divContactSection = document.querySelector(".div-contact-section");

humburger.addEventListener("click", function () {
  humburgerMenu.style.display = "block";
  HeroSection.style.filter = "blur(1.5px)";
  // HeroSection.style.backgroundColor = "black";
  divAboutSction.style.filter = "blur(1.5px)";
  divSkilsSection.style.filter = "blur(1.5px)";
  divProjectsSection.style.filter = "blur(1.5px)";
  divContactSection.style.filter = "blur(1.5px)";
  humburger.style.display = "none";
});

HeroSection.addEventListener("click", function () {
  HeroSection.style.filter = "blur(0)";
  divAboutSction.style.filter = "blur(0)";
  divSkilsSection.style.filter = "blur(0)";
  divProjectsSection.style.filter = "blur(0)";
  divContactSection.style.filter = "blur(0)";
  humburgerMenu.style.display = "none";
  humburger.style.display = "block";
});

divAboutSction.addEventListener("click", function () {
  HeroSection.style.filter = "blur(0)";
  divAboutSction.style.filter = "blur(0)";
  divSkilsSection.style.filter = "blur(0)";
  divProjectsSection.style.filter = "blur(0)";
  divContactSection.style.filter = "blur(0)";
  humburgerMenu.style.display = "none";
  humburger.style.display = "block";
});

divSkilsSection.addEventListener("click", function () {
  HeroSection.style.filter = "blur(0)";
  divAboutSction.style.filter = "blur(0)";
  divSkilsSection.style.filter = "blur(0)";
  divProjectsSection.style.filter = "blur(0)";
  divContactSection.style.filter = "blur(0)";
  humburgerMenu.style.display = "none";
  humburger.style.display = "block";
});

divProjectsSection.addEventListener("click", function () {
  HeroSection.style.filter = "blur(0)";
  divAboutSction.style.filter = "blur(0)";
  divSkilsSection.style.filter = "blur(0)";
  divProjectsSection.style.filter = "blur(0)";
  divContactSection.style.filter = "blur(0)";
  humburgerMenu.style.display = "none";
  humburger.style.display = "block";
});

divContactSection.addEventListener("click", function () {
  HeroSection.style.filter = "blur(0)";
  divAboutSction.style.filter = "blur(0)";
  divSkilsSection.style.filter = "blur(0)";
  divProjectsSection.style.filter = "blur(0)";
  divContactSection.style.filter = "blur(0)";
  humburgerMenu.style.display = "none";
  humburger.style.display = "block";
});
