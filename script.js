document.addEventListener("DOMContentLoaded", function() {
    const audioElement = document.getElementById("audioElement");
    const playPauseButton = document.getElementById("playPauseButton");
    const colorButtons = document.querySelectorAll(".color-button");

    // Play/Pause button functionality
    playPauseButton.addEventListener("click", function() {
        if (audioElement.paused) {
            audioElement.play();
            playPauseButton.textContent = "Pause";
        } else {
            audioElement.pause();
            playPauseButton.textContent = "Play";
        }
    });

    // Color button selection functionality
    colorButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Remove the 'selected' class from all buttons
            colorButtons.forEach(btn => btn.classList.remove("selected"));
            
            // Add the 'selected' class to the clicked button
            button.classList.add("selected");
        });
    });
});




