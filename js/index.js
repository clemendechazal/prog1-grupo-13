let lista = document.querySelector(".lista-index");

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
                    <article>
                        <img src="${recetas[i].image}" alt="${recetas[i].name}">
                        <h2>${recetas[i].name}</h2>
                        <p>Nivel de dificultad: ${recetas[i].difficulty}</p>
                        <a href="./detalle.html?idReceta=${recetas[i].id}">Ver detalle</a>
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
