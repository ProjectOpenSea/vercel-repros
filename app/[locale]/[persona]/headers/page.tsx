import { headers } from "next/headers"

export default function Page() {
  return <div id="headers">{JSON.stringify(headers())}</div>
}
