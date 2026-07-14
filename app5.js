const botonCargar = document.querySelector("#btn-cargar");
const contenedor = document.querySelector("#contenedor-personajes");
const mensajeEstado = document.querySelector("#mensaje-estado");

const cargarPersonajes = async () => {
    mensajeEstado.textContent = "Cargando personajes...";
    mensajeEstado.style.color = "blue";
    botonCargar.disabled = true;
    
    try {
        const url = "https://rickandmortyapi.com/api/character";
        const respuesta = await fetch(url);

        if (!respuesta.ok) throw new Error("Eeror en el servidor");
        
        const datos = await respuesta.json();
        const personajes = datos.results;

        contenedor.innerHTML = "";
        personajes.map((personaje) => {
            const {name, status, image, species} = personaje;

            const colorEstado = status === "Alive" ? "green" : status === "Dead" ? "red" : "gray";

            contenedor.innerHTML += `
                <div>
                    <img src="${image}" alt="${name}" />
                    <h3>${name}</h3>
                    <p>ESpecies: ${species}</p>
                    <p>${status}<p/>
                <div>
            `;
        });
    }
}