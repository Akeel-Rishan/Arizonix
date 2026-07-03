/** Static feature data for service detail pages. Update CMS fullPageContent in Sanity to override this for any service. */
export interface ServiceFeature { icon: string; title: string; description: string }
export interface ServiceFeatureSet { headline: string; subheadline: string; features: ServiceFeature[]; processSteps: string[]; idealFor: string[]; deliverables: string[] }

const featureTemplates: ServiceFeature[] = [
  { icon: 'Lightbulb', title: 'Strategy & Discovery', description: 'Senior specialists translate business goals into a focused technical roadmap and measurable success criteria.' },
  { icon: 'Layers', title: 'Scalable Architecture', description: 'Maintainable foundations designed for reliable performance, security, and future growth.' },
  { icon: 'Code2', title: 'Production Engineering', description: 'Clean, tested implementation delivered through disciplined, transparent engineering practices.' },
  { icon: 'Plug', title: 'System Integration', description: 'Seamless connections with the platforms, data sources, and workflows your business already relies on.' },
  { icon: 'ShieldCheck', title: 'Quality & Security', description: 'Automated testing, security reviews, observability, and resilient deployment practices from day one.' },
  { icon: 'Gauge', title: 'Optimization & Support', description: 'Continuous monitoring and improvement driven by production data and evolving business requirements.' },
];

const serviceNames: Record<string, string> = {
  'website-development': 'Website Development', 'web-application-development': 'Web Application Development', 'mobile-application-development': 'Mobile Application Development', 'enterprise-software-development': 'Enterprise Software Development', 'pos-system-development': 'POS System Development', 'ai-automation-solutions': 'AI Automation Solutions', 'ai-agents-chatbots': 'AI Agents & Chatbots', 'workflow-automation': 'Workflow Automation', 'custom-software-development': 'Custom Software Development', 'api-development-integrations': 'API Development & Integrations', 'cloud-solutions': 'Cloud Solutions', 'ui-ux-design': 'UI/UX Design', 'software-maintenance-support': 'Software Maintenance & Support', 'digital-transformation-consulting': 'Digital Transformation Consulting',
};

export const servicesFeaturesData: Record<string, ServiceFeatureSet> = Object.fromEntries(Object.entries(serviceNames).map(([slug, name]) => [slug, {
  headline: `What's Included in ${name}`,
  subheadline: `A complete ${name.toLowerCase()} engagement — from discovery through delivery and optimization.`,
  features: featureTemplates,
  processSteps: ['Discovery & opportunity mapping', 'Solution architecture & experience design', 'Sprint-based development & testing', 'Launch, monitoring & optimization'],
  idealFor: [`Organizations investing in ${name.toLowerCase()}`, 'Teams replacing manual or legacy processes', 'Businesses preparing to scale securely', 'Leaders seeking a long-term engineering partner'],
  deliverables: ['Technical strategy and delivery roadmap', 'Production-ready solution', 'Automated testing and documentation', 'Deployment and monitoring setup', 'Source code with full IP transfer', 'Post-launch support plan'],
}]));

export const genericServiceFeatures = servicesFeaturesData['custom-software-development'];
