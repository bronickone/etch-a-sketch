const container = document.querySelector('.container');
let size = 16;

function drawSquare(){
    for (let j=1; j <= size; j++){
        const column = document.createElement('div');
        column.classList.add('column');
        container.appendChild(column);   
        for (let i=1; i <= size ; i++) {
            const rowElement = document.createElement('div');
            rowElement.classList.add('row');  
            column.appendChild(rowElement);
            rowElement.addEventListener('mousemove', () => {
                rowElement.classList.add('coloredRow');
            });   
        }
    }
}

drawSquare();

const clearButton = document.querySelector('.clear');

function clearField(){
    for (let j=1; j <= size; j++){
        const column = document.querySelector('.column')
        container.removeChild(column);
    }
}

clearButton.addEventListener('click', () => {   
    clearField();
    size = prompt('Enter Size');
    drawSquare();  
});   




