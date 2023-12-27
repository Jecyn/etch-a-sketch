let gridSize = 16
const page = document.querySelector('#grid-container');

function createGrid(size){
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let div = createDiv()
            div.textContent = i;
            page.appendChild(div)
            
        }
        
    }
}

function createDiv(){
    let square = document.createElement('div');
    square.classList.add('grid-square')
    return square
}

createGrid(16)
