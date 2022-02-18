/*********************  ELOQUENT JS CHAP 4******************************* */

/**
 * La suma de un rango:
 * 
 * Escribe una función rango que tome dos argumentos, inicio y final, y retorne un array 
 * que contenga todos los números desde inicio hasta (e incluyendo) final. 
 * Luego, escribe una función suma que tome un array de números y retorne 
 * la suma de estos números
 */
const array1 = []

Numeros(1, 9)

function Numeros(numero1, numero2){
    array1.push(numero1)
    while( numero1 < numero2){
        numero1 = numero1 + 1
        array1.push(numero1)
    }
    return array1
}
console.log("Los valores del array son:", array1)

function sumaAcumu(valores){
    var suma = 0
    for(var i = 0; i < valores.length; i++){
        suma = suma + valores[i]
    }
    return suma
}

console.log( "La suma de todos los valores del array son: ", sumaAcumu(array1))
