let colorTrigger = false;

const container = document.querySelector('.container');

container.addEventListener('mousedown', () => {      
    colorTrigger = true;  
});   

container.addEventListener('mouseup', () => {      
    colorTrigger = false;  
});

function draw(){                                                 //draw function with current color
    let coloredRowElements = document.querySelectorAll('.row'); //Create list of grid elements
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

let size;
let sizePrev;

function drawSquare(){                  // draw grid function(column-direction flexbox of row-direction flexboxes) 
    size = Number(document.getElementById("range").value);
    sizePrev = size;                    // Value for field cleaner
    
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

  drawSquare() //initial grid buiding

const clearButton = document.querySelector('.clearButton');
const acceptButton = document.querySelector('.acceptButton');
const changeButton = document.querySelector('.changeButton');

clearButton.addEventListener('click', () => {             
    clearField();
    drawSquare();    
});   

acceptButton.addEventListener('click', () => {              //change grid size button
    size = Number(document.getElementById("range").value);
    clearField();
    drawSquare(); 
});   

const changeRange = document.querySelector('#range');
const textSizePanel = document.querySelector('.textSizePanel');

changeRange.addEventListener('change', () => {              //change grid size info field
    let sizeVal = document.getElementById("range").value;
    textSizePanel.textContent = sizeVal + ' x ' + sizeVal;
});


changeButton.addEventListener('click', () => {       //change color button
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
  


