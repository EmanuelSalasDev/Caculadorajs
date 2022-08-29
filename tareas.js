/* Crear una funcion que altere el valor de 
una variable global cada que se ejecuta (no debe retornar nada).*/

function global(){
    let
}




/*Crear una funcion que reciba un parametro de tipo numero y regrese true
si el parametro es un numero par o false si es un numero <impar></impar>*/

let padre = (hijo2, hijo2, hijo3) => {
    hijo1();
    hijo2();
    hijo3();
}

let fun1 = () => {
    console.log('funcion hijo 1');
};

let fun2 = () => {
    console.log('funcion hijo 2');
};

let fun3 = () => {
    console.log('funcion hijo 3');
};

padre(fun1, fun2, fun3);



let hacerEnsalada = (contenedor, verduras, cuchillo, lavarVerduras, cortarVerduras, mezclarVerduras) => {
    //1.-contenedor
    //2.-verduras
    //3.- cuchillos
    // lavar verduras
    // cortarlas
    //mezclarlas
    
}



//Crear una funcion que reciba un arreglo y lo regrese en orden invertido

let arri =[1,2,3,45,6,548,15,13]


function arrayrevers(params) {
    return params.reverse()
}

console.log(arrayrevers(arri));



//Crear una funcion que recibe un arreglo de numeros y devuelve el valor mas grande que se encuentra en el arreglo.
let arri =[1,2,3,45,6,548,15,13]
function numMax(params) {
    return Math.max(...params)
}


//Ejercicio 3

let arri =[1,2,3,45,6,548,15,13]
console.log(cuentaValor(arri,10));

function cuentaValor(arreglo,x) {
    let contador=0
    arreglo.forEach(e => {
        contador =contador+(e>x?1:0)
        // if(e>valor ){
        //     contador++
        // }        
    });
    return contador
}


//Ejercio 4
let arri =[1,2,3,45,6,548,15,13]

function funNumpares(array) {
    let resultado=[]
    array.forEach(e => {
    if(e%2==0){
        resultado.push(e)
    }    
    });  
    return resultado
}
console.log(funNumpares(arri));

// Ejercicio 5

let arri =[1,2,3,3,3,3,45,6,548,15,13]

function cuentaVeces(array,valor) {
    let rest= array.filter((e)=>{
                    return e==valor
                        })
    return rest.length
}
console.log(cuentaVeces(arri,3));


// ejercicio 6
let cadenas=['Alma','Marcela','Rosa','Meleño']

function validaStr(array,valor) {
    let rest= array.filter((e)=>{
                return e==valor
    })
    return rest.length==0?false:true
    }
    console.log(validaStr(cadenas,'Marcela'));

//ejercicio 7

let arri =[1,2,3,3,3,45,6,548,15,13]

console.log(arri.slice(4));

function divideArray(array) {
    let valor = array.length%2?array.length-1:array.length
    return array.slice(valor/2) 
}

console.log(divideArray(arri));

// ejercicio 8

let cadena1=['Alma','Marcela','Rosa','Meleño']
let cadena2=['Alma1','Marcela1','Rosa1','Meleño1']
let cadena3=['Alma2','Marcela2','Rosa2','Meleño2']

function concatenaarreglos(cade1,cade2,cade3){
return cade1.concat(cade2.concat(cade3))
}
console.log(concatenaarreglos(cadena1,cadena2,cadena3));

// ejercicio 10
function validaMayuscula(cadena) {
    let contador=0
    let long = cadena.length
    let letra
    let codass
    for (let i = 1; i < long+1; i++) {
        letra= cade.substring(i-1,i)
        codass = letra.charCodeAt()
       // console.log(codass);
        if (codass >=65 && codass <=90){
            contador++
        }
    }
    return contador>0?false:true
}

let cade ='mario'
console.log(validaMayuscula(cade));




