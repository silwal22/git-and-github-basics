const baseProducts = [
  { id: 1, name: "Wireless Headphones", category: "Electronics", price: 89.99, image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80" },
  { id: 2, name: "Smart Watch", category: "Wearables", price: 149.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80" },
  { id: 3, name: "Running Shoes", category: "Fashion", price: 120.00, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80" },
  { id: 4, name: "Coffee Grinder", category: "Home", price: 64.50, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80" },
  { id: 5, name: "Laptop Stand", category: "Office", price: 39.99, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80" },
  { id: 6, name: "Bluetooth Speaker", category: "Audio", price: 79.00, image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80" },
  { id: 7, name: "Backpack", category: "Travel", price: 58.25, image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80" },
  { id: 8, name: "Desk Lamp", category: "Home", price: 42.80, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80" },
  { id: 9, name: "Camera", category: "Electronics", price: 299.00, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80" },
  { id: 10, name: "Classic Chair", category: "Furniture", price: 180.00, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80" },
  { id: 11, name: "Gaming Mouse", category: "Gaming", price: 49.99, image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80" },
  { id: 12, name: "Travel Mug", category: "Lifestyle", price: 24.50, image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80" }
];

const productList = document.getElementById("product-list");
const cartCountEl = document.getElementById("cart-count");
const storyText = document.getElementById("story-text");
const newStoryBtn = document.getElementById("new-story-btn");
let cartCount = 0;

const shopStories = [
  "ShopStore began with a simple idea: make quality products easy to discover and affordable for everyday people. What started as a small online idea grew into a place where shoppers could find trusted essentials and exciting finds.",
  "One rainy evening, a small team wanted to build a better shopping experience for busy families. They imagined an online marketplace where every product felt useful, stylish, and worth sharing, and ShopStore was born.",
  "ShopStore was created by people who loved discovering great items and sharing them with friends. From gadgets to home essentials, the brand grew around the belief that shopping should feel inspiring, simple, and joyful.",
  "The story behind ShopStore is rooted in curiosity and community. A group of creators wanted to bring creative products, practical everyday tools, and hidden gems into one welcoming marketplace for everyone.",
  "ShopStore started as a passion project for people who wanted smarter shopping without the hassle. Over time, it became a trusted destination for discovering items that make daily life easier, more stylish, and more enjoyable."
];

function getRandomProducts() {
  const shuffled = [...baseProducts].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 8).map((product, index) => ({
    ...product,
    id: index + 1,
    price: Number((product.price + Math.random() * 25).toFixed(2))
  }));
}

function renderProducts() {
  if (!productList) return;

  const products = getRandomProducts();

  productList.innerHTML = products.map(product => `
    <article class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="product-info">
        <span class="product-tag">${product.category}</span>
        <h3>${product.name}</h3>
        <p class="product-price">$${product.price.toFixed(2)}</p>
        <button class="add-cart-btn" data-id="${product.id}">Add to Cart</button>
      </div>
    </article>
  `).join("");
}

function generateRandomStory() {
  if (!storyText) return;

  const randomStory = shopStories[Math.floor(Math.random() * shopStories.length)];
  storyText.textContent = randomStory;
}

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-cart-btn")) {
    cartCount += 1;
    if (cartCountEl) {
      cartCountEl.textContent = cartCount;
    }
    const button = event.target;
    button.textContent = "Added";
    button.disabled = true;
    setTimeout(() => {
      button.textContent = "Add to Cart";
      button.disabled = false;
    }, 800);
  }

  if (event.target === newStoryBtn || event.target.closest("#new-story-btn")) {
    generateRandomStory();
  }
});

if (productList) {
  renderProducts();
}

if (storyText) {
  generateRandomStory();
}