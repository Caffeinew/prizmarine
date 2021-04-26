import About from "../components/about";
import Flow from "../components/flow";
import Footer from "../components/footer";
import Landing from "../components/landing";
import Services from "../components/services";
import Head from 'next/head'

export default function Index() {
  return (
    <>
    <Head>
     <title>Prizmarine - digital agency</title>
     <meta name="description" content="Призмарин - Разработка сайтов. Создание графического и веб дизайна, SMM, продвижение в социальных сетях, брендирование" />
    </Head>
      <Flow />
      <Landing />
      <About />
      <Services />
      <Footer />
    </>
  );
}
