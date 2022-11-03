const $ = (etiqueta) => document.querySelector(etiqueta)

let arrayNumeros = Array.from(document.querySelectorAll('.teclas-numeros'))
let arrayOperaciones = Array.from(document.querySelectorAll('.teclas-operaciones'))
let limpiarCalc = $('#tecla-borrar')
let btnResultado = $('#tecla-resultado')
let btnDecimal = $('.tecla-decimal')
let suma = arrayOperaciones[5]
let restar = arrayOperaciones[4]
let multiplicar = arrayOperaciones[3]
let dividir = arrayOperaciones[2]
let borrar = arrayOperaciones[1]
let parentesis = arrayOperaciones[0]

let abierto = true

for (const iterator of arrayNumeros) {
    iterator.onclick=()=>{
        agregarElemento(iterator.innerText)
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
    try {
        eval(operaciones)
    } catch (error) {
        operacionDiv.innerText = 'SyntaxError'
    }
    let digital = $('.digital')
    digital.innerText = ` = ${eval(operaciones)}`
}

suma.onclick = ()=>{
    agregarElemento('+')
}
restar.onclick = ()=>{
    agregarElemento('-')
}
dividir.onclick = ()=>{
    agregarElemento('/')
}

multiplicar.onclick = ()=>{
    agregarElemento('*')
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
    agregarElemento('.')
}


function agregarElemento(elemento) {
    let operaciones = $('.operaciones-acumuladas')
    operaciones.innerText += elemento
}


document.addEventListener('keydown', (e)=>{
    let numeros = ['0','1','2','3','4','5','6','7','8','9']
    let operaciones = ['+','-','*','/','(',')','.',]
    console.log(e.key)
    let isNumber = numeros.some((a)=>{return a == e.key})
    let isOperation = operaciones.some((a)=>{return a == e.key})

    if (isNumber || isOperation) {
        agregarElemento(e.key)
    }
    
    switch (e.key) {
        case 'Enter':
            btnResultado.onclick()
            break;
        case 'Backspace':
            borrar.onclick()
            break;
        default:
            break;
    }
})



