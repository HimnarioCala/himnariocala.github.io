const buttonwhatsapp = document.querySelector("#buttonwhatsapp");

buttonwhatsapp.addEventListener("click", () => {
  const cellular = "+59173251894";
  const message = "Himnario CALA - Diseño gráfico (Invitación)";
  const url = `whatsapp://send?phone=${cellular}&text=${encodeURIComponent(message)}`
  window.location.href = url;
});
