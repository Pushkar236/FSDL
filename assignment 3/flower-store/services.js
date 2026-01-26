/*================================
  SERVICES PAGE - All Services
=================================*/

/*================================
  1. RENDER SERVICES
=================================*/
function renderServicesList() {
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

// Initialize
renderServicesList();
