document.addEventListener("DOMContentLoaded", function() {
    const resultContainer = document.getElementById("resultContainer");
    const colorButtons = document.querySelectorAll(".color-button");
    const selectedColors = [];

    // Collect selected colors
    colorButtons.forEach(button => {
        if (button.classList.contains("selected")) {
            selectedColors.push(button.getAttribute("data-color"));
        }
    });

    // Display selected colors
    if (selectedColors.length > 0) {
        const colorList = document.createElement("ul");
        selectedColors.forEach(color => {
            const listItem = document.createElement("li");
            listItem.textContent = color;
            colorList.appendChild(listItem);
        });
        resultContainer.appendChild(colorList);
    } else {
        resultContainer.textContent = "No colors selected.";
    }
});
