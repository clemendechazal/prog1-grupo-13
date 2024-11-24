let buscador = document.getElementById("buscador")
let form = document.querySelector("form")


form.addEventListener('click', function (e) {
    e.preventDefault();
    let escrito = buscador.value

    if (escrito === "") {
        alert("Buscador vacío")

    }
    else if (escrito.length(escrito) <= 3) {
        alert("Se necesitan mas de 3 caracteres")
    }
    else if (escrito !== "" && length(escrito) > 3) {
        form.submit();
    }

})















let personaEmail = document.getElementById("email_input")
let personaPassword = document.getElementById("password_input")

let mensajeErrorEmail = document.getElementById("vacioErrorEmail");
let mensajeErrorPassword = document.getElementById("vacioErrorPass");

let registerForm = document.querySelector("form")

let button = document.getElementById('button_login');

button.addEventListener('click', function () {
    if (personaEmail.value === "") {
        mensajeErrorEmail.innerText = "Ingrese email!"
    }
    else {
        mensajeErrorEmail.innerText = ""
    }
    if (personaPassword.value === "") {
        mensajeErrorPassword.innerText = "Ingrese contraseña!"
    }
    else {
        mensajeErrorPassword.innerText = ""
    }

    if (personaEmail.value !== "" && personaPassword.value !== "") {
        registerForm.submit()
    }
})




