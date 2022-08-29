

//Scope global
let varibaleGlobal = 15;

function saludar () {
    //scope local
    let varibaleLocal = 18;
    console.log (varibaleGlobal, varibaleLocal); //15 18
}

saludar();