import About from "../components/about";
import Flow from "../components/flow";
import Footer from "../components/footer";
import Landing from "../components/landing";
import Services from "../components/services";

export default function Index() {
  return (
    <>
      <Flow />
      <Landing />
      <About />
      <Services />
      <Footer />
    </>
  );
}
