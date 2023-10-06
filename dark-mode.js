/*** DARK MODE ***/

// Función para almacenar el modo aplicado en LocalStorage
function applyMode() {
    const currentMode = localStorage.getItem("mode");
    if (currentMode === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}

// Función de cambio entre modos
function toggleMode() {
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("mode", "light");
    } else {
        localStorage.setItem("mode", "dark");
    }
    applyMode();
}

// Evento click
document.getElementById("mode-toggle").addEventListener("click", toggleMode);

// Aplica el modo al cargar la pagina
applyMode();

// Función para aplicar el modo actual almacenado en localStorage
function applyMode() {
    const currentMode = localStorage.getItem("mode");
    const modeIcon = document.getElementById("mode-icon");

    if (currentMode === "dark") {
        document.body.classList.add("dark-mode");
        modeIcon.classList.remove("fa-sun");
        modeIcon.classList.add("fa-moon");
    } else {
        document.body.classList.remove("dark-mode");
        modeIcon.classList.remove("fa-moon");
        modeIcon.classList.add("fa-sun");
    }
}
