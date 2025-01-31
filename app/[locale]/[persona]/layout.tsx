type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    persona: string;
    locale: string;
  }>;
  authModal: React.ReactNode;
};

export default async function RootLayout(props: RootLayoutProps) {
  const params = await props.params;

  console.log("RootLayout", params);
  
  const { locale, persona } = params;
  const { children, authModal } = props;



  return (
    <html lang={locale}>
      <body>
        <div>Locale: {locale}</div>
        <div>Persona: {persona}</div>
        <div>{children}</div>
        <div>@authModal: {authModal}</div>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return [{ persona: "x" }, { persona: "y" }];
}
