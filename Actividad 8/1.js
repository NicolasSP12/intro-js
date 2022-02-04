const saldoBancario = 20000
const presupuesto = 8000
const telefono = 5999.99
const accesorios = 249.99
const tax = 0.16

function sacarBalanceCuenta(compra){
    var balance = saldoBancario - compra
    return balance
}

function calcularImpuestoSobreCompra (compra){
    var totalconTax = compra * tax
    return totalconTax
}

function agregaCompras (){
    var counter = 0
    var compra = totalCompra()
    while(total < saldoBancario){
        var totalCarrito = telefono + accesorios
        calcularImpuestoSobreCompra(totalCarrito)
        counter++
    }
}

function format (){
    
}