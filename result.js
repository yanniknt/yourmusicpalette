window.onload = function() {
    const selectedColors = JSON.parse(localStorage.getItem('selectedColors')) || [];

    if (selectedColors.length === 4) {
        const resultDiv = document.getElementById("color-palette");
        resultDiv.innerHTML = "";

        selectedColors.forEach(color => {
            const colorBox = document.createElement("div");
            colorBox.style.backgroundColor = color;
            resultDiv.appendChild(colorBox);
        });
    } else {
        alert("Es scheint, als hätten Sie nicht alle Farben ausgewählt. Bitte gehen Sie zurück und schließen Sie den Test ab.");
    }
}
