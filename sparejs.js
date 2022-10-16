
document.getElementById("btn-grid-size").addEventListener("click", customGrid())

function customGrid() {
    let customGridNumber = parseInt(document.getElementById("grid-box-amount").valueAsNumber)
    console.log(customGridNumber)
    if (customGridNumber < 1 || customGridNumber > 100) {
        window.alert("Please only choose a number from 1 to 100!")
    } else {
        let num = customGridNumber
        gridContainer.innerHTML = "";
        generateGrid(num)
    }

}
