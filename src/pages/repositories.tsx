import { GetServerSideProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";

interface IRepository {
  id: number;
  name: string;
  html_url: string;
}

interface IRepositories {
  repositories: IRepository[];
}

export default function Home({ repositories }: IRepositories) {
  return (
    <ul>
      {repositories.map(({ id, name, html_url }) => (
        <span>
          <li key={id}>{name}</li>
          <a href={html_url}>Access Repo</a>
        </span>
      ))}
    </ul>
  );
}

export const getServerSideProps: GetServerSideProps<IRepositories> = async () => {
  const repositories = await fetch(
    "https://api.github.com/users/italomarcos1/repos"
  ).then((data) => data.json());

  return {
    props: { repositories },
  };
};
