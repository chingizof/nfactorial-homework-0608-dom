const playPause = document.querySelector("#play-stop");
const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward");
const audio = document.querySelector("#audio");
const songName = document.querySelector("#song-name");
const video = document.querySelector("#video-night");

let playImg = "./assets/play.png";
let pauseImg = "./assets/pause.png";

video.pause() //начинаем видео с паузы

const songList = [
    {
        name: "Бродяга",
        source: "./assets/brodyaga.mp3",
        cover: "./assets/images/chillhop.jpg"
    },
    {
        name: "В Темноте",
        source: "./assets/korzh.mp3",
        cover: "./assets/images/chillhop-2.jpg"
    },
    {
        name: "Let It Be",
        source: "./assets/beatles.mp3",
        cover: "./assets/images/chillhop-3.jpg"
    },
];

let isPlaying = true;
let songIndex = 0

function forwardHandler() {
    songIndexs = (songIndexs + 1)%songList.length
    audio.src = songList[songIndex]
    songName.innerHTML = songList[songIndex].name
}


function playerHandler() {
    if (isPlaying) {
        playPause.src = playImg
        isPlaying = false
        audio.pause()
        video.pause()
    } else {
        playPause.src = pauseImg
        isPlaying = true
        audio.play()
        video.play()
    }
}


playPause.addEventListener("click", playerHandler)
forward.addEventListener("click", forwardHandler)