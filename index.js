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
let shoppingCart = document.createElement("section");
shoppingCart.classList.add("shopping-cart");
let listHeader = document.createElement("h2");
listHeader.innerText = "Carrinho";
let productList = document.createElement("ul");
productList.classList.add("products-wrapper")
let total = document.createElement("div");
total.classList.add("info")
let valorTotal = document.createElement("p");
valorTotal.innerText = "";
total.appendChild(valorTotal);
let buttonEnd = document.createElement("button");
buttonEnd.innerText = "Finalizar Compra";
total.appendChild(buttonEnd);
function createCard(product) {
    let tagLi = document.createElement("li");
    let tagNome = document.createElement("h2");
    let tagValor = document.createElement("p");
    tagLi.classList.add("product-card");
    tagNome.innerText = product["name"];
    tagValor.innerText = `R$ ${product["price"]}`.replace(".", ",");
    tagLi.appendChild(tagNome);
    tagLi.appendChild(tagValor);
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
main.appendChild(shoppingCart);
modAppend(convertCards(productsCart), productList);
let shoppingCartList = [title, listHeader, productList, total];
modAppend(shoppingCartList, shoppingCart)
buttonEnd.addEventListener("click", (event) => {
    event.preventDefault(); 
    valorTotal.innerText = createTotal(productsCart);
});
