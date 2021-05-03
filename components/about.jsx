import { useLocomotiveScroll } from "react-locomotive-scroll";

export default function About() {
  const { scroll } = useLocomotiveScroll();
  return (
    <div
      className="absolute px-6 w-full h-screen bg-gray-1000 flex flex-col justify-center"
      data-scroll
      data-scroll-speed="1"
      style={{top: "70vh"}}
    >
      <h1 className="text-center sm:ml-20 sm:text-left text-4xl sm:text-5xl ">
        О нас
      </h1>
      <p className="mt-16 sm:ml-32 text-xl sm:text-2xl md:text-3xl leading-relaxed">
        PRIZM - команда энутзиастов, объединённых общими целями.
        <br />
        Наша цель - внести в Digital сферу что-то новое.
        <br />
        <br />
        Здесь могла быть наша реклама.
      </p>
    </div>
  );
}
