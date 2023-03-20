const gridContainer = document.querySelector(".grid-container");
const changeButton = document.querySelector("#change-size");
const newGridButton = document.querySelector("#eraser");
const defaultGridSize = 100

let gridSize = defaultGridSize
let pixelHeight = 960/gridSize

let mouseDown = false;

document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function changeColor(e) {
    if (e.type === "mouseover" && !mouseDown) {
        return;
    } else {
        e.target.style.backgroundColor = "#000000";
    }
}

// Div creation function
function createDiv() {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.style.height = pixelHeight+"px";
    pixel.style.width = pixelHeight+"px";
    pixel.addEventListener('mouseover', changeColor);
    pixel.addEventListener('mousedown', changeColor);
    pixel.setAttribute("draggable", "false")
    gridContainer.appendChild(pixel);
}

function clearGrid() {
    gridContainer.innerHTML = "";
}

function newGrid() {
    for(let i = 0; i < (gridSize * gridSize); i++){
        createDiv();
    }
}

function reloadGrid() {
    clearGrid();
    newGrid();
}



function changeSize() {
    let changedSize = parseInt(prompt("How big should the grid be?", 16));
    if(changedSize > 100){
        let changedSize = alert(`The size entered is too large, please enter a new size below 100.`);
        changeSize();
    } else {
        gridSize = changedSize;
        pixelHeight = 960/gridSize;
        reloadGrid();
    }
}

newGrid();


changeButton.addEventListener("click", changeSize);
newGridButton.addEventListener("click", reloadGrid);


