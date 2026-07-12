export function JsonLd({
  id = 'json-ld',
  schema,
}: {
  id?: string;
  schema: object | object[];
}) {
  const value = Array.isArray(schema)
    ? {
        '@context': 'https://schema.org',
        '@graph': schema.map((item) => {
          const copy = { ...item } as Record<string, unknown>;
          delete copy['@context'];
          return copy;
        }),
      }
    : schema;
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(value).replace(/</g, '\\u003c'),
      }}
      id={id}
      type="application/ld+json"
    />
  );
}
