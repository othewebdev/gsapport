"use strict";

var button = document.querySelector('#pbtn');
var overlay = document.querySelector('.overlay');
var eProj = document.querySelector('#eProj');
var eAbout = document.querySelector('#eAbout');
var eWorkEx = document.querySelector('#eWorkEx');
var eSkills = document.querySelector('#eSkills');
var eContact = document.querySelector('#eContact');
var infoOverlayA = document.querySelector('.infoOvrA');
var infoOverlayB = document.querySelector('.infoOvrB');
var infoOverlayC = document.querySelector('.infoOvrC');
var infoOverlayD = document.querySelector('.infoOvrD');
var infoBtnA = document.querySelector('#infobtnA');
var infoBtnB = document.querySelector('#infobtnB');
var infoBtnC = document.querySelector('#infobtnC');
var infoBtnD = document.querySelector('#infobtnD'); // init gsap timeline
// stopping gsap so we can call it on click
// Every Container has its own Respective Timeline, and Exit Button.
// Timeline for Project Container Animation

var tl = gsap.timeline({
  defaults: {
    duration: 1,
    ease: Back.easeOut.config(2)
  }
}, "-=1");
tl.paused(true);
tl.to(".projects-overlay", {
  clipPath: 'circle(100%)'
});
tl.to(".menu-container", {
  opacity: 1,
  y: '30px',
  stagger: 0.1
}, "-=1");
pbtn.addEventListener('click', function () {
  tl.play();
});
eProj.addEventListener('click', function () {
  tl.reverse("-=2.5");
}); // Timeline for About Container Animation

var tlAbout = gsap.timeline({
  defaults: {
    duration: 1,
    ease: Back.easeOut.config(2)
  }
}, "-=1.25");
tlAbout.paused(true);
tlAbout.to(".about-overlay", {
  clipPath: 'circle(100%)'
});
tlAbout.to(".menu-container", {
  opacity: 1,
  y: '30px',
  stagger: 0.1
}, "-=1.25");
abtn.addEventListener('click', function () {
  tlAbout.play();
});
eAbout.addEventListener('click', function () {
  tlAbout.reverse("-=2.25");
}); // Timeline for Work Experience Container Animation

var tlWorkex = gsap.timeline({
  defaults: {
    duration: 1,
    ease: Back.easeOut.config(2)
  }
}, "-=1");
tlWorkex.paused(true);
tlWorkex.to(".workex-overlay", {
  clipPath: 'circle(100%)'
});
tlWorkex.to(".menu-container", {
  opacity: 1,
  y: '30px',
  stagger: 0.1
}, "-=1.5");
wbtn.addEventListener('click', function () {
  tlWorkex.play();
});
eWorkEx.addEventListener('click', function () {
  tlWorkex.reverse("-=2");
}); // Timeline for Skills Container Animation

var tlSkills = gsap.timeline({
  defaults: {
    duration: 1,
    ease: Back.easeOut.config(2)
  }
}, "-=1");
tlSkills.paused(true);
tlSkills.to(".skills-overlay", {
  clipPath: 'circle(100%)'
});
tlSkills.to(".menu-container", {
  opacity: 1,
  y: '30px',
  stagger: 0.1
}, "-=2");
sbtn.addEventListener('click', function () {
  tlSkills.play();
});
eSkills.addEventListener('click', function () {
  tlSkills.reverse("-=1.75");
});
infoBtnA.addEventListener('click', function () {
  infoOverlayA.classList.toggle('infoOvr');
});
infoBtnB.addEventListener('click', function () {
  infoOverlayB.classList.toggle('infoOvr');
});
infoBtnC.addEventListener('click', function () {
  infoOverlayC.classList.toggle('infoOvr');
});
infoBtnD.addEventListener('click', function () {
  infoOverlayD.classList.toggle('infoOvr');
}); // Timeline for Contact Container Animation

var tlContact = gsap.timeline({
  defaults: {
    duration: 1,
    ease: Back.easeOut.config(2)
  }
}, "-=.25");
tlContact.paused(true);
tlContact.to(".contact-overlay", {
  clipPath: 'circle(100%)'
});
tlContact.to(".menu-container", {
  opacity: 1,
  y: '30px',
  stagger: 0.1
}, "-=3");
cbtn.addEventListener('click', function () {
  tlContact.play();
});
eContact.addEventListener('click', function () {
  tlContact.reverse("-=1.5");
});