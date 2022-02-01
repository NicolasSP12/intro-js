var userInput;
while(!(userInput =="domingo")){
    userInput = prompt("Ingresa un dia de la semana")
    if(userInput == "domingo"){break}

    if(userInput =="lunes"){
    alert("Feliz inicio de semana")
    }else if(userInput =="martes"){
        alert("Un buen martes si señor")
    }else if(userInput =="miercoles"){
        alert("Pasala bien")
    }else if(userInput =="jueves"){
        alert("Feliz jueves")
    }else if(userInput =="viernes"){
        alert("Ya es viernes wuju")
    }else if(userInput =="sabado"){
            alert("Ya casi se acaba la semana")
    }else if(userInput =="domingo"){
            alert("Ve a descansar")
    }
}