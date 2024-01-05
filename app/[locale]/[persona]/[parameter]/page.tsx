export default function ParameterPage({
  params: { parameter },
}: {
  params: { parameter: string };
}) {
  return <div>Parameter: {parameter}</div>;
}
