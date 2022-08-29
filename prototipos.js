/* la herencia es uno de los pilares de la programacion
orientado a objetos*/


// un prototipo e salguien al que le delegamos algo

const cheff = {
    tipo: 'basica',
    cocinar: function (platillo){
        console.log(`cocinando el ${platillo}`);
    }
}

const aldo = {
    nombre: 'aldo',
    edad: 30,
    profesion: 'developer'
};

aldo.__proto__= cheff;  //propiedad provada con los guines bajos
aldo.cocinar('filete');


Object.setPrototypeOf(aldo.cheff)
aldo.cocinar('filete');


//una estrucura particular de organizar los datos


const person = {
    isHuman: false,
    printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
    };
    
    const me = Object.create(person); //manera correcta de hacer un prototipo
    
   me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
   me.isHuman = true; // inherited properties can be overwritten
    
    me.printIntroduction();
  // expected output: "My name is Matthew. Am I human? true"



const string = 'HOLA';
console.log(string.charAt(0));



nombre.toUpperCase //hace mayusculas
nombre.toLowerCase //minusculas

let palabra = 'abcd';
let arregloDeCaracteres = palabra.split(',');
console.log(arregloDeCaracteres);




