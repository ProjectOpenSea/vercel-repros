import { cookies } from "next/headers";

export default function ParameterPage() {
  return <div>{JSON.stringify(cookies)}</div>;
}
