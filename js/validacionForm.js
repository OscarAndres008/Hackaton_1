
const form = document.getElementById("miFormulario");
const alertError = document.getElementById("alertError");

form.addEventListener("submit", function(e) {
  if (!form.checkValidity()) {
    e.preventDefault(); // evita envío real
    alertError.classList.remove("d-none"); // muestra alerta
  } else {
    alertError.classList.add("d-none"); // oculta alerta
    e.preventDefault(); // evita envío real para demo
    alert("Formulario enviado correctamente ✅");
  }
});
