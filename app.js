// hamburger styling
const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const dropdown = document.getElementById("dropdown");

hamburger.addEventListener("click", function () {
  dropdown.style.display = "block";
  hamburger.style.display = "none";
});

close.addEventListener("click", function () {
  dropdown.style.display = "none";
  hamburger.style.display = "block";
});
// for buttons click
const mainImage = document.querySelector(".photographyImages");
const imageStyle = document.querySelector(".image-style");
const PictureStyle = document.querySelector(".picture-style");
const photography = document.querySelector(".photo");
const design = document.querySelector(".design");
const print1 = document.querySelector(".print");

function showElement(element) {
  element.style.display = "grid";
}

function hideElement(element) {
  element.style.display = "none";
}

photography.addEventListener("click", function () {
  showElement(mainImage);
  hideElement(imageStyle);
  hideElement(PictureStyle);
});

design.addEventListener("click", function () {
  hideElement(mainImage);
  showElement(imageStyle);
  hideElement(PictureStyle);
});

print1.addEventListener("click", function () {
  hideElement(mainImage);
  hideElement(imageStyle);
  showElement(PictureStyle);
});

showElement(mainImage);
hideElement(imageStyle);
hideElement(PictureStyle);
// for testimonial
let currentTestimonialIndex = 0;
const testimonials = document.querySelectorAll(".testimonial-card");

function updateTestimonial() {
  testimonials.forEach((testimonial, index) => {
    testimonial.style.display =
      index === currentTestimonialIndex ? "block" : "none";
  });
}

function prevTestimonial() {
  currentTestimonialIndex =
    (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial();
}

function nextTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
  updateTestimonial();
}

// Initialize with the first testimonial
updateTestimonial();
