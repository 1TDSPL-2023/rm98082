//diferença var , let e const

//CONST >
//1 REGRA: Na declaração você é obrigado a inicializar a constante
//2 REGRA: Não se pode alterar o conteudo de uma const. durante o fluxo do programa
// const PI = 3.14;


//VAR E LET
// var nome = "Mariana";
// let nome2 = "Matheus";

// if(nome != ""){
//     var nome = "Leonardo";

// }

// console.log(nome);




// //Atrelando o evento click ao elemento h2
// const h2Element = document.getElementById("titulo");
// //Math funvao matematica...
// //os metodos floor, round, ceil arredondam os numeros
// //o metodo random retorna um numero entre 0 e 1. Ex:  0.1 ; 0.2
// h2Element.addEventListener( "click", ()=>{
//     let r = ""
//     let g = ""
//     let b = ""

//     r = Math.round(Math.random()*255);
//     g = Math.round(Math.random()*255);
//     b = Math.round(Math.random()*255);

//     // h2Element.setAttribute("style", "color:rgb("+r+","+g+","+b+");
//     h2Element.setAttribute("style", `color:rgb(${r}, ${g}, ${b});`);
//     h2Element.textContent = "Novo Titulo"    
    
// });


// let fruta = "Melão";
// console.log(fruta);

//ARRAY Sao collections
// let frutas = ["Uva","pera","Melancia"];
// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);
// console.log("Tamano do Array: " + frutas.length);


//adiccionando um novo elemento no final do array
///utilizando o metodo push
// frutas.push("Banana");
// frutas.push("Laranja");
// // console.log(frutas)
// console.table(frutas);

//removendo um item do final do array com o metodo pop();

// frutas.pop();
// console.log(frutas);

//removendo um item do inicio da array usando shift

// frutas.shift();
// console.table(frutas);


//Adicionando elemento no inicio da array
//Utilizando o metodo unshift(item);
// frutas.unshift("Maracujá");
// frutas.unshift("Kiwi");

// console.table(frutas)


//realizar uma busca de um item no aarray uttilizando o metodo indexOf

// let indice = frutas.indexOf("pera")
// console.log(frutas[indice]);

 //Removendo item atraves do indice do array com o metodo splice(indicie , ) 

//  let indice = frutas.indexOf("pera");
//  frutas.splice(indice, 1)
//  console.table(frutas);


//Iterando Arrays

// let frutas = ["uva","laranja","banana","maçã","kiwi","abacate"];

// console.log(`Minhas Frutas: ${frutas}`);

// frutas.forEach((fruta)=>{
//     console.log(fruta);
// });

// let nr1 = [1,2,3,4,5];
// let nr2 = [6,7,8,9,10];


// //Ao inves de concatenar os arrays, vamos utilizar o operador SPREAD(...) para melhorar.
// //Concatenação de Arrays
// // let nr3 = [nr1 , nr2];
// let nr3 = [...nr1 , ...nr2];



// //Imprimindo o novo array concatenado
// console.log("Novo Array:  " + nr3);
// //Aplicando o forEach no novo Array

// nr3.forEach((nr)=>{
//     console.log("Itens do novo Array: " + nr);
// });

//converter HTMLelemnts em array
// const aElements = document.getElementsByTagName("a");
// const aElementsArray = [...aElements];
// console.log(aElementsArray);
// //imprimindo aatributos dos elementos recuperados...
// aElementsArray.forEach((a)=>{
//     console.log(a.innerHTML);
// });

//CONVERTER EM ARRAY

// const imgElements = [...document.querySelectorAll(".conteudo img")];

// imgElements.forEach( (img)=>{
//         img.setAttribute("style","width:20%;")
// });

const inputUser = document.querySelector("input[type='email']");

inputUser.addEventListener("focus", ()=>{

        inputUser.setAttribute("style","outline-color: #ff0000");

});


inputUser.addEventListener("keyup", ()=>{

        const lblUser = document.querySelector("label[for='idEmail']");
        

        if(inputUser.value.length < 5){
                lblUser.innerHTML = "<span style = 'color: #ff0000;'>Email:(Minimo de 5 caractéres)</span>"
                inputUser.setAttribute("style","outline-color: #ff0000");
        }else{
                lblUser.innerHTML = "<span style = 'color: #00ff00;'>Email</span>"
                inputUser.setAttribute("style","outline-color: #00ff00");  
        }
});


const eyePass = document.querySelector(".fa-eye");

eyePass.addEventListener("click", ()=>{
        const inputPass = document.querySelector("#idPass");
        //Alterar a type
        if(inputPass.getAttribute('type') == "password"){
                eyePass.setAttribute('class', 'fa fa-eye-slash')
                inputPass.setAttribute("type","text");
        }else{
                eyePass.setAttribute('class', 'fa fa-eye')
                inputPass.setAttribute("type","password");
        }


});

