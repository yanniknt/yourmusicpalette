window.onload = function () {
    const selectedColors = JSON.parse(localStorage.getItem('selectedColors')) || [];

    if (selectedColors.filter(Boolean).length === 4) {
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
                resultDiv.appendChild(colorBox);
            }
        });
    } else {
        alert("Bitte gehen Sie zurück und schließen Sie den Test ab.");
    }
};
