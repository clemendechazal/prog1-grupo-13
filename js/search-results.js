let resultList = document.querySelector("#resultList");
let searchTermElement = document.querySelector("#searchTerm");
let searchForm = document.querySelector("#searchForm"); 

searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let searchTerm = document.querySelector("#buscador").value; 
    cargarRecetas(`https://dummyjson.com/recipes/search?q=${searchTerm}`); 
    searchTermElement.innerText = `Resultados de búsqueda para: ${searchTerm}`; 
});

function cargarRecetas(url) {
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data.recipes); 
            let contenido = "";
            let recetas = data.recipes; 

            if (recetas.length === 0) {
                resultList.innerHTML = '<p>No hay coincidencias.</p>';
                return;
            }

            for (let i = 0; i < recetas.length; i++) {
                contenido += `
                    <article class = "article_busqueda">
                        <img src="${recetas[i].image}" alt="${recetas[i].name}">
                        <h3>${recetas[i].name}</h3>
                        <p>Nivel de dificultad: ${recetas[i].difficulty}</p>
                        <a class = "a_index" href="./recetas.html?idReceta=${recetas[i].id}">Ver detalle</a>
                    </article>`;
            }
            resultList.innerHTML = contenido; 
        })
        .catch(function(err) {
            console.error('Fetch error:', err);
            resultList.innerHTML = '<p>Error al cargar los resultados.</p>';
        });
}