
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



/**codigo category**/

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