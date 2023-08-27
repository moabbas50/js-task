let h1 = document.querySelector('h1');
let button1 = document.querySelectorAll('button');



function click1(){
    h1.style.color = 'red'
}
function click2(){
    h1.style.color = 'green'
}
function click3(){
    h1.style.color = 'blue'
}

button1[0].addEventListener('click' , click1)
button1[1].addEventListener('click' , click2)
button1[2 ].addEventListener('click' , click3)


let btn = document.querySelectorAll('.btn');
let maindiv = document.querySelector('body');

function style1 (){
     maindiv.style.background ='black';
     maindiv.style.color ='white' ;
     btn[1].classList ="btn-light";
}
 
function style2 (){
    maindiv.style.background ='white';
    maindiv.style.color ='black';
    btn[1].classList='btn-rem'
    btn[0].classList ="btn-dark";
}



//  function style1(){

//     if(maindiv.classList.contains('dark')){
//         maindiv.classList.remove('dark');
//         btn[1].classList ="btn-rem";

//     }
//     else{
//         maindiv.classList.add('dark');
//         btn[0].classList ="btn-light";
//         btn[1].classList ="btn-dark";

//     }
//  }
//  function style1(){
//     if(maindiv.classList.contains('dark')){
//         btn[1].classList ="btn-rem";
//         btn[0].classList ="btn-dark";
//     }
//     else{
//         btn[1].classList ="btn-dark";
//         btn[0].classList ="btn-light";
//     }
//         maindiv.classList.toggle('dark');
//  }

btn[0].addEventListener('click' , style1 )
btn[1].addEventListener('click' , style2 )

let input = document.querySelectorAll('input');


function get (){
    let value1 = input[0].value;
    let value2 = input[1].value;
    maindiv.style.backgroundColor = value1;
    maindiv.style.color = value2;
}
btn[2].addEventListener('click',get);

