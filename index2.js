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
    tipoDeOperacion : "USDtoARS",
}

//declaro historial vacío
let historial = [];

//accedo al HTML
const pesoOutput = document.getElementById('pesoArgentino');
const monedaInput = document.getElementById('monedaInput');
const calcularBtn = document.getElementById('calcular');
const select = document.getElementById('select')

//select value
const convertir = () =>{
    select.value == "usd" ? calcularUSD() : calcularEuro();
}

//declaro función para calcular
function calcularUSD(){
    resultado = monedaInput.value * 287
    historial.unshift(resultado + " ")
    pesoOutput.value = resultado
    operacion.ultimoResultado = resultado
    let enJSON = JSON.stringify(operacion);
    operacion.tipoDeOperacion = "USDtoARS"
    localStorage.setItem("operacion", enJSON);
}

function calcularEuro(){
    resultado = monedaInput.value * 304
    historial.unshift(resultado + " ")
    pesoOutput.value = resultado;
    operacion.ultimoResultado = resultado
    let enJSON = JSON.stringify(operacion);
    operacion.tipoDeOperacion = "EUROtoARS"
    localStorage.setItem("operacion", enJSON);
}

//evento
calcularBtn.addEventListener('click', convertir)

//obtengo elementos del html
const historyContainer = document.getElementById('historyContainer') //contenedor del historial
const showHistoryBtn = document.getElementById('showHistory') //botón para mostrar historial

//función para mostrar el historial
function mostrar(){
    historyContainer.innerText = historial
}

//evento mostrar historial
showHistoryBtn.addEventListener('click', mostrar)