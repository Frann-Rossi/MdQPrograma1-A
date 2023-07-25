function mayorMenor() {
	let numeroUno, numeroDos;
	do {
		numeroUno = parseInt(prompt("Ingrese el PRIMER numero"));
	} while (isNaN(numeroUno));
	do {
		numeroDos = parseInt(prompt("Ingrese el SEGUNDO numero"));
	} while (isNaN(numeroDos));

	const respuesta1 = document.querySelector("#respuesta1");

	if (numeroUno > numeroDos) {
		respuesta1.textContent = `El PRIMER numero ${numeroUno} es ||mayor|| que el SEGUNDO numero ${numeroDos}`;
	} else if (numeroUno < numeroDos) {
		respuesta1.textContent = `El PRIMER numero ${numeroUno} es ||menor|| que el SEGUNDO numero ${numeroDos}`;
	} else {
		respuesta1.textContent = `El PRIMER numero ${numeroUno} es ||igual|| que el SEGUNDO numero ${numeroDos}`;
	}
}

function parImpar() {
	let numeroUsuario;
	do {
		numeroUsuario = parseInt(prompt("Escriba el numero que quiera"));
	} while (isNaN(numeroUsuario));

	const respuesta2 = document.querySelector("#respuesta2");

	const numero = parseInt(numeroUsuario);
	if (numero % 2 === 0) {
		respuesta2.textContent = `Es PAR ${numero}`;
	} else {
		respuesta2.textContent = `Es IMPAR ${numero}`;
	}
}

function mostrarOperacion(operador) {
	let numeroUno, numeroDos;
	do {
		numeroUno = parseInt(prompt("Ingrese el PRIMER numero"));
	} while (isNaN(numeroUno));
	do {
		numeroDos = parseInt(prompt("Ingrese el SEGUNDO numero"));
	} while (isNaN(numeroDos));
	const respuesta3 = document.querySelector("#respuesta3");

	const resultadoSuma = numeroUno + numeroDos;
	const resultadoResta = numeroUno - numeroDos;
	const resultadoMultiplicacion = numeroUno * numeroDos;
	const resultadoDivision = numeroUno / numeroDos;

	switch (operador) {
		case "+":
			respuesta3.textContent = `Los números elegidos fueron ||${numeroUno}|y|${numeroDos}||, y el resultado de la SUMA es: ${resultadoSuma}`;
			break;

		case "-":
			respuesta3.textContent = `Los números elegidos fueron ||${numeroUno}|y|${numeroDos}||, y el resultado de la RESTA es: ${resultadoResta}`;
			break;

		case "*":
			respuesta3.textContent = `Los números elegidos fueron ||${numeroUno}|y|${numeroDos}||, y el resultado de la MULTIPLICACION es: ${resultadoMultiplicacion}`;
			break;

		case "/":
			respuesta3.textContent =
				numeroDos === 0
					? "No es posible dividir entre 0."
					: `Los números elegidos fueron ||${numeroUno}|y|${numeroDos}||, y el resultado de la DIVISION es: ${resultadoDivision}`;
			break;
	}
}

function cualEsMayor() {
	let numeroUno, numeroDos, numeroTres;
	do {
		numeroUno = parseInt(prompt("Ingrese el PRIMER numero"));
	} while (isNaN(numeroUno));
	do {
		numeroDos = parseInt(prompt("Ingrese el SEGUNDO numero"));
	} while (isNaN(numeroDos));
	do {
		numeroTres = parseInt(prompt("Ingrese el TERCER numero"));
	} while (isNaN(numeroTres));

	const respuesta4 = document.querySelector("#respuesta4");

	if (numeroUno > numeroDos && numeroUno > numeroTres) {
		respuesta4.textContent = `El PRIMER numero ${numeroUno} es el mayor.`;
	} else if (numeroDos > numeroUno && numeroDos > numeroTres) {
		respuesta4.textContent = `El SEGUNDO numero ${numeroDos} es el mayor.`;
	} else if (numeroTres > numeroUno && numeroTres > numeroDos) {
		respuesta4.textContent = `El TERCER numero ${numeroTres} es el mayor.`;
	} else {
		respuesta4.textContent = "Los números ingresados son iguales.";
	}
}

function tablaMultiplicar() {
	let numero;

	do {
		numero = parseInt(
			prompt("Ingrese un número para generar la tabla de multiplicar")
		);
	} while (isNaN(numero) || numero <= 0);

	const tabla = document.querySelector("#respuesta5");
	tabla.innerHTML = ""; // Limpiamos la tabla por si hay datos anteriores.

	// Creamos la cabecera de la tabla
	let tablaHTML =
		"<tr><th>||--Multiplicador--|| </th><th> ||--Resultado--||</th></tr>";

	// Generamos los múltiplos y los agregamos a la tabla
	for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
		const resultado = numero * multiplicador;
		tablaHTML += `<tr><td><br>${numero}x${multiplicador}=</td><td>${resultado}</td></tr>`;
	}

	tabla.innerHTML = tablaHTML;
}

function tablaDividir() {
	let numero;

	do {
		numero = parseInt(
			prompt("Ingrese un número para generar la tabla de multiplicar")
		);
	} while (isNaN(numero) || numero <= 0);

	const tabla = document.querySelector("#respuesta6");
	tabla.innerHTML = ""; // Limpiamos la tabla por si hay datos anteriores.

	// Creamos la cabecera de la tabla
	let tablaHTML =
		"<tr><th>Dividendo</th><th> Divisor</th><th> Cociente</th></tr>";

	// Generamos los múltiplos y los agregamos a la tabla
	for (let divisor = 1; divisor <= 10; divisor++) {
		const resultado = numero / divisor;
		tablaHTML += `<tr><td><br>${numero}/${divisor}=</td><td>${resultado}</td></tr>`;
	}

	tabla.innerHTML = tablaHTML;
}
