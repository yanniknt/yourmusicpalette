document.addEventListener("DOMContentLoaded", function() {
    const resultContainer = document.getElementById("resultContainer");
    
    // Mapping of data-color values to image paths with colors
    const imageMap = {
        // Silver Soul - Beach House options
        'option1': { path: 'silversoul1.png', name: 'Dark Blue' },
        'option2': { path: 'silversoul2.png', name: 'Purple' },
        'option3': { path: 'silversoul3.png', name: 'Silver' },
        'option4': { path: 'silversoul4.png', name: 'Navy Blue' },
        'option5': { path: 'silversoul5.png', name: 'Black' },
        
        // Sweet Disposition - Temper Trap options
        'option6': { path: 'sweetdisposition1.png', name: 'Yellow' },
        'option7': { path: 'sweetdisposition2.png', name: 'Orange' },
        'option8': { path: 'sweetdisposition3.png', name: 'Light Blue' },
        'option9': { path: 'sweetdisposition4.png', name: 'Pink' },
        'option10': { path: 'sweetdisposition5.png', name: 'White' },
        
        // Chop Suey - System of a Down options
        'option11': { path: 'chopsuey1.png', name: 'Red' },
        'option12': { path: 'chopsuey2.png', name: 'Dark Grey' },
        'option13': { path: 'chopsuey3.png', name: 'Brown' },
        'option14': { path: 'chopsuey4.png', name: 'Black' },
        'option15': { path: 'chopsuey5.png', name: 'Dark Red' },
        
        // It Never Entered My Mind - Miles Davis options
        'option16': { path: 'milesdavis1.png', name: 'Dark Blue' },
        'option17': { path: 'milesdavis2.png', name: 'Navy' },
        'option18': { path: 'milesdavis3.png', name: 'Light Blue' },
        'option19': { path: 'milesdavis4.png', name: 'Midnight Blue' },
        'option20': { path: 'milesdavis5.png', name: 'Royal Blue' },
        
        // Re:Stacks - Bon Iver options
        'option21': { path: 'restacks1.png', name: 'Brown' },
        'option22': { path: 'restacks2.png', name: 'Forest Green' },
        'option23': { path: 'restacks3.png', name: 'Beige' },
        'option24': { path: 'restacks4.png', name: 'Dark Green' },
        'option25': { path: 'restacks5.png', name: 'Olive' }
    };
    
    // Create a container for the circle
    const circleContainer = document.createElement("div");
    circleContainer.style.position = "relative";
    circleContainer.style.width = "400px";
    circleContainer.style.height = "400px";
    circleContainer.style.margin = "50px auto";

    // Get all selections from localStorage
    const pages = ['music1.html', 'music2.html', 'music3.html', 'music4.html', 'music5.html'];
    const selections = [];

    pages.forEach((page, index) => {
        const selection = localStorage.getItem(page);
        if (selection && imageMap[selection]) {
            selections.push({ selection, index });
        }
    });

    if (selections.length > 0) {
        selections.forEach(({ selection, index }) => {
            // Calculate position on the circle
            const angle = (index * 72) - 90; // -90 to start from the top, 72 degrees per item (360/5)
            const radius = 150; // Distance from center
            const x = radius * Math.cos(angle * Math.PI / 180);
            const y = radius * Math.sin(angle * Math.PI / 180);

            // Create and position the color element
            const colorElement = document.createElement("div");
            colorElement.style.position = "absolute";
            colorElement.style.left = `${200 + x - 40}px`; // Center point (200px) + offset - half of element width
            colorElement.style.top = `${200 + y - 40}px`; // Center point (200px) + offset - half of element height
            colorElement.style.width = "80px";
            colorElement.style.height = "80px";
            colorElement.style.display = "flex";
            colorElement.style.flexDirection = "column";
            colorElement.style.alignItems = "center";
            colorElement.style.textAlign = "center";

            // Create and style the image
            const img = document.createElement("img");
            img.src = imageMap[selection].path;
            img.alt = imageMap[selection].name;
            img.style.width = "60px";
            img.style.height = "60px";
            img.style.borderRadius = "50%";
            img.style.marginBottom = "5px";

            // Create and style the color name
            const colorName = document.createElement("span");
            colorName.textContent = imageMap[selection].name;
            colorName.style.fontSize = "12px";
            colorName.style.color = "#333";

            colorElement.appendChild(img);
            colorElement.appendChild(colorName);
            circleContainer.appendChild(colorElement);
        });

        resultContainer.appendChild(circleContainer);
    } else {
        const noSelectionsMsg = document.createElement("p");
        noSelectionsMsg.textContent = "No selections made yet. Please go back and make your selections.";
        noSelectionsMsg.style.textAlign = "center";
        resultContainer.appendChild(noSelectionsMsg);
    }
});
