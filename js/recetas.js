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
        tags.innerText = `Categoria: ${results.tags}` 
    })
    .catch(function(err) {
        console.log(err); 
    });
