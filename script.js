// This file contains the JavaScript code for the marketplace website. 

document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Product 1', price: 10.00 },
        { id: 2, name: 'Product 2', price: 15.00 },
        { id: 3, name: 'Product 3', price: 20.00 },
    ];

    const productContainer = document.getElementById('product-list');
    const cart = [];

    function displayProducts() {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <h3>${product.name}</h3>
                <p>Price: $${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productContainer.appendChild(productDiv);
        });
    }

    window.addToCart = function(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.push(product);
            alert(`${product.name} has been added to your cart.`);
        }
    };

    displayProducts();
});