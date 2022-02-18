/**
 * Escriba una función de JavaScript que tomará una serie de números almacenados
 * y encontrará el segundo números más bajos y segundos más altos, respectivamente
 * del siguiente arreglo:  
 */
const arr = [3,4,6,1,5,2,9,10,23,12]
arr.sort()

function Mayor(elemento) {
    return elemento > 10;
}

function Menor(elemento) {
  return elemento < 3;
}

var arrMenores = arr.filter(Menor)
var arrMayores = arr.filter(Mayor)

console.log(arrMenores)
console.log(arrMayores)
