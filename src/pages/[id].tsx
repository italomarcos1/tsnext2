import { useRouter } from "next/router";
import styled from "styled-components";

const Title = styled.h1`
  color: #6633cc;
`;

export default function Product() {
  const router = useRouter();

  return <Title>{`id: ${router.query.id}`}</Title>;
}
