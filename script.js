function createGrid(gridSize) {
    let grid = document.querySelector(".canvas");

    for (let i = 0; i < gridSize; i++ ) {
        for (let j = 0; j < gridSize; j++ ) {
            let pixel = document.createElement("div");
            pixel.classList.add("pixel");
            grid.appendChild(pixel);
        }
    }

}

let gridSize = window.prompt("Input pixel grid size:");
createGrid(gridSize);

var sheet = document.createElement('style')
let pixel_width = "1fr ";
sheet.innerHTML = `.canvas {grid-template-columns: ${pixel_width.repeat(gridSize)}; grid-template-rows: ${pixel_width.repeat(gridSize)}`;
document.body.appendChild(sheet);