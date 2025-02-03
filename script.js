let selectedColors = JSON.parse(localStorage.getItem('selectedColors')) || [];

function selectColor(questionNumber, color) {
    // Speichere die gewählte Farbe an der richtigen Stelle im Array
    selectedColors[questionNumber - 1] = color;
    localStorage.setItem('selectedColors', JSON.stringify(selectedColors));

    // Optische Rückmeldung: Markiere die gewählte Farbe
    updateSelectionUI(questionNumber, color);
}

function updateSelectionUI(questionNumber, color) {
    // Entferne Markierung von allen Buttons der aktuellen Frage
    document.querySelectorAll(`.color-button`).forEach(btn => {
        if (btn.getAttribute("onclick").includes(`selectColor(${questionNumber},`)) {
            btn.style.border = "none";
        }
    });

    // Markiere das geklickte Element
    const selectedButton = [...document.querySelectorAll(".color-button")].find(
        btn => btn.style.backgroundColor === color
    );

    if (selectedButton) {
        selectedButton.style.border = "3px solid black"; // Markierung
    }
}

// Lade bestehende Auswahl beim Laden der Seite
window.onload = function () {
    selectedColors.forEach((color, index) => {
        if (color) {
            updateSelectionUI(index + 1, color);
        }
    });
};
