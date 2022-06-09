const playPause = document.querySelector("#play-stop");
const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward");
const audio = document.querySelector("#audio");
const songName = document.querySelector("#song-name");
const video = document.querySelector("#video-night");
const photo = document.querySelector("#cover")
const volumeup = document.querySelector("#volumeup")
const volumedown = document.querySelector("#volumedown")
const headName = document.querySelector("#header-name")

let playImg = "./assets/play.png";
let pauseImg = "./assets/pause.png";

video.pause() //начинаем видео с паузы

const songList = [
    {
        name: "Бродяга",
        source: "./assets/brodyaga.mp3",
        cover: "./assets/brodyaga.jpeg"
    },
    {
        name: "В Темноте",
        source: "./assets/korzh.mp3",
        cover: "./assets/maxkorzh.jpeg"
    },
    {
        name: "Let It Be",
        source: "./assets/beatles.mp3",
        cover: "./assets/letitbe.jpeg"
    },
];

let isPlaying = true;
let songIndex = 0

function forwardHandler() {
    songIndex = (songIndex + 1)%songList.length
    audio.src = songList[songIndex].source
    songName.innerHTML = songList[songIndex].name
    photo.src = songList[songIndex].cover
    headName.innerHTML = songList[songIndex].name
}

function volumeUp() {

}

function volumeDown() {
    
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