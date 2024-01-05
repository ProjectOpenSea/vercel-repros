import { cookies } from "next/headers";

export default function ParameterPage({
  params: { parameter },
}: {
  params: { parameter: string };
}) {
  return <div>{JSON.stringify(cookies)}</div>;
}
