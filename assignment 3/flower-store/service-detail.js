/*================================
  SERVICE DETAIL PAGE
  Service details, image gallery, booking form
=================================*/

// Service data with images
const serviceData = {
  birthday: {
    name: "Birthday Decor",
    images: [
      "assets/img/product1.jpg",
      "assets/img/product2.jpg",
      "assets/img/product3.jpg",
      "assets/img/product4.jpg",
      "assets/img/product5.jpg",
      "assets/img/product6.jpg",
      "assets/img/product1.jpg",
      "assets/img/product2.jpg",
      "assets/img/product3.jpg",
      "assets/img/product4.jpg",
      "assets/img/product5.jpg",
      "assets/img/product6.jpg"
    ]
  },
  wedding: {
    name: "Wedding Decor",
    images: [
      "assets/img/product2.jpg",
      "assets/img/product3.jpg",
      "assets/img/product4.jpg",
      "assets/img/product5.jpg",
      "assets/img/product6.jpg",
      "assets/img/product1.jpg",
      "assets/img/product2.jpg",
      "assets/img/product3.jpg",
      "assets/img/product4.jpg",
      "assets/img/product5.jpg",
      "assets/img/product6.jpg",
      "assets/img/product1.jpg"
    ]
  },
  ganpati: {
    name: "Ganpati Decor",
    images: [
      "assets/img/product3.jpg",
      "assets/img/product4.jpg",
      "assets/img/product5.jpg",
      "assets/img/product6.jpg",
      "assets/img/product1.jpg",
      "assets/img/product2.jpg",
      "assets/img/product3.jpg",
      "assets/img/product4.jpg",
      "assets/img/product5.jpg",
      "assets/img/product6.jpg",
      "assets/img/product1.jpg",
      "assets/img/product2.jpg"
    ]
  },
  garlands: {
    name: "Garlands",
    images: [
      "assets/img/product4.jpg",
      "assets/img/product5.jpg",
      "assets/img/product6.jpg",
      "assets/img/product1.jpg",
      "assets/img/product2.jpg",
      "assets/img/product3.jpg",
      "assets/img/product4.jpg",
      "assets/img/product5.jpg",
      "assets/img/product6.jpg",
      "assets/img/product1.jpg",
      "assets/img/product2.jpg",
      "assets/img/product3.jpg"
    ]
  },
  car: {
    name: "Car Decor",
    images: [
      "assets/img/product5.jpg",
      "assets/img/product6.jpg",
      "assets/img/product1.jpg",
      "assets/img/product2.jpg",
      "assets/img/product3.jpg",
      "assets/img/product4.jpg",
      "assets/img/product5.jpg",
      "assets/img/product6.jpg",
      "assets/img/product1.jpg",
      "assets/img/product2.jpg",
      "assets/img/product3.jpg",
      "assets/img/product4.jpg"
    ]
  },
  houseparty: {
    name: "House Party Decor",
    images: [
      "assets/img/product6.jpg",
      "assets/img/product1.jpg",
      "assets/img/product2.jpg",
      "assets/img/product3.jpg",
      "assets/img/product4.jpg",
      "assets/img/product5.jpg",
      "assets/img/product6.jpg",
      "assets/img/product1.jpg",
      "assets/img/product2.jpg",
      "assets/img/product3.jpg",
      "assets/img/product4.jpg",
      "assets/img/product5.jpg"
    ]
  }
};

/*********************************
  1. GET SERVICE TYPE FROM URL
**********************************/
function getServiceType() {
  const params = new URLSearchParams(window.location.search);
  return params.get("type") || "birthday";
}

/*********************************
  2. LOAD SERVICE DETAILS
**********************************/
function loadServiceDetails() {
  const serviceType = getServiceType();
  const service = serviceData[serviceType];

  if (!service) {
    window.location.href = "index.html";
    return;
  }

  // Set service title
  document.getElementById("service-title").textContent = service.name;

  // Set service type in dropdown
  document.getElementById("service-type").value = serviceType;

  // Load gallery
  loadGallery(service.images);
}

/*********************************
  3. LOAD GALLERY IMAGES
**********************************/
function loadGallery(images) {
  const gallery = document.getElementById("service-gallery");
  gallery.innerHTML = "";

  images.forEach(img => {
    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery-image";
    galleryItem.innerHTML = `<img src="${img}" alt="Service image">`;
    gallery.appendChild(galleryItem);
  });
}

/*********************************
  4. TOGGLE BOOKING FORM
**********************************/
document.getElementById("book-service-toggle")?.addEventListener("click", () => {
  const formContainer = document.getElementById("booking-form-container");
  formContainer.classList.toggle("show");

  // Scroll to form if opened
  if (formContainer.classList.contains("show")) {
    formContainer.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});

/*********************************
  5. HANDLE FORM SUBMISSION
**********************************/
document.getElementById("booking-form")?.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const serviceType = document.getElementById("service-type").value;

  // Basic validation
  if (!name || !email || !phone || !serviceType) {
    alert("Please fill all fields");
    return;
  }

  // Show success message
  alert("Thank you for reaching out, we will contact you soon");

  // Clear form
  document.getElementById("booking-form").reset();

  // Hide form
  document.getElementById("booking-form-container").classList.remove("show");
});

/*********************************
  6. INITIALIZE PAGE
**********************************/
document.addEventListener("DOMContentLoaded", () => {
  loadServiceDetails();
});
