let selectedColors = JSON.parse(localStorage.getItem('selectedColors')) || [];
let audio = new Audio(); // Erstellt ein unsichtbares Audio-Element
let isPlaying = false;
let currentTrack = 1; // Startet mit Track 1

document.addEventListener("DOMContentLoaded", function() {
    const audioElement = document.getElementById("audioElement");
    const playPauseButton = document.getElementById("playPauseButton");

    playPauseButton.addEventListener("click", function() {
        if (audioElement.paused) {
            audioElement.play();
            playPauseButton.textContent = "Pause";
        } else {
            audioElement.pause();
            playPauseButton.textContent = "Play";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const colorButtons = document.querySelectorAll(".color-button");

    colorButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Remove the 'selected' class from all buttons
            colorButtons.forEach(btn => btn.classList.remove("selected"));
            
            // Add the 'selected' class to the clicked button
            button.classList.add("selected");
        });
    });
});


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








