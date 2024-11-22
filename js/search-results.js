fetch(`https://dummyjson.com/recipes`)
.then(function(response) {
  return response.json()
})
.then(function(data) {
    let search = document.querySelector(".searchResults");
    let results = document.querySelector(".results")
    let resultados = ""
    let idGet = location.search;
    let params = URLSearchParams(idGet);
    let final = params.get("clemen");
    results.innerText = `Resultado de la busqueda: ${}`
   
    for (let i = 0; i < recetas.length; i++) {
        let receta = recetas[i];
        if (receta.name == final){
            contenido += `
            <article class = "article_index">
                <img src="${recetas[i].image}" alt="${receta[i].name}">
                <h3>${recetas[i].name}</h3>
                <p>Nivel de dificultad: ${recetas[i].difficulty}</p>
                <a class = "a_index" href="./recetas.html?idReceta=${recetas[i].id}">Ver detalle</a>
            </article>`;
        }
    }

    if (contenido == ""){
        contenido = `<h3>No se encontraron resultados a su busqueda</h3>;`
    }
})
.catch(function(error) {
  console.log("Error: " + error);
})
