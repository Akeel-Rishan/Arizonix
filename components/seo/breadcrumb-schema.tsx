import { JsonLd } from '@/components/seo/json-ld';
import { buildBreadcrumbSchema } from '@/lib/seo/schema-builder';
export function BreadcrumbSchema({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  return (
    <JsonLd id="breadcrumb-schema" schema={buildBreadcrumbSchema(items)} />
  );
}
