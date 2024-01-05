type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    persona: string;
    locale: string;
  };
};

export default async function RootLayout({
  children,
  params: { locale, persona },
}: RootLayoutProps) {
  return (
    <html lang={locale}>
      <body>
        <div>Locale: {locale}</div>
        <div>Persona: {persona}</div>
        <div>{children}</div>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return [{ persona: "x" }, { persona: "y" }];
}
