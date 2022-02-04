let audio = document.querySelector('audio');
let button = document.querySelector('.main__buttonbox-contaner');
let isPlay = false;

function playAudio() {
    isPlay = true;
    audio.currentTime = 0; //трек при кждом запуске будет проигрываться с начала
    audio.play();
    button.classList.remove('play-btn');
    button.classList.add('pause-btn');
}

function stopAudio() {
    isPlay = false;
    audio.pause();
    button.classList.remove('pause-btn');
    button.classList.add('play-btn');

}

button.addEventListener('click', function () {
    if (isPlay == true) {
        stopAudio();
    } else {
        playAudio();
    }
});

//смена треков по кликам на меню
let birdsList = document.querySelector('.header__menu-contaner');
let birds = document.querySelectorAll('.header__menu-list');

function hightlight() {
    for (let i = 0; i < birds.length; i++) {
        let bird = birds[i];
        bird.classList.remove('list-active');
    }
}

birds.forEach(function (bird) {

    bird.addEventListener('click', function () {
        if (bird.classList.contains('list-normal')) {
            hightlight();
            bird.classList.add('list-active');
        }
    });
});


birdsList.addEventListener('click', function (event) {
    let action = event.target.dataset.bird;

    audio.src = `./sounds/${action}.mp3`;
    playAudio();

});

//клик по логотипу
let logo = document.querySelector('.header__box-logo');

logo.addEventListener('click', function () {
    audio.src = "./sounds/forest.mp3";
    playAudio();
})