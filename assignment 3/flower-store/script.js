/*********************************
  1. HEADER & FOOTER
*********************************/
const headerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
  <div class="container">
    <a class="navbar-brand" href="index.html">🌸 Flower Store</a>

    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navMenu">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navMenu">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="shop.html">Shop</a></li>
        <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
        <li class="nav-item"><a class="nav-link" href="reviews.html">Reviews</a></li>
        <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
      </ul>

      <div class="d-flex gap-3">
        <button id="likes-btn" class="btn btn-link position-relative">
          <i class="bi bi-heart"></i>
          <span id="likes-count" class="badge bg-danger position-absolute">0</span>
        </button>

        <button id="cart-btn" class="btn btn-link position-relative">
          <i class="bi bi-cart"></i>
          <span id="cart-count" class="badge bg-danger position-absolute">0</span>
        </button>
      </div>
    </div>
  </div>
</nav>
`;

const footerHTML = `
<footer class="bg-light py-4 mt-5 text-center">
  © 2026 Flower Store
</footer>
`;

document.getElementById("site-header")?.insertAdjacentHTML("afterbegin", headerHTML);
document.getElementById("site-footer")?.insertAdjacentHTML("afterbegin", footerHTML);



/*********************************
  2. PRODUCT DATA
*********************************/
const products = [
  { id: 1, flowerType: "Roses", title: "Premium Red Roses", price: 799, mrp: 999, img: "assets/redrose.jpg", rating: 5 },
  { id: 2, flowerType: "Tulips", title: "Spring Tulip Mix", price: 499, mrp: 699, img: "assets/tulip.jpg", rating: 4 },
  { id: 3, flowerType: "Lilies", title: "White Lilies Bouquet", price: 599, mrp: 899, img: "assets/lily.jpg", rating: 5 },
  { id: 4, flowerType: "Orchids", title: "Elegant Orchid Collection", price: 899, mrp: 1299, img: "assets/orchid.jpg", rating: 5 },
  { id: 5, flowerType: "Sunflowers", title: "Bright Sunflower Bundle", price: 449, mrp: 649, img: "assets/sunflower.jpg", rating: 4 },
  { id: 6, flowerType: "Carnations", title: "Mixed Carnation Bouquet", price: 349, mrp: 499, img: "assets/carnation.jpg", rating: 4 },
  { id: 7, flowerType: "Roses", title: "Pink Rose Paradise", price: 749, mrp: 999, img: "assets/pinkrose.jpg", rating: 5 },
  { id: 8, flowerType: "Gerberas", title: "Colorful Gerbera Mix", price: 549, mrp: 799, img: "assets/gerbera.jpg", rating: 4 },
  { id: 9, flowerType: "Daisies", title: "Cheerful Daisy Bouquet", price: 399, mrp: 599, img: "assets/daisy.jpg", rating: 4 },
  { id: 10, flowerType: "Hydrangeas", title: "Blue Hydrangea Elegance", price: 699, mrp: 999, img: "assets/hydrangea.jpg", rating: 5 },
  { id: 11, flowerType: "Lavender", title: "Fragrant Lavender Bundle", price: 429, mrp: 629, img: "assets/lavender.jpg", rating: 4 },
  { id: 12, flowerType: "Mixed Flowers", title: "Garden Dream Mix", price: 649, mrp: 899, img: "assets/mixedflowers.jpg", rating: 5 },
  { id: 13, flowerType: "Roses", title: "Royal Red Roses", price: 999, mrp: 1399, img: "assets/redrose.jpg", rating: 5 },
  { id: 14, flowerType: "Peonies", title: "Romantic Peony Bouquet", price: 849, mrp: 1199, img: "assets/peony.jpg", rating: 5 },
  { id: 15, flowerType: "Chrysanthemums", title: "Golden Chrysanthemum", price: 499, mrp: 699, img: "assets/chrysanthemum.jpg", rating: 4 },
  { id: 16, flowerType: "Blossoms", title: "Cherry Blossom Collection", price: 579, mrp: 799, img: "assets/blossom.jpg", rating: 4 },
  { id: 17, flowerType: "Roses", title: "White Rose Romance", price: 799, mrp: 1099, img: "assets/whiterose.jpg", rating: 5 },
  { id: 18, flowerType: "Ranunculus", title: "Delicate Ranunculus", price: 689, mrp: 999, img: "assets/ranunculus.jpg", rating: 5 },
  { id: 19, flowerType: "Tulips", title: "Rainbow Tulip Mix", price: 549, mrp: 749, img: "assets/tulip.jpg", rating: 4 },
  { id: 20, flowerType: "Lilies", title: "Oriental Lily Bouquet", price: 679, mrp: 949, img: "assets/lily.jpg", rating: 5 },
  { id: 21, flowerType: "Roses", title: "Coral Rose Charm", price: 649, mrp: 899, img: "assets/coralrose.jpg", rating: 4 },
  { id: 22, flowerType: "Freesia", title: "Sweet Freesia Bunch", price: 429, mrp: 629, img: "assets/freesia.jpg", rating: 4 },
  { id: 23, flowerType: "Mixed Flowers", title: "Sunset Garden Mix", price: 699, mrp: 999, img: "assets/mixedflowers.jpg", rating: 5 },
  { id: 24, flowerType: "Orchids", title: "Purple Orchid Dream", price: 799, mrp: 1199, img: "assets/orchid.jpg", rating: 5 },
  { id: 25, flowerType: "Sunflowers", title: "Golden Sunflower Star", price: 499, mrp: 699, img: "assets/sunflower.jpg", rating: 4 },
  { id: 26, flowerType: "Roses", title: "Passion Pink Roses", price: 749, mrp: 1049, img: "assets/pinkrose.jpg", rating: 5 },
  { id: 27, flowerType: "Carnations", title: "Premium Carnation Mix", price: 399, mrp: 599, img: "assets/carnation.jpg", rating: 4 },
  { id: 28, flowerType: "Gerberas", title: "Vibrant Gerbera Garden", price: 599, mrp: 849, img: "assets/gerbera.jpg", rating: 5 },
  { id: 29, flowerType: "Daisies", title: "Sunshine Daisy Paradise", price: 449, mrp: 649, img: "assets/daisy.jpg", rating: 4 },
  { id: 30, flowerType: "Hydrangeas", title: "Purple Hydrangea Bliss", price: 749, mrp: 1049, img: "assets/hydrangea.jpg", rating: 5 },
  { id: 31, flowerType: "Lavender", title: "Premium Lavender Bunch", price: 479, mrp: 699, img: "assets/lavender.jpg", rating: 4 },
  { id: 32, flowerType: "Mixed Flowers", title: "Tropical Paradise Mix", price: 749, mrp: 999, img: "assets/mixedflowers.jpg", rating: 5 }
];



/*********************************
  3. FEATURED PRODUCTS
*********************************/
function renderFeaturedProducts() {
  const box = document.getElementById("featured-products");
  if (!box) return;

  box.innerHTML = "";

  // Show only first 3 products as featured
  products.slice(0, 3).forEach(p => {
    box.innerHTML += `
      <div class="col-md-4 mb-4">
        <a href="product.html?id=${p.id}" class="card-link" style="text-decoration: none; color: inherit;">
          <div class="card card-flower">
            <div class="card-img-wrapper">
              <img src="${p.img}" class="card-img-top" alt="${p.title}">
            </div>
            <div class="card-body">
              <small class="flower-type">${p.flowerType}</small>
              <h5 class="card-title">${p.title}</h5>
              <div class="rating mb-3">${"⭐".repeat(p.rating)}</div>

              <div class="card-footer-actions mt-auto">
                <strong class="price">₹${p.price}</strong>
                <div class="action-buttons">
                  <button class="btn btn-sm btn-outline-danger like-btn" data-id="${p.id}" title="Add to wishlist" onclick="event.stopPropagation();">
                    <i class="bi bi-heart"></i>
                  </button>
                  <button class="btn btn-sm btn-pink add-cart" data-id="${p.id}" title="Add to cart" onclick="event.stopPropagation();">
                    <i class="bi bi-cart-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    `;
  });
}

