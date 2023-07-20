// Función para agregar un nuevo item a la lista
function agregarItem() {
	// Obtener el valor del input
	const item = document.getElementById("itemInput").value;

	if (item !== "") {
		// Crear un nuevo elemento de lista
		const li = document.createElement("li");

		// Crear un nodo de texto con el valor del input
		const texto = document.createTextNode(item);

		// Agregar el nodo de texto al elemento de lista
		li.appendChild(texto);

		// Agregar el elemento de lista a la lista
		document.getElementById("itemList").appendChild(li);

		// Limpiar el valor del input
		document.getElementById("itemInput").value = "";

		// Crear un botón de eliminar
		const botonEliminar = document.createElement("button");
		botonEliminar.innerHTML = "Eliminar";

		// Agregar un controlador de eventos al botón para eliminar el item correspondiente
		botonEliminar.onclick = function () {
			this.parentNode.parentNode.removeChild(this.parentNode);
		};

		// Agregar el botón de eliminar al elemento de lista
		li.appendChild(botonEliminar);
	}
}
