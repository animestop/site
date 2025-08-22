document.addEventListener("DOMContentLoaded", () => {
  const aside = document.querySelector("aside[aria-label='Barra lateral']");

  fetch("/includes/sidebar.html")
    .then(response => response.text())
    .then(data => {
      aside.innerHTML = data;
      void aside.offsetHeight;
    })
    .catch(error => {
      console.error("Erro ao carregar sidebar:", error);
    });
});