import { JsonLd } from '@/components/seo/json-ld';
import { buildWebSiteSchema } from '@/lib/seo/schema-builder';
export function WebsiteSchema() {
  return <JsonLd id="website-schema" schema={buildWebSiteSchema()} />;
}
