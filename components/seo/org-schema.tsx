import { JsonLd } from '@/components/seo/json-ld';
import { buildOrganizationSchema } from '@/lib/seo/schema-builder';
export function OrganizationSchema() {
  return <JsonLd id="organization-schema" schema={buildOrganizationSchema()} />;
}
