//Clase #3
//Funciones Declarativa
//de expresion let generarNombreCompleto = function(texto1, texto2){}

function generarNombreCompleto(texto1, texto2) {  //dentro de parentesis se llaman parametros cuando se estan declarando
    console.log (texto1 +' '+ texto2);
    console.log (`${texto1} ${texto2}`);
}

let nombre ='Emanuel';
let apellido = 'Salas';

generarNombreCompleto(nombre, apellido); //ejecucion de mi funcion cuando se ejecuta la funcion se llaman argumentos


function multiplicar (numero1, numero2) {
    let resultado = numero1 * numero2;
    console.log (`El Resultado de la Multiplicacion es : ${resultado}`);
    return resultado;

};
let resultado = multiplicar(10, 5);






let miVariableEsFunction = function(){}







let arrowFunction = () => {

};

let objeto = { //ejemplo de programacion dinamica
    saludar: function(){
        console.log('Hola')
    }
}
objeto['saludar']();

//un metdoo le pertece a un objeto  (propiedad de un object)
//arrow function pueden ser mas compactan se definen por flechas y el mayor

// Crear una funcion que sume 2 numeros y regrese el resultado
let suma = function(numUno, numDos){
    let resultado = numUno + numDos;
    return resultado;
}

console.log(suma(5, 5));
console.log(`El resultado de la suma es: ${suma(5, 5)}`)

//function sumaDosNumeros




//Crear una funcion que recibe un nombre, que devuelve saludo por nombre y si provee saludo simplemente por amigo
let saludo = function( saludar = "amigo" ){
    return `Hola ${saludar}`;
}

console.log( saludo('Fanny') );
console.log( saludo() );

let saludo2 = ( saludar = "amigo" ) => `Hola ${saludar}`;

console.log( saludo2('Fanny') );
console.log( saludo2() );


//generar una funcion que imprima cada valor dentro de un arreglo con while.

const frutas = ['manzana', 'platano', 'fresa', 'melon'];




//for un bucle for se repite hasta que una condicion especifica se evualua como falso.
//el bucle for de js es similar al bucle for de java y c.

function imprimirFrutas(frutas){
    for(let i = 0; i <= frutas.length - 1; i++){
        console.log(frutas[i]);

    }
}

/* for in 
let people = {
    name: 'Emanuel',
    age: 30,
    sex: 'man',
}
for (const key in people){
    console.log(key);  si pongo (persona[llave]);
}

}

for of
crea un ciclo que itera sobre objetos iterables 
(incluidos, array, map, set, argtuments, object etc.)
que ejecutan acciones con los valores obtenidos en
cada iteracion.

for (const i of arreglo) {
    console.log(i); // logs
}

let frutasPreferidas = ['manzana amarilla', 'platano', 'mango', 'sandia']; longitud=4 for of trabaja a travez de los valores
for(const llave of persona) {
    console.log(llave);
}


arrow function
forma de generar una funcion de forma compacta
son expresiones o expresion de funcion 
cuando un arrow funciont tiene un parametro podemos omitir los parentesis


const saludar = (nombre) => {
    console.log(`Hola ${nombre}`);
};
saludar('Emanuel')



const arrowFunction = () => {

};


*/                                                                                                                                     