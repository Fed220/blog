export function decodeText(encoded: string): string {
  try {
    const binary = atob(encoded);
    const bytes = new Uint8Array(binary.length);

    for (let i = 0; i < binary.length; i++) {
      bytes[i] = ~binary.charCodeAt(i) & 0xff;
    }

    return new TextDecoder().decode(bytes);
  } catch {
    return "";
  }
}
