export default function About() {
  return (
    <div className="text-gray-300 font-thin wrapper px-32 flex justify-center flex-col relative z-10 overflow-hidden bg-gray-05">
      <h1 className="text-5xl mb-32 ml-20">О нас</h1>
      <p className="text-3xl leading-relaxed ml-32">
        PRIZM - команда энутзиастов, объединённых общими целями.
        <br /> Наша цель - внести в Digital сферу что-то новое.
      </p>
      <img src="/3d.webp" className="w-96 h-96 absolute inset-y-auto right-16 my-auto test"/>
    </div>
  );
}
