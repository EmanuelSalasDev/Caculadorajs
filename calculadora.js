

function sumaRestMultDivPot(n1, n2) {

    let operacion = {
        sumar: function sumarNumeros(n1, n2) {
            return (variable1(n1) + variable2(n2));
        },

        restar: function restarNumeros(n1, n2) {
            return (variable1(n1) - variable2(n2) );
        },
        
        multiplicar: function multiplicarNumeros(n1, n2) {
            return (variable1(n1) * variable2(n2));
        },

        dividir: function dividirNumeros(n1, n2) {
            return (variable1(n1) / variable2(n2) );
        },

        potencia: function potenciaNumeros(n1, n2){
            return (variable1(n1) ** variable2(n2) );
        }


    };
    
    
};

    console.log(sumaRestMultDivPot(2, 2));





    
function fnaritmeticas(op,v1,v2) {
    let resultado;
    
        
    switch (op) {
        case '+':
            resultado = Number(v1)+Number(v2)
            break;
        case '-':
            resultado = Number(v1)-Number(v2)
            break;
        case '*':
            resultado = Number(v1)*Number(v2)
            break;
        case '/':
            resultado = Number(v1)/Number(v2)
            break;
        case '**':
            resultado = Number(v1)**Number(v2)
            break;
        default:
            break;
    }
    
    return resultado;
}

console.log(fnaritmeticas('+',9,2));






