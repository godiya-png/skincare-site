function addToCart() {
    // Get product details
    let name = document.getElementById("product-name").innerText;
    let price = document.getElementById("product-price").innerText;
    
    // Create product object
    let product = { name: name, price: price };

    // Check if cart exists in local storage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add product to cart
    cart.push(product);
    
    // Save updated cart back to local storage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart!");
}


document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartList = document.getElementById("cart-items");
    cartList= 

    cart.forEach(item => {
        let li = document.createElement("li");
        li.innerText = `${item.name} - ${item.price}`;
        cartList.appendChild(li);
    });
});



function clearCart() {
    localStorage.removeItem("cart");
    alert("Thank you for your purchase!");
    location.reload();
}






let cart = [];

function addToCart(productName, price) {
    // Create a product object
    let product = { name: productName, price: price };

    // Add product to cart array
    cart.push(product);

    // Store in localStorage (to keep it saved in the browser)
    localStorage.setItem("shoppingCart", JSON.stringify(cart));

    // Alert or redirect to cart/checkout page
    alert(productName + " has been added to cart!");
}