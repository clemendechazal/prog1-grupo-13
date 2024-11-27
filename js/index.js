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




let lista = document.querySelector(".lista-index");
let formulario = document.querySelector("form");

function cargarRecetas(url) {
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let contenido = "";
            let recetas = data.recipes; 

            for (let i = 0; i < recetas.length; i++) {
                contenido += `
                    <article class = "article_index">
                        <img src="${recetas[i].image}" alt="${recetas[i].name}">
                        <h3>${recetas[i].name}</h3>
                        <p>Nivel de dificultad: ${recetas[i].difficulty}</p>
                        <a class = "a_index" href="./recetas.html?idReceta=${recetas[i].id}">Ver detalle</a>
                    </article>`;
            }
            lista.innerHTML += contenido; 
        })
        .catch(function(err) {
            console.error('Fetch error:', err);
        });
}
cargarRecetas('https://dummyjson.com/recipes?limit=10&skip=0');

let skip = 0;
document.querySelector('#cargarMas-index').addEventListener('click', function() {
    skip += 10
    let url = 'https://dummyjson.com/recipes?limit=10&skip=' + skip;
    cargarRecetas(url)
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