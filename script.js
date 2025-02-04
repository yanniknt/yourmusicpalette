let selectedColors = JSON.parse(localStorage.getItem('selectedColors')) || [];

let audio = new Audio();
let currentTrack = 1;
let isPlaying = false;

document.addEventListener("DOMContentLoaded", function() {
    document.body.insertAdjacentHTML("beforeend", '<div class="container"><div id="playPauseButton">Play</div></div>');
    document.getElementById("playPauseButton").addEventListener("click", playPauseAudio);
});

function playPauseAudio() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        document.getElementById("playPauseButton").textContent = "Play";
    } else {
        audio.src = `music${currentTrack}.mp3`;
        audio.play();
        isPlaying = true;
        document.getElementById("playPauseButton").textContent = "Pause";
    }
}

function selectColor(questionNumber, color) {
    selectedColors[questionNumber - 1] = color;
    localStorage.setItem('selectedColors', JSON.stringify(selectedColors));
    updateSelectionUI(questionNumber, color);
}

function updateSelectionUI(questionNumber, color) {
    document.querySelectorAll(`.color-button`).forEach(btn => {
        if (btn.getAttribute("onclick").includes(`selectColor(${questionNumber},`)) {
            btn.style.border = "none";
        }
    });

    const selectedButton = [...document.querySelectorAll(".color-button")].find(
        btn => btn.style.backgroundColor === color
    );

    if (selectedButton) {
        selectedButton.style.border = "3px solid black";
    }

}


    document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);

document.body.insertAdjacentHTML("beforeend", '<div class="container"><div id="playPauseButton">Play</div></div>');









