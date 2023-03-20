const gridContainer = document.querySelector(".grid-container");

// Div creation function
function createDiv() {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.setAttribute("style", "height: 10px; width: 10px;");
    pixel.addEventListener('mouseover', changeColor);
    pixel.addEventListener('mousedown', changeColor);
    gridContainer.appendChild(pixel);
}

let gridSize = parseInt(prompt("How big should the grid be?", 16))

for(let i = 0; i < (gridSize * gridSize); i++){
    createDiv();
}

const gridSquare = document.querySelector(".grid-square");

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
