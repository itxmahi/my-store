// WhatsApp Number
const whatsappNumber = "3116444124";

// Sections
const heroSection = document.querySelector(".hero");
const productsSection = document.querySelector(".products");

// Navigation
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const text = e.target.innerText;

    if (text === "Home") {
      heroSection.scrollIntoView({ behavior: "smooth" });
    } else if (text === "Shop") {
      productsSection.scrollIntoView({ behavior: "smooth" });
    } else if (text === "Contact") {
      // Contact WhatsApp
      const message = "Hello! I’d like to know more about your calligraphy art.";
      const whatsappURL = `https://wa.me/92${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, "_blank");
    }
  });
});

// Product Modal (for preview)
let currentProduct = null;
const modal = document.createElement("div");
modal.classList.add("modal");
modal.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <img id="modal-img" src="" alt="">
    <h3 id="modal-title"></h3>
    <p id="modal-price"></p>
    <button id="order-btn">📦 Order on WhatsApp</button>
  </div>
`;
document.body.appendChild(modal);

const modalImg = modal.querySelector("#modal-img");
const modalTitle = modal.querySelector("#modal-title");
const modalPrice = modal.querySelector("#modal-price");
const orderBtn = modal.querySelector("#order-btn");
const closeBtn = modal.querySelector(".close");

// Open modal on product click
document.querySelectorAll(".product img").forEach(img => {
  img.addEventListener("click", (e) => {
    const product = e.target.closest(".product");
    const name = product.querySelector("h3").innerText;
    const price = product.querySelector("p").innerText;
    const imgSrc = product.querySelector("img").src;

    currentProduct = { name, price, img: imgSrc };

    modalImg.src = imgSrc;
    modalTitle.innerText = name;
    modalPrice.innerText = price;
    modal.style.display = "flex";
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Order from modal
orderBtn.addEventListener("click", () => {
  if (currentProduct) {
    const message = `Hello, I want to order:\n\n🖼 ${currentProduct.name}\n💰 ${currentProduct.price}\n📷 Image: ${currentProduct.img}`;
    const whatsappURL = `https://wa.me/92${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  }
});

// Add to Cart buttons
document.querySelectorAll(".add-to-cart").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent modal open
    const product = btn.closest(".product");
    const name = product.querySelector("h3").innerText;
    const price = product.querySelector("p").innerText;
    const imgSrc = product.querySelector("img").src;

    const message = `Hello, I want to order:\n\n🖼 ${name}\n💰 ${price}\n📷 Image: ${imgSrc}`;
    const whatsappURL = `https://wa.me/92${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  });
});
