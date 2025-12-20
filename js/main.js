document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  const icon = toggleBtn.querySelector("i");

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    icon.classList.replace("fa-moon", "fa-sun");
  }

  // Toggle theme
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    const isLight = document.body.classList.contains("light-mode");

    icon.classList.toggle("fa-moon", !isLight);
    icon.classList.toggle("fa-sun", isLight);

    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
});
const profile = document.querySelector(".profile-wrapper");

if (profile) {
  profile.addEventListener("mousemove", (e) => {
    const rect = profile.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -12;
    const rotateY = ((x / rect.width) - 0.5) * 12;

    profile.style.transform =
      `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  profile.addEventListener("mouseleave", () => {
    profile.style.transform =
      "perspective(600px) rotateX(0) rotateY(0) scale(1)";
  });
}

