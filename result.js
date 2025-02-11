document.addEventListener("DOMContentLoaded", function() {
    const resultContainer = document.getElementById("resultContainer");
    
    // Mapping of data-color values to image paths with correct descriptions for each song
    const imageMap = {
        // Silver Soul - Beach House options
        'option1': { path: 'silversoul1.png', name: 'Option 1' },
        'option2': { path: 'silversoul2.png', name: 'Option 2' },
        'option3': { path: 'silversoul3.png', name: 'Option 3' },
        'option4': { path: 'silversoul4.png', name: 'Option 4' },
        'option5': { path: 'silversoul5.png', name: 'Option 5' },
        
        // Sweet Disposition - Temper Trap options
        'option6': { path: 'sweetdisposition1.png', name: 'Option 6' },
        'option7': { path: 'sweetdisposition2.png', name: 'Option 7' },
        'option8': { path: 'sweetdisposition3.png', name: 'Option 8' },
        'option9': { path: 'sweetdisposition4.png', name: 'Option 9' },
        'option10': { path: 'sweetdisposition5.png', name: 'Option 10' },
        
        // Chop Suey - System of a Down options
        'option11': { path: 'chopsuey1.png', name: 'Option 11' },
        'option12': { path: 'chopsuey2.png', name: 'Option 12' },
        'option13': { path: 'chopsuey3.png', name: 'Option 13' },
        'option14': { path: 'chopsuey4.png', name: 'Option 14' },
        'option15': { path: 'chopsuey5.png', name: 'Option 15' },
        
        // It Never Entered My Mind - Miles Davis options
        'option16': { path: 'milesdavis1.png', name: 'Option 16' },
        'option17': { path: 'milesdavis2.png', name: 'Option 17' },
        'option18': { path: 'milesdavis3.png', name: 'Option 18' },
        'option19': { path: 'milesdavis4.png', name: 'Option 19' },
        'option20': { path: 'milesdavis5.png', name: 'Option 20' },
        
        // Re:Stacks - Bon Iver options
        'option21': { path: 'restacks1.png', name: 'Option 21' },
        'option22': { path: 'restacks2.png', name: 'Option 22' },
        'option23': { path: 'restacks3.png', name: 'Option 23' },
        'option24': { path: 'restacks4.png', name: 'Option 24' },
        'option25': { path: 'restacks5.png', name: 'Option 25' }
    };
    
    // Create a styled container for results
    const resultsWrapper = document.createElement("div");
    resultsWrapper.style.display = "flex";
    resultsWrapper.style.flexDirection = "column";
    resultsWrapper.style.gap = "20px";
    resultsWrapper.style.alignItems = "center";
    
    // Get all selections from localStorage
    const selections = [
        { page: 'music1.html', song: 'Silver Soul - Beach House' },
        { page: 'music2.html', song: 'Sweet Disposition - The Temper Trap' },
        { page: 'music3.html', song: 'Chop Suey - System of a Down' },
        { page: 'music4.html', song: 'It Never Entered My Mind - Miles Davis Quintet' },
        { page: 'music5.html', song: 'Re:Stacks - Bon Iver' }
    ];

    let hasSelections = false;

    selections.forEach(({ page, song }) => {
        const selection = localStorage.getItem(page);
        if (selection && imageMap[selection]) {
            hasSelections = true;
            
            // Create container for each selection
            const selectionContainer = document.createElement("div");
            selectionContainer.style.display = "flex";
            selectionContainer.style.alignItems = "center";
            selectionContainer.style.gap = "20px";
            selectionContainer.style.padding = "15px";
            selectionContainer.style.backgroundColor = "#ffffff";
            selectionContainer.style.borderRadius = "10px";
            selectionContainer.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
            selectionContainer.style.width = "80%";
            selectionContainer.style.maxWidth = "600px";
            
            // Create and style image
            const img = document.createElement("img");
            img.src = imageMap[selection].path;
            img.alt = `Selected color for ${song}`;
            img.style.width = "100px";
            img.style.height = "100px";
            img.style.objectFit = "cover";
            img.style.borderRadius = "8px";
            
            // Create text container
            const textContainer = document.createElement("div");
            textContainer.style.flex = "1";
            
            // Add song title and selected color
            const songTitle = document.createElement("h3");
            songTitle.textContent = song;
            songTitle.style.margin = "0 0 5px 0";
            
            const colorName = document.createElement("p");
            colorName.textContent = `Selected color: ${imageMap[selection].name}`;
            colorName.style.margin = "0";
            
            textContainer.appendChild(songTitle);
            textContainer.appendChild(colorName);
            selectionContainer.appendChild(img);
            selectionContainer.appendChild(textContainer);
            resultsWrapper.appendChild(selectionContainer);
        }
    });

    if (hasSelections) {
        resultContainer.appendChild(resultsWrapper);
    } else {
        const noSelectionsMsg = document.createElement("p");
        noSelectionsMsg.textContent = "No selections made yet. Please go back and make your selections.";
        noSelectionsMsg.style.textAlign = "center";
        resultContainer.appendChild(noSelectionsMsg);
    }
});
