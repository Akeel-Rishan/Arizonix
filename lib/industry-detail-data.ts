export interface IndustryUseCase { icon: string; title: string; description: string }
export interface IndustryChallenge { title: string; description: string; solution: string }
export interface IndustryStat { value: string; label: string; source?: string }
export interface IndustrySolution { serviceName: string; serviceSlug: string; relevance: string }
export interface IndustryDetailData { heroTagline: string; heroDescription: string; challenges: IndustryChallenge[]; useCases: IndustryUseCase[]; industrySolutions: IndustrySolution[]; industryStats: IndustryStat[]; complianceNote?: string; featuredPortfolioSlug?: string; faqItems: Array<{ question: string; answer: string }> }

const useCaseNames: Record<string, string[]> = {
  healthcare: ['Patient Management', 'Telemedicine Platforms', 'EHR Integration', 'Clinical Analytics', 'Patient Reminders', 'Care Team Portals'],
  finance: ['Payment Platforms', 'Fraud Detection', 'Trading Dashboards', 'Credit Scoring', 'Regulatory Reporting', 'Customer Portals'],
  retail: ['Commerce Platforms', 'Inventory Intelligence', 'Loyalty Systems', 'POS Integration', 'Demand Forecasting', 'Retail Analytics'],
  restaurants: ['Digital Ordering', 'Kitchen Operations', 'POS Integration', 'Delivery Management', 'Loyalty Apps', 'Menu Analytics'],
  'real-estate': ['Property Portals', 'Transaction Management', 'AI Valuation', 'Property Management', 'Lead Automation', 'Market Analytics'],
  construction: ['Field Operations', 'Project Tracking', 'Cost Control', 'Crew Applications', 'Safety Reporting', 'Resource Planning'],
  manufacturing: ['Production Dashboards', 'Predictive Maintenance', 'Quality Control', 'IoT Integration', 'Supply Chain Tools', 'Supplier Portals'],
  logistics: ['Fleet Tracking', 'Route Optimization', 'Dispatch Systems', 'Warehouse Tools', 'Delivery Visibility', 'Logistics Analytics'],
  education: ['Learning Platforms', 'Student Portals', 'Adaptive Learning', 'Virtual Classrooms', 'Progress Analytics', 'Parent Portals'],
  'professional-services': ['Client Portals', 'Resource Planning', 'Workflow Automation', 'Knowledge Systems', 'Billing Integration', 'Performance Analytics'],
  'e-commerce': ['High-Speed Storefronts', 'Smart Recommendations', 'Checkout Optimization', 'Inventory Sync', 'Customer Automation', 'Commerce Analytics'],
  insurance: ['Claims Automation', 'Policy Management', 'Fraud Detection', 'AI Underwriting', 'Agent Portals', 'Policyholder Apps'],
};

const labels: Record<string, string> = { healthcare: 'Healthcare', finance: 'Finance', retail: 'Retail', restaurants: 'Restaurants', 'real-estate': 'Real Estate', construction: 'Construction', manufacturing: 'Manufacturing', logistics: 'Logistics', education: 'Education', 'professional-services': 'Professional Services', 'e-commerce': 'E-commerce', insurance: 'Insurance' };
const regulated = new Set(['healthcare', 'finance', 'insurance', 'education']);

function createDetail(slug: string): IndustryDetailData {
  const name = labels[slug];
  const cases = useCaseNames[slug];
  return {
    heroTagline: `Purpose-Built Software And AI Solutions For Modern ${name} Organizations`,
    heroDescription: `${name} teams face domain-specific operating pressures, customer expectations, and data challenges. We combine senior software engineering with practical AI to build systems that fit your workflows, integrate with your existing tools, and produce measurable business outcomes.`,
    challenges: [
      { title: 'Disconnected Systems', description: `${name} data and workflows are often fragmented across legacy platforms, spreadsheets, and manual handoffs.`, solution: 'We unify critical data and workflows through secure platforms and API integrations that create one dependable operating picture.' },
      { title: 'Operational Inefficiency', description: `Repetitive administration slows teams, increases errors, and limits how quickly ${name.toLowerCase()} organizations can scale.`, solution: 'We automate high-volume processes and design focused internal tools that give specialists more time for valuable work.' },
      { title: 'Rising Customer Expectations', description: `Customers expect fast, transparent, mobile-friendly experiences while ${name.toLowerCase()} organizations must preserve reliability and trust.`, solution: 'We build intuitive web and mobile experiences backed by resilient architecture, secure data handling, and real-time communication.' },
    ],
    useCases: cases.map((title, index) => ({ icon: ['AppWindow', 'Brain', 'Workflow', 'BarChart3', 'Smartphone', 'Database'][index], title, description: `${title} designed around real ${name.toLowerCase()} workflows, users, integrations, and measurable operational goals.` })),
    industrySolutions: [
      { serviceName: 'Web Application Development', serviceSlug: 'web-application-development', relevance: `Secure portals, dashboards, and operational systems tailored to ${name.toLowerCase()} teams.` },
      { serviceName: 'Mobile Application Development', serviceSlug: 'mobile-application-development', relevance: 'Reliable mobile experiences for customers, field teams, and distributed operations.' },
      { serviceName: 'AI Automation Solutions', serviceSlug: 'ai-automation-solutions', relevance: 'Practical automation that reduces manual work and turns business data into faster decisions.' },
      { serviceName: 'API Development & Integrations', serviceSlug: 'api-development-integrations', relevance: 'Dependable integrations that connect legacy tools, partner platforms, and new digital products.' },
    ],
    industryStats: [{ value: '40%', label: 'Potential reduction in manual administration', source: 'Industry automation benchmarks' }, { value: '3x', label: 'Faster digital service delivery', source: 'Arizonix delivery benchmarks' }, { value: '99.9%', label: 'Target platform availability', source: 'Arizonix engineering standard' }],
    complianceNote: regulated.has(slug) ? `Solutions for ${name} are designed around applicable privacy, security, audit, and data-governance obligations from the architecture stage.` : undefined,
    featuredPortfolioSlug: ({ healthcare: 'meditrack', construction: 'constructiq', 'e-commerce': 'shopsphere' } as Record<string, string>)[slug],
    faqItems: [
      { question: `Do you understand ${name} industry requirements?`, answer: `Yes. Discovery includes domain workflows, user roles, integrations, security constraints, and the regulations relevant to your ${name.toLowerCase()} organization.` },
      { question: 'Can you integrate with our existing systems?', answer: 'Yes. We use API-first integration patterns and staged modernization plans to add new capabilities without disrupting critical operations.' },
      { question: 'How long does an industry platform take to build?', answer: 'Focused solutions typically take 8–16 weeks. Larger enterprise platforms are delivered in phased releases with a detailed roadmap agreed after discovery.' },
    ],
  };
}

export const industryDetailData: Record<string, IndustryDetailData> = Object.fromEntries(Object.keys(labels).map((slug) => [slug, createDetail(slug)]));
