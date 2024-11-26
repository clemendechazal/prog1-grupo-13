
let checkBox = document.getElementById("terminos")
let personaEmail = document.getElementById("emailInput")
let personaPassword = document.getElementById("passwordInput")
let mensajeErrorEmail = document.getElementById("vacioErrorEmail");
let mensajeErrorPassword = document.getElementById("vacioErrorPass");
let registerForm = document.getElementById("registerForm")
let button = document.getElementById('buttonLogin');

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
    if (checkBox.checked === false) {
        alert("No aceptaste términos y condiciones")
    }

    if (personaEmail.value !== "" && personaPassword.value !== "" && checkBox.checked === true) {
        registerForm.submit()
    }
})


let compu = document.querySelector("#buscador_f");
let anillo = document.querySelector("#buscador");

compu.addEventListener("submit", function (event) {
    if (anillo.value === "") {
        alert("Por favor escriba que desea buscar.");
        event.preventDefault();
    }
    else if (anillo.value.length < 3) {
        alert("Su busqueda tiene que tener al menos 3 caracteres para funcionar.");
        event.preventDefault();
    }
});


let yaTengoCuenta = document.getElementById("yaCuenta")

yaTengoCuenta.addEventListener('mouseover', function () {
    this.style.textDecoration = "underline";
})

yaTengoCuenta.addEventListener('mouseout', function(){
    this.style.textDecoration = "none"
})
