use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn conta_caratteri(s: &str) -> usize{
    s.len()
}

