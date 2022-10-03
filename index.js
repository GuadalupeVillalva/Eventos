// fetch a API PokéApi 
fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
.then(res => res.json())
.then(res => getData(res))

//función para obtener los datos de la API
function getData(dato){
    //guardo los datos en una variable
    const datos = dato.results
    
    //input en el cual se debe especificar 
    //la cantidad de pokemones que aparecen en pantalla
    let cantidad = document.getElementById('cantidad');
    
    //botón con eventListener para mostrar los nombres en pantalla
    const confirmBtn = document.getElementById('confirm');

    //evento para mostrar los nombres
    confirmBtn.addEventListener('click', () => {

        //se genera un array nuevo a partir 
        //del número que se ingrese
        let valorNuevo = datos.slice(0, cantidad.value)

        //de ese array obtengo los nombres y los guardo
        let names = valorNuevo.map(ob => ob.name);

        //div vacío
        let container = document.getElementById('container');

        //bucle para recorrer el array y con cada 
        //nombre crear un div con este dentro
        names.forEach(name => {
            //creo un div por cada nombre
            let newData = document.createElement('div')

            //dentro de este pongo una etiqueta p
            newData.innerHTML=`
            <p> ${name} </p>
            `

            //div vacío en el cual dentro van todos
            //los divs creados anteriormente
            container.appendChild(newData)
        });
    })
}

//botón que hace refresh a la página 
//para eliminar los elementos de la pantalla
let reset = document.getElementById('reset')
reset.addEventListener('click', () => {
    window.location.reload()
})
