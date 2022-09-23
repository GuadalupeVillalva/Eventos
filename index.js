//función para generar un token
function generateToken(usuario, contraseña) {
  return usuario + contraseña;
}

//función para logearse
function login(event){
    event.preventDefault()
    let user = document.getElementById('user').value
    let password = document.getElementById('password').value;
    console.log(user)
    console.log(password)
    if (user !== null && password !== null) {
    let token = generateToken(user, password);
    localStorage.setItem("token", token);
    }
    Swal.fire({
        title: "Iniciaste sesión",
        text: "¡Ya podés usar el conversor!",
        icon: "success",
        confirmButtonColor: "#B1B2FF",
        color:"#000000"
    }
      )
    const theresAToken = tokenExists();
    if(theresAToken){
        const hiddenDiv = document.getElementById('privateContent')
        hiddenDiv.className = "showContent"
    }
}

//función para saber si se ha generado un token
function tokenExists() {
    if(localStorage.getItem('token') !== null){
        return true;
    } else {
        false;
    }
}
//evento botón para logearse
button.addEventListener('click', login)
