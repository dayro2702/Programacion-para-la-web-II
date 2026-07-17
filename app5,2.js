const botonCargar = document.querySelector("#btn-cargar");
const contenedor = document.querySelector("#contenedor-personajes");
const mensajeEstado = document.querySelector("#mensaje-estado");

const cargarPersonajes = async () => {
    mensajeEstado.textContent = "Cargando empleados...";
    mensajeEstado.style.color = "blue";
    botonCargar.disabled = true;
    
    try {
        const url = "https://jsonplaceholder.typicode.com/users";
        const respuesta = await fetch(url);

        if (!respuesta.ok) throw new Error("Error en el servidor");
        
        const empleados = await respuesta.json();

        contenedor.innerHTML = "";
        empleados.forEach((empleados) => {
            const {name, email, image, company} = empleados;

            contenedor.innerHTML += `
                <div style="border: 3px solid #1909f7; padding: 15px; border-radius: 8px; width: 200px; text-aling: center; background-color: white">
                    <h3 style="color: blue; text-aling: center; justify-content: center; font-family: arial">${name}</h3>
                    <p style="text-aling: center; justify-content: center; font-family: arial"><strong>Email:</strong> ${email}</p>
                    <p style="text-aling: center; justify-content: center; font-family: arial"><strong>Empresa:</strong>${company.name}<p/>
                <div>
            `;
        });

        mensajeEstado.textContent = "¡Empleados Cargados!";
        mensajeEstado.style.color = "blue";
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