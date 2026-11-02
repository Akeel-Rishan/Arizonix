export const serviceSlugs = [
  'website-development',
  'web-application-development',
  'mobile-application-development',
  'enterprise-software-development',
  'pos-system-development',
  'ai-automation-solutions',
  'ai-agents-chatbots',
  'workflow-automation',
  'custom-software-development',
  'api-development-integrations',
  'cloud-solutions',
  'ui-ux-design',
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export function isServiceSlug(value: string): value is ServiceSlug {
  return serviceSlugs.some((slug) => slug === value);
}
