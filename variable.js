/*let miEdad = 30; //Te denota el tipo de dato numerico
let miNombre = 'Emanuel'; //Te denota el tipo de dato en texto
  

//`` backticks no ayudana  la interpolacion generar un strings (utilizar el valor de una varibale para generar un string)
//sentencia linea de codigo en JS
let nombreCompleto = `<h1>Hola soy ${miNombre}</h1>`;
let esMayorDeEdad = true;
let esMenorDeEdad = false;
let noEstaDefinido = undefined;
let usuarioLoggeado = null; //almacenan variables puros  guardan referencias, guardan valores como tal 

let carro = {
    motor:  true,
    color: 'negro',
    llantas: 4,
    puertas: 4,
    pasajeros: {
        aldo:{
            edad: 30,
            nombre: 'Emanuel'
        }
    }

} //de tipo objeto se pone con llavez (obejto que tiene propiedades, de diferentes valores, numericos, booleanos strings)

let miniCooper = carro;

console.log(carro.color)
console.log(carro.pasajeros.aldo.edad)//Acceder a las propiedades de los objetos
console.log(carro['pasajeros']['aldo']['edad'])//Acceder a las propiedades de los objetos

let arreglo = []; //la varioable quese llama arreglo almacenan la referencia, coleccion de datos

let canastaFruta = ['manzanas', 'durazno', 'uvas'];
console.log(canastaFruta.length);


//Operadores
/*  el operador de asignacion =,      

operadores aritmeticos
let var1 = 'Emanuel';
let var2 = 'Salas';
console.log(var1 + var2);
var1 + var2
+ - * / % **

++ --

typeof  */
//IFF
/*
let numero1 = 4;
let numero2 = 2;

console.log(numero1 >= numero2){
if (numero1 >= numero2)
console.log ('numero1 es mayor que numero dos')}
else if (numero1 <= numero2){
console.log ('numero2 es mayor que numero1')}
else if (numero1 == numero2){
console.log ('numero1 y numero2 son iguales')}
*/


