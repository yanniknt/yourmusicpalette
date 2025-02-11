document.addEventListener("DOMContentLoaded", function() {
    const resultContainer = document.getElementById("resultContainer");
    
    // Mapping of data-color values to image paths and names
    const imageMap = {
        'option1': { path: 'path/to/image1.jpg', name: 'Option 1' },
        'option2': { path: 'path/to/image2.jpg', name: 'Option 2' },
        'option3': { path: 'path/to/image3.jpg', name: 'Option 3' },
        'option4': { path: 'path/to/image4.jpg', name: 'Option 4' },
        'option5': { path: 'path/to/image5.jpg', name: 'Option 5' }
    };
    
    // Collect all saved selections from localStorage
    const pages = ['music1.html', 'music2.html', 'music3.html', 'music4.html', 'music5.html'];
    const selections = {};
    
    pages.forEach(page => {
        const selection = localStorage.getItem(page);
        if (selection && imageMap[selection]) {
            selections[page] = selection;
        }
    });

    // Display results
    if (Object.keys(selections).length > 0) {
        const resultList = document.createElement("div");
        resultList.style.marginTop = "20px";
        
        for (const [page, selection] of Object.entries(selections)) {
            const songName = getSongName(page);
            const resultDiv = document.createElement("div");
            resultDiv.style.marginBottom = "20px";
            
            const img = document.createElement("img");
            img.src = imageMap[selection].path;
            img.alt = imageMap[selection].name;
            img.style.width = "100px";
            img.style.height = "100px";
            img.style.objectFit = "cover";
            img.style.borderRadius = "10px";
            img.style.marginRight = "10px";
            
            resultDiv.appendChild(img);
            resultDiv.appendChild(document.createTextNode(`${songName}: ${imageMap[selection].name}`));
            resultList.appendChild(resultDiv);
        }
        
        resultContainer.appendChild(resultList);
    } else {
        resultContainer.textContent = "No selections made yet.";
    }
});

// Helper function to get song names (keep your existing function)
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
