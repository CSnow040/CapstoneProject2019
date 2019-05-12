/* 
    Capstone 2019 Project
    West-MEC Websites 
    
    Percision Machining Website
    Author: Caleb Snow
    Date:   3/6/19

    Filename: pm_script.js
*/
//Photo Carousel

// Starting point
var i = 0;
var images = [];
var time = 3000;

//Image list
images[0] = 'work.jpg';
images[1] = 'class.jpg';
images[2] = 'precision.jpg';

//Change image
function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;