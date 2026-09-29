// Removes the "**" bold marks, for places where bold text is not wanted (like the cards).
export function plainText(text) {
    return text.replace(/\*\*(.+?)\*\*/g, "$1");
}
