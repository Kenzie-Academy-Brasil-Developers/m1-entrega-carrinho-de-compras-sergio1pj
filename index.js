const productsCart = [
    {
        id: 1,
        name: "",
        price: 0.00
    }
]
let Body = document.querySelector("body");
let Main = document.createElement("main");
let productList = document.createElement("ul");
let productDetails = document.createElement("li");
let buttonEnd = document.createElement("button");

Body.appendChild(Main);
Main.appendChild(productList);
Main.appendChild(productDetails);