let year = document.querySelector("#copyright-year");
year.innerHTML = new Date().getFullYear();

const reveal = () => {
  let revealEls = document.querySelectorAll(".reveal");

  for (let reveal of revealEls) {
    let windowHeight = window.innerHeight;
    let elementTop = reveal.getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add("active");
    } else {
      reveal.classList.remove("active");
    }
  }
};

window.addEventListener("scroll", reveal);

reveal();
