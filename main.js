const products = [
  { id: 1, name: "Smartphone", price: 299, category: "electronics", img: "/photo-1575695342320-d2d2d2f9b73f.jpeg" },
  { id: 2, name: "Headphones", price: 49, category: "electronics", img: "/photo-1628202926206-c63a34b1618f.jpeg" },
  { id: 3, name: "T-Shirt", price: 19, category: "fashion", img: "/photo-1583743814966-8936f5b7be1a.jpeg" },
  { id: 4, name: "Sneakers", price: 89, category: "fashion", img: "/photo-1595950653106-6c9ebd614d3a.jpeg" },
 
  { id: 5, name: "Smartphone", price: 299, category: "electronics", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
  { id: 6, name: "Laptop", price: 999, category: "electronics", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
  { id: 7, name: "Headphones", price: 79, category: "electronics", img: "https://images.unsplash.com/photo-1580894894513-5410ec74b6f6" },
  { id: 8, name: "Smartwatch", price: 199, category: "electronics", img: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b" },

  { id: 9, name: "T-Shirt", price: 19, category: "fashion", img: "https://images.unsplash.com/photo-1520975918318-3b1ff3e55bbb" },
  { id: 10, name: "Sneakers", price: 89, category: "fashion", img: "https://images.unsplash.com/photo-1528701800489-20be9c1a22a0" },
  { id: 11, name: "Backpack", price: 59, category: "fashion", img: "https://images.unsplash.com/photo-1596464716121-f98450b2013f" },
  { id: 12, name: "Sunglasses", price: 39, category: "fashion", img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083" },

  { id: 13, name: "Toy Car", price: 29, category: "toys", img: "https://images.unsplash.com/photo-1616618103739-41be08a9c0f3" },
  { id: 14, name: "Building Blocks", price: 45, category: "toys", img: "https://images.unsplash.com/photo-1586796677943-dc2a7f1f6d36" },
  { id: 15, name: "Football", price: 35, category: "sports", img: "https://images.unsplash.com/photo-1599058917212-d750089bc04b" },
  { id: 16, name: "Cricket Bat", price: 55, category: "sports", img: "https://images.unsplash.com/photo-1625512415170-f0a21d09f28f" }

  
 
];

const productsContainer = document.getElementById("products");
const cartDrawer = document.getElementById("cart-drawer");
const cartItemsList = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");

let cart = [];

// Render products
function displayProducts(items) {
  productsContainer.innerHTML = "";
  items.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productsContainer.appendChild(card);
  });
}

// Add to cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

// Update cart UI
function updateCart() {
  cartItemsList.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItemsList.appendChild(li);
  });
  cartCount.textContent = cart.length;
}

// Cart toggle
const cartBtn = document.querySelector(".cart-btn");
cartBtn.addEventListener("click", e => {
  e.preventDefault();
  cartDrawer.classList.toggle("active");
});

// Checkout
const checkoutBtn = document.getElementById("checkout-btn");
checkoutBtn.addEventListener("click", () => {
  alert("Checkout feature coming soon!");
});

// Initial load
displayProducts(products);