import { useLocomotiveScroll } from "react-locomotive-scroll";

export default function Services() {
  const { scroll } = useLocomotiveScroll();
  const serviceList = [
    {
      title: "WEB",
      text: (
        <>
          Разработка сайтов - визиток, лэндингов, магазинов и прочего.
          Подключение Баз данных, метрики
          <br />
          <br />
          Веб-приложения, SPA, PWA
        </>
      ),
      quark: <>Пох*й &copy; главный разработчик</>,
    },
    {
      title: "DESIGN",
      text: (
        <>
          Создание логотипов, интерфейсов, иллюстраций и анимаций. Оформление
          социальных сетей
          <br />
          <br />
          Брендинг, редизайн, 3D
        </>
      ),
      quark: <>У нас на сайте плывёт фон</>,
    },
    {
      title: "PROMOTION",
      text: (
        <>
          Настройка SMM, таргетинга, ретаргитинга и метрики.
          <br />
          SEO оптимизация
          <br />
          <br />
          Контекстная / Нативная реклама
        </>
      ),
      quark: <>Конторы из 6 букв не пишут на заборах</>,
    },
  ];
  return (
    <div
      className="relative w-full px-6 py-16 sm:py-32 2xl:py-64 flex flex-col justify-center z-10 bg-black"
      data-scroll
      data-scroll-speed="8"
      style={{marginTop: "30vh"}}
    >
      <h1 className="text-4xl text-center sm:text-left sm:text-5xl mb-16 sm:mb-32 sm:ml-20">
        Предложения
      </h1>
      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 justify-items-center gap-y-24 ">
        {serviceList.map((service, index) => (
          <div key={index} className="max-w-sm">
            <h1 className="text-3xl sm:text-4xl">{service.title}</h1>
            <p className="my-8 sm:my-16 text-xl sm:text-2xl ">{service.text}</p>
            <p className="my-8 sm:my-16 text-xl sm:text-2xl">{service.quark}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
