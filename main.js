document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".product");
  const cartQuantitySpan = document.querySelector(".cart-quantity");
  let totalCartQuantity = 0;

  products.forEach((product) => {
    const decreaseButton = product.querySelector(".decrease");
    const increaseButton = product.querySelector(".increase");
    const addToCartButton = product.querySelector(".price");
    const quantitySpan = product.querySelector(".quantity span");
    const priceSpan = product.querySelector(".price span");
    let currentQuantity = parseInt(quantitySpan.textContent);
    let currentPrice = parseInt(priceSpan.textContent);

    decreaseButton.addEventListener("click", function (event) {
      event.preventDefault();
      if (currentQuantity > 0) {
        currentQuantity -= 1;
        quantitySpan.textContent = currentQuantity;
        priceSpan.textContent = currentPrice * currentQuantity;
      }
    });

    increaseButton.addEventListener("click", function (event) {
      event.preventDefault();
      currentQuantity += 1;
      quantitySpan.textContent = currentQuantity;
      priceSpan.textContent = currentPrice * currentQuantity;
    });

    addToCartButton.addEventListener("click", function (event) {
      event.preventDefault();
      cartQuantitySpan.style.display = "flex";
      totalCartQuantity += currentQuantity;
      cartQuantitySpan.textContent = totalCartQuantity;
    });
  });
});
