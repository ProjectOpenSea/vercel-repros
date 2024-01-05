type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    persona: string;
  };
};

export default async function RootLayout({
  children,
  params: { persona },
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <div>{persona}</div>
        <div>{children}</div>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return [{ persona: "x" }];
}
