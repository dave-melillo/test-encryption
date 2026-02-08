/**
 * Caesar Cipher - shifts each letter by a fixed number of positions (default: 3)
 * Non-alphabetic characters remain unchanged
 */
export function caesarCipher(text, shift = 3) {
  return text
    .split('')
    .map(char => {
      // Check if uppercase letter
      if (char >= 'A' && char <= 'Z') {
        return String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
      }
      // Check if lowercase letter
      if (char >= 'a' && char <= 'z') {
        return String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
      }
      // Non-alphabetic characters remain unchanged
      return char;
    })
    .join('');
}

/**
 * ROT13 - special case of Caesar cipher with shift of 13
 * Self-inverse: applying twice returns original text
 */
export function rot13(text) {
  return caesarCipher(text, 13);
}

/**
 * Base64 Encoding - converts text to Base64
 * Uses built-in btoa() for browser compatibility
 */
export function base64Encode(text) {
  try {
    return btoa(text);
  } catch (error) {
    // Handle non-Latin-1 characters by encoding as UTF-8 first
    return btoa(encodeURIComponent(text).replace(/%([0-9A-F]{2})/g, (match, p1) => {
      return String.fromCharCode('0x' + p1);
    }));
  }
}

/**
 * Main encryption dispatcher
 */
export function encrypt(text, method) {
  switch (method) {
    case 'caesar':
      return caesarCipher(text);
    case 'rot13':
      return rot13(text);
    case 'base64':
      return base64Encode(text);
    default:
      return text;
  }
}
