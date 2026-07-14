let tecnologias = ["Python", "Java", "JavaScript"];
//Agregar un nuevo elemento
tecnologias.push("Rust");
//Agregar un elemento en una posicion en especifico
tecnologias.splice(1, 0, "C#");
//Eliminar el ultimo
let eliminado = tecnologias.pop();
//Ordenar alfabeticamente
tecnologias.sort();
console.log(tecnologias);