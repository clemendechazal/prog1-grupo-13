
/**logo**/
let logo = document.querySelector(".logo");
logo.addEventListener("mouseover", function () {
    logo.style.width = "40%"; 
})
logo.addEventListener("mouseout", function () {
    logo.style.width = "30%"; 
    logo.style.height = "auto"; 
});


/** links header **/
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



/**codigo de resultado de busqueda**/
let queryString = location.search;
let params = new URLSearchParams(queryString);
let fin = params.get("query");

fetch (`https://dummyjson.com/recipes/search?q=${fin}`)
    .then (function(response) {
            return response.json();
    })
    .then(function(data) {
        let busqueda = document.querySelector(".explorar");
        let resultado2 = document.querySelector(".mensaje");
        let resultados = "";
        resultado2.innerText = `Resultados de búsqueda de: ${fin}`
            for (let i = 0; i < data.recipes.length; i++) {
                let recetas = data.recipes;
                    resultados += `
                    <article class = "article_index" "flex">
                        <img src="${recetas[i].image}" alt="${recetas[i].name}">
                        <h3>${recetas[i].name}</h3>
                        <a class = "a_index" href="./recetas.html?idReceta=${recetas[i].id}">Ver Detalle</a>
                    </article>
                    `;
            }
            if (resultados === "") {
            resultados = `<h1 class="nohaytalresultado">No se encontraron resultados para la búsqueda.</h1>`;
            }
        busqueda.innerHTML = resultados;
    })
    .catch(function(error){
        console.error("Error:", error);
    });


/**resultado de busqueda **/    

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