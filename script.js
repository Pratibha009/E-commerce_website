// script.js
let cart = [];
let cartCount = 0;


document.addEventListener("DOMContentLoaded", function() {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function() {
      const productId = button.getAttribute("data-product-id");
      const productName = button.getAttribute("data-product-name");
      const productPrice = button.getAttribute("data-product-price");

      const existingItem = cart.find((item) => item.productId === productId);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({
          productId,
          productName,
          productPrice,
          quantity: 1,
        });
      }

      cartCount++;
      document.getElementById("cart-count").textContent = cartCount;

      // Add item to cart page
      const cartPageUrl = "cart.html";
      const xhr = new XMLHttpRequest();
      xhr.open("GET", cartPageUrl, true);
      xhr.onload = function() {
        if (xhr.status === 200) {
          const cartPageHtml = xhr.responseText;
          const cartListElement = document.createElement("div");
          cartListElement.innerHTML = cartPageHtml;
          const cartList = cartListElement.querySelector("#cart-list");
          const cartItem = document.createElement("li");
          cartItem.textContent = `${productName} x ${1} = ₹${productPrice}`;
          cartList.appendChild(cartItem);

          // Update cart page
          const cartTotalElement = cartListElement.querySelector("#cart-total");
          const total = cart.reduce((acc, item) => acc + item.productPrice * item.quantity, 0);
          cartTotalElement.textContent = `Total: ₹${total}`;
        }
      };
      xhr.send();

      // Update cart page in local storage
      localStorage.setItem("cart", JSON.stringify(cart));
    });
  });
});










