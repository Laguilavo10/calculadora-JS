const $ = (etiqueta) => document.querySelector(etiqueta)

let arrayNumeros = Array.from(document.querySelectorAll('.teclas-numeros'))
let arrayOperaciones = Array.from(document.querySelectorAll('.teclas-operaciones'))
let limpiarCalc = $('#tecla-borrar')
let btnResultado = $('#tecla-resultado')
let btnDecimal = $('.tecla-decimal')
console.log(arrayOperaciones)
let suma = arrayOperaciones[5]
let restar = arrayOperaciones[4]
let multiplicar = arrayOperaciones[3]
let dividir = arrayOperaciones[2]
let borrar = arrayOperaciones[1]
let parentesis = arrayOperaciones[0]

let abierto = true

for (const iterator of arrayNumeros) {
    iterator.onclick=()=>{
        let pantalla = $('.operaciones-acumuladas')
        pantalla.innerText += iterator.innerText
    }
}

limpiarCalc.onclick = ()=>{
    let operaciones = $('.operaciones-acumuladas')
    let digital = $('.digital')
    digital.innerText = ''
    operaciones.innerText = ''
}

btnResultado.onclick = ()=>{
    let operacionDiv = $('.operaciones-acumuladas')
    let operaciones = operacionDiv.innerText
    eval(operaciones)
    let digital = $('.digital')
    digital.innerText = ` = ${eval(operaciones)}`
}

suma.onclick = ()=>{
    let operaciones = $('.operaciones-acumuladas')
    operaciones.innerText += `+`
}
restar.onclick = ()=>{
    let operaciones = $('.operaciones-acumuladas')
    operaciones.innerText += `-`
}
dividir.onclick = ()=>{
    let operaciones = $('.operaciones-acumuladas')
    operaciones.innerText += `/`
}

multiplicar.onclick = ()=>{
    let operaciones = $('.operaciones-acumuladas')
    operaciones.innerText += `*`
}

borrar.onclick = ()=>{
    let operaciones = $('.operaciones-acumuladas')
    let textOperacion = operaciones.innerText
    let elementos = textOperacion.split('')
    elementos.pop()
    let elementoBorrado = elementos.join('')
    operaciones.innerText = elementoBorrado
}

parentesis.onclick = ()=>{
    let operaciones = $('.operaciones-acumuladas')
    if (abierto == true) {
        operaciones.innerText += `(`
        abierto = false
    }else{
        operaciones.innerText += `)`
        abierto = true
    }

}

btnDecimal.onclick = ()=>{
    let operaciones = $('.operaciones-acumuladas')
    operaciones.innerText += '.' 
}

console.log(eval(1.2+2))








