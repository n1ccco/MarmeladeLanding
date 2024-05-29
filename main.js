document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".product");
  const cartQuantitySpan = document.querySelector(".cart-quantity");
  let totalCartQuantity = 0;

  function showPopup(message) {
    let popup = document.querySelector(".popup");
    if (!popup) {
      popup = document.createElement("div");
      popup.className = "popup";
      document.body.appendChild(popup);
    }
    popup.textContent = message;
    popup.style.display = "block";
    popup.style.opacity = 0; // Set opacity to 0 and make it visible to start the transition

    setTimeout(() => {
      popup.style.opacity = 0.6; // Fade in
    }, 10); // Delay just enough to ensure the style changes are applied

    setTimeout(() => {
      popup.style.opacity = 0; // Start fading out after 2000 milliseconds (2 seconds)
      setTimeout(() => {
        popup.style.display = "none"; // Fully hide after the fade-out transition
      }, 500); // Delay to allow the fade-out transition to complete
    }, 2000);
  }

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
      if (totalCartQuantity > 0) {
        showPopup("zum Warenkorb hinzugefügt");
      }
    });
  });
});
