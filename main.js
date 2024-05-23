document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".product");

  products.forEach((product) => {
    const decreaseButton = product.querySelector(".decrease");
    const increaseButton = product.querySelector(".increase");
    const quantitySpan = product.querySelector(".quantity span");

    decreaseButton.addEventListener("click", function (event) {
      event.preventDefault();
      let currentQuantity = parseInt(quantitySpan.textContent);
      if (currentQuantity > 0) {
        quantitySpan.textContent = currentQuantity - 1;
      }
    });

    increaseButton.addEventListener("click", function (event) {
      event.preventDefault();
      let currentQuantity = parseInt(quantitySpan.textContent);
      quantitySpan.textContent = currentQuantity + 1;
    });
  });
});
