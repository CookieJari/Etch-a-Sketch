//Get the container of the grid
const container = document.querySelector('.grid-container');


for (let row = 1; row <= 16; row++) {
    
    for (let index = 1; index <= 16; index++){
        divname = 'div'+index;
        const div = document.createElement('div');
        container.appendChild(div);

        div.classList.add(divname);
        div.classList.add('cell');

        /*
        if(row===1)
        div.textContent = index;
        else if (index===1)
        div.textContent =row;
        else
        div.textContent = '';
        */
       
    }
    

}
