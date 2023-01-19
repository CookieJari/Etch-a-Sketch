var mouseDown = false;

const bod = document.querySelector('html');
bod.onmousedown = ()=>{ mouseDown = true; console.log(mouseDown)};
bod.onmouseup = ()=> {mouseDown = false; console.log(mouseDown)};

//Get the container of the grid
const container = document.querySelector('.grid-container');




const btn = document.querySelector('.btn');
btn.onclick= ()=> click();

CreateGrid(16);

function Click(div){
    div.setAttribute('style', 'background-color:black;');
    div.onmouseleave = ()=> pass;



}

function CreateGrid(size){

    container.setAttribute('style', 'grid-template-columns: repeat('+size+',1fr);')

    for (let row = 1; row <= size; row++) {
    
        for (let index = 1; index <= size; index++){
            divname = 'div'+index;
            const div = document.createElement('div');
            
    
            div.classList.add(divname);
            div.classList.add('cell');
            
            div.addEventListener('mouseover',ChangeColor);
            


            /*
            if(row===1)
            div.textContent = index;
            else if (index===1)
            div.textContent =row;
            else
            div.textContent = '';
            */
            container.appendChild(div);
        }
    }
}
function ChangeColor(e){
    if (e.type === 'mouseover' && mouseDown ) {
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