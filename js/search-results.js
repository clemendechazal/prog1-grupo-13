let queryString = location.search;
let params = new URLSearchParams(queryString);
let fin = params.get("query");

fetch (`https://dummyjson.com/recipes/search?q=${fin}`)
    .then (function(response) {
            return response.json();
    })
    .then(function(data) {
        let busqueda = document.querySelector(".explorar");
        let resultadodmens = document.querySelector(".mensaje");
        let resultados = "";
        resultadodmens.innerText = `Resultados de búsqueda de: ${fin}`
            for (let i = 0; i < data.recipes.length; i++) {
                let recetas = data.recipes;
                    resultados += `
                    <article class = "article_index" "flex">
                        <img src="${recetas[i].image}" alt="${recetas[i].name}">
                        <h3>${recetas[i].name}</h3>
                        <a class = "a_index" href="./receta.html?idReceta=${recetas[i].id}">Ver Detalle</a>
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