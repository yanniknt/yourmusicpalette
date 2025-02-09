document.addEventListener("DOMContentLoaded", function() {
    const audioElement = document.getElementById("audioElement");
    const playPauseButton = document.getElementById("playPauseButton");
    const colorButtons = document.querySelectorAll(".color-button");
    const rotatingText = document.getElementById("rotating-text");
    
    // Get the current page name from the URL
    const currentPage = window.location.pathname.split("/").pop();

    // Play/Pause button functionality with animation control
    playPauseButton.addEventListener("click", function() {
        if (audioElement.paused) {
            audioElement.play();
            playPauseButton.textContent = "Pause";
            // Resume animation
            if (rotatingText) {
                rotatingText.style.animationPlayState = "running";
            }
        } else {
            audioElement.pause();
            playPauseButton.textContent = "Play";
            // Pause animation
            if (rotatingText) {
                rotatingText.style.animationPlayState = "paused";
            }
        }
    });

    // Initialize animation state to paused
    if (rotatingText) {
        rotatingText.style.animationPlayState = "paused";
    }

    // Load any previously selected color for this page
    const savedColor = localStorage.getItem(currentPage);
    if (savedColor) {
        colorButtons.forEach(button => {
            if (button.getAttribute("data-color") === savedColor) {
                button.classList.add("selected");
            }
        });
    }

    // Color button selection functionality
    colorButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Remove the 'selected' class from all buttons
            colorButtons.forEach(btn => btn.classList.remove("selected"));
            
            // Add the 'selected' class to the clicked button
            button.classList.add("selected");
            
            // Save the selection to localStorage
            const selectedColor = button.getAttribute("data-color");
            localStorage.setItem(currentPage, selectedColor);
        });
    });
});

