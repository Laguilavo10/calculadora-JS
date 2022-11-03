const $ = (etiqueta) => document.querySelector(etiqueta)

let arrayNumeros = Array.from(document.querySelectorAll('.teclas-numeros'))
let arrayOperaciones = Array.from(document.querySelectorAll('.teclas-operaciones'))
let limpiarCalc = $('#tecla-borrar')
let btnResultado = $('#tecla-resultado')
let temp = 0
let ultimaOperacion =  ''
let isPrimeraVez = true
let suma = arrayOperaciones[5]
let resta = arrayOperaciones[4]

for (const iterator of arrayNumeros) {
    iterator.onclick=()=>{
        let pantalla = $('.operaciones-acumuladas')
        pantalla.innerText += iterator.innerText
    }
}

limpiarCalc.onclick = ()=>{
    temp = 0
    let operaciones = $('.operaciones-acumuladas')
    let digital = $('.digital')
    digital.innerText = ''
    operaciones.innerText = ''
    isPrimeraVez = true
}

btnResultado.onclick = ()=>{
    let operacion = $('.operaciones-acumuladas')
    let digital = $('.digital')

    let ultimoValor = parseInt(operacion.innerText)
    console.log(ultimoValor)
    digital.innerText += ` ${ultimoValor}`
    if (ultimaOperacion == 'suma') {
        temp += ultimoValor
    }else if(ultimaOperacion == 'resta'){
        console.log(temp, ultimoValor)
        temp -= ultimoValor


        
    }else if(ultimaOperacion == 'multiplicacion'){
        temp *= ultimoValor
        
    }else if(ultimaOperacion == 'division'){
        temp /= ultimoValor
    }

    operacion.innerText = ` = ${temp}`
}

suma.onclick = ()=>{
    let operaciones = $('.operaciones-acumuladas')
    let digital = $('.digital')
    let value = parseInt(operaciones.innerText)
    temp += value
    digital.innerText += ` ${value} +`
    operaciones.innerText = ''
    ultimaOperacion = 'suma'
    isPrimeraVez = false
}

resta.onclick = ()=>{

    let operaciones = $('.operaciones-acumuladas')
    let digital = $('.digital')
    // debugger
    let value = parseInt(operaciones.innerText)
    if (isPrimeraVez == true) {
        temp = value
    }else{
        temp -= value
    }

    console.log(value, temp)
    digital.innerText += ` ${value} -`
    operaciones.innerText = ''
    ultimaOperacion = 'resta'
    isPrimeraVez = false
}


// resta.onclick = ()=>{
//     let operaciones = $('.operaciones-acumuladas')

//     let value = operaciones.innerText
//     console.log(value)
//     let separador = value.split('-')
//     if (temp == 0) {
//         temp = parseInt(separador[separador.length -1])
//     }else{
//         temp -= parseInt(separador[separador.length -1])
//     }
//     console.log(temp)
//     operaciones.innerText = ''
//     operaciones.innerText += value + '-'
//     ultimaOperacion = 'resta'
// }







// let sjgdajk = '213762173+12321312-asdjhasjdhs'
// console.log(sjgdajk.split('+' || '-' ))q

// let temp = parseInt(0)

// let numerosGuardados = []
// let operacionesGuardadas = []

// arrayOperaciones[0].onclick = () =>{
//     let pantalla = $('.digital')
//     let acumulados = $('.operaciones-acumuladas')
//     if (temp == 0) {
//         acumulados.innerText = ` ${pantalla.innerText} +`
//     }else{
//         acumulados.innerText += ` ${pantalla.innerText} +`
//     }
    
//     temp+=parseInt(pantalla.innerText)
        
//     pantalla.innerText = ''
// }

// arrayOperaciones[4].onclick = () =>{
//     let pantalla = $('.digital')
//     pantalla.innerText = temp
// }

// function obtenerResultado(temporal) {
//     let pantalla = $('.digital')
//     pantalla.innerText = temporal
// }


// function valorDigital(params) {
//     let digital = $('.digital').innerText
//     return digital
// }








