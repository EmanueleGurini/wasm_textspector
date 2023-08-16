import init, { conta_caratteri } from "../../pkg/wasm_textspector.js";

async function main() {
	// Inizializza il modulo WebAssembly
	await init();

	// Una volta che il modulo WASM è stato inizializzato, continua con il normale flusso del codice
	const q = (el) => document.querySelector(el);

	const textInput = q("#text-input");

	textInput.addEventListener('input', (e) => {
		let text = e.target.value;
		console.log('js:', text);

		// Usa la funzione del modulo WebAssembly
		console.log('WASM:', conta_caratteri(text));
	});
}

// Avvia la funzione principale
main();

