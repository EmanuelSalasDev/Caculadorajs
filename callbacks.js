/**
 * Funciones pasadas como argumentos de otras funciones
 * Podemos trabajar con funciones como si guerasn cualquier otro tipo de valoer
 * 
 */

function calculadora (num1, num2, callback){
 return  callback (num1, num2);
}

let suma = (num1, num2) => {
    return num1+num2;
}

calculadora (10,10, suma);


//referencia: un espacio en la memoria
//peticion solicitud
//persear formatear los datos
//Setimeout se maneja en milisegundos
//promesas ya sea positivo o negativo

function mandarMensajeAlaEx(hacerAlgoRespuesta) {
    //mandar mensaje a nuestra ex
    setTimeout(() => {},)
    let respuesta = 'yo tambien te extraño';
    if (respuesta !== -undefined){
        hacerAlgoRespuesta(respuesta);
    }
    hacerAlgoRespuesta(respuesta);

}

function hacerAlgoRespuesta(){
    console.log('Bloqueada ALV');
    
}













let personas = [{
    nombre: 'Aldo',
    edad: 30
}, {
    nombre: 'Juan',
    edad: 20
}];

function parsearPersonas(personas) {
    let personasTransformadas = [];
    let count = 0;
    for (let persona of personas){
        personasTransformadas[count] = {nombre: personas.nombre, sexo: 'masculino'};
        count++;
    }
    return personasTransformadas;
}
console.log(pearsearPersonas(personas));