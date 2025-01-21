type Props = {
  params: Promise<{ test: string }>;
};

export default async function Page({ params }: Props) {
  const { test } = await params;
  return <div>Hello {test}</div>;
}

export function generateStaticParams() {
  return [
    { test: "a" },
    { test: "b" },
    { test: "c" },
    { test: "d" },
    { test: "e" },
    { test: "f" },
  ];
}
