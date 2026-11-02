import type { ServiceSlug } from '@/lib/service-slugs';

export interface ServiceTechnologyGroup {
  label: string;
  items: readonly string[];
}

export interface ServiceDetailData {
  benefits: readonly string[];
  capabilities: readonly string[];
  category: string;
  cta: {
    description: string;
    title: string;
  };
  heroDescription: string;
  idealFor: readonly string[];
  overview: {
    heading: string;
    paragraphs: readonly [string, string];
  };
  problemsWeSolve: readonly string[];
  relatedServices: readonly [ServiceSlug, ServiceSlug, ServiceSlug];
  seo: {
    description: string;
    title: string;
  };
  slug: ServiceSlug;
  technologies: readonly ServiceTechnologyGroup[];
}

export const serviceProcess = [
  {
    name: 'Discover',
    description:
      'Understand the business, users, current systems, and requirements.',
  },
  {
    name: 'Plan',
    description:
      'Define the architecture, functionality, scope, risks, and milestones.',
  },
  {
    name: 'Design',
    description:
      'Shape the user experience and interface before costly implementation work.',
  },
  {
    name: 'Build',
    description:
      'Develop the product with maintainable code and clear delivery checkpoints.',
  },
  {
    name: 'Test',
    description:
      'Validate functionality, responsiveness, security, accessibility, and performance.',
  },
  {
    name: 'Launch',
    description:
      'Deploy safely, verify production behavior, and prepare your team for handover.',
  },
  {
    name: 'Improve',
    description:
      'Monitor the product, resolve issues, and prioritize useful improvements.',
  },
] as const;

export const whyArizonix = [
  {
    title: 'Business-focused delivery',
    description:
      'Technical decisions stay connected to users, operations, and commercial goals.',
  },
  {
    title: 'Scalable, maintainable architecture',
    description:
      'We design clear foundations that can evolve without repeated rewrites.',
  },
  {
    title: 'Security and performance',
    description:
      'Quality checks, sensible access controls, and production monitoring are built into delivery.',
  },
  {
    title: 'Transparent collaboration',
    description:
      'You can see progress, decisions, risks, and next steps throughout the engagement.',
  },
] as const;

