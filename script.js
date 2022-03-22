const container = document.querySelector('.container');
let size;
let sizePrev;

function drawSquare(){
    size = document.getElementById("size").value;
    sizePrev = size;                         // Value for field cleaner
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

const clearButton = document.querySelector('.clearButton');
const acceptButton = document.querySelector('.acceptButton');
const changeButton = document.querySelector('.changeButton');
const coloredRow = document.querySelectorAll('.coloredRow');

clearButton.addEventListener('click', () => {      
    clearField();
    drawSquare();    
});   

acceptButton.addEventListener('click', () => {   
    size = document.getElementById("size").value;
    enterSize();  
});   

changeButton.addEventListener('click', () => {   
    color = document.getElementById("color").value;
    coloredRow.style.backgroundColor = color;
    ;     
});   

function clearField(){
    for (let j=1; j <= sizePrev; j++){
        const column = document.querySelector('.column')
        container.removeChild(column);
    }
}

const notValid = document.querySelector('.notValid');

function enterSize(){
    if (size > 0 && size < 101){
        clearField();
        drawSquare();
        notValid.textContent = ''; 
    }
    else {   
        notValid.textContent = 'Not valid value';
    } 
} 








function changeColor(){

}

const randColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}
  


