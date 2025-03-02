const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const cartClose = document.querySelector("#cart-close");

cartIcon.addEventListener("click", () => cart.classList.add("active"));
cartClose.addEventListener("click", () => cart.classList.remove("active"));

const addCartButtons = document.querySelectorAll(".add-cart");
const cartContent = document.querySelector(".cart-content");
const totalPriceElement = document.querySelector(".total-price");

// Add event listeners to "Add to Cart" buttons
addCartButtons.forEach(button => {
    button.addEventListener("click", event => {
        const productBox = event.target.closest(".product-box");
        addCart(productBox);
    });
});

// Function to add product to cart
const addCart = (productBox) => {
    const productImgSrc = productBox.querySelector("img").src;
    const productTitle = productBox.querySelector(".product-title").textContent;
    const productPrice = productBox.querySelector(".price").textContent;

    // Check if item already exists in cart
    const existingCartItem = [...cartContent.querySelectorAll(".cart-product-title")]
        .find(item => item.textContent === productTitle);

    if (existingCartItem) {
        // Increase quantity if item already exists
        const quantityElement = existingCartItem.closest(".cart-box").querySelector(".number");
        quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
        updatePrice();
        return;
    }

    // Create new cart item
    const cartBox = document.createElement("div");
    cartBox.classList.add("cart-box");
    cartBox.innerHTML = `
        <img src="${productImgSrc}" class="cart-img">
        <div class="cart-details">
            <h2 class="cart-product-title">${productTitle}</h2>
            <span class="cart-price">${productPrice}</span>
            <div class="cart-quantity">
                <button class="decrease">-</button>
                <span class="number">1</span>
                <button class="increase">+</button>
            </div>
        </div>
        <i class="ri-delete-bin-line cart-remove"></i>
    `;

    cartContent.appendChild(cartBox);
    updatePrice(); // Update total price after adding a new item
};

// Event delegation for handling quantity changes and removals
cartContent.addEventListener("click", event => {
    if (event.target.classList.contains("increase")) {
        changeQuantity(event.target.closest(".cart-box"), 1);
    } else if (event.target.classList.contains("decrease")) {
        changeQuantity(event.target.closest(".cart-box"), -1);
    } else if (event.target.classList.contains("cart-remove")) {
        event.target.closest(".cart-box").remove();
        updatePrice();
    }
});

// Function to update quantity
const changeQuantity = (cartBox, amount) => {
    const quantityElement = cartBox.querySelector(".number");
    let quantity = parseInt(quantityElement.textContent) + amount;

    if (quantity < 1) {
        cartBox.remove(); // Remove item if quantity goes below 1
    } else {
        quantityElement.textContent = quantity;
    }
    updatePrice();
};

// Function to update total cart price
const updatePrice = () => {
    let total = 0;
    document.querySelectorAll(".cart-box").forEach(cartBox => {
        const priceElement = cartBox.querySelector(".cart-price");
        const quantityElement = cartBox.querySelector(".number");
        const price = parseFloat(priceElement.textContent.replace("₹", ""));
        const quantity = parseInt(quantityElement.textContent);
        total += price * quantity;
    });

    totalPriceElement.textContent = `₹${total.toFixed(2)}`;
};
