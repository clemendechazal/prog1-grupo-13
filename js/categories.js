
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



/**codigo categories**/
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