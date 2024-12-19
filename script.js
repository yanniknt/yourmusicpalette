let selectedColors = JSON.parse(localStorage.getItem('selectedColors')) || [];

function selectColor(questionNumber, color) {
    selectedColors[questionNumber - 1] = color;
    localStorage.setItem('selectedColors', JSON.stringify(selectedColors));
}