renderFeaturedProducts();



/*********************************
  4. SERVICES
*********************************/
const services = [
  { id: 1, name: "Birthday Decor", img: "assets/img/product1.jpg", type: "birthday" },
  { id: 2, name: "Wedding Decor", img: "assets/img/product2.jpg", type: "wedding" },
  { id: 3, name: "Ganpati Decor", img: "assets/img/product3.jpg", type: "ganpati" },
  { id: 4, name: "Garlands", img: "assets/img/product4.jpg", type: "garlands" },
  { id: 5, name: "Car Decor", img: "assets/img/product5.jpg", type: "car" },
  { id: 6, name: "House Party Decor", img: "assets/img/product6.jpg", type: "houseparty" }
];

function renderServices() {
  const box = document.getElementById("services-list");
  if (!box) return;

  box.innerHTML = "";

  services.forEach(s => {
    box.innerHTML += `
      <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
        <div class="service-card">
          <div class="service-image">
            <img src="${s.img}" alt="${s.name}">
          </div>
          <div class="service-content">
            <h5 class="service-title">${s.name}</h5>
            <a href="service-detail.html?type=${s.type}" class="service-arrow" title="View ${s.name}">
              <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    `;
  });
}

renderServices();



/*********************************
  5. CART & LIKES (LOCAL STORAGE)
*********************************/
const CART_KEY = "flower_cart";
const LIKE_KEY = "flower_likes";

