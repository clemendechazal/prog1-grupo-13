let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idTag = qsObj.get("idTag");
let lista = document.querySelector(".lista-index");
let h1Titulo = document.querySelector(".h1-index");
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

        if (recetas.length > 0) {
            h1Titulo.innerHTML = `Categoría de: ${idTag}`;
        }
    })
    .catch(function(err) {
        console.error('Fetch error:', err);
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