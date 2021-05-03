import { useLocomotiveScroll } from "react-locomotive-scroll";

export default function Landing() {
  const { scroll } = useLocomotiveScroll();
  return (
    <div
      className="w-full h-screen relative z-10 bg-black"
      data-scroll
      data-scroll-speed="4"
    ></div>
  );
}
