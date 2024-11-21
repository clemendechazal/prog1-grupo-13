let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idTag = qsObj.get("idTag");
let lista = document.querySelector(".lista-index");
let url = `https://dummyjson.com/recipes/tag/${idTag}`

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data.recipes); 
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