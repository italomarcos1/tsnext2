import { link } from "fs/promises";
import { GetServerSideProps } from "next";

interface IProduct {
  id: number;
  title: string;
}

interface HomeProps {
  recommendedProducts: IProduct[];
}

export default function Home({ recommendedProducts }: HomeProps) {
  return (
    <>
      <h1>Main Page</h1>
      <section>
        <ul>
          {recommendedProducts.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const data = await fetch("http://localhost:3333/recommended").then((data) =>
    data.json()
  );

  return {
    props: { recommendedProducts: data },
  };
};
