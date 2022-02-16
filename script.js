function createGrid(gridSize) {

    let grid = document.querySelector(".canvas");

    for (let i = 0; i < gridSize; i++ ) {
        for (let j = 0; j < gridSize; j++ ) {
            let pixel = document.createElement("div");
            pixel.classList.add("pixel");
            pixel.addEventListener("mouseenter", function(event) {
                event.target.style.backgroundColor = "black";
            });
            grid.appendChild(pixel);
        }
    }

    let sheet = document.createElement('style')
    let pixel_width = "1fr ";
    sheet.innerHTML = `.canvas {grid-template-columns: ${pixel_width.repeat(gridSize)}; grid-template-rows: ${pixel_width.repeat(gridSize)}`;
    document.body.appendChild(sheet);
}

let gridSize = window.prompt("Input pixel grid size:");
createGrid(gridSize);
let draw = true;