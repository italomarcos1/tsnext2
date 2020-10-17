import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();

  return <h1>{`id: ${router.query.id}`}</h1>;
}
