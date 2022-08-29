console.log(Array.prototype);

let array1 = [0,1,2,3,4,5];
let array2 = [0,1,2,3,4,5];

'aldo@gmail.com'.toUpperCase

const newArray = array1.concat(array2);
console.log(newArray);


Array.prototype.concat = function (array){
    const newArray [];
    console.log('este es el chido')
    //this = array1;
    return[...this, ...array];
}

const otherArray = array1.concat(array2);
console.log(otherArray);






const flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    passengers: [{
        name: 'aldo',
        edad: 30
    }, {
        name: 'Juan',
        edad: 30
    },
    {
        name: 'Alberto',
        edad: 30
    },
    {
        name: 'Judith',
        edad: 30
    }]
};


let schedules = ['09:00', '10:00', '11:00', '12:00'];

let array = ['Aldo sale a las 09:00', 'Aldo sale a las 09:00', 'Aldo sale a las 09:00', 'Judith sale a las 12:00']


function parseFlight(vuelo){
    //arreglo
    let newArray = [];
    for (const passenger of vuelo.passengers){
        newArray.push (passenger.name);
    }
    return newArray;
}

console.log (parseFlight(flight));

let arreglo = parseFlight(flight);


function concatenarArreglos(array1, array2){
    return array.concat(array2);
}
console.log(concatenarArreglos(passengers, schedules));










function myPassengers(m){
    this [flight.passengers] = m;
}

myPassengers.prototype.valueOf = function(){
    return this.passengers;
};

const despliegue = new myPassengers (4);
console.log(despliegue + schedules);




// 1.- Funcion que se encargue de parsear el objeto flight
// 2.- Funcion que concatene los elementos(arreglos)
// 3.- Que mande llamar las dos funciones anteriores 
// 4.- El resultado debe ser algo parecido a lo siguiente
// let array = ['Aldo sale a las 09:00', 'Aldo sale a las 09:00', 'Aldo sale a las 09:00', 'Judith sale a las 12:00']


//push sirve agregar un elemento a un arreglo al final
//pop todo lo contrario a un push (quita el ultimo elemento del arreglo)
//unshift agrega uno o mas elemento al inicio del array, y devuelve la nueva longitud del array
//shift elimina el primer elemento del array

//sort ordenar los datos dentro de un arreglo

Array.prototype.unshift=function(){
    let newArray = [];
    for (const argument in arguments){
        arguments[`${argument}`];
    }
    console.log(arguments);
}

let arreglo = [0,1];
arreglo.unshift(-2,-1);






//Retornar un objeto con los nombres de los usuarios ordenados por edad, de mayor a menor
const users = [{name: ‘aldo’, age: 18}, {name: ‘magaly’, age: 30},{name: ‘alfonso’, age: 20}, {name: ‘jesus’, age: 50}, {name: ‘alberto’, age: 10}];
const result = {
    0: ‘aldo’,
    1: ‘magaly’,
    2: ‘alfonso’,
    3: ‘jesus’,
    4: ‘alberto’
};


//Expresiva y Declaratica
const autos = [

];

const obj = {
    edad: 10,
    imprimirEdad: function(){
        console.log(edad);
    }
}


function suma (variable1, variable2){
    let resultado = variable1 + variable2;
    return resultado;
}

console.log(suma(10, 10)); //lo que esta dentro del parentesis se llaman argumentos y es la manera en la que 
//se ejecuta una funcion, se declara con el nombre de la funcion -> parentesis y el nombre de parametros que
//tu quieras.


//declarativa
function carro(parametro){ ///parametro es cuando se esta declarando

}

//expresion
let auto = function(){

}

//callback funcion que se pasa como argumento en otra funcion.





Array.prototype.filter
Array.prototype.unshift
Array.prototype.push
Array.prototype.pop
Array.prototype.sort
Array.prototype.slice
Array.prototype.filter
Array.prototype.find
Array.prototype.map
Array.prototype.reduce



const autos = [
    {marca: 'BMW',  modelo: 'Serie 3', year: 2012, precio: 30000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A4',  year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2015, precio: 20000, puertas: 2, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A6',  year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2016, precio: 70000, puertas: 4, color: 'Rojo', transmision: 'automatico'},
    {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2015, precio: 25000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Chevrolet', modelo: 'Camaro',  year: 2018, precio: 60000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2017, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A3',  year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2012, precio: 25000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2018, precio: 45000, puertas: 4, color: 'Azul', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2019, precio: 90000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2015, precio: 35000, puertas: 2, color: 'Azul', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 3',  year: 2018, precio: 50000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2017, precio: 80000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2018, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A4',  year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico'}
];

functionordenarAutos(autos){
    let compare = function (){};
    autos.sort();
    return autos;
}

let autosOrdenados = ordenarAutos(autos);
console.log(autosOrdenados);



const frutas = ['bananana', 'manzana', 'fresa'];

function callback (itemActual){
    if (itemActual === 'banana') {}
}

let arregloResultante = frutas.filter(callback);



let students = [
    {
      name: 'Alvaro',
      score: 10,
    },
    {
      name: 'Daniel',
      score: 16,
    },
    {
      name: 'Alexys',
      score: 12,
    },
    {
      name: 'Rafa',
      score: 17,
    },
    {
      name: 'Alejandro',
      score: 8,
    },
    {
      name: 'Sofia',
      score: 9,
    }
  ];

  let alumnosAprob = students.filter((stud) =>{
    function 
  })






  function areaDelCuadrado(valor1, valor2){
    let area = valor1 * valor2;
    return area;
  }

console.log(areaDelCuadrado(10, 20)); 

//generar objeto literal
let carro = {
    puertas: 4,
    color: 'gris',
    electrico: false,
    acelerar: () => {
        console.log(this.color);
    }
}
carro.acelerar();


//funcion constructura, nos ayuda a constuir el objeto


//Estrucutura de una IIFE
(function() {

})();


//usar let cundo el valor de mi variable va cambiar

//primer elemento que tenga la caracteristica que busco sera find

const autos = [
    {marca: 'BMW',  modelo: 'Serie 3', year: 2012, precio: 30000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A4',  year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2015, precio: 20000, puertas: 2, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A6',  year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2016, precio: 70000, puertas: 4, color: 'Rojo', transmision: 'automatico'},
    {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2015, precio: 25000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Chevrolet', modelo: 'Camaro',  year: 2018, precio: 60000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2017, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A3',  year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2012, precio: 25000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2018, precio: 45000, puertas: 4, color: 'Azul', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2019, precio: 90000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2015, precio: 35000, puertas: 2, color: 'Azul', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 3',  year: 2018, precio: 50000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2017, precio: 80000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2018, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A4',  year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico'}
];


const  mercedez = autos.find(function (auto){
    if (auto.marca === 'Mercedes Benz'){
        return auto;
    }
});

console.log(mercedez);