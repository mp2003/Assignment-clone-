window.onload = function () {
  let slideIndex = 0;

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex = n;

    if (slideIndex > slides.length) {
      slideIndex = 1;
    } else if (slideIndex < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
  }

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function autoChangeSlides() {
    plusSlides(1);
  }

  // Initial slide show
  showSlides(slideIndex);

  // Change slides every 3 seconds
  setInterval(autoChangeSlides, 3000);

  //feedback dots
  let currentCard = 1;

  function showCard(cardNumber) {
    // Hide all cards
    for (let i = 1; i <= 5; i++) {
      document.getElementById("card" + i).style.display = "none";
    }

    // Show the current card
    document.getElementById("card" + cardNumber).style.display = "block";
  }

  function highlightDot(dotNumber) {
    // Remove active class from all dots
    for (let i = 1; i <= 5; i++) {
      document.getElementById("dot" + i).classList.remove("active");
    }

    // Add active class to the current dot
    document.getElementById("dot" + dotNumber).classList.add("active");
  }

  function rotateCards() {
    currentCard++;

    if (currentCard > 5) {
      currentCard = 1;
    }

    showCard(currentCard);
    highlightDot(currentCard);
  }

  // Initial display
  showCard(currentCard);
  highlightDot(currentCard);

  // Rotate cards every 5 seconds
  setInterval(rotateCards, 3000);
};
