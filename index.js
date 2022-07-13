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
main.classList.add("container");
let title = document.createElement("h1");
title.innerText = "Virtual Market";
let listHeader = document.createElement("div");
let itemValor = document.createElement("p");
itemValor.innerText = "Item Valor"; 
listHeader.appendChild(itemValor);
let productList = document.createElement("ul");
productList.classList.add("products-wrapper")
let total = document.createElement("div");
let valorTotal = document.createElement("p");
valorTotal.innerText = "";
total.appendChild(valorTotal);
let buttonEnd = document.createElement("a");
buttonEnd.classList.add("link-button");
buttonEnd.innerText = "Finalizar Compra";
function createCard(product) {
    let tagLi = document.createElement("li");
    let tagDivInfo = document.createElement("div");
    let tagNome = document.createElement("h2");
    let tagValor = document.createElement("p");
    tagLi.classList.add("product-card");
    tagNome.innerText = product["name"];
    tagValor.innerText = `R$ ${product["price"]}`.replace(".", ",");
    tagDivInfo.appendChild(tagNome);
    tagDivInfo.appendChild(tagValor);
    tagLi.appendChild(tagDivInfo);
    return tagLi;
}
function convertCards(array) {
    return array.map(product =>  createCard(product));
}
function modAppend(arrayDom, list) {
    arrayDom.forEach(element => list.appendChild(element));
    return "true";
}
function createTotal(array) {
    let totalValue = 0;
    array.forEach(product => totalValue += product["price"]);
    return `Total R$ ${totalValue}`.replace(".", ",");
}
body.appendChild(main);
modAppend(convertCards(productsCart), productList);
let mainList = [title, listHeader, productList, total, buttonEnd];
modAppend(mainList, main)
buttonEnd.addEventListener("click", (event) => {
    event.preventDefault(); 
    valorTotal.innerText = createTotal(productsCart);
});
