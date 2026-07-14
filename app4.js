const urlAPI = "https://jsonplaceholder.typicode.com/users/1"

fetch(urlAPI)
    .then(respuesta => respuesta.json())
    .then(datos => console.log("Datos con then:", datos))
    .catch(error => console.error("Error:", error));

//Consulta API moderna
const obtenerUsuario = async () => {
    try {
        //promise
        const respuesta = await fetch(urlAPI);
        const datos = await respuesta.json();

        console.log("Datos asincronos", datos);
    } catch (error){
        console.error("Error con los datos", error);
    }
}
obtenerUsuario();