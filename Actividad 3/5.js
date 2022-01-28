const num1 = parseFloat(prompt("Ingrese un número"))
const num2 = parseFloat(prompt("Ingrese otro número"))
const num3 = parseFloat(prompt("Ingrese un ultimo número"))


if(num1 === num2 && num1 === num3){alert("Todos son los numero son iguales")
    {if(num1===num2){alert("El " + num3 + " es el mayor")}
    else if(num2===num3){alert("El " + num1 + " es el mayor")}
    else if(num1===num3){alert("El " + num2 + " es el mayor")}}}
    {if(num1 > num2){
        if(num1 > num3){alert(num1 +" es el mayor")}
        else if( num3 > num1){alert(num3 + " es el mayor")}
        else{"El "+ num1 + "y el " + num3 +" son iguales"}}
    else if(num2 > num1){
        if(num2 > num3){alert(num2 +" es el mayor")}
        else if(num3 > num2){alert(num3 + " es el mayor")}
        else{"El "+ num2 + "y el " + num3 +" son iguales"}}
    else if(num3>num1){
        if(num3 > num2){alert("El "+ num3 + " es el mayor")}
        else if (num3 < num2){alert("El " + num2 + " es el mayor")}}}
