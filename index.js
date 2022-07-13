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
let itemValor = document.createElement("p");
let productList = document.createElement("ul");
let total = document.createElement("div");
let buttonEnd = document.createElement("button");
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
    let tagTotal = document.createElement("p");
    tagTotal.innerText = `Total R$ ${totalValue}`.replace(".", ",");
    total.appendChild(tagTotal);
    return "Total criado com sucesso";
}
body.appendChild(main);
createList(productsCart, productList);
createTotal(productsCart, total);
itemValor.innerText = "Item Valor"; 
listHeader.appendChild(itemValor);
main.appendChild(listHeader);
main.appendChild(productList);
main.appendChild(total);
buttonEnd.innerText = "Finalizar Compra";
main.appendChild(buttonEnd);
