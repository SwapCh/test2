const q1 = document.querySelector('span.images[style="--i:1"]');
const q2 = document.querySelector('span.images[style="--i:2"]');
const q3 = document.querySelector('span.images[style="--i:3"]');
const q4 = document.querySelector('span.images[style="--i:4"]');
const q5 = document.querySelector('span.images[style="--i:5"]');
const q6 = document.querySelector('span.images[style="--i:6"]');
const q7 = document.querySelector('span.images[style="--i:7"]');
const q8 = document.querySelector('span.images[style="--i:8"]');
//const allAudio = document.querySelectorAll('audio');


const audio1 = new Audio("bolly-music/ekladki.mp3");
const audio2=  new Audio("bolly-music/badan.mp3");
const audio3 = new Audio("bolly-music/chunari.mp3");
const audio4 = new Audio("bolly-music/tere.mp3");
const audio5 = new Audio("bolly-music/suraj.mp3");
const audio6 = new Audio("bolly-music/.mp3");
const audio7 = new Audio("bolly-music/qamar.mp3");
const audio8 = new Audio ("bolly-music/shab.mp3");

const allAudio=[audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8]


q1.addEventListener("click", () => {
    allAudio.forEach(audio => {
        audio.pause();
    });
    audio1.play();
});

q2.addEventListener("click", () => {
    allAudio.forEach(audio => {
        audio.pause();
    });
    audio2.play();
});

q3.addEventListener("click", () => {
    allAudio.forEach(audio => {
        audio.pause();
    });
    audio3.play();
});

q4.addEventListener("click", () => {
    allAudio.forEach(audio => {
        audio.pause();
    });
    audio4.play();
});

q5.addEventListener("click", () => {
    allAudio.forEach(audio => {
        audio.pause();
    });
    audio5.play();
});

q6.addEventListener("click", () => {
    allAudio.forEach(audio => {
        audio.pause();
    });
    audio6.play();
});

q7.addEventListener("click", () => {
    allAudio.forEach(audio => {
        audio.pause();
    });
    audio7.play();
});

q8.addEventListener("click", () => {
    allAudio.forEach(audio => {
        audio.pause();
    });
    audio8.play();
});
