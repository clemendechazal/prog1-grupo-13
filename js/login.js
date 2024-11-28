let logo = document.querySelector(".logo");

logo.addEventListener("mouseover", function () {
    logo.style.width = "40%"; 
})

logo.addEventListener("mouseout", function () {
    logo.style.width = "30%"; 
    logo.style.height = "auto"; 
});

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











let personaEmail = document.getElementById("emailInput")
let personaPassword = document.getElementById("passwordInput")

let mensajeErrorEmail = document.getElementById("vacioErrorEmail");
let mensajeErrorPassword = document.getElementById("vacioErrorPass");

let registerForm = document.getElementById("loginForm")

let button = document.getElementById('buttonLogin');

button.addEventListener('click', function () {
    if (personaEmail.value === "") {
        mensajeErrorEmail.innerText = "Ingrese email!"
        alert("Por favor complete el campo email")
    }
    else {
        mensajeErrorEmail.innerText = ""
    }
    if (personaPassword.value === "") {
        mensajeErrorPassword.innerText = "Ingrese contraseña!"
        alert("Por favor complete el campo contraseña")
    }
    else {
        mensajeErrorPassword.innerText = ""
    }

    if (personaEmail.value !== "" && personaPassword.value !== "") {
        registerForm.submit()
    }
})

let yaTengoCuenta = document.getElementById("yaCuenta")

yaTengoCuenta.addEventListener('mouseover', function(){
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


