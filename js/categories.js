let categorias = document.querySelector(".categorias");

fetch('https://dummyjson.com/recipes/tags')
    .then(function (res) {
        return res.json()
    })
    .then(function (data) {
        console.log(data);
        let contenido = "";
         
        for (let i = 0; i < data.length; i++) {
            contenido += `
               <a class="lista_ca" href="./category.html?idTag=${data[i]}">
               <h2 class = "lista_categorias">${data[i]}</h2>
               </a>`
        }
        categorias.innerHTML += contenido; 
    })
    .catch(function (error) {
        console.log("Error: " + error);
    })

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