export const serviceDetailData: Record<ServiceSlug, ServiceDetailData> = {
  'website-development': {
    slug: 'website-development',
    category: 'Digital Presence',
    heroDescription:
      'Fast, accessible websites that explain your value clearly and turn qualified visitors into real business opportunities.',
    overview: {
      heading: 'A website built to support the business behind it',
      paragraphs: [
        'Website development is more than assembling pages. It is the work of turning your positioning, content, and customer journey into a dependable digital experience that is easy to find and simple to use.',
        'Arizonix starts with your audience and conversion goals, then plans the content structure, interface, CMS, analytics, and technical foundation together. The result is a website your team can operate and improve after launch.',
      ],
    },
    problemsWeSolve: [
      'Slow pages that lose visitors and search visibility',
      'Unclear messaging and weak conversion paths',
      'Websites that are difficult for internal teams to update',
      'Fragile builds that become expensive to maintain',
    ],
    capabilities: [
      'Business websites',
      'Corporate websites',
      'Landing pages',
      'E-commerce websites',
      'CMS websites',
      'Marketing websites',
      'Performance optimization',
      'SEO-ready architecture',
    ],
    technologies: [
      {
        label: 'Frontend',
        items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      },
      {
        label: 'Content and commerce',
        items: ['Sanity', 'Headless CMS', 'Shopify', 'Stripe'],
      },
      {
        label: 'Delivery',
        items: ['Vercel', 'Cloudflare', 'Google Analytics 4'],
      },
    ],
    idealFor: [
      'Businesses replacing an outdated website',
      'Startups preparing for launch or funding',
      'Service companies that depend on qualified inquiries',
      'Marketing teams that need control over content',
    ],
    benefits: [
      'Clearer customer journeys and calls to action',
      'Faster page delivery across mobile and desktop',
      'A content system your team can use without developers',
      'A maintainable foundation for campaigns and future features',
    ],
    relatedServices: [
      'ui-ux-design',
      'web-application-development',
      'cloud-solutions',
    ],
    seo: {
      title: 'Website Development | Arizonix',
      description:
        'Professional website development for businesses, startups, and organizations. Arizonix builds fast, scalable, conversion-focused websites.',
    },
    cta: {
      title: 'Have a website project in mind?',
      description:
        'Let us turn your content and goals into a fast, reliable website built for real customers.',
    },
  },
  'web-application-development': {
    slug: 'web-application-development',
    category: 'Software Development',
    heroDescription:
      'Secure web applications that simplify complex work, serve customers reliably, and scale with your operations.',
    overview: {
      heading: 'Purpose-built web software for real workflows',
      paragraphs: [
        'Web applications combine business rules, data, permissions, and user experience in one accessible product. They can replace spreadsheets, disconnected tools, or manual processes with a system designed around how the organization actually works.',
        'Arizonix maps the workflow before choosing the architecture. We define roles, data models, integrations, edge cases, and release priorities, then deliver in reviewable stages so the product remains aligned with users and business needs.',
      ],
    },
    problemsWeSolve: [
      'Critical workflows spread across spreadsheets and inboxes',
      'Off-the-shelf tools that do not fit the operating model',
      'Customer experiences limited by disconnected systems',
      'Applications that cannot scale safely with usage',
    ],
    capabilities: [
      'SaaS platforms',
      'Customer portals',
      'Internal business systems',
      'Operational dashboards',
      'Booking platforms',
      'Marketplace platforms',
      'Authentication systems',
      'Real-time applications',
    ],
    technologies: [
      {
        label: 'Frontend',
        items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      },
      {
        label: 'Backend',
        items: ['Node.js', 'Express', 'Python', 'REST APIs'],
      },
      {
        label: 'Data and delivery',
        items: ['PostgreSQL', 'Supabase', 'Docker', 'Vercel'],
      },
    ],
    idealFor: [
      'Teams creating a new SaaS product',
      'Businesses replacing manual operational workflows',
      'Organizations building secure customer self-service',
      'Product teams that need an experienced delivery partner',
    ],
    benefits: [
      'Software matched to the workflow instead of the other way around',
      'Clear permissions and dependable data handling',
      'A release plan that reduces delivery risk',
      'Architecture prepared for new users, features, and integrations',
    ],
    relatedServices: [
      'ui-ux-design',
      'api-development-integrations',
      'cloud-solutions',
    ],
    seo: {
      title: 'Web Application Development | Arizonix',
      description:
        'Custom web application development for SaaS products, portals, dashboards, and internal systems. Built for security, usability, and scale.',
    },
    cta: {
      title: 'Planning a web application?',
      description:
        'We can turn the workflow, requirements, and business case into a practical product delivery plan.',
    },
  },
  'mobile-application-development': {
    slug: 'mobile-application-development',
    category: 'Software Development',
    heroDescription:
      'Reliable iOS and Android applications designed around useful mobile experiences, dependable APIs, and maintainable delivery.',
    overview: {
      heading: 'Mobile products designed for how people actually use them',
      paragraphs: [
        'A successful mobile application must handle more than screen layouts. Connectivity changes, device permissions, notifications, app-store requirements, accessibility, and battery usage all affect the experience.',
        'Arizonix defines the most valuable mobile journeys first, then selects native or cross-platform technology based on product needs. We coordinate interface design, API work, testing, releases, and production monitoring as one delivery process.',
      ],
    },
    problemsWeSolve: [
      'Mobile experiences that feel like compressed websites',
      'Unreliable behavior on slow or interrupted connections',
      'Separate codebases that make updates unnecessarily expensive',
      'Difficult app-store releases and production troubleshooting',
    ],
    capabilities: [
      'iOS applications',
      'Android applications',
      'Cross-platform apps',
      'React Native and Flutter apps',
      'API-connected apps',
      'Location-based applications',
      'Offline-capable applications',
      'Push notifications',
    ],
    technologies: [
      {
        label: 'Mobile',
        items: ['React Native', 'Flutter', 'Expo', 'TypeScript'],
      },
      {
        label: 'Backend',
        items: ['Node.js', 'Python', 'Supabase', 'PostgreSQL'],
      },
      {
        label: 'Delivery',
        items: [
          'App Store Connect',
          'Google Play Console',
          'Sentry',
          'Firebase',
        ],
      },
    ],
    idealFor: [
      'Businesses extending an existing platform to mobile',
      'Founders validating a mobile-first product',
      'Field teams that need reliable offline workflows',
      'Organizations replacing an unstable legacy app',
    ],
    benefits: [
      'One coherent experience across supported devices',
      'Faster iteration with an appropriate shared-code strategy',
      'Reliable integration with business systems and APIs',
      'A repeatable release and monitoring process',
    ],
    relatedServices: [
      'api-development-integrations',
      'ui-ux-design',
      'cloud-solutions',
    ],
    seo: {
      title: 'Mobile Application Development | Arizonix',
      description:
        'iOS, Android, React Native, and Flutter application development with reliable APIs, thoughtful UX, testing, and app-store delivery.',
    },
    cta: {
      title: 'Ready to build a mobile product?',
      description:
        'We will help define the right platform approach and a release plan grounded in your users and operations.',
    },
  },
  'enterprise-software-development': {
    slug: 'enterprise-software-development',
    category: 'Software Development',
    heroDescription:
      'Maintainable enterprise systems that connect teams, standardize operations, and support secure long-term change.',
    overview: {
      heading: 'Software that fits complex organizations without adding chaos',
      paragraphs: [
        'Enterprise software coordinates people, permissions, data, and business rules across departments. The challenge is not simply adding features. It is making the system dependable, understandable, and adaptable as requirements change.',
        'Arizonix works with stakeholders to map processes, ownership, integrations, and compliance needs. We break delivery into controlled modules, document key decisions, and plan migrations carefully to reduce operational disruption.',
      ],
    },
    problemsWeSolve: [
      'Legacy tools that create duplicated work and unreliable data',
      'Processes that vary between teams and locations',
      'Limited visibility into operations and performance',
      'Systems that are difficult to integrate or change safely',
    ],
    capabilities: [
      'ERP-style systems',
      'Internal operations platforms',
      'Employee systems',
      'Inventory systems',
      'Workflow systems',
      'Reporting dashboards',
      'Role-based systems',
      'Enterprise integrations',
    ],
    technologies: [
      {
        label: 'Applications',
        items: ['React', 'Next.js', 'TypeScript', 'Node.js'],
      },
      {
        label: 'Data',
        items: ['PostgreSQL', 'MongoDB', 'Redis', 'Data pipelines'],
      },
      {
        label: 'Infrastructure',
        items: ['AWS', 'Docker', 'Cloudflare', 'CI/CD'],
      },
    ],
    idealFor: [
      'Organizations consolidating legacy internal systems',
      'Multi-team operations that need shared workflows',
      'Businesses preparing systems for sustained growth',
      'Leadership teams that need dependable operational reporting',
    ],
    benefits: [
      'Consistent processes and a clearer source of truth',
      'Role-based access aligned with organizational responsibility',
      'Modular architecture that supports controlled change',
      'Better visibility into operational activity and bottlenecks',
    ],
    relatedServices: [
      'custom-software-development',
      'workflow-automation',
      'api-development-integrations',
    ],
    seo: {
      title: 'Enterprise Software Development | Arizonix',
      description:
        'Enterprise software development for operations, inventory, employee workflows, reporting, permissions, and system integration.',
    },
    cta: {
      title: 'Modernizing an enterprise workflow?',
      description:
        'We can map the operational risks and define a phased system that your teams can adopt with confidence.',
    },
  },
  'pos-system-development': {
    slug: 'pos-system-development',
    category: 'Software Development',
    heroDescription:
      'Connected point-of-sale systems for faster transactions, accurate inventory, and useful multi-location reporting.',
    overview: {
      heading: 'A point-of-sale system built around daily operations',
      paragraphs: [
        'POS software sits at the center of sales, payments, stock, staff activity, and customer service. Small reliability or usability problems become repeated operational costs at every checkout.',
        'Arizonix studies the transaction flow, hardware, inventory model, reporting needs, and failure scenarios before implementation. We design the interface for speed and connect the back office so teams can act on accurate information.',
      ],
    },
    problemsWeSolve: [
      'Slow checkout flows and avoidable staff errors',
      'Inventory records that do not match actual stock',
      'Fragmented sales reporting across locations',
      'POS tools that cannot support the required workflow or hardware',
    ],
    capabilities: [
      'Restaurant POS',
      'Retail POS',
      'Inventory management',
      'Order management',
      'Billing and receipts',
      'Sales analytics',
      'Staff management',
      'Multi-location support',
    ],
    technologies: [
      {
        label: 'Applications',
        items: ['React', 'Next.js', 'React Native', 'TypeScript'],
      },
      {
        label: 'Data and APIs',
        items: ['Node.js', 'PostgreSQL', 'REST APIs', 'Webhooks'],
      },
      {
        label: 'Operations',
        items: ['Payment integrations', 'Offline sync', 'Cloud deployment'],
      },
    ],
    idealFor: [
      'Retailers with specialized sales or inventory workflows',
      'Restaurants coordinating orders, billing, and kitchen activity',
      'Multi-location businesses needing consolidated reporting',
      'Operators replacing inflexible or unsupported POS software',
    ],
    benefits: [
      'Faster daily transactions with fewer manual corrections',
      'Inventory updates connected directly to sales activity',
      'Consistent controls and reporting across locations',
      'A system designed for the hardware and workflow you use',
    ],
    relatedServices: [
      'custom-software-development',
      'api-development-integrations',
      'cloud-solutions',
    ],
    seo: {
      title: 'POS System Development | Arizonix',
      description:
        'Custom POS system development for retail and restaurants, including billing, inventory, reporting, staff controls, and multi-location operations.',
    },
    cta: {
      title: 'Need a better point-of-sale system?',
      description:
        'Let us map your checkout, inventory, and reporting requirements into a dependable implementation plan.',
    },
  },
  'ai-automation-solutions': {
    slug: 'ai-automation-solutions',
    category: 'AI and Automation',
    heroDescription:
      'Practical AI automation that reduces repetitive work while keeping people in control of important decisions.',
    overview: {
      heading: 'Apply AI where it creates useful operational leverage',
      paragraphs: [
        'AI automation can classify information, extract data, draft responses, and support decisions across high-volume workflows. Its value depends on clear inputs, review rules, integrations, and measurable operational outcomes.',
        'Arizonix starts with the process rather than the model. We identify suitable tasks, define accuracy and escalation requirements, connect the necessary systems, and test with representative business data before expanding usage.',
      ],
    },
    problemsWeSolve: [
      'Teams spending hours on repetitive information handling',
      'Slow lead, document, or customer-support workflows',
      'AI experiments that are disconnected from business systems',
      'Automation without clear review, security, or failure controls',
    ],
    capabilities: [
      'Customer support automation',
      'Lead qualification',
      'Document processing',
      'Email automation',
      'CRM automation',
      'Data extraction',
      'AI-assisted workflows',
      'Business process automation',
    ],
    technologies: [
      { label: 'AI', items: ['LLMs', 'RAG', 'Vector databases', 'LangChain'] },
      {
        label: 'Backend',
        items: ['Python', 'FastAPI', 'Node.js', 'PostgreSQL'],
      },
      {
        label: 'Integration',
        items: ['REST APIs', 'Webhooks', 'CRM platforms', 'Cloud services'],
      },
    ],
    idealFor: [
      'Operations teams handling high volumes of repeated information',
      'Businesses testing AI with a defined process and owner',
      'Customer teams that need faster, more consistent responses',
      'Organizations connecting AI to existing tools and data',
    ],
    benefits: [
      'Less time spent on repetitive, rules-based activity',
      'Consistent handling with clear human review points',
      'AI connected to the systems where work already happens',
      'A measured rollout based on quality and operational evidence',
    ],
    relatedServices: [
      'ai-agents-chatbots',
      'workflow-automation',
      'api-development-integrations',
    ],
    seo: {
      title: 'AI Automation Solutions | Arizonix',
      description:
        'AI automation for support, leads, documents, email, CRM workflows, and data extraction with practical review and integration controls.',
    },
    cta: {
      title: 'Which process should AI improve first?',
      description:
        'We can assess the workflow, data, risks, and expected value before you commit to a larger implementation.',
    },
  },
  'ai-agents-chatbots': {
    slug: 'ai-agents-chatbots',
    category: 'AI and Automation',
    heroDescription:
      'AI agents that use approved knowledge, complete defined tasks, and support customers or employees with clear safeguards.',
    overview: {
      heading: 'Conversational systems grounded in your business',
      paragraphs: [
        'AI agents and chatbots can answer questions, retrieve knowledge, collect information, and use connected tools. Useful systems need more than a prompt. They require trusted sources, permission boundaries, evaluation, and a reliable escalation path.',
        'Arizonix defines the agent purpose and allowed actions first. We prepare the knowledge layer, connect tools and APIs, create evaluation cases, and monitor real interactions so the system can improve without losing control.',
      ],
    },
    problemsWeSolve: [
      'Repeated questions consuming customer and employee time',
      'Knowledge spread across documents and disconnected systems',
      'Generic chatbots that cannot complete useful actions',
      'AI responses without evaluation, permissions, or escalation',
    ],
    capabilities: [
      'Customer support agents',
      'Website AI assistants',
      'Knowledge-base assistants',
      'RAG chatbots',
      'Sales assistants',
      'Employee assistants',
      'Multi-agent systems',
      'AI tool and API integrations',
    ],
    technologies: [
      { label: 'AI', items: ['LLMs', 'RAG', 'Vector databases', 'LangGraph'] },
      {
        label: 'Application',
        items: ['Python', 'FastAPI', 'Node.js', 'TypeScript'],
      },
      {
        label: 'Knowledge and tools',
        items: ['PostgreSQL', 'pgvector', 'REST APIs', 'Webhooks'],
      },
    ],
    idealFor: [
      'Support teams with repeatable, knowledge-based inquiries',
      'Organizations improving access to internal information',
      'Sales teams qualifying and routing inbound requests',
      'Products that need a conversational interface to existing tools',
    ],
    benefits: [
      'Faster access to approved answers and information',
      'Clear boundaries for actions, permissions, and escalation',
      'Reusable evaluation cases for response quality',
      'Integration with business tools instead of an isolated chat box',
    ],
    relatedServices: [
      'ai-automation-solutions',
      'workflow-automation',
      'api-development-integrations',
    ],
    seo: {
      title: 'AI Agents & Chatbots | Arizonix',
      description:
        'Business AI agents, RAG chatbots, knowledge assistants, and tool integrations designed with evaluation, permissions, and human escalation.',
    },
    cta: {
      title: 'Planning an AI assistant or agent?',
      description:
        'We can define the knowledge, actions, safeguards, and evaluation plan required for a useful production system.',
    },
  },
  'workflow-automation': {
    slug: 'workflow-automation',
    category: 'AI and Automation',
    heroDescription:
      'Connected workflows that reduce manual handoffs, keep data synchronized, and make routine operations easier to manage.',
    overview: {
      heading: 'Automate the handoffs that slow work down',
      paragraphs: [
        'Workflow automation moves information and tasks between people and systems according to clear rules. It can reduce duplicate entry, missed approvals, delayed follow-up, and the uncertainty created by disconnected tools.',
        'Arizonix maps the current process, including exceptions and ownership, before automating it. We connect systems through supported APIs, add useful monitoring, and preserve manual controls wherever judgment is still required.',
      ],
    },
    problemsWeSolve: [
      'Repeated copy-and-paste work between business tools',
      'Leads, approvals, or notifications delayed by manual handoffs',
      'Data that becomes inconsistent across connected systems',
      'Automations that fail silently without clear ownership',
    ],
    capabilities: [
      'CRM workflows',
      'Email workflows',
      'Lead workflows',
      'Approval workflows',
      'Data synchronization',
      'Notification systems',
      'API-based automation',
      'AI-powered automation',
    ],
    technologies: [
      {
        label: 'Integration',
        items: ['REST APIs', 'Webhooks', 'OAuth', 'Event queues'],
      },
      { label: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'Redis'] },
      {
        label: 'Operations',
        items: [
          'Cloud functions',
          'Monitoring',
          'Retry handling',
          'Audit logs',
        ],
      },
    ],
    idealFor: [
      'Teams repeating the same cross-system tasks every day',
      'Revenue operations improving lead and customer workflows',
      'Organizations standardizing approvals and notifications',
      'Businesses replacing fragile no-code automations',
    ],
    benefits: [
      'Fewer manual handoffs and duplicated updates',
      'Consistent rules with visible exceptions and ownership',
      'More reliable data across connected systems',
      'Monitoring that makes automation failures actionable',
    ],
    relatedServices: [
      'ai-automation-solutions',
      'api-development-integrations',
      'ai-agents-chatbots',
    ],
    seo: {
      title: 'Workflow Automation | Arizonix',
      description:
        'Workflow automation for CRM, leads, approvals, email, notifications, data synchronization, APIs, and AI-assisted business processes.',
    },
    cta: {
      title: 'Where does work get stuck today?',
      description:
        'We can map the handoffs, exceptions, and systems involved, then identify the safest automation opportunities.',
    },
  },
  'custom-software-development': {
    slug: 'custom-software-development',
    category: 'Software Development',
    heroDescription:
      'Software designed around your operating model, customers, and competitive requirements instead of generic product limitations.',
    overview: {
      heading: 'Build the system your business actually needs',
      paragraphs: [
        'Custom software is appropriate when a critical workflow, customer experience, or business model cannot be served well by available products. The goal is not uniqueness for its own sake. It is a better fit with measurable operational value.',
        'Arizonix validates the business case and delivery risks before development. We prioritize the smallest useful release, design an architecture that can evolve, and keep stakeholders involved through demonstrations and clear decisions.',
      ],
    },
    problemsWeSolve: [
      'Business-critical work forced into unsuitable generic tools',
      'Disconnected systems creating repeated manual coordination',
      'Product ideas that need technical validation and planning',
      'Legacy software that cannot support current operations',
    ],
    capabilities: [
      'Business-specific platforms',
      'Management systems',
      'SaaS products',
      'Operational software',
      'Internal tools',
      'Customer portals',
      'Marketplace platforms',
      'Digital transformation projects',
    ],
    technologies: [
      {
        label: 'Frontend',
        items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      },
      {
        label: 'Backend and data',
        items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
      },
      {
        label: 'Infrastructure',
        items: ['AWS', 'Vercel', 'Docker', 'Cloudflare'],
      },
    ],
    idealFor: [
      'Businesses with a workflow that creates competitive advantage',
      'Founders turning a validated concept into a product',
      'Organizations replacing unsupported legacy software',
      'Teams consolidating several tools into one controlled platform',
    ],
    benefits: [
      'A product shaped around real users and operational constraints',
      'Ownership of the roadmap and delivered source code',
      'A focused first release that can expand responsibly',
      'Documentation and architecture built for long-term maintenance',
    ],
    relatedServices: [
      'web-application-development',
      'ui-ux-design',
      'cloud-solutions',
    ],
    seo: {
      title: 'Custom Software Development | Arizonix',
      description:
        'Custom software development for business platforms, SaaS products, management systems, internal tools, portals, and digital transformation.',
    },
    cta: {
      title: 'Have a software problem without an off-the-shelf answer?',
      description:
        'We can validate the business case, define the first useful release, and plan a maintainable product.',
    },
  },
  'api-development-integrations': {
    slug: 'api-development-integrations',
    category: 'Infrastructure and Integration',
    heroDescription:
      'Secure APIs and integrations that move data reliably between products, partners, and essential business systems.',
    overview: {
      heading: 'Create dependable connections between systems',
      paragraphs: [
        'APIs define how applications exchange data and trigger actions. Well-designed integrations reduce duplicate work and unlock better customer experiences, while weak contracts and error handling create hidden operational risk.',
        'Arizonix documents the data flow, authentication, rate limits, failure cases, and ownership before implementation. We build clear interfaces, protect sensitive operations, and add logs and retries so integrations can be supported in production.',
      ],
    },
    problemsWeSolve: [
      'Important data isolated in separate platforms',
      'Manual updates required to keep systems aligned',
      'Unreliable integrations with poor failure visibility',
      'Legacy systems that need controlled access to modern products',
    ],
    capabilities: [
      'REST APIs',
      'Third-party API integrations',
      'Payment integrations',
      'CRM integrations',
      'Authentication APIs',
      'Webhooks',
      'Database integrations',
      'Legacy-system integrations',
    ],
    technologies: [
      { label: 'Backend', items: ['Node.js', 'Express', 'Python', 'FastAPI'] },
      { label: 'Data', items: ['PostgreSQL', 'MongoDB', 'Supabase', 'Redis'] },
      {
        label: 'Interfaces and security',
        items: ['REST', 'Webhooks', 'OAuth 2.0', 'JWT'],
      },
    ],
    idealFor: [
      'Products exposing reliable capabilities to customers or partners',
      'Businesses connecting CRM, payment, and operational systems',
      'Teams replacing manual data exchange between platforms',
      'Organizations modernizing access to legacy applications',
    ],
    benefits: [
      'Clear contracts that are easier for teams to integrate with',
      'Secure authentication and permission boundaries',
      'Reliable retries, logging, and failure handling',
      'Less duplicate entry and more consistent business data',
    ],
    relatedServices: [
      'cloud-solutions',
      'workflow-automation',
      'web-application-development',
    ],
    seo: {
      title: 'API Development & Integrations | Arizonix',
      description:
        'REST API development and system integration for payments, CRM, authentication, webhooks, databases, partners, and legacy software.',
    },
    cta: {
      title: 'Need systems to work together reliably?',
      description:
        'We can map the data flow, security requirements, and failure cases before building the connection.',
    },
  },
  'cloud-solutions': {
    slug: 'cloud-solutions',
    category: 'Infrastructure and Integration',
    heroDescription:
      'Cloud infrastructure designed for reliable deployment, secure operations, useful monitoring, and controlled growth.',
    overview: {
      heading: 'A cloud foundation your team can operate confidently',
      paragraphs: [
        'Cloud platforms make infrastructure flexible, but flexibility without clear architecture, ownership, and cost controls can create avoidable complexity. Applications need repeatable deployment, observability, backups, and security practices that match their actual risk.',
        'Arizonix evaluates application needs before selecting services. We automate deployment, isolate environments, document recovery procedures, and create monitoring that helps the team understand production behavior.',
      ],
    },
    problemsWeSolve: [
      'Manual deployments that create avoidable release risk',
      'Infrastructure that cannot handle changing demand reliably',
      'Limited visibility into errors, performance, and operating cost',
      'Cloud environments without clear security or recovery practices',
    ],
    capabilities: [
      'Cloud architecture',
      'Application deployment',
      'Database infrastructure',
      'Serverless architecture',
      'CI/CD pipelines',
      'Monitoring and alerting',
      'Cloud migrations',
      'Scalable backend infrastructure',
    ],
    technologies: [
      {
        label: 'Cloud',
        items: ['AWS', 'Vercel', 'Cloudflare', 'Serverless functions'],
      },
      {
        label: 'Delivery',
        items: [
          'Docker',
          'GitHub Actions',
          'CI/CD',
          'Infrastructure automation',
        ],
      },
      {
        label: 'Data and monitoring',
        items: ['PostgreSQL', 'Supabase', 'Sentry', 'Managed backups'],
      },
    ],
    idealFor: [
      'Teams preparing an application for production',
      'Businesses improving deployment reliability and visibility',
      'Products expecting changing traffic or data requirements',
      'Organizations planning a controlled cloud migration',
    ],
    benefits: [
      'Repeatable deployments with fewer manual steps',
      'Monitoring that makes production problems easier to diagnose',
      'Infrastructure choices aligned with actual scale and risk',
      'Documented backup, recovery, and environment practices',
    ],
    relatedServices: [
      'api-development-integrations',
      'web-application-development',
      'enterprise-software-development',
    ],
    seo: {
      title: 'Cloud Solutions | Arizonix',
      description:
        'Cloud architecture, deployments, CI/CD, monitoring, migrations, databases, serverless systems, and scalable application infrastructure.',
    },
    cta: {
      title: 'Need a more dependable cloud setup?',
      description:
        'We can review the application, deployment process, reliability risks, and operating requirements.',
    },
  },
  'ui-ux-design': {
    slug: 'ui-ux-design',
    category: 'Digital Presence',
    heroDescription:
      'Clear product experiences that help users understand complex tasks, act confidently, and move through the interface efficiently.',
    overview: {
      heading: 'Design decisions grounded in users and product constraints',
      paragraphs: [
        'UI design defines how a product looks, while UX design determines how information, actions, and feedback fit together. Good product design reduces confusion, supports accessibility, and gives engineering a clear system to implement.',
        'Arizonix combines discovery, workflow mapping, wireframes, prototypes, and interface design. We involve technical stakeholders early so the final experience is useful, feasible, and consistent across screens and states.',
      ],
    },
    problemsWeSolve: [
      'Interfaces that make routine tasks difficult to understand',
      'Inconsistent patterns across a growing product',
      'Features designed without validating the user workflow',
      'Design handoffs that leave important states undefined',
    ],
    capabilities: [
      'Product design',
      'Website UI',
      'Mobile app UI',
      'SaaS dashboards',
      'Wireframes',
      'Interactive prototypes',
      'Design systems',
      'User experience optimization',
    ],
    technologies: [
      {
        label: 'Design',
        items: ['Figma', 'FigJam', 'Interactive prototypes', 'Design systems'],
      },
      {
        label: 'Validation',
        items: ['User flows', 'Usability testing', 'Accessibility reviews'],
      },
      {
        label: 'Handoff',
        items: [
          'Component specifications',
          'Responsive states',
          'Developer collaboration',
        ],
      },
    ],
    idealFor: [
      'Teams defining a new digital product',
      'Products with usability or consistency problems',
      'Businesses redesigning an important customer journey',
      'Engineering teams that need implementation-ready design',
    ],
    benefits: [
      'Clearer workflows before engineering effort is committed',
      'Consistent interface patterns across the product',
      'Defined responsive, empty, loading, and error states',
      'A practical design system that supports future delivery',
    ],
    relatedServices: [
      'website-development',
      'web-application-development',
      'mobile-application-development',
    ],
    seo: {
      title: 'UI/UX Design | Arizonix',
      description:
        'UI and UX design for websites, mobile apps, SaaS products, dashboards, prototypes, design systems, and user experience improvements.',
    },
    cta: {
      title: 'Need a clearer product experience?',
      description:
        'We can map the user journey, identify friction, and turn the result into implementation-ready design.',
    },
  },
};

export const serviceDetails = Object.values(serviceDetailData);

export function getServiceDetail(slug: string): ServiceDetailData | null {
  return slug in serviceDetailData
    ? serviceDetailData[slug as ServiceSlug]
    : null;
}
