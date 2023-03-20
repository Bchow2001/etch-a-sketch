const gridContainer = document.querySelector(".grid-container");

// Div creation function
function createDiv() {
    const childDiv = document.createElement("div");
    childDiv.classList.add("grid-square");
    childDiv.setAttribute("style", "border: 2px solid red; height: 10px; width: 10px;");
    gridContainer.appendChild(childDiv);
}

let gridSize = parseInt(prompt("How big should the grid be?", 16))

for(let i = 0; i < (gridSize * gridSize); i++){
    createDiv();
}

const gridSquare = document.querySelector(".grid-square")

function coloring(e){
    console.log(e);
    gridSquare.classList.add("pixel");
}
    

// Listens for mouse down then adds mouse over event listener
gridContainer.addEventListener("mousedown", () => {
    gridContainer.addEventListener("mouseover", coloring);
  });
// On mouseup remove listener for mouse over
window.addEventListener("mouseup", () => {
    gridContainer.removeEventListener("mouseover", coloring);
  });