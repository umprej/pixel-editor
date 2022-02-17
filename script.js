function createPixel() {
    let grid = document.querySelector(".canvas");
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.addEventListener("mouseenter", event => {
        pixel.classList.add("colored");
    });
    grid.appendChild(pixel);
}

function changeGridColumnCount(count) {
    let sheet = document.createElement('style')
    let pixel_width = "1fr ";
    sheet.innerHTML = `.canvas {grid-template-columns: ${pixel_width.repeat(count)}; grid-template-rows: ${pixel_width.repeat(count)}`;
    document.body.appendChild(sheet);
}

function createGrid(gridSize) {

    for (let i = 0; i < gridSize; i++ ) {
        for (let j = 0; j < gridSize; j++ ) {
            createPixel();
        }
    }

    changeGridColumnCount(gridSize);
}

function clearPixels() {
    let pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => pixel.classList.remove("colored"));
}

function createClearButton() {
    let clearButton = document.getElementById("clear");
    clearButton.addEventListener('click', event => clearPixels());
}

function createResizeButton() {
    let resizeButton = document.getElementById("resize");
    resizeButton.addEventListener('click', event => {
        clearPixels();
        let gridSize = currGridSize;
        while(true) {
            gridSize = window.prompt("Input pixel grid size:");
            if (gridSize < 100) {
                break;
            }
            window.alert("Please input a number smaller than 100");
        }

        const pixels = document.getElementsByClassName("pixel");
        let pixelCount = Math.pow(gridSize, 2);
        let currPixelCount = Math.pow(currGridSize, 2);
        

        while(pixelCount < currPixelCount){
            pixels[0].parentNode.removeChild(pixels[0]);
            currPixelCount--;
        }

        while(pixelCount > currPixelCount){
            createPixel();
            currPixelCount++;
        }

        currGridSize = gridSize;
        changeGridColumnCount(gridSize);
    });
}

var currGridSize = 8;
createGrid(currGridSize);
createClearButton();
createResizeButton();