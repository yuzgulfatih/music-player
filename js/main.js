const mainBox = document.querySelector(".mainBox"),
    musicImg = mainBox.querySelector(".content img"),
    musicName = mainBox.querySelector(".songInfo .songs"),
    musicArtist = mainBox.querySelector(".songInfo .artist");
mainAudio = mainBox.querySelector(".mainBox #audio");
nextBtn = mainBox.querySelector(".icons #rightButton");
prewBtn = mainBox.querySelector(".icons #leftButton");
playBtn = mainBox.querySelector(".icons #playButton");
time = mainBox.querySelector('.timer #time');
timeSecond = mainBox.querySelector('.timer #second');

let musicIndex = 1;

window.addEventListener("load", () => {
    loadMusic(musicIndex);
});

function playMusic() {
    mainBox.classList.add("paused");
    mainAudio.play();
    document.getElementById("forChange").className = "fa-solid fa-circle-pause";
    document.getElementById("forChange").style.color = "gray";

}
function pauseMusic() {
    mainBox.classList.remove("paused");
    mainAudio.pause();
    document.getElementById("forChange").className = "fa-solid fa-circle-play";
    document.getElementById("forChange").style.color = "black";
}

function loadMusic(indexNumber) {
    musicArtist.innerText = allMusic[indexNumber - 1].artist;
    musicName.innerText = allMusic[indexNumber - 1].name;
    musicImg.src = allMusic[indexNumber - 1].img;
    mainAudio.src = allMusic[indexNumber - 1].src;
    timeCalculator = allMusic[indexNumber - 1].second / 60;
    time.innerText = parseInt(timeCalculator);
    second.innerText = allMusic[indexNumber - 1].second % 60;
}
function nextMusic() {
    document.getElementById("forChange").className = "fa-solid fa-circle-pause"
    musicIndex++;
    if (musicIndex > allMusic.length) {
        musicIndex = 1;
    } else {
        musicIndex = musicIndex;
    }
    loadMusic(musicIndex);
    playMusic();
}
function prewMusic() {
    document.getElementById("forChange").className = "fa-solid fa-circle-pause"
    musicIndex--;
    if (musicIndex < 1) {
        musicIndex = allMusic.length;
    } else {
        musicIndex = musicIndex;
    }
    loadMusic(musicIndex);
    playMusic();
}

function timeProgressBar() {
    var timeCalculator = allMusic[indexNumber - 1].second
    var progressWidth = timeCalculator = allMusic[indexNumber - 1].second / 10 * 100;
    if (timeCalculator > 0) {
        progress - bar

    }

}

playBtn.addEventListener("click", () => {
    const isMusicPaused = mainBox.classList.contains("paused");
    if (isMusicPaused) {
        pauseMusic();
    } else {
        playMusic();
    }

});

nextBtn.addEventListener("click", () => {
    nextMusic();
});

prewBtn.addEventListener("click", () => {
    prewMusic();
});
