let size;
let sizePrev;
const container = document.querySelector('.container');

let colorTrigger = false;

container.addEventListener('mousedown', () => {      
    colorTrigger = true;  
});   

container.addEventListener('mouseup', () => {      
    colorTrigger = false;  
});

function draw(){
    let coloredRowElements = document.querySelectorAll('.row');
    color = document.getElementById("color").value;
    for (let coloredRowElement of coloredRowElements){
        coloredRowElement.addEventListener('mousedown', () => {
            coloredRowElement.style.backgroundColor = color;             
        })  
        coloredRowElement.addEventListener('mousemove', () => {
            if (colorTrigger)
            coloredRowElement.style.backgroundColor = color;
                     
        })

    }            
}

function drawSquare(){
    size = Number(document.getElementById("range").value);
    sizePrev = size;                         // Value for field cleaner
    for (let j=1; j <= size; j++){
        const column = document.createElement('div');
        column.classList.add('column');
        container.appendChild(column);   
        for (let i=1; i <= size ; i++) {
            const rowElement = document.createElement('div');
            rowElement.classList.toggle('row');  
            column.appendChild(rowElement);
        }
    }
    draw();
}

  drawSquare()

const clearButton = document.querySelector('.clearButton');
const acceptButton = document.querySelector('.acceptButton');
const changeButton = document.querySelector('.changeButton');

clearButton.addEventListener('click', () => {      
    clearField();
    drawSquare();    
});   

acceptButton.addEventListener('click', () => {   
    size = Number(document.getElementById("range").value);
    clearField();
    drawSquare(); 
});   

const changeRange = document.querySelector('#range');
const textSizePanel = document.querySelector('.textSizePanel');

changeRange.addEventListener('change', () => {
    let sizeVal = document.getElementById("range").value;
    textSizePanel.textContent = sizeVal + ' x ' + sizeVal;
});


changeButton.addEventListener('click', () => { 
    draw()
});  

function clearField(){
    for (let j=1; j <= sizePrev; j++){
        const column = document.querySelector('.column')
        container.removeChild(column);
    }
}

//const randColor = () => {
//    const randomColor = Math.floor(Math.random()*16777215).toString(16);
//    document.body.style.backgroundColor = "#" + randomColor;
//}
  


