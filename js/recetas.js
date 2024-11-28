let logo = document.querySelector(".logo");

logo.addEventListener("mouseover", function () {
    logo.style.width = "40%"; 
})

logo.addEventListener("mouseout", function () {
    logo.style.width = "30%"; 
    logo.style.height = "auto"; 
});

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




let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idReceta = qsObj.get("idReceta");

let img = document.querySelector(".img");
let name = document.querySelector(".name");
let instructions = document.querySelector(".instructions");
let cookTimeMinutes = document.querySelector(".cookingTime");
let tags = document.querySelector(".tags")

let url = `https://dummyjson.com/recipes/${idReceta}`;

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(results) {
        img.src = results.image; 
        name.innerText = `${results.name}`; 
        instructions.innerText = `Instrucciones: ${results.instructions}`; 
        cookTimeMinutes.innerText = `Tiempo de cocción: ${results.cookTimeMinutes} minutos`;
        
        listaReceta = "";
        for (let i = 0; i < results.tags.length; i++) {
            const meal = results.tags[i];
            listaReceta += `
            
            <li><a href="./category.html?idTag=${meal}">${meal}</a></li>`
        };
        tags.innerHTML = `Categorias: ${listaReceta}`;
    })
    .catch(function(err) {
        console.log(err); 
    });


let buscar2 = document.querySelector("#buscador_f");
let buscar3 = document.querySelector("#buscador");

buscar2.addEventListener("submit", function(event) {
    if (buscar3.value === "") {
        alert("Por favor escriba que desea buscar.");
        event.preventDefault();
    }
    else if (buscar3.value.length < 3) {
        alert("Su busqueda tiene que tener al menos 3 caracteres para funcionar.");
        event.preventDefault();
    }});