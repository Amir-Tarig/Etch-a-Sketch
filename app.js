//creating a grid and append it to the container
function creatDiv (cols,rows){
    const container = document.querySelector(".container");
    container.style.setProperty('--rows', rows);
    container.style.setProperty('--cols', cols);
    for(let i = 0; i < (cols * rows); i++){
        const box = document.createElement('div');
        box.classList.add('box');
        container.appendChild(box);
    }
}
creatDiv(16,16);

//a function to remove the divs when reseting 
function removeGrid (){
    const boxs = document.querySelectorAll('.box');
    boxs.forEach(box => {
        box.remove();
    });
}


//function to generate an RGB colors
function ganerateRGB (){
    const R = Math.floor(Math.random() * 256).toString(); 
    const G = Math.floor(Math.random() * 256).toString();
    const B = Math.floor(Math.random() * 256).toString();
    const color = `rgb(${R},${G},${B})`;
    return color;
}

//function for the colors button 
function Colors(){
    const boxs = document.querySelectorAll('.box');
    const btn = document.querySelector(".btn3");
    btn.addEventListener('click', () =>{
        boxs.forEach(box =>{
           box.addEventListener('mouseover',() =>{
            box.style.backgroundColor = ganerateRGB();
            box.style.boxShadow = ` 0px 0px 10px ${ganerateRGB()},
                                    0px 0px 20px ${ganerateRGB()}`;
           });
        });
    });
}
Colors();

//function for the black color button 
function blackColor(){
    const boxs = document.querySelectorAll('.box');
    const btn = document.querySelector(".btn1");
    btn.addEventListener('click', () =>{
        boxs.forEach(box =>{
           box.addEventListener('mouseover',() =>{
            box.style.background = "black";
            box.style.boxShadow = `0 0 20px  #ecf0f1`;
            
           });
        });
    });
}
blackColor();

//function for the grey color button 
function greyColor(){
    const boxs = document.querySelectorAll('.box');
    const btn = document.querySelector(".btn2");
    btn.addEventListener('click', () =>{
        boxs.forEach(box =>{
           box.addEventListener('mouseover',() =>{
            box.style.background = "grey";
            box.style.boxShadow = `0 0 20px  #ecf0f1`;
            
           });
        });
    });
}
greyColor();

//a function for the reset button
//calling all other functions to work after reseting 
function reset(){
    const btn = document.querySelector('.btn');
    btn.addEventListener('click',() =>{
        let user = prompt('Choose Your Grid Size?');
        if(user === null || user < 1){
            removeGrid();
            creatDiv(16,16);
            //changeColor();
            blackColor()
            greyColor();
            Colors();
        }else{
            removeGrid();
            creatDiv(user,user);
            //changeColor();
            blackColor();
            greyColor();
            Colors();
        }
    });
}
reset();