//Crear una funcion que reciba 2 parametros (una oracion y una palabra a buscar).
//Retornar true o false en caso de que la oracion contenga una palabra dada, es decir, si yo
//mando "Hola mundo" y mando la palabra a buscar perro me debe retornar un false. En cambio
//si mando un mundo entonces debe retornar true.

var Lista = ["hola", "mundo", "adios"]

function BuscarPalabra(oracion, palabra) {  
    for (var i = 0; i < oracion.length; i++){
        if(oracion.includes(palabra)) {
            console.log("true")
            break
        }
    }
}
BuscarPalabra(Lista,"adios")