const $ = (etiqueta) => document.querySelector(etiqueta)

let arrayNumeros = Array.from(document.querySelectorAll('.teclas-numeros'))
let arrayOperaciones = Array.from(document.querySelectorAll('.teclas-operaciones'))

// let pantalla = $('.pantalla-resultados')
for (const iterator of arrayNumeros) {
    iterator.onclick=()=>{
        let pantalla = $('.digital')
        pantalla.innerText += iterator.innerText
    }
}

let temp = parseInt(0)

let numerosGuardados = []
let operacionesGuardadas = []

arrayOperaciones[0].onclick = () =>{
    let pantalla = $('.digital')
    let acumulados = $('.operaciones-acumuladas')
    if (temp == 0) {
        acumulados.innerText = ` ${pantalla.innerText} +`
    }else{
        acumulados.innerText += ` ${pantalla.innerText} +`
    }
    
    temp+=parseInt(pantalla.innerText)
        
    pantalla.innerText = ''
    console.log(temp)
}

arrayOperaciones[4].onclick = () =>{
    let pantalla = $('.digital')
    pantalla.innerText = temp
}








