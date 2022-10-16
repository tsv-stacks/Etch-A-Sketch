const gridContainer = document.getElementById("grid-container");

generateGrid(16)

// document.getElementById("btn-change-size").addEventListener("click", promptGridSize())

function promptGridSize() {
    let customSizePrompt = prompt("Choose a new grid size between 1 - 100");
    let customSizePromptNumber = parseInt(customSizePrompt, 10)
    if (Number.isFinite(customSizePromptNumber) == true) {
        if (customSizePromptNumber >= 1 && customSizePromptNumber <= 100) {
            console.log(customSizePromptNumber)
            gridContainer.innerHTML = "";
            generateGrid(customSizePromptNumber)
        } else {
            alert("Please only choose a number between 1 and 100")
        }
    } else {
        alert("You did not enter a number.")
    }
}

function resetGrid() {
    gridContainer.innerHTML = "";
    generateGrid(16)
}

function generateGrid(num) {
    gridContainer.style.setProperty('--grid-rows', num);
    gridContainer.style.setProperty('--grid-cols', num);
    for (c = 0; c < (num * num); c++) {
        let cell = document.createElement("div");
        gridContainer.appendChild(cell).className = "grid-item";
    };

}
