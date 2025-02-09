document.addEventListener("DOMContentLoaded", function() {
    const resultContainer = document.getElementById("resultContainer");
    
    // Collect all saved colors from localStorage
    const pages = ['music1.html', 'music2.html', 'music3.html', 'music4.html', 'music5.html'];
    const selections = {};
    
    pages.forEach(page => {
        const color = localStorage.getItem(page);
        if (color) {
            selections[page] = color;
        }
    });

    // Display results
    if (Object.keys(selections).length > 0) {
        const resultList = document.createElement("div");
        resultList.style.marginTop = "20px";
        
        for (const [page, color] of Object.entries(selections)) {
            const songName = getSongName(page);
            const colorDiv = document.createElement("div");
            colorDiv.style.marginBottom = "10px";
            
            const colorSquare = document.createElement("span");
            colorSquare.style.display = "inline-block";
            colorSquare.style.width = "20px";
            colorSquare.style.height = "20px";
            colorSquare.style.backgroundColor = color;
            colorSquare.style.marginRight = "10px";
            colorSquare.style.verticalAlign = "middle";
            
            colorDiv.appendChild(colorSquare);
            colorDiv.appendChild(document.createTextNode(`${songName}: ${color}`));
            resultList.appendChild(colorDiv);
        }
        
        resultContainer.appendChild(resultList);
    } else {
        resultContainer.textContent = "No colors selected yet.";
    }
});

// Helper function to get song names
function getSongName(page) {
    const songNames = {
        'music1.html': 'Silver Soul - Beach House',
        'music2.html': 'Sweet Disposition - The Temper Trap',
        'music3.html': 'Chop Suey - System of a Down',
        'music4.html': 'It Never Entered My Mind - Miles Davis Quintet',
        'music5.html': 'Re:Stacks - Bon Iver'
    };
    return songNames[page] || page;
}
