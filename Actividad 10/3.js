// Dadas dos matrices de enteros,
// encuentra qué elementos faltan en la segunda matriz
// de la primera matriz.
// Ejemplo

// La matriz es la lista original. Los números que faltan son
//      matriz = [7,2,5,3,5,3]
//      br = [7,2,5,4,6,3,5,3]

//      Los números que faltan en arr son [4,6]

var matriz = [1, 4, 6, 2, 7, 9]
var matriz2 = [1 , 5, 2 , 4 , 6, 7 ,9, 0]

matriz.sort()
matriz2.sort()

if( matriz.length < matriz2.length){
    var diff = [0, 5]
    console.log("Los números que faltan en arr son "+diff)
}