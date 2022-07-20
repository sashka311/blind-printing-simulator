export function currentKeyboardLanguage(language) {
  switch (language) {
    case "ru":
      return [
        [
          { value: "ё", code: "Backquote", className: "key" },
          { value: "1", code: "digit1", sup: "!", className: "key" },
          { value: "2", code: "digit2", sup: `"`, className: "key" },
          { value: "3", code: "digit3", sup: "№", className: "key" },
          { value: "4", code: "digit4", sup: ";", className: "key" },
          { value: "5", code: "digit5", sup: "%", className: "key" },
          { value: "6", code: "digit6", sup: ":", className: "key" },
          { value: "7", code: "digit7", sup: "?", className: "key" },
          { value: "8", code: "digit8", sup: "*", className: "key" },
          { value: "9", code: "digit9", sup: "(", className: "key" },
          { value: "0", code: "Digit0", sup: ")", className: "key" },
          { value: "-", code: "Minus", sup: "_", className: "key" },
          { value: "=", code: "Equal", sup: "+", className: "key" },
          { value: "Backspace", code: "Backspace", sup: "", className: "key sys back" },
        ],
        [
          { value: "Tab", code: "Tab", sup: "", className: "key sys tab" },
          { value: "й", code: "KeyQ", sup: "", className: "key" },
          { value: "ц", code: "KeyW", sup: "", className: "key" },
          { value: "у", code: "KeyE", sup: "", className: "key" },
          { value: "к", code: "KeyR", sup: "", className: "key" },
          { value: "е", code: "KeyT", sup: "", className: "key" },
          { value: "н", code: "KeyY", sup: "", className: "key" },
          { value: "г", code: "KeyU", sup: "", className: "key" },
          { value: "ш", code: "KeyI", sup: "", className: "key" },
          { value: "щ", code: "KeyO", sup: "", className: "key" },
          { value: "з", code: "KeyP", sup: "", className: "key" },
          { value: "х", code: "BracketLeft", className: "key" },
          { value: "ї", code: "BracketRight", className: "key" },
          { value: "\\", code: "Backslash", sup: "|", className: "key" },
        ],
        [
          { value: "CapsLock", code: "CapsLock", sup: "", className: "key sys caps" },
          { value: "ф", code: "KeyA", sup: "", className: "key" },
          { value: "ы", code: "KeyS", sup: "", className: "key" },
          { value: "в", code: "KeyD", sup: "", className: "key" },
          { value: "а", code: "KeyF", sup: "", className: "key" },
          { value: "п", code: "KeyG", sup: "", className: "key" },
          { value: "р", code: "KeyH", sup: "", className: "key" },
          { value: "о", code: "KeyJ", sup: "", className: "key" },
          { value: "л", code: "KeyK", sup: "", className: "key" },
          { value: "д", code: "KeyL", sup: "", className: "key" },
          { value: "ж", code: "Semicolon", className: "key" },
          { value: "э", code: "Quote", sup: '"', className: "key" },
          { value: "Enter", code: "Enter", sup: "", className: "key sys enter" },
        ],
        [
          { value: "Shift", code: "ShiftLeft", sup: "", className: "key sys shift" },
          { value: "я", code: "KeyZ", sup: "", className: "key" },
          { value: "ч", code: "KeyX", sup: "", className: "key" },
          { value: "с", code: "KeyC", sup: "", className: "key" },
          { value: "м", code: "KeyV", sup: "", className: "key" },
          { value: "и", code: "KeyB", sup: "", className: "key" },
          { value: "т", code: "KeyN", sup: "", className: "key" },
          { value: "ь", code: "KeyM", sup: "", className: "key" },
          { value: "б", code: "Comma", className: "key" },
          { value: "ю", code: "Period", className: "key" },
          { value: ".", code: "Slash", sup: ",", className: "key" },
          { value: "Shift", code: "ShiftRight", className: "key sys shift" },
        ],
        [{ value: " ", code: "Space", sup: "", className: "key sys space" }],
      ];
    case "en":
      return [
        [
          { value: "`", code: "Backquote", sup: "~", className: "key" },
          { value: "1", code: "digit1", sup: "!", className: "key" },
          { value: "2", code: "digit2", sup: "@", className: "key" },
          { value: "3", code: "digit3", sup: "#", className: "key" },
          { value: "4", code: "digit4", sup: "$", className: "key" },
          { value: "5", code: "digit5", sup: "%", className: "key" },
          { value: "6", code: "digit6", sup: "^", className: "key" },
          { value: "7", code: "digit7", sup: "&", className: "key" },
          { value: "8", code: "digit8", sup: "*", className: "key" },
          { value: "9", code: "digit9", sup: "(", className: "key" },
          { value: "0", code: "Digit0", sup: ")", className: "key" },
          { value: "-", code: "Minus", sup: "_", className: "key" },
          { value: "=", code: "Equal", sup: "+", className: "key" },
          { value: "Backspace", code: "Backspace", sup: "", className: "key sys back" },
        ],
        [
          { value: "Tab", code: "Tab", sup: "", className: "key sys tab" },
          { value: "q", code: "KeyQ", sup: "", className: "key" },
          { value: "w", code: "KeyW", sup: "", className: "key" },
          { value: "e", code: "KeyE", sup: "", className: "key" },
          { value: "r", code: "KeyR", sup: "", className: "key" },
          { value: "t", code: "KeyT", sup: "", className: "key" },
          { value: "y", code: "KeyY", sup: "", className: "key" },
          { value: "u", code: "KeyU", sup: "", className: "key" },
          { value: "i", code: "KeyI", sup: "", className: "key" },
          { value: "o", code: "KeyO", sup: "", className: "key" },
          { value: "p", code: "KeyP", sup: "", className: "key" },
          { value: "[", code: "BracketLeft", sup: "{", className: "key" },
          { value: "]", code: "BracketRight", sup: "}", className: "key" },
          { value: "\\", code: "Backslash", sup: "|", className: "key" },
        ],
        [
          { value: "CapsLock", code: "CapsLock", sup: "", className: "key sys caps" },
          { value: "a", code: "KeyA", sup: "", className: "key" },
          { value: "s", code: "KeyS", sup: "", className: "key" },
          { value: "d", code: "KeyD", sup: "", className: "key" },
          { value: "f", code: "KeyF", sup: "", className: "key" },
          { value: "g", code: "KeyG", sup: "", className: "key" },
          { value: "h", code: "KeyH", sup: "", className: "key" },
          { value: "j", code: "KeyJ", sup: "", className: "key" },
          { value: "k", code: "KeyK", sup: "", className: "key" },
          { value: "l", code: "KeyL", sup: "", className: "key" },
          { value: ";", code: "Semicolon", sup: ":", className: "key" },
          { value: "'", code: "Quote", sup: '"', className: "key" },
          { value: "Enter", code: "Enter", sup: "", className: "key sys enter" },
        ],
        [
          { value: "Shift", code: "ShiftLeft", sup: "", className: "key sys shift" },
          { value: "z", code: "KeyZ", sup: "", className: "key" },
          { value: "x", code: "KeyX", sup: "", className: "key" },
          { value: "c", code: "KeyC", sup: "", className: "key" },
          { value: "v", code: "KeyV", sup: "", className: "key" },
          { value: "b", code: "KeyB", sup: "", className: "key" },
          { value: "n", code: "KeyN", sup: "", className: "key" },
          { value: "m", code: "KeyM", sup: "", className: "key" },
          { value: ",", code: "Comma", sup: "<", className: "key" },
          { value: ".", code: "Period", sup: ">", className: "key" },
          { value: "/", code: "Slash", sup: "?", className: "key" },
          { value: "Shift", code: "ShiftRight", sup: "", className: "key sys shift" },
        ],
        [{ value: " ", code: "Space", sup: "", className: "key sys space" }],
      ];
    default:
      return [];
  }
}

export function currentTextLanguage(language) {
  switch (language) {
    case "en":
      return ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam dolore explicabo ipsa", "en", "en2"];
    case "ru":
      return ["один", "два", "три"];
    default:
      return [];
  }
}
