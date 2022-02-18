// Hacer una función para que reciba ese arreglo de objetos
// y que retorne la suma de "a" y "b" de cada objeto y concatenarlo
// al String "name" para que devuelva algo así: 

// ["235 M48 Bulldog-=-79 Object 140-=-107 T57 Heavy" ]

const coleccion = [
    {a: 11, b:224, name: "M48 Bulldog"},
    {a:23, b:56, name: "Object 140"},
    {a: 32, b:75, name: "T57 Heavy"}
];

for (var i = 0 ; i < coleccion.length ; i++){
    var suma = coleccion[i].a + coleccion[i].b
    var total = suma + " " + coleccion[i].name
    console.log(suma)
    console.log(total)
}