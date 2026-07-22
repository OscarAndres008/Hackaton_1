const botones = document.querySelectorAll("[data-target]");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const destino = boton.dataset.target;

        document.getElementById(destino).scrollIntoView({
            behavior: "smooth"
        });
    });
});