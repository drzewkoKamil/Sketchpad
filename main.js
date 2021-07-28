const container = document.querySelector("#container")
let currentGridSize = 20

function createDivs(gridSize) {
    const cells = document.querySelectorAll(".content");
    cells.forEach(cell => {
        cell.remove()
    });
    for (let i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement("div");
        div.classList.toggle("content")
        div.addEventListener("mouseover", function () {
            div.classList.add("contentNewBackground")
        })
        container.appendChild(div);
        currentGridSize = gridSize
    }
}


function reset() {
    const cells = document.querySelectorAll(".contentNewBackground")
    cells.forEach(cell => {
        cell.classList.remove("contentNewBackground")
    })
    createDivs(changeGridSize())
}

function changeGridSize() {
    let gridSize = parseInt(prompt("How many squares would you like to see?", "20"))
    while (gridSize > 100 || gridSize < 1) {
        gridSize = parseInt(prompt("How many squares would you like to see?", "20"))
    }
    if (isNaN(gridSize)) {
        gridSize = currentGridSize
    }
    let cellWidth = 800 / gridSize;
    document.getElementById("container").style.gridTemplateColumns = `repeat(${gridSize}, ${cellWidth}px)`;
    document.getElementById("container").style.gridTemplateRows = `repeat(${gridSize}, ${cellWidth}px)`;
    return gridSize
}

createDivs(20)