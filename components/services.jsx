import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "WEB",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sequi beatae at optio sint hic officiis possimus iure dolorem iusto! Nam inventore dolore dolorum saepe maiores voluptates odio placeat doloremque?",
      link: "web",
    },
    {
      title: "DESIGN",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sequi beatae at optio sint hic officiis possimus iure dolorem iusto! Nam inventore dolore dolorum saepe maiores voluptates odio placeat doloremque?",
      link: "design",
    },
    {
      title: "PROMOTION",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sequi beatae at optio sint hic officiis possimus iure dolorem iusto! Nam inventore dolore dolorum saepe maiores voluptates odio placeat doloremque?",
      link: "promotion",
    },
  ];
  return (
    <div className="relative w-full px-6 py-16 sm:py-32 2xl:py-64 flex flex-col justify-center">
      <h1 className="text-4xl text-center sm:text-left sm:text-5xl mb-16 sm:mb-32 sm:ml-20">
        Предложения
      </h1>
      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 justify-items-center gap-y-24 ">
        {services.map((service, index) => (
          <div key={index} className="max-w-sm">
            <h1 className="text-3xl sm:text-4xl">{service.title}</h1>
            <p className="my-8 sm:my-16 text-xl sm:text-2xl">{service.text}</p>
            <Link href={"/service/" + service.link}>
              <a className="text-lg sm:text-xl pb-1 border-b">Узнать больше</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
