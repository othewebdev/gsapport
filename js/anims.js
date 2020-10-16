const button = document.querySelector('#pbtn');

const overlay = document.querySelector('.overlay');
const eProj = document.querySelector('#eProj');
const eAbout = document.querySelector('#eAbout');
const eWorkEx = document.querySelector('#eWorkEx');
const eSkills = document.querySelector('#eSkills');
const eContact = document.querySelector('#eContact');


const infoOverlayA = document.querySelector('.infoOvrA');
const infoOverlayB = document.querySelector('.infoOvrB');
const infoOverlayC = document.querySelector('.infoOvrC');
const infoOverlayD = document.querySelector('.infoOvrD');
const infoBtnA = document.querySelector('#infobtnA');
const infoBtnB = document.querySelector('#infobtnB');
const infoBtnC = document.querySelector('#infobtnC');
const infoBtnD = document.querySelector('#infobtnD');

// init gsap timeline


// stopping gsap so we can call it on click

// Every Container has its own Respective Timeline, and Exit Button.

// Timeline for Project Container Animation
var tl = gsap.timeline({ defaults: { duration: 1, ease: Back.easeOut.config(2) } }, "-=1")
tl.paused(true);
tl.to(".projects-overlay", { display: 'block',clipPath: 'circle(100%)'})
tl.to(".menu-container", {opacity: 1, y: '30px', stagger: 0.1}, "-=1")
pbtn.addEventListener('click', () => {
    tl.play();
})
eProj.addEventListener('click', () => {
    tl.reverse("-=2.5");
})

// Timeline for About Container Animation
var tlAbout = gsap.timeline({ defaults: { duration: 1, ease: Back.easeOut.config(2) } }, "-=1.25")
tlAbout.paused(true);
tlAbout.to(".about-overlay", { display: 'block', clipPath: 'circle(100%)' })
tlAbout.to(".menu-container", { opacity: 1, y: '30px', stagger: 0.1 }, "-=1.25")
abtn.addEventListener('click', () => {
    tlAbout.play();
})
eAbout.addEventListener('click', () => {
    tlAbout.reverse("-=2.25");
})

// Timeline for Work Experience Container Animation
var tlWorkex = gsap.timeline({ defaults: { duration: 1, ease: Back.easeOut.config(2) } }, "-=1")
tlWorkex.paused(true);
tlWorkex.to(".workex-overlay", { display: 'block', clipPath: 'circle(100%)' })
tlWorkex.to(".menu-container", { opacity: 1, y: '30px', stagger: 0.1 }, "-=1.5")
wbtn.addEventListener('click', () => {
    tlWorkex.play();
})
eWorkEx.addEventListener('click', () => {
    tlWorkex.reverse("-=2");
})

// Timeline for Skills Container Animation
var tlSkills = gsap.timeline({ defaults: { duration: 1, ease: Back.easeOut.config(2) } }, "-=1")
tlSkills.paused(true);
tlSkills.to(".skills-overlay", { display: 'block', clipPath: 'circle(100%)' })
tlSkills.to(".menu-container", { opacity: 1, y: '30px', stagger: 0.1}, "-=2")
sbtn.addEventListener('click', () => {
    tlSkills.play();
})
eSkills.addEventListener('click', () => {
    tlSkills.reverse("-=1.75");
})

infoBtnA.addEventListener('click', () => {
    infoOverlayA.classList.toggle('infoOvr');
})

infoBtnB.addEventListener('click', () => {
    infoOverlayB.classList.toggle('infoOvr');
})

infoBtnC.addEventListener('click', () => {
    infoOverlayC.classList.toggle('infoOvr');
})

infoBtnD.addEventListener('click', () => {
    infoOverlayD.classList.toggle('infoOvr');
})

// Timeline for Contact Container Animation
var tlContact = gsap.timeline({ defaults: { duration: 1, ease: Back.easeOut.config(2) } }, "-=.25")
tlContact.paused(true);
tlContact.to(".contact-overlay", { display: 'block', clipPath: 'circle(100%)' })
tlContact.to(".menu-container", { opacity: 1, y: '30px', stagger: 0.1}, "-=3")
cbtn.addEventListener('click', () => {
    tlContact.play();
})
eContact.addEventListener('click', () => {
    tlContact.reverse("-=1");
})