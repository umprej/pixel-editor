function createPixel() {
    let grid = document.querySelector(".canvas");
    let pixel = document.createElement("div");
    let brush = document.getElementById("brush-color");
    let canvasPicker = document.getElementById("canvas-color");

    pixel.classList.add("pixel");
    pixel.style.backgroundColor = canvasPicker.value;
    pixel.addEventListener("mouseenter", event => {
        pixel.classList.add("colored");
        pixel.style.backgroundColor = brush.value;
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
    let canvasPicker = document.getElementById("canvas-color");

    pixels.forEach(pixel => {
        pixel.classList.remove("colored")
        pixel.style.backgroundColor = canvasPicker.value;
    });
}

function createClearButton() {
    let clearButton = document.getElementById("clear");
    clearButton.addEventListener('click', event => clearPixels());
}

function createResizeButton(currGridSize) {
    let resizeButton = document.getElementById("resize");
    resizeButton.addEventListener('click', event => {
        let gridSize = currGridSize;
        while(true) {
            gridSize = window.prompt("Input pixel grid size:");
            if (gridSize === null) {
                return;
            }
            if (gridSize < 100) {
                break;
            }
            window.alert("Please input a number smaller than 100");
        }

        clearPixels();
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


function addColorPickerListener() {
    let canvasPicker = document.getElementById("canvas-color");
    
    canvasPicker.addEventListener("change", (event) => {
        let pixels = document.querySelectorAll(".pixel:not(.colored)");
        pixels.forEach(pixel => pixel.style.backgroundColor = canvasPicker.value);
        
    });
}

let currGridSize = 8;
createGrid(currGridSize);
createClearButton();
createResizeButton(currGridSize);
addColorPickerListener();
