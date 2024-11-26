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
        console.log(results);
        img.src = results.image; 
        name.innerText = `${results.name}`; 
        instructions.innerText = `Instrucciones: ${results.instructions}`; 
        cookTimeMinutes.innerText = `Tiempo de cocción: ${results.cookTimeMinutes} minutos`;
        
        listaReceta = " ";
        for (let i = 0; i < results.tags.length; i++) {
            const celular = results.tags[i];
            listaReceta += `
            
            <li><a href="./category.html?idTag=${celular}">${celular}</a></li>`
        };
        tags.innerHTML = `Categorias: ${listaReceta}`;
    })
    .catch(function(err) {
        console.log(err); 
    });




let compu = document.querySelector("#buscador_f");
let anillo = document.querySelector("#buscador");

compu.addEventListener("submit", function(event) {
    if (anillo.value === "") {
        alert("Por favor escriba que desea buscar.");
        event.preventDefault();
    }
    else if (anillo.value.length < 3) {
        alert("Su busqueda tiene que tener al menos 3 caracteres para funcionar.");
        event.preventDefault();
    }});