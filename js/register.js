let homeMenu = document.getElementById("idhome")
let categoriesMenu = document.getElementById("idcategories")
let loginMenu = document.getElementById("idlogin")
let registerMenu = document.getElementById("idregister")

homeMenu.addEventListener('mouseover', function(){
    this.style.backgroundColor = 'rgb(94, 125, 109)'
    this.style.color = 'rgb(244, 214, 187)'
})
homeMenu.addEventListener('mouseout', function(){
    this.style.backgroundColor = 'rgb(244, 214, 187)'
    this.style.color = 'black'
})

categoriesMenu.addEventListener('mouseover', function(){
    this.style.backgroundColor = 'rgb(94, 125, 109)'
    this.style.color = 'rgb(244, 214, 187)'
})
categoriesMenu.addEventListener('mouseout', function(){
    this.style.backgroundColor = 'rgb(244, 214, 187)'
    this.style.color = 'black'
})

loginMenu.addEventListener('mouseover', function(){
    this.style.backgroundColor = 'rgb(94, 125, 109)'
    this.style.color = 'rgb(244, 214, 187)'
})
loginMenu.addEventListener('mouseout', function(){
    this.style.backgroundColor = 'rgb(244, 214, 187)'
    this.style.color = 'black'
})

registerMenu.addEventListener('mouseover', function(){
    this.style.backgroundColor = 'rgb(94, 125, 109)'
    this.style.color = 'rgb(244, 214, 187)'
})
registerMenu.addEventListener('mouseout', function(){
    this.style.backgroundColor = 'rgb(244, 214, 187)'
    this.style.color = 'black'
})





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
        alert("Por favor acepta términos y condiciones")
    }

    if (personaEmail.value !== "" && personaPassword.value !== "" && checkBox.checked === true) {
        registerForm.submit()
    }
})

let yaTengoCuenta = document.getElementById("yaCuenta")

yaTengoCuenta.addEventListener('mouseover', function () {
    this.style.textDecoration = "underline";
})

yaTengoCuenta.addEventListener('mouseout', function(){
    this.style.textDecoration = "none"
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


