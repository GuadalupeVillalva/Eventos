const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const boton = document.getElementById('boton')

let historial = []

function calcular(){
   let resultado = fahrenheit.value = celsius.value * 1.8 + 32
   historial.unshift(resultado)
}

boton.addEventListener('click', calcular)

const btnHistorial = document.getElementById('historial');
const textoHistorial = document.getElementById('textoHistorial');

function mostrar(){
    textoHistorial.innerText = historial
}

btnHistorial.addEventListener('click', mostrar)