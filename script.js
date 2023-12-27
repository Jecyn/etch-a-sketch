const page = document.querySelector('#grid-container');

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
    square.addEventListener("mouseover", changeColor)
    return square
}

function changeColor(e){
    e.target.style.backgroundColor = 'darkgreen'
}

createGrid(16)


