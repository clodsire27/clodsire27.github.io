document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("projectModal");
  const modalHeroImg = document.getElementById("modalHeroImg");
  const modalTitle = document.getElementById("modalTitle");
  const modalSubtitle = document.getElementById("modalSubtitle");
  const modalPeriod = document.getElementById("modalPeriod");
  const modalKeywords = document.getElementById("modalKeywords");
  const modalStack = document.getElementById("modalStack");
  const modalFeatures = document.getElementById("modalFeatures");
  const modalGithub = document.getElementById("modalGithub");
  const modalLink = document.getElementById("modalLink");

  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
      modal.classList.add("active");

      modalHeroImg.hidden = false;
      modalHeroImg.src = card.dataset.img;

      modalTitle.textContent = card.dataset.title;
      modalSubtitle.textContent = card.dataset.subtitle;
      modalPeriod.textContent = card.dataset.period;

      modalKeywords.innerHTML = "";
      card.dataset.keywords.split("·").forEach(k => {
        const span = document.createElement("span");
        span.className = "pill";
        span.textContent = k.trim();
        modalKeywords.appendChild(span);
      });

      modalStack.innerHTML = "";
      card.dataset.stack.split("|").forEach(s => {
        const span = document.createElement("span");
        span.className = "pill";
        span.textContent = s;
        modalStack.appendChild(span);
      });

      modalFeatures.innerHTML = "";
      card.dataset.features.split("|").forEach(f => {
        const li = document.createElement("li");
        li.textContent = f;
        modalFeatures.appendChild(li);
      });

      modalGithub.href = card.dataset.github;

      modalLink.onclick = () => {
        const link = card.dataset.link;
        if (link?.endsWith(".html")) {
          window.location.href = link;
        }
      };
    });
  });

  const closeModal = () => {
    modal.classList.remove("active");
    modalHeroImg.hidden = true;
    modalHeroImg.src = "";
  };

  document.querySelector(".modal-close").onclick = closeModal;

  modal.onclick = e => {
    if (e.target === modal) closeModal();
  };
});


