/*================================
  SHOP PAGE - All Products
=================================*/

/*================================
  1. RENDER SHOP PRODUCTS
=================================*/
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

// Initialize
renderShopProducts();
