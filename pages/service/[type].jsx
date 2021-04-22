export default function Service({ type }) {
  return (
    <div className="text-gray-50 wrapper flex justify-center text-8xl font-thin">
      <h1>{type}</h1>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  return { props: { type: query.type } };
}
