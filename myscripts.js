const gridContainer = document.getElementById("grid-container");
let num = 16;
var customGridNumber = document.getElementById("grid-box-amount").value

console.log(customGridNumber)

generateGrid(16)

function customGrid() {
    console.log(customGridNumber)
    if (customGridNumber < 1 || customGridNumber > 100) {
        window.alert("Please only choose a number from 1 to 100!")
    } else {
        generateGrid(customGridNumber)
    }

}

function generateGrid(num) {
    gridContainer.style.setProperty('--grid-rows', num);
    gridContainer.style.setProperty('--grid-cols', num);
    for (c = 0; c < (num * num); c++) {
        let cell = document.createElement("div");
        gridContainer.appendChild(cell).className = "grid-item";
    };

}
