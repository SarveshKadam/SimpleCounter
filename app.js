
let display = document.querySelector(".value");
let value = parseInt(display.textContent);


document.querySelector(".increase").addEventListener('click',()=>{
    increement();

})

document.querySelector(".reset").addEventListener('click',()=>{
        init();
})

document.querySelector(".decrease").addEventListener('click',()=>{
    decrement();
})


function init(){
    value = 0;
    display.textContent = 0;
}

function increement(){
    value = value + 1;
    display.textContent = value;
}

function decrement(){
    value = value -1;
    display.textContent = value;
}