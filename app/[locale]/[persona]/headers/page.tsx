import { headers } from "next/headers"

export default async function Page() {
  return <div id="headers">{JSON.stringify(await headers())}</div>;
}
