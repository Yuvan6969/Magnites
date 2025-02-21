// script.js - Updated for Shopping Cart and Payments

document.addEventListener("DOMContentLoaded", function () {
    const cart = [];
    const cartContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout");

    // Function to update cart UI
    function updateCart() {
        cartContainer.innerHTML = "";
        let total = 0;
        cart.forEach((item, index) => {
            total += item.price;
            cartContainer.innerHTML += `<li>${item.name} - $${item.price.toFixed(2)} <button onclick="removeFromCart(${index})">Remove</button></li>`;
        });
        cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    }

    // Function to add item to cart
    window.addToCart = function (name, price) {
        cart.push({ name, price });
        updateCart();
    };

    // Function to remove item from cart
    window.removeFromCart = function (index) {
        cart.splice(index, 1);
        updateCart();
    };

    // Google Pay Integration
    checkoutButton.addEventListener("click", function () {
        alert("Redirecting to Google Pay...");
        window.location.href = "https://pay.google.com/gp/w/u/0/home/paymentmethods"; // Replace with actual integration
    });

    updateCart();
});
