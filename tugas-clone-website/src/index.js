// hamburgerbar
document.addEventListener('DOMContentLoaded', function () {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});


// Toggle Darkmode + localstorage

function theme() {

    document.documentElement.classList.toggle("dark");


    const userTheme = document.documentElement.classList.contains("dark");


    localStorage.setItem("userTheme", userTheme);
}

const storedUserTheme = localStorage.getItem("userTheme");
if (storedUserTheme !== null && storedUserTheme === "true") {
    document.documentElement.classList.add("dark");
}

// autoslide images

const images = [
    './img/main-image0.png',
    './img/main-image1.png',
    './img/main-image2.png',
    './img/main-image3.png',
    './img/main-image4.png',
    './img/main-image5.png'
];

const imageElement = document.getElementById('photo');


let currentImageIndex = 0;
imageElement.src = images[currentImageIndex];


function changeImage() {

    currentImageIndex++;


    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }


    imageElement.src = images[currentImageIndex];
}


setInterval(changeImage, 5000);

//autoslide word

const wordElement = document.getElementById('word');


const replacementWords = [
    'Senang !',
    'Semangat !',
    'Bosan !',
    'Bad Mood !',
    'Ngambek !',
    'Hujan !',
    'Deadline !'
];


let currentWordIndex = 0;
wordElement.textContent = replacementWords[currentWordIndex];


function changeWord() {

    currentWordIndex++;


    if (currentWordIndex >= replacementWords.length) {
        currentWordIndex = 0;
    }


    wordElement.textContent = replacementWords[currentWordIndex];
}

setInterval(changeWord, 5000);