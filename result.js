document.addEventListener("DOMContentLoaded", function() {
    const resultContainer = document.getElementById("resultContainer");
    
    // Mapping of data-color values to image paths and names
    const imageMap = {
        'option1': { path: 'silversoul1.png', name: 'Option 1' },
        'option2': { path: 'silversoul2.png', name: 'Option 2' },
        'option3': { path: 'silversoul3.png', name: 'Option 3' },
        'option4': { path: 'silversoul4.png', name: 'Option 4' },
        'option5': { path: 'silversoul5.png', name: 'Option 5' },
        'option6': { path: 'sweetdisposition1.png', name: 'Option 6' },
        'option7': { path: 'sweetdisposition2.png', name: 'Option 7' },
        'option8': { path: 'sweetdisposition3.png', name: 'Option 8' },
        'option9': { path: 'sweetdisposition4.png', name: 'Option 9' },
        'option10': { path: 'sweetdisposition5.png', name: 'Option 10' },
        'option11': { path: 'chopsuey1.png', name: 'Option 11' },
         'option12': { path: 'chopsuey2.png', name: 'Option 12' },
         'option13': { path: 'chopsuey3.png', name: 'Option 13' },
         'option14': { path: 'chopsuey4.png', name: 'Option 14' },
         'option15': { path: 'chopsuey5.png', name: 'Option 15' },
         'option16': { path: 'milesdavis1.png', name: 'Option 16' },
         'option17': { path: 'milesdavis2.png', name: 'Option 17' },
         'option18': { path: 'milesdavis3.png', name: 'Option 18' },
         'option19': { path: 'milesdavis4.png', name: 'Option 19' },
         'option20': { path: 'milesdavis5.png', name: 'Option 20' },
         'option21': { path: 'restacks1', name: 'Option 21' },
        'option22': { path: 'restacks2', name: 'Option 22' },
        'option23': { path: 'restacks3', name: 'Option 23' },
        'option24': { path: 'restacks4', name: 'Option 24' },
        'option25': { path: 'restacks5', name: 'Option 25' }
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
