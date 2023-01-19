// WE take a global mousedown so that the user can hold and draw
var mouseDown = false;

const bod = document.querySelector('html');
bod.onmousedown = ()=>{ mouseDown = true; console.log(mouseDown)};
bod.onmouseup = ()=> {mouseDown = false; console.log(mouseDown)};

//Get the container of the grid
const container = document.querySelector('.grid-container');

//get the button and add a thing
const btn = document.querySelector('.btn');
btn.onclick= ()=> click();

//fire the default 16x16 grid
CreateGrid(16);


function CreateGrid(size){

    container.setAttribute('style', 'grid-template-columns: repeat('+size+',1fr);')

    for (let row = 1; row <= size; row++) {
    
        for (let index = 1; index <= size; index++){
            divname = 'div'+index;
            const div = document.createElement('div');
            
            div.classList.add(divname);
            div.classList.add('cell');
            
            div.addEventListener('mouseover',ChangeColor);
            div.addEventListener('mousedown',ChangeColor);

            container.appendChild(div);
        }
    }
}

function ChangeColor(e){
    if (e.type === 'mouseover' && mouseDown ) {
        e.target.style.backgroundColor = 'black';
    }
    else if(e.type==='mousedown'){
        e.target.style.backgroundColor = 'black';
    }
}

function ClearGrid(){
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

function click(){
    amt = prompt("Enter how many boxes per side");
    if(amt<101){
        ClearGrid();
        CreateGrid(amt);
    }
    else
        alert("Number too big");
    
}