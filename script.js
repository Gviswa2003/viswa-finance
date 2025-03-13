// JavaScript for dynamic product listing and order functionality
document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { name: "covering thodu ", image: "C:\Users\welcome\OneDrive\Pictures\image.jfif" },
        { name: "covering  Necklace", image: "silver_necklace.jpg" },
        { name: "desgin kolusu", image: "gold_bangle.jpg" }
    ];

    const productContainer = document.querySelector(".product-container");
    
    // Dynamically add products
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="150">
            <p>${product.name}</p>
        `;
        productContainer.appendChild(productDiv);
    });

    // Order button alert
    document.getElementById("order-now").addEventListener("click", () => {
        alert("DEAR CUSTOMER, YOUR PRODUCT WILL READY WITHIN ONE WEEK . PLEASE CALL THE SHOP OWNER FOR CONFRIMATION AND FUTHRT DETAILS");
    });
});