function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

function getLikes() {
  return JSON.parse(localStorage.getItem(LIKE_KEY)) || [];
}

function saveLikes(likes) {
  localStorage.setItem(LIKE_KEY, JSON.stringify(likes));
  updateLikeCount();
}

function updateCartCount() {
  const total = getCart().reduce((sum, item) => sum + item.qty, 0);
  document.getElementById("cart-count").innerText = total;
}

function updateLikeCount() {
  document.getElementById("likes-count").innerText = getLikes().length;
}



/*********************************
  6. BUTTON HANDLING
*********************************/
document.addEventListener("click", e => {

  // LIKE
  const likeBtn = e.target.closest(".like-btn");
  if (likeBtn) {
    const id = Number(likeBtn.dataset.id);
    let likes = getLikes();

    likes.includes(id)
      ? likes = likes.filter(x => x !== id)
      : likes.push(id);

    saveLikes(likes);
    likeBtn.classList.toggle("text-danger");
  }

  // CART
  const cartBtn = e.target.closest(".add-cart");
  if (cartBtn) {
    const id = Number(cartBtn.dataset.id);
    let cart = getCart();
    const item = cart.find(p => p.id === id);

    item ? item.qty++ : cart.push({ id, qty: 1 });
    saveCart(cart);
  }
});

updateCartCount();
updateLikeCount();



/*********************************
  7. SIMPLE FORMS
*********************************/
document.getElementById("newsletter-form")?.addEventListener("submit", e => {
  e.preventDefault();
  alert("Subscribed successfully!");
});

document.getElementById("contact-form")?.addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent!");
});


/*********************************
  3B. SHOP PRODUCTS
*********************************/
function renderShopProducts() {
  const box = document.getElementById("shop-products");
  if (!box) return;

  box.innerHTML = "";

  products.forEach(p => {
    box.innerHTML += `
      <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
        <a href="product.html?id=${p.id}" class="card-link" style="text-decoration: none; color: inherit;">
          <div class="card card-flower h-100 product-card" data-product-id="${p.id}">
            <div class="card-img-wrapper">
              <img src="${p.img}" class="card-img-top" alt="${p.title}">
            </div>
            <div class="card-body d-flex flex-column">
              <small class="flower-type">${p.flowerType}</small>
              <h5 class="card-title">${p.title}</h5>
              <div class="rating mb-2">${"⭐".repeat(p.rating)}</div>

              <div class="card-footer-actions mt-auto">
                <strong class="price">₹${p.price}</strong>
                <div class="action-buttons">
                  <button class="btn btn-sm btn-outline-danger like-btn" data-id="${p.id}" title="Add to wishlist" onclick="event.stopPropagation();">
                    <i class="bi bi-heart"></i>
                  </button>
                  <button class="btn btn-sm btn-pink add-cart" data-id="${p.id}" title="Add to cart" onclick="event.stopPropagation();">
                    <i class="bi bi-cart-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    `;
  });
}

renderShopProducts();
