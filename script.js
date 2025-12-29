const textToType = "adheena_dev.ts";
const typeWriterElement = document.getElementById("typewriter-text");
let charIndex = 0;

function typeWriter() {
  if (charIndex < textToType.length) {
    typeWriterElement.textContent += textToType.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100);
  }
}

window.addEventListener("load", () => {
  setTimeout(typeWriter, 500);
});

function scrollToFooter() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth",
  });
}

if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}
window.scrollTo(0, 0);

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});