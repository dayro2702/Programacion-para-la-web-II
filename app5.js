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

        if (!respuesta.ok) throw new Error("Error en el servidor");
        
        const datos = await respuesta.json();
        const personajes = datos.results;

        contenedor.innerHTML = "";
        personajes.map((personaje) => {
            const {name, status, image, species} = personaje;

            const colorEstado = status === "Alive" ? "green" : status === "Dead" ? "red" : "gray";

            contenedor.innerHTML += `
                <div style="border: 1px solid #ccc; padding: 15px; border-radius: 8px; width: 200px; text-aling: center;">
                    <img src="${image}" alt="${name}" style="width: 100%; border-radius: 50%;"/>
                    <h3>${name}</h3>
                    <p>ESpecies: ${species}</p>
                    <p style="color: ${colorEstado}">${status}<p/>
                <div>
            `;
        });

        mensajeEstado.textContent = "¡Personajes Cargados!";
        mensajeEstado.style.color = "green";
    } catch (error) {
        mensajeEstado.textContent = "Fallo al cargar los personajes";
        mensajeEstado.style.color = "red";
        console.error(error);
    } finally {
        botonCargar.disabled = "false";

        setTimeout(() => {mensajeEstado.textContent = "";}, 5000);
    }
};

botonCargar.addEventListener("click", cargarPersonajes);