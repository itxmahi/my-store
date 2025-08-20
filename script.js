// WhatsApp Number
const whatsappNumber = "3116444124";

// Sections
const heroSection = document.querySelector(".hero");
const productsSection = document.querySelector(".products");

// Navbar hide/show on scroll
let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // Scrolling down → hide navbar
    navbar.style.top = "-80px"; // Adjust to your navbar height
  } else {
    // Scrolling up → show navbar
    navbar.style.top = "0";
  }

  lastScroll = currentScroll;
});

// Navigation links
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const text = e.target.innerText;

    if (text === "Home") {
      heroSection.scrollIntoView({ behavior: "smooth" });
    } else if (text === "Shop") {
      productsSection.scrollIntoView({ behavior: "smooth" });
    } else if (text === "Contact") {
      const message = "Hello! I’d like to know more about your calligraphy art.";
      const whatsappURL = `https://wa.me/92${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, "_blank");
    }
  });
});

// Product Modal (Preview)
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

// Open modal
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

// WhatsApp order from modal
orderBtn.addEventListener("click", () => {
  if (currentProduct) {
    const message = `Hello, I want to order:\n\n🖼 ${currentProduct.name}\n💰 ${currentProduct.price}\n📷 Image: ${currentProduct.img}`;
    const whatsappURL = `https://wa.me/92${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  }
});

// Add to Cart (direct WhatsApp)
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

// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Zoom-in / Zoom-out on modal image
modalImg.addEventListener("click", () => {
  modalImg.classList.toggle("zoomed");
});





