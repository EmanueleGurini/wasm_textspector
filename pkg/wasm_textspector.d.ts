/* tslint:disable */
/* eslint-disable */
/**
*/
export class TextAnalyzer {
  free(): void;
/**
*/
  constructor();
/**
* @param {TextContent} text_content
* @returns {number}
*/
  static count_characters(text_content: TextContent): number;
/**
* @param {TextContent} text_content
* @returns {number}
*/
  static count_characters_excluding_spaces(text_content: TextContent): number;
}
/**
*/
export class TextContent {
  free(): void;
/**
*/
  constructor();
/**
* @param {string} text
*/
  set_content(text: string): void;
/**
* @returns {string}
*/
  get_content(): string;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_textcontent_free: (a: number) => void;
  readonly textcontent_new: () => number;
  readonly textcontent_set_content: (a: number, b: number, c: number) => void;
  readonly textcontent_get_content: (a: number, b: number) => void;
  readonly textanalyzer_count_characters: (a: number) => number;
  readonly textanalyzer_count_characters_excluding_spaces: (a: number) => number;
  readonly textanalyzer_new: () => number;
  readonly __wbg_textanalyzer_free: (a: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
