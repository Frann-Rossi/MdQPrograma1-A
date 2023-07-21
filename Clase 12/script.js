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
