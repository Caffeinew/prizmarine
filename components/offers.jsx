import Link from "next/link";

export default function Offers() {
  const offers = [
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
    <div className="text-gray-300 font-thin wrapper px-32 flex justify-center flex-col relative z-10">
      <h1 className="text-5xl mb-32 ml-20">Предложения</h1>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-64 text-2xl">
        {offers.map((offer, index) => (
          <div key={index}>
            <h1 className="text-4xl">{offer.title}</h1>
            <p className="my-16">{offer.text}</p>
            <Link href={"/service/" + offer.link}>
              <a className="text-xl border-b">Узнать больше</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
