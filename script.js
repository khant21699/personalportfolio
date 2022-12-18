const toggleNav = () => {
  document.querySelector(".overlay").classList.toggle("active");
  document.querySelector(".navlinks").classList.toggle("active");
  document.querySelector(".toggle").classList.toggle("active");
};

const hidden = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

hidden.forEach((el) => {
  observer.observe(el);
});
