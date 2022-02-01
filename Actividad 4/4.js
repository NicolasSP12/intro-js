var contador = 0
for(var i = 1; i < 50; i++){
    if (i % 2 !== 0) {
        console.log(i);
        contador = contador + 1
    }
}
console.log("Hay", contador, "impares entre el 0 y el 50")