import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  takeoverModal: React.ReactNode;
};

export default function Layout({ children, takeoverModal }: Props) {
  return (
    <>
      {children}
      {takeoverModal}
    </>
  );
}
