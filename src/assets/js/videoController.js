const videoPlayer = document.getElementById("videoPlayer");
const playBtn = document.getElementById("playBtn");
const videoDuration = document.getElementById("durationTime");
const videoCurrentTime = document.getElementById("currentTime");


const handlePlayBtn = () => {
    if (videoPlayer.paused) {
        videoPlayer.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        videoPlayer.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function formatData(seconds) {
    const secondsNumber = parseInt(seconds, 10);
    let hours = Math.floor(secondsNumber / 3600);
    let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
    let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;

    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (seconds < 10) {
        totalSeconds = `0${totalSeconds}`;
    }
    return `${minutes}:${totalSeconds}`;
}



const setTotal = () => {
    const totalTime = formatData(videoPlayer.duration);
    videoDuration.innerHTML = totalTime;
}

const handleMetadata = () => {
    console.log("Metadata loaded!");
    setTotal();
}

const handleVideoEnded = () => {
    videoPlayer.currentTime = 0;
    playBtn.innerHTML = '<i class="fas fa-reply"></i>';
}

const init = () => {
    playBtn.addEventListener("click", handlePlayBtn);
    videoPlayer.addEventListener("loadedmetadata", handleMetadata);
    videoPlayer.addEventListener("ended", handleVideoEnded);
}

init();