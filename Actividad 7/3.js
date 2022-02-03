function palindromo(palabra1, palabra2){
    if (palabra1 == palabra1.split('').reverse().join('')){
        console.log( palabra1," es un palindromo")
    }else (palabra1, "no es un palindromo")
    if(palabra2 == palabra2.split('').reverse().join('')){
        console.log( palabra2," es un palindromo")
    }else (console.log(palabra2, "no es un palindromo"))
}

palindromo("madam", "computadora")