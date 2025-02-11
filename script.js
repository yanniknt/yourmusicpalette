document.addEventListener("DOMContentLoaded", function() {
    const audioElement = document.getElementById("audioElement");
    const playPauseButton = document.getElementById("playPauseButton");
    const imageButtons = document.querySelectorAll(".image-button");
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
    const savedSelection = localStorage.getItem(currentPage);
    if (savedSelection) {
        imageButtons.forEach(button => {
            if (button.getAttribute("data-color") === savedSelection) {
                button.classList.add("selected");
            }
        });
    }

    // Image button selection functionality
    imageButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Remove the 'selected' class from all buttons
            imageButtons.forEach(btn => btn.classList.remove("selected"));
            
            // Add the 'selected' class to the clicked button
            button.classList.add("selected");
            
            // Save the selection to localStorage
            const selectedOption = button.getAttribute("data-color");
            localStorage.setItem(currentPage, selectedOption);
        });
    });
});
