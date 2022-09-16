//obtengo elemento del HTML y creo un evento para volver a la página anterior
const returnbtn = document.getElementById("return").addEventListener("click", returnPage);

//funcion para volver a la página anterior
function returnPage() {
  window.location.href = "./index.html";
}

//declaro el resultado
let resultado = 0;

//declaro un objeto
let operacion = {
    ultimoResultado: "numero",
    tipoDeOperacion : "dolarToARS",
}

//declaro historial vacío
let historial = [];

//accedo al HTML
const pesoOutput = document.getElementById("pesoArgentino");
const dolarInput = document.getElementById("dolarInput");
const calcularBtn = document.getElementById("calcular");

//declaro función para calcular
function calcular(){
    resultado = dolarInput.value * 276
    historial.unshift(resultado + " ")
    pesoOutput.value = resultado
    operacion.ultimoResultado = resultado
    let enJSON = JSON.stringify(operacion);
    localStorage.setItem("operacion", enJSON);
}

//evento
calcularBtn.addEventListener('click', calcular)

//obtengo elementos del html
const historyContainer = document.getElementById('historyContainer') //contenedor del historial
const showHistoryBtn = document.getElementById('showHistory') //botón para mostrar historial

//función para mostrar el historial
function mostrar(){
    historyContainer.innerText = historial
}

//evento mostrar historial
showHistoryBtn.addEventListener('click', mostrar)