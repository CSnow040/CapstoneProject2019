/* 
    Capstone 2019 Project
    West-MEC Websites 
    
    Percision Machining Website
    Author: Caleb Snow
    Date:   3/6/19

    Filename: pm_script.js
*/

//photo carousel
const carouselSlide = document.querySelectorAll('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//buttons to navigate carousel
const prevButton = document.querySelectorAll('#prevButton');
const nextButton = document.querySelectorAll('#nextButton');

//counter monitors which picture you are on
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button listeners
nextButton.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevButton.addEventListener('click', () => {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    console.log(carouselImages[counter]);
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

//footer