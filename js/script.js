document.addEventListener("DOMContentLoaded", function () {
  const gridContainer = document.querySelector(".grid-container");
  const listGroup = document.getElementById("toc-list");
  const toggleBtn = document.getElementById("toggleSidebarBtn");
  const contentIframe = document.getElementById("content-iframe");
  const notAvailableMessage = document.getElementById("not-available-message");
  const backBtn = document.getElementById("backBtn");
  const nextBtn = document.getElementById("nextBtn");
  const progressBar = document.getElementById("progressBar");
  const progressContainer = document.getElementById("progressContainer");
  const congratsModal = document.getElementById("congratsModal");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const fireworksCanvas = document.getElementById("fireworks-canvas");
  const ctx = fireworksCanvas.getContext("2d");

  const allLinks = Array.from(
    listGroup.querySelectorAll(".list-group-item-action[data-src]")
  );
  const totalLinks = allLinks.length;
  const visitedLinks = new Set();
  let fireworksAnimation;

  function updateProgress() {
    const progress = (visitedLinks.size / totalLinks) * 100;
    progressBar.style.width = `${progress}%`;
    progressContainer.setAttribute("aria-valuenow", progress);
  }

  function handleLinkClick(event) {
    event.preventDefault();

    const currentActive = listGroup.querySelector(".list-group-item.active");
    if (currentActive) {
      currentActive.classList.remove("active");
    }
    this.classList.add("active");

    if (!visitedLinks.has(this)) {
      visitedLinks.add(this);
      updateProgress();
    }

    const pageSrc = this.dataset.src;

    if (pageSrc && pageSrc.trim() !== "") {
      contentIframe.classList.remove("d-none");
      notAvailableMessage.classList.add("d-none");
      contentIframe.src = pageSrc;
    } else {
      contentIframe.classList.add("d-none");
      notAvailableMessage.classList.remove("d-none");
      contentIframe.src = "";
    }

    const currentIndex = allLinks.indexOf(this);

    backBtn.disabled = currentIndex === 0;

    const isLastOfAll = currentIndex === totalLinks - 1;

    if (isLastOfAll) {
      nextBtn.innerHTML = 'Finalizare <i class="bi bi-check-circle-fill"></i>';
    } else {
      nextBtn.innerHTML = 'Următorul <i class="bi bi-arrow-right"></i>';
    }
  }

  function handleNextClick() {
    if (nextBtn.textContent.includes("Finalizare")) {
      progressBar.classList.remove(
        "progress-bar-animated",
        "progress-bar-striped"
      );
      congratsModal.classList.remove("d-none");
      triggerFireworks();
      return;
    }

    const currentActive = listGroup.querySelector(".list-group-item.active");
    if (!currentActive) return;

    const currentIndex = allLinks.indexOf(currentActive);

    if (currentIndex < allLinks.length - 1) {
      allLinks[currentIndex + 1].click();
    }
  }

  function handleBackClick() {
    const currentActive = listGroup.querySelector(".list-group-item.active");
    if (!currentActive) return;

    const currentIndex = allLinks.indexOf(currentActive);

    if (currentIndex > 0) {
      allLinks[currentIndex - 1].click();
    }
  }

  //Fireworks Logic
  let particles = [];
  function triggerFireworks() {
    fireworksCanvas.width = window.innerWidth;
    fireworksCanvas.height = window.innerHeight;

    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        createFirework(
          Math.random() * fireworksCanvas.width,
          Math.random() * (fireworksCanvas.height / 2)
        );
      }, i * 400);
    }

    if (!fireworksAnimation) {
      fireworksAnimation = requestAnimationFrame(animateFireworks);
    }
    setTimeout(() => {
      cancelAnimationFrame(fireworksAnimation);
      fireworksAnimation = null;
      particles = [];
      ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
    }, 5000);
  }

  function createFirework(x, y) {
    const particleCount = 200;
    const angleIncrement = (Math.PI * 2) / particleCount;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: x,
        y: y,
        vx: Math.cos(angleIncrement * i) * (Math.random() * 5 + 1),
        vy: Math.sin(angleIncrement * i) * (Math.random() * 5 + 1),
        color: `hsl(${Math.random() * 40 + 200}, 90%, 60%)`,
        alpha: 1,
      });
    }
  }

  function animateFireworks() {
    ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);

    particles.forEach((p, index) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.05;
      p.alpha -= 0.01;

      if (p.alpha <= 0) {
        particles.splice(index, 1);
      } else {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2, false);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.restore();
      }
    });
    fireworksAnimation = requestAnimationFrame(animateFireworks);
  }

  function initialize() {
    allLinks.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    toggleBtn.addEventListener("click", () => {
      const isCollapsed = gridContainer.classList.toggle("sidebar-collapsed");
      const btnIcon = toggleBtn.querySelector("i");
      btnIcon.classList.toggle("bi-chevron-bar-left", !isCollapsed);
      btnIcon.classList.toggle("bi-chevron-bar-right", isCollapsed);
      toggleBtn.classList.toggle("justify-content-start", !isCollapsed);
      toggleBtn.classList.toggle("justify-content-center", isCollapsed);
    });

    nextBtn.addEventListener("click", handleNextClick);
    backBtn.addEventListener("click", handleBackClick);
    closeModalBtn.addEventListener("click", () =>
      congratsModal.classList.add("d-none")
    );

    // Load first section by default
    if (allLinks.length > 0) {
      allLinks[0].click();
    }
  }

  initialize();
});
