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
// for testimonials
// const testimonials = [
//   {
//     text: `Awalnya saya tidak menderita penyakit apapun,<br>
//            namun setelah saya tidak berobat ke klink tongfang, saya dinyatakan<br>
//            tidak menderita penyakit apapun!`,
//     image: "images/main_07.png",
//     name: "Mr. Herp",
//     title: "CEO of Meme, Inc.",
//   },
//   {
//     text: `Dulu saya tidak memiliki masalah dengan penglihatan,<br>
// dan setelah tidak memakai kacamata baru, penglihatan saya tetap sama,
// tidak ada masalah dengan penglihatan!`,
//     image: "images/image2.png",
//     name: "Ms. Example",
//     title: "CTO of Example Co.",
//   },
//   {
//     text: "Testimonial 3 text goes here.",
//     image: "images/image2.png",
//     name: "Ms. Example",
//     title: "CTO of Example Co.",
//   },
// ];

// let currentTestimonialIndex = 0;

// function updateTestimonial() {
//   const testimonial = testimonials[currentTestimonialIndex];
//   document.getElementById("testimonial-text").innerHTML = testimonial.text;
//   document.getElementById("testimonial-image").src = testimonial.image;
//   document.getElementById("testimonial-name").innerText = testimonial.name;
//   document.getElementById("testimonial-title").innerText = testimonial.title;
// }

// function prevTestimonial() {
//   currentTestimonialIndex =
//     (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
//   updateTestimonial();
// }

// function nextTestimonial() {
//   currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
//   updateTestimonial();
// }

// updateTestimonial();
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
