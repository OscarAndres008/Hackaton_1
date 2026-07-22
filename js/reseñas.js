const contenedorResenas = document.querySelector(".resenas");

/* ============ PUBLICAR RESEÑA ============ */
const btnPublicar = document.getElementById("btnPublicar");
const inputNombre = document.getElementById("reviewerName");
const inputTexto = document.getElementById("reviewText");
const modalEl = document.getElementById("miModal");
const modalInstance = bootstrap.Modal.getOrCreateInstance(modalEl);

btnPublicar.addEventListener("click", () => {
    const nombre = inputNombre.value.trim();
    const texto = inputTexto.value.trim();

    // Tarjeta nueva
    const nuevaTarjeta = document.createElement("div");
    nuevaTarjeta.className = "card mb-3";
    nuevaTarjeta.style.maxWidth = "18rem";

    const header = document.createElement("div");
    header.className = "card-header";
    header.textContent = nombre;

    const body = document.createElement("div");
    body.className = "card-body";

    const titulo = document.createElement("h5");
    titulo.className = "card-title";
    titulo.textContent = "★★★★★";

    const parrafo = document.createElement("p");
    parrafo.className = "card-text";
    parrafo.textContent = texto;

    body.appendChild(titulo);
    body.appendChild(parrafo);
    nuevaTarjeta.appendChild(header);
    nuevaTarjeta.appendChild(body);

    // Insertar tarjeta en área de reseñas
    contenedorResenas.prepend(nuevaTarjeta);


    // Resetear formulario y modal
    inputNombre.value = "";
    inputTexto.value = "";

    modalInstance.hide();
});