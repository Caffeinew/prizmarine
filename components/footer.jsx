import Link from "next/link";
import { useLocomotiveScroll } from "react-locomotive-scroll";

export default function Footer() {
  const { scroll } = useLocomotiveScroll();
  return (
    <footer
      className="relative py-16 sm:p-32 flex flex-col items-center sm:items-start bg-gray-1000 z-20 w-full bottom-0"
      data-scroll
      data-scroll-speed="16"
      style={{marginTop: "-60vh", paddingBottom: '40vh'}}
    >
      <Link href="/request">
        <a className=" text-center sm:text-left text-2xl sm:text-4xl lg:text-5xl mb-8  border-b  pb-1">
          Обсудим ?
        </a>
      </Link>
      <h1 className="sm:ml-8 text-xl sm:text-2xl lg:text-3xl">
        work@prizmarine.agency
      </h1>
    </footer>
  );
}
