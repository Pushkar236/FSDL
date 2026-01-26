/*================================
  REVIEWS PAGE
  Review display, form submission, star rating
=================================*/

// Sample reviews data
const reviewsData = [
  {
    id: 1,
    name: "Priya Sharma",
    email: "priya@example.com",
    rating: 5,
    text: "Absolutely loved the flower arrangements! The quality is exceptional and the delivery was super fast. Highly recommended!",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    email: "rajesh@example.com",
    rating: 5,
    text: "Best flower shop in town! Fresh flowers, beautiful designs, and excellent customer service. Will order again!",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh"
  },
  {
    id: 3,
    name: "Ananya Desai",
    email: "ananya@example.com",
    rating: 4,
    text: "Great selection and beautiful bouquets. The only thing is delivery took a bit longer than expected, but flowers were fresh!",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya"
  },
  {
    id: 4,
    name: "Vikas Patel",
    email: "vikas@example.com",
    rating: 5,
    text: "Perfect for my wife's birthday! She loved it. The arrangement was exactly as shown in the picture.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikas"
  },
  {
    id: 5,
    name: "Sneha Reddy",
    email: "sneha@example.com",
    rating: 4,
    text: "Good quality flowers and reasonable prices. Would appreciate more variety in the designs though.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha"
  },
  {
    id: 6,
    name: "Amit Singh",
    email: "amit@example.com",
    rating: 5,
    text: "Exceptional service! The florist even called me to confirm the arrangement preferences. Very thoughtful!",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit"
  },
  {
    id: 7,
    name: "Neha Gupta",
    email: "neha@example.com",
    rating: 5,
    text: "Ordered for an anniversary and it was absolutely stunning! The presentation and freshness were impeccable.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha"
  },
  {
    id: 8,
    name: "Arjun Nair",
    email: "arjun@example.com",
    rating: 4,
    text: "Really impressed with the quality and the same-day delivery option. Will definitely recommend to friends.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun"
  },
  {
    id: 9,
    name: "Divya Malhotra",
    email: "divya@example.com",
    rating: 5,
    text: "The best flower delivery service I've ever used. Professional, reliable, and the flowers last so long!",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Divya"
  },
  {
    id: 10,
    name: "Rohan Verma",
    email: "rohan@example.com",
    rating: 5,
    text: "Amazing experience from start to finish. The website is easy to use and the customer support is fantastic!",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan"
  }
];

/*********************************
  1. RENDER REVIEWS
**********************************/
function renderReviews() {
  const reviewsList = document.getElementById("reviews-list");
  reviewsList.innerHTML = "";

  reviewsData.forEach(review => {
    const reviewCard = document.createElement("div");
    reviewCard.className = "col-lg-4 col-md-6 col-sm-12";
    reviewCard.innerHTML = `
      <div class="review-card">
        <div class="review-header">
          <img src="${review.image}" alt="${review.name}" class="review-avatar">
          <div class="review-meta">
            <h5 class="review-name">${review.name}</h5>
            <small class="review-verified">
              <i class="bi bi-check-circle-fill"></i> Verified Buyer
            </small>
          </div>
        </div>
        <div class="review-rating">
          ${"⭐".repeat(review.rating)}
        </div>
        <p class="review-text">${review.text}</p>
      </div>
    `;
    reviewsList.appendChild(reviewCard);
  });
}

/*********************************
  2. WRITE REVIEW BUTTON
**********************************/
document.getElementById("write-review-btn")?.addEventListener("click", () => {
  const formContainer = document.getElementById("review-form-container");
  formContainer.classList.add("show");
  document.body.style.overflow = "hidden";
});

document.getElementById("close-review-form")?.addEventListener("click", () => {
  const formContainer = document.getElementById("review-form-container");
  formContainer.classList.remove("show");
  document.body.style.overflow = "auto";
  document.getElementById("review-form").reset();
  resetStarRating();
});

// Close form when clicking outside
document.getElementById("review-form-container")?.addEventListener("click", (e) => {
  if (e.target.id === "review-form-container") {
    document.getElementById("close-review-form").click();
  }
});

/*********************************
  3. STAR RATING FUNCTIONALITY
**********************************/
const starElements = document.querySelectorAll(".star-rating i");
let selectedRating = 0;

starElements.forEach(star => {
  star.addEventListener("click", () => {
    selectedRating = Number(star.dataset.rating);
    document.getElementById("rating-value").value = selectedRating;
    updateStarDisplay(selectedRating);
  });

  star.addEventListener("mouseover", () => {
    const rating = Number(star.dataset.rating);
    updateStarDisplay(rating);
  });
});

document.getElementById("star-rating")?.addEventListener("mouseleave", () => {
  updateStarDisplay(selectedRating);
});

function updateStarDisplay(rating) {
  starElements.forEach(star => {
    const starRating = Number(star.dataset.rating);
    if (starRating <= rating) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
}

function resetStarRating() {
  selectedRating = 0;
  document.getElementById("rating-value").value = 0;
  updateStarDisplay(0);
}

/*********************************
  4. FORM SUBMISSION
**********************************/
document.getElementById("review-form")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("review-name").value.trim();
  const email = document.getElementById("review-email").value.trim();
  const rating = document.getElementById("rating-value").value;
  const text = document.getElementById("review-text").value.trim();

  // Validation
  if (!name || !email || !rating || !text) {
    alert("Please fill all fields and select a rating");
    return;
  }

  if (rating === "0") {
    alert("Please select a rating");
    return;
  }

  // Create new review object
  const newReview = {
    id: reviewsData.length + 1,
    name,
    email,
    rating: Number(rating),
    text,
    image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`
  };

  // Add to beginning of reviews array
  reviewsData.unshift(newReview);

  // Re-render reviews
  renderReviews();

  // Close form
  document.getElementById("close-review-form").click();

  // Show success toast
  showSuccessToast();

  // Reset form
  document.getElementById("review-form").reset();
  resetStarRating();
});

/*********************************
  5. SUCCESS TOAST
**********************************/
function showSuccessToast() {
  const toast = document.getElementById("success-toast");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

/*********************************
  6. INITIALIZE PAGE
**********************************/
document.addEventListener("DOMContentLoaded", () => {
  renderReviews();
});
