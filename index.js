const productsCart = [
    {
        id: 1,
        name: "Uva Crimson",
        price: 44.99
    },
    {
        id: 2,
        name: "Vinho Canção",
        price: 17.98
    },
    {
        id: 3,
        name: "Água de coco",
        price: 8.99
    },
    {
        id: 4,
        name: "Mamão",
        price: 9.98
    },  
    {
        id: 5,
        name: "Água tônica",
        price: 17.98
    }  
]
let body = document.querySelector("body");
let main = document.createElement("main");
let title = document.createElement("h1");
title.innerText = "Virtual Market";
let listHeader = document.createElement("div");
let itemValor = document.createElement("p");
itemValor.innerText = "Item Valor"; 
listHeader.appendChild(itemValor);
let productList = document.createElement("ul");
let total = document.createElement("div");
let tagTotal = document.createElement("p");
tagTotal.innerText = "";
total.appendChild(tagTotal);
let buttonEnd = document.createElement("button");
buttonEnd.innerText = "Finalizar Compra";
function createProductDetails(product) {
    let tagLi = document.createElement("li");
    let tagDivInfo = document.createElement("div");
    let tagNome = document.createElement("h2");
    let tagValor = document.createElement("p");
    tagLi.classList.add("product-card");
    tagDivInfo.classList.add("product-card-info");
    tagNome.innerText = product["name"];
    tagValor.innerText = `R$ ${product["price"]}`.replace(".", ",");
    tagDivInfo.appendChild(tagNome);
    tagDivInfo.appendChild(tagValor);
    tagLi.appendChild(tagDivInfo);
    return tagLi;
}
function createList(array, list) {
    array.forEach(product => list.appendChild(createProductDetails(product)));
    return "Lista criada com sucesso";
}
function createTotal(array) {
    let totalValue = 0;
    array.forEach(product => totalValue += product["price"]);
    return `Total R$ ${totalValue}`.replace(".", ",");
}
function mainAppend(array) {
    array.forEach(element => main.appendChild(element));
    return "Elemento adicionado com sucesso na main";
}
body.appendChild(main);
createList(productsCart, productList);
mainAppend([title, listHeader, productList, total, buttonEnd])
buttonEnd.addEventListener("click", (event) => {
    event.preventDefault(); 
    tagTotal.innerText = createTotal(productsCart);
});

