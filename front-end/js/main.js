import init, { TextAnalyzer, TextContent } from "../../pkg/wasm_textspector.js";

async function main() {

	await init();

	const textContent = new TextContent();

	const q = (el) => document.querySelector(el);

	const textInput = q("#text-input");
	const countCharacters = q("#count-characters");
	const countCharacterWithNoSpace = q("#count-characters-with-no-space");

	textInput.addEventListener('input', (e) => {
		let text = e.target.value;
		textContent.set_content(text);

		countCharacters.textContent = TextAnalyzer.count_characters(textContent);
		countCharacterWithNoSpace.textContent = TextAnalyzer.count_characters_excluding_spaces(textContent);

	});
}

window.addEventListener('DOMContentLoaded', main);
