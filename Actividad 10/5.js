/*********************  ELOQUENT JS CHAP 4******************************* */

/**
 * Revirtiendo un array:
 * 
 * Los arrays tienen un método reverse que cambia al array invirtiendo el orden en que 
 * aparecen sus elementos. Para este ejercicio, escribe dos funciones, revertirArray y 
 * revertirArrayEnSuLugar. El primero, revertirArray, toma un array como argumento y 
 * produce un nuevo array que tiene los mismos elementos pero en el orden inverso. 
 * El segundo, revertirArrayEnSuLugar, hace lo que hace el método reverse: 
 * modifica el array dado como argumento invirtiendo sus elementos. 
 * Ninguno de los dos puede usar el método reverse estándar.
 */

var reversa = ["pera", "piña", "manzana"]

revertirArray(reversa)
function revertirArray (valor){
    var contador = 0
    while(contador < reversa.length ){
        contador = contador + 1
        var revertidos = valor.slice()
        revertidos.unshift(valor[i])
        revertidos.pop()
        
    }
    console.log(revertidos)
}


var array1 = [1, 2, 3, 4, 5, 6]
var i = 5

revertirArrayEnSuLugar(array1)

function revertirArrayEnSuLugar(valor){
    while(i>1){
        i = i - 1
        valor.push(i)
        valor.shift()
    }
}
console.log(array1)

