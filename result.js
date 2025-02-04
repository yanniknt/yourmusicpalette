// Verbesserte Version von result.js
window.onload = function () {
    const selectedColors = JSON.parse(localStorage.getItem('selectedColors')) || [];
    
    if (selectedColors.length > 0 && selectedColors.every(color => color)) {
        const resultDiv = document.getElementById("color-palette");
        resultDiv.innerHTML = "";

        selectedColors.forEach(color => {
            if (color) {
                const colorBox = document.createElement("div");
                colorBox.style.backgroundColor = color;
                colorBox.style.width = "50px";
                colorBox.style.height = "50px";
                colorBox.style.display = "inline-block";
                colorBox.style.margin = "5px";
                colorBox.style.border = "1px solid #000";
                resultDiv.appendChild(colorBox);
            }
        });
    } else {
        alert("Es scheint, als hätten Sie nicht alle Farben ausgewählt. Bitte gehen Sie zurück und schließen Sie den Test ab.");
    }
};
