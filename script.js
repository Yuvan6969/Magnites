// Cart functionality
let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

function updateCart() {
    let cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = "";

    cart.forEach((item, index) => {
        let div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `${item.name} - ₹${item.price} <button onclick="removeFromCart(${index})">Remove</button>`;
        cartContainer.appendChild(div);
    });

    document.getElementById("total").innerText = `Total: ₹${cart.reduce((sum, item) => sum + item.price, 0)}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    alert("Redirecting to Google Pay...");
}
