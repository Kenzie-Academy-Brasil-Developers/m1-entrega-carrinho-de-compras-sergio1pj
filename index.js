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
let Body = document.querySelector("body");
let Main = document.createElement("main");
let productList = document.createElement("ul");
let buttonEnd = document.createElement("button");

Body.appendChild(Main);
Main.appendChild(productList);


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

function createSection(list, section) {
    list.forEach(element => section.appendChild(createProductDetails(element)));
}

createSection(productsCart, productList);