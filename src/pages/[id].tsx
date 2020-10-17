import { useRouter } from "next/router";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 12px;
  color: #6633cc;
`;

export default function PagePerId() {
  const router = useRouter();

  return <Title>{`id: ${router.query.id}`}</Title>;
}
