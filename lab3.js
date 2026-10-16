let cartQuantity = 0;

document.getElementById("addToCartBtn").addEventListener("click", function () {
  cartQuantity++;
});

document
  .getElementById("showQuantityBtn")
  .addEventListener("click", function () {
    alert("Items in cart: " + cartQuantity);
  });

document.getElementById("resetCartBtn").addEventListener("click", function () {
  cartQuantity = 0;
  alert("Cart has been reset.");
});

document.getElementById("addTwoBtn").addEventListener("click", function () {
  cartQuantity += 2;
});

document.getElementById("addThreeBtn").addEventListener("click", function () {
  cartQuantity += 3;
});
