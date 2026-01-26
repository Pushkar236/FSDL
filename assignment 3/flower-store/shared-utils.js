/*********************************
  SHARED UTILITIES - Used across all pages
  Header, Footer, Product Data, Cart & Likes
  Last Updated: 2026
**********************************/

/*================================
  1. HEADER & FOOTER
=================================*/
const headerHTML = `
<style>
  .navbar-nav { gap: 2.5rem; }
  .nav-link { position: relative; }
  .nav-link.active::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #ff7aa2;
  }
</style>
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

// Set active nav link based on current page
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', setActiveNavLink);

/*================================
  2. PRODUCT DATA
=================================*/
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

const services = [
  { id: 1, name: "Birthday Decor", img: "assets/img/product1.jpg", type: "birthday" },
  { id: 2, name: "Wedding Decor", img: "assets/img/product2.jpg", type: "wedding" },
  { id: 3, name: "Ganpati Decor", img: "assets/img/product3.jpg", type: "ganpati" },
  { id: 4, name: "Garlands", img: "assets/img/product4.jpg", type: "garlands" },
  { id: 5, name: "Car Decor", img: "assets/img/product5.jpg", type: "car" },
  { id: 6, name: "House Party Decor", img: "assets/img/product6.jpg", type: "houseparty" }
];

/*================================
  3. CART & LIKES (LOCAL STORAGE)
=================================*/
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
  const cartCountEl = document.getElementById("cart-count");
  if (cartCountEl) cartCountEl.innerText = total;
}

function updateLikeCount() {
  const likesCountEl = document.getElementById("likes-count");
  if (likesCountEl) likesCountEl.innerText = getLikes().length;
}

/*================================
  4. UNIVERSAL BUTTON HANDLERS
=================================*/
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
