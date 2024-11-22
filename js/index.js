let lista = document.querySelector(".lista-index");
let formulario = document.querySelector("form");

function cargarRecetas(url) {
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
}
let skip = 0;
cargarRecetas('https://dummyjson.com/recipes?limit=10&skip=0');
document.querySelector('#cargarMas-index').addEventListener('click', function() {
    skip += 10
    let url = 'https://dummyjson.com/recipes?limit=10&skip=' + skip;
    cargarRecetas(url)
});
