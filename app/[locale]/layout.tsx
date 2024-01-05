import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return children;
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }];
}
