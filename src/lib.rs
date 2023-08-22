use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct TextContent {
    content: String,
}

#[wasm_bindgen]
impl TextContent {
    #[wasm_bindgen(constructor)]
    pub fn new() -> TextContent {
        TextContent {
            content: String::new(),
        }
    }

    #[wasm_bindgen]
    pub fn set_content(&mut self, text: &str) {
        self.content = text.to_string();
    }

    #[wasm_bindgen]
    pub fn get_content(&self) -> String {
        self.content.clone()
    }
}

#[wasm_bindgen]
pub struct TextAnalyzer {}

#[wasm_bindgen]
impl TextAnalyzer {
    #[wasm_bindgen(constructor)]
    pub fn new() -> TextAnalyzer {
        TextAnalyzer {}
    }

    #[wasm_bindgen]
    pub fn count_characters(text_content: &TextContent) -> usize {
        text_content.get_content().chars().filter(|&c| c != '\n').count()
    }

    #[wasm_bindgen]
    pub fn count_characters_excluding_spaces(text_content: &TextContent) -> usize {
        text_content.get_content().chars().filter(|&c| c != '\n' && c != ' ').count()
    }
}
