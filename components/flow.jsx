export default function Flow() {
  return (
    <div className="w-full h-full fixed overflow-hidden">
      <img
        className="absolute min-w-full max-w-none opacity-50 bg-flow"
        src="/bg-1.webp"
        alt="фон1"
      />
      <img
        className="absolute min-w-full max-w-none opacity-50 bg-flow"
        src="/bg-2.webp"
        alt="фон2"
      />
    </div>
  );
}
