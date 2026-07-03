export type ServiceCategoryColor = 'blue' | 'purple' | 'cyan';

export interface ServiceCategory {
  id: string; label: string; description: string; color: ServiceCategoryColor; icon: string; slugs: readonly string[];
}

export const serviceCategories: readonly ServiceCategory[] = [
  { id: 'ai-automation', label: 'AI & Automation', description: 'Intelligent systems that eliminate manual work and scale your operations.', color: 'blue', icon: 'Brain', slugs: ['ai-automation-solutions', 'ai-agents-chatbots', 'workflow-automation'] },
  { id: 'software-development', label: 'Software Development', description: 'Production-grade applications built for performance, scale, and longevity.', color: 'purple', icon: 'Code2', slugs: ['web-application-development', 'mobile-application-development', 'enterprise-software-development', 'custom-software-development', 'pos-system-development'] },
  { id: 'digital-presence', label: 'Digital Presence', description: 'Beautiful, high-performance digital experiences that convert visitors.', color: 'cyan', icon: 'Globe', slugs: ['website-development', 'ui-ux-design'] },
  { id: 'infrastructure', label: 'Infrastructure & Integration', description: 'Scalable cloud architecture and seamless system connectivity.', color: 'blue', icon: 'Cloud', slugs: ['cloud-solutions', 'api-development-integrations', 'software-maintenance-support', 'digital-transformation-consulting'] },
];

export function getServiceCategory(slug: string) { return serviceCategories.find((category) => category.slugs.includes(slug)); }
export function getServiceCategoryColor(slug: string): ServiceCategoryColor { return getServiceCategory(slug)?.color ?? 'blue'; }
