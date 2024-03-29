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
let shoppingCart = document.createElement("section");
let listHeader = document.createElement("h2");
let productList = document.createElement("ul");
let total = document.createElement("p");
let buttonEnd = document.createElement("button");
let shoppingCartList = [listHeader, productList, total, buttonEnd];
listHeader.innerText = "Carrinho";
total.innerText = "";
buttonEnd.innerText = "Finalizar compra";
main.classList.add("container");
shoppingCart.classList.add("shopping-cart");
productList.classList.add("products-wrapper")
total.classList.add("info")
body.appendChild(main);
modAppend(convertCards(productsCart), productList);
modAppend(shoppingCartList, shoppingCart);
main.appendChild(shoppingCart);
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
buttonEnd.addEventListener("click", (event) => {
    event.preventDefault(); 
    total.innerText = createTotal(productsCart);
});
