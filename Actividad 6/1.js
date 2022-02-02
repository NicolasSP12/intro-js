//Concatena los siguientes arreglos:
var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion']
var comingSonnAnimals = ['panter', 'dragon', 'turtle']
var animalsTotal = animals.concat(comingSonnAnimals)
console.log(animalsTotal)

//Acomoda el arreglo de menor a mayor
var arr = [4, 6, 1, 0, 8, 2]
arr.sort(function(a, b){return a-b})
console.log(arr)

//Agrega un nuevo animal ("cow") al arrelo de animals
var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion']
animals.push("cow")
console.log(animals)

//Retira el elemento 'eagle' del arreglo de animals
var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion']
animals.shift()
console.log(animals)