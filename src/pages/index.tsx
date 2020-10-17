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
    <ul>
      {recommendedProducts.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch("http://localhost:3333/products");
  const recommendedProducts = await response.json();

  return {
    props: { recommendedProducts },
  };
};
