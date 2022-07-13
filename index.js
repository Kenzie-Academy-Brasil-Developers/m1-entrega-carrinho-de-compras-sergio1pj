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
let listHeader = document.createElement("div");
let item = document.createElement("p");
let valor = document.createElement("p");
let productList = document.createElement("ul");
let buttonEnd = document.createElement("button");
function createProductDetails(product) {
    let tagLi = document.createElement("li");
    let tagDivInfo = document.createElement("div");
    let tagNome = document.createElement("h2");
    let tagValor = document.createElement("p");
    tagLi.classList.add("product-card");
    tagDivInfo.classList.add("product-card-info");
    tagNome.innerText = product["name"];
    tagValor.innerText = product["price"];
    tagDivInfo.appendChild(tagNome);
    tagDivInfo.appendChild(tagValor);
    tagLi.appendChild(tagDivInfo);
    return tagLi;
}
function createList(array, list) {
    array.forEach(product => list.appendChild(createProductDetails(product)));
    return "Lista criada com sucesso";
}
body.appendChild(main);
createList(productsCart, productList);
item.innerText = "Item";
valor.innerText = "Valor";
listHeader.appendChild(item);
listHeader.appendChild(valor);
main.appendChild(listHeader);
main.appendChild(productList);
