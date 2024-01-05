import { cookies } from "next/headers";

export default function ParameterPage() {
  return <div>Cookies: {JSON.stringify(cookies())}</div>;
}
