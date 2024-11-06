import { cookies } from "next/headers";

export default async function ParameterPage() {
  return <div>Cookies: {JSON.stringify(await cookies())}</div>;
}
