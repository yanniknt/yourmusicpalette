let selectedColors = [];

function selectColor(questionNumber, color) {
    selectedColors[questionNumber - 1] = color;
}

function showResult() {
    const resultDiv = document.getElementById("color-palette");
    resultDiv.innerHTML = ""; // Reset previous results

    if (selectedColors.length === 4 && selectedColors.every(color => color !== undefined)) {
        selectedColors.forEach(color => {
            const colorBox = document.createElement("div");
            colorBox.style.backgroundColor = color;
            resultDiv.appendChild(colorBox);
        });

        alert("Test abgeschlossen! Ihre Farbpalette wurde generiert.");
    } else {
        alert("Bitte wählen Sie für jede Musik ein Farbergebnis aus.");
    }
}
