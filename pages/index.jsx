import Offers from "../components/offers";
import About from "../components/about";
import Footer from "../components/footer";
import Landing from "../components/landing";

export default function index() {
  return (
    <>
      <div className="w-full h-full overflow-hidden fixed">
        <img className="bg-float-1" src="/bg-1.webp" alt="" />
        <img className="bg-float-2" src="/bg-2.webp" alt="" />
      </div>
      <Landing />
      <About />
      <Offers />
      <Footer />
    </>
  );
}
