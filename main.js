// Sample product data with Unsplash images
const products = [
  { 
    id: 1, 
    name: "Wireless Earbuds", 
    price: 59.99, 
    category: "electronics", 
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", 
    rating: 4.5 
  },
  { 
    id: 2, 
    name: "Smart Watch", 
    price: 129.99, 
    category: "electronics", 
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", 
    rating: 4.2 
  },
  { 
    id: 3, 
    name: "Cotton T-Shirt", 
    price: 19.99, 
    category: "fashion", 
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", 
    rating: 4.0 
  },
  { 
    id: 4, 
    name: "Running Shoes", 
    price: 89.99, 
    category: "fashion", 
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", 
    rating: 4.7 
  },
  { 
    id: 5, 
    name: "Best Seller Book", 
    price: 14.99, 
    category: "books", 
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", 
    rating: 4.8 
  },
  { 
    id: 6, 
    name: "Coffee Maker", 
    price: 49.99, 
    category: "home", 
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", 
    rating: 4.3 
  },
  { 
    id: 7, 
    name: "Bluetooth Speaker", 
    price: 39.99, 
    category: "electronics", 
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", 
    rating: 4.1 
  },
  { 
    id: 8, 
    name: "Desk Lamp", 
    price: 24.99, 
    category: "home", 
    image: "photo-1582356630861-61bb9b41f541.jpeg", 
    rating: 4.4 
  },
  { 
    id: 9, 
    name: "Laptop", 
    price: 899.99, 
    category: "electronics", 
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", 
    rating: 4.6 
  },
  { 
    id: 10, 
    name: "Backpack", 
    price: 49.99, 
    category: "fashion", 
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", 
    rating: 4.2 
  },
  { 
    id: 11, 
    name: "Novel", 
    price: 12.99, 
    category: "books", 
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", 
    rating: 4.7 
  },
  { 
    id: 12, 
    name: "Kitchen Mixer", 
    price: 79.99, 
    category: "home", 
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", 
    rating: 4.5 
  }
];

// Cart functionality
let cart = [];
const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const closeCartBtn = document.getElementById('close-cart');

// Display products
function displayProducts(productsArray) {
  const productsGrid = document.getElementById('products');
  productsGrid.innerHTML = '';
  
  productsArray.forEach(product => {
    const productCard = `
      <div class="col">
        <div class="card product-card h-100">
          <img src="${product.image}" class="card-img-top product-img" alt="${product.name}">
          <div class="card-body product-info">
            <h5 class="card-title">${product.name}</h5>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="product-price">$${product.price.toFixed(2)}</span>
              <span class="text-warning">
                <i class="fas fa-star"></i> ${product.rating}
              </span>
            </div>
            <button class="btn add-to-cart-btn" onclick="addToCart(${product.id})">
              <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;
    productsGrid.innerHTML += productCard;
  });
}

// Add to cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({...product, quantity: 1});
  }
  
  updateCart();
  openCart();
}

// Update cart
function updateCart() {
  cartItems.innerHTML = '';
  let total = 0;
  let count = 0;
  
  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    count += item.quantity;
    
    const cartItem = `
      <li class="cart-item">
        <div class="d-flex justify-content-between">
          <h6>${item.name}</h6>
          <span>$${itemTotal.toFixed(2)}</span>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-2">
          <div class="btn-group btn-group-sm">
            <button class="btn btn-outline-secondary" onclick="changeQuantity(${item.id}, -1)">-</button>
            <button class="btn btn-outline-secondary disabled">${item.quantity}</button>
            <button class="btn btn-outline-secondary" onclick="changeQuantity(${item.id}, 1)">+</button>
          </div>
          <button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </li>
    `;
    cartItems.innerHTML += cartItem;
  });
  
  cartCount.textContent = count;
  cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Change quantity
function changeQuantity(productId, change) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      cart = cart.filter(i => i.id !== productId);
    }
    updateCart();
  }
}

// Remove from cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCart();
}

// Open cart
function openCart() {
  cartDrawer.classList.add('active');
  cartOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close cart
function closeCart() {
  cartDrawer.classList.remove('active');
  cartOverlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Filter products
function filterProducts() {
  const category = document.getElementById('category-filter').value;
  const sort = document.getElementById('sort-filter').value;
  
  let filteredProducts = [...products];
  
  // Category filter
  if (category !== 'all') {
    filteredProducts = filteredProducts.filter(product => product.category === category);
  }
  
  // Sort filter
  if (sort === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sort === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }
  
  displayProducts(filteredProducts);
}

// Initialize the application
function initApp() {
  // Event listeners
  document.querySelector('.cart-btn').addEventListener('click', function(e) {
    e.preventDefault();
    openCart();
  });

  closeCartBtn.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  // Filter event listeners
  document.getElementById('category-filter').addEventListener('change', filterProducts);
  document.getElementById('sort-filter').addEventListener('change', filterProducts);

  // Display initial products
  displayProducts(products);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
