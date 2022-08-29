//Solucion numero1
let func = () => {
    console.log('Hola Emanuel');
};


window.setInterval(func, 2000);


//window solo existe en el navegador no en node.
//en node existe solo global
//Solucion numero 1
function saludame () {
    console.log('Hola Emanuel');
};

setTimeout(saludame, 10000);


//solucion3
const automovil = {
    puertas = 4,
    electrico = false,
    acelerar = () => {
        console.log('voy acelerando');
}
}


const auto = new Object();
auto.puertas = 4;
auto.electrico = false;
auto.acelerar = () => {
    console.log('voy acelerando');
}

const casa = {
    pisos: 2,
    antiguedad: 20,
    fiesta: () => {
        console.log('Fiestota');
    }
}

/*un objeto es una instancia de una clase */
//Generar objetos nos sirve para representar objetos de la vida cotidiana
//class palabra reservada para hacer estructuras o templates


class PersonaJuegaPS5 {
    jugarPs5(){
        console.log('Todo el tiempo se la pasa jugando')
    }
}


//JSON javascript objet notation es la forma de comunicarnos con el servidor
//y el servidor con nosotros
//JSON.parse
//JASIN.stringify 