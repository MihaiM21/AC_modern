// Scroll la secțiunea cu carduri
function scrollToCards() {
  // Arată navbarul și secțiunea cu carduri
  document.getElementById("main-nav").classList.remove("hidden");
  const cards = document.getElementById("cards-section");
  cards.classList.remove("hidden");

  // Derulează lin spre carduri cu offset pentru navbar
  setTimeout(() => {
    const navbarHeight = document.getElementById("main-nav").offsetHeight;
    const cardsPosition = cards.offsetTop - navbarHeight - 20;
    window.scrollTo({
      top: cardsPosition,
      behavior: "smooth"
    });
  }, 100);
}

// Smooth scroll pentru link-urile din navbar
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const navbarHeight = document.getElementById("main-nav").offsetHeight;
        const targetPosition = targetElement.offsetTop - navbarHeight - 20;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    });
  });
});

// Funcția toggleDetails a fost eliminată - conținutul este mereu vizibil

// Afișare/ascundere subsecțiune
function toggleSub(id) {
  const el = document.getElementById(id);
  if (!el) return;
  
  const isHidden = el.classList.contains("hidden");
  
  if (isHidden) {
    // Expandare
    el.classList.remove("hidden");
    el.style.display = "block";
    el.style.opacity = "0";
    el.style.transform = "translateY(-10px)";
    
    // Animație smooth
    setTimeout(() => {
      el.style.transition = "opacity 0.3s ease, transform 0.3s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 10);
  } else {
    // Colapsare
    el.style.transition = "opacity 0.2s ease, transform 0.2s ease";
    el.style.opacity = "0";
    el.style.transform = "translateY(-10px)";
    
    setTimeout(() => {
      el.classList.add("hidden");
      el.style.display = "none";
    }, 200);
  }
}

// Afișare buton "Sus" la scroll
window.addEventListener("scroll", function () {
  const btn = document.querySelector(".back-to-top");
  if (window.scrollY > 500) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

