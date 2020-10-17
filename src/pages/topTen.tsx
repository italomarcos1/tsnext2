import { GetStaticProps } from "next";

interface IProduct {
  id: number;
  title: string;
}

interface TopTenProps {
  topTenProducts: IProduct[];
}

export default function TopTenProducts({ topTenProducts }: TopTenProps) {
  return (
    <>
      <h1>Top ten Products</h1>
      <section>
        <ul>
          {topTenProducts.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps<TopTenProps> = async () => {
  const response = await fetch(
    "http://localhost:3333/recommended"
  ).then((data) => data.json());

  return {
    props: {
      topTenProducts: response,
    },
    revalidate: 60,
  };
};
