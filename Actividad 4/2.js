var numeroUser = parseInt(prompt("Ingrese un numero"))
var multiplo = 0
var contador = 0
while(multiplo<numeroUser) {
    if(multiplo == 0){
        console.log(1)
    }else {
        console.log(multiplo)
    }
    multiplo = multiplo + 5
    contador = contador + 1
}
console.log("El",numeroUser,"tiene", contador,"multiplos de 5")