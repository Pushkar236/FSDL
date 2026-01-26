/*================================
  INDEX PAGE - Homepage
  Featured Products, Services, Seasonal Collections
=================================*/

/*================================
  1. FEATURED PRODUCTS
=================================*/
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

/*================================
  2. SERVICES
=================================*/
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

/*================================
  3. NEWSLETTER FORM
=================================*/
document.getElementById("newsletter-form")?.addEventListener("submit", e => {
  e.preventDefault();
  alert("Subscribed successfully!");
});

// Initialize
renderFeaturedProducts();
renderServices();
