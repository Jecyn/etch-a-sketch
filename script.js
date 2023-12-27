const page = document.querySelector('#grid-container');
const gridSizeButton = document.querySelector("#grid-size-button")
const totalGridSize = 480

let currentGridNumber = 16

gridSizeButton.addEventListener('click', resetGrid)

function createGrid(size){
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let div = createDiv(size)
            page.appendChild(div)
        }
    }
}

function createDiv(size){
    let square = document.createElement('div');
    square.classList.add('grid-square')
    square.style.width = totalGridSize / size + 'px'
    square.style.height = totalGridSize / size + 'px'
    square.addEventListener("mouseover", changeColor)
    return square
}

function changeColor(e){
    let randomr = Math.floor(Math.random() * 256)
    let randomg = Math.floor(Math.random() * 256)
    let randomb = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${randomr}, ${randomg}, ${randomb})`
    
}

function setGridNumber() {
    input = prompt("Please type in a grid size from 0 to 100: ")
    if (input > 100){
        currentGridNumber = 100

    }
    else{
        currentGridNumber = input
    }
    console.log(currentGridNumber)
}

function resetGrid() {
    clearGrid()
    setGridNumber()
    createGrid(currentGridNumber)
}

function clearGrid(){
    page.innerHTML = ''
}

createGrid(currentGridNumber)


