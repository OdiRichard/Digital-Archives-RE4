function showSection(sectionId) {
  const sections = document.querySelectorAll(".enemy-section");

  sections.forEach((sec) => {
    sec.classList.remove("active");
  });

  const target = document.getElementById(sectionId);

  // pequena pausa para permitir o fade-out
  setTimeout(() => {
    target.classList.add("active");
  }, 50);
}
