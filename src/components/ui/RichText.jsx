// Turns "**bold**" in a text into <strong>bold</strong>.
export default function RichText({ text }) {
    const parts = text.split(/\*\*(.+?)\*\*/g);
    return <>{parts.map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part))}</>;
}
