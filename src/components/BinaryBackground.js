"use client";

const lines = Array.from({ length: 28 }, (_, i) => {
  const base = "01010011 01101001 01100111 01100111 01111001";
  const variants = [
    base,
    "01111001 01100111 01100111 01101001 01010011",
    "01101001 01010011 01111001 01100111 01100111",
    "01100111 01111001 01010011 01101001 01100111",
    "01111001 01010011 01101001 01100111 01100111",
  ];

  return Array.from({ length: 12 }, (_, j) => variants[(i + j) % variants.length]).join("   ");
});

export default function BinaryBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 opacity-[0.14]">
        {lines.map((line, index) => (
          <div
            key={index}
            className={`binary-line absolute left-0 whitespace-nowrap font-mono text-[12px] tracking-[0.22em] text-emerald-400 ${
              index % 2 === 0 ? "animate-binary-left" : "animate-binary-right"
            }`}
            style={{
              top: `${index * 42}px`,
              animationDuration: `${18 + (index % 6) * 4}s`,
              animationDelay: `${index * -1.5}s`,
            }}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}