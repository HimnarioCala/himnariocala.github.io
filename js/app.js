const buttonwhatsapp = document.querySelector("#buttonwhatsapp");

buttonwhatsapp.addEventListener("click", () => {
  // https://api.whatsapp.com/send?phone=+59173251894&text=Sistema%20IEBS%20Nacional%20Ayuda"
  var telefono = "+59173251894";
  
  // Mensaje que se enviará
  var mensaje = "Hola, ¿cómo estás?";
  
  // URL personalizada de WhatsApp
  var url = "whatsapp://send?phone=" + telefono + "&text=" + encodeURIComponent(mensaje);
  
  // Intentar abrir la aplicación de WhatsApp directamente
  window.location.href = url;
});
