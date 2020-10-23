import { GetStaticPaths, GetStaticProps } from "next";

import { Container } from "../styles/pages/username";

interface IUserInfo {
  id: number;
  name: string;
  login: string;
  avatar_url: string;
}

interface IUser {
  user: IUserInfo;
}

export default function UserInfo({ user }: IUser) {
  const { id, name, avatar_url, login } = user;
  return (
    <Container>
      <img src={avatar_url} alt="avatar" />
      <h1>{name}</h1>
      <a href={`https://github.com/${login}?tab=repositories`} target="_blank'">
        See his repositories
      </a>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    { params: { username: "diego3g" } },
    { params: { username: "pellizzetti" } },
    { params: { username: "gaearon" } },
    { params: { username: "flaviodemoura" } },
  ];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IUser> = async ({ params }) => {
  const { username } = params;

  const user = await fetch(
    `http://api.github.com/users/${username}`
  ).then((u) => u.json());

  return { props: { user }, revalidate: 5 };
};
