export interface FAQLink {
  phrase: string;
  href: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  links?: FAQLink[];
}

export interface FAQCategory {
  id: string;
  label: string;
  items: FAQItem[];
}

export const faqData: FAQCategory[] = [
  {
    id: 'working-with-us',
    label: 'Working With Us',
    items: [
      {
        id: 'getting-started',
        category: 'Working With Us',
        question: 'How do we get started with Arizonix?',
        answer:
          "Getting started is simple. Book a free 30-minute consultation call through our website — no commitment required. We'll discuss your project goals, technical requirements, and timeline. Within 48 hours, you'll receive a detailed proposal including scope, architecture recommendations, timeline, and transparent pricing. Most projects kick off within 1–2 weeks of proposal approval.",
        links: [
          {
            phrase: 'Book a free 30-minute consultation call',
            href: '/contact',
          },
        ],
      },
      {
        id: 'company-size',
        category: 'Working With Us',
        question: 'Do you work with startups or only enterprise companies?',
        answer:
          "We work with both — from early-stage startups building their first product to established enterprises modernizing legacy systems. What matters to us is your ambition, not your company size. We've built MVPs in 6 weeks and enterprise platforms that took 18 months. Our engagement model scales to fit your stage.",
      },
      {
        id: 'engineer-access',
        category: 'Working With Us',
        question:
          'Will we have direct access to the engineers working on our project?',
        answer:
          "Yes — always. You'll have direct Slack/Teams access to your dedicated engineering team, not just a project manager. You'll receive weekly progress reports, attend sprint reviews, and have full visibility into the codebase via GitHub. We believe in radical transparency — no black-box development.",
      },
      {
        id: 'after-launch',
        category: 'Working With Us',
        question: 'What happens after the project launches?',
        answer:
          'Launch is the beginning, not the end. Every project includes a 30-day post-launch support period at no extra cost. Beyond that, we offer structured retainer packages covering monitoring, bug fixes, performance optimization, and ongoing feature development. Many clients have been with us for 3+ years after their initial project.',
        links: [{ phrase: 'structured retainer packages', href: '/contact' }],
      },
    ],
  },
  {
    id: 'project-timeline',
    label: 'Project & Timeline',
    items: [
      {
        id: 'project-duration',
        category: 'Project & Timeline',
        question: 'How long does it typically take to build a project?',
        answer:
          "Timelines depend on scope and complexity. A focused MVP or marketing website typically takes 4–8 weeks. A full-featured web or mobile application takes 8–16 weeks. Enterprise-grade systems or AI automation platforms typically take 3–6 months. After our discovery session, you'll receive a detailed week-by-week project timeline before any work begins.",
        links: [{ phrase: 'discovery session', href: '/contact' }],
      },
      {
        id: 'project-management',
        category: 'Project & Timeline',
        question: 'How do you handle project management and communication?',
        answer:
          "We use agile sprint methodology with 2-week delivery cycles. Every sprint includes planning, execution, QA, and a review session with your team. You'll have access to our project management board (Linear or Jira), a shared Slack channel, and weekly video check-ins. You're never left wondering what's happening with your project.",
      },
      {
        id: 'changing-requirements',
        category: 'Project & Timeline',
        question: 'What if requirements change mid-project?',
        answer:
          'Scope changes are a reality of software development — we embrace them rather than penalize them. Minor adjustments are absorbed within the sprint. Significant scope changes are scoped, estimated, and approved before implementation. We use a transparent change request process so there are never surprise costs or timeline impacts.',
      },
      {
        id: 'nda-ip',
        category: 'Project & Timeline',
        question: 'Do you sign NDAs and protect our intellectual property?',
        answer:
          'Absolutely. We sign NDAs before any detailed project discussion. Upon project completion and final payment, you receive 100% ownership of all source code, designs, documentation, and intellectual property. We retain no rights to your product. Your IP is yours — completely and unconditionally.',
      },
    ],
  },
  {
    id: 'technology-quality',
    label: 'Technology & Quality',
    items: [
      {
        id: 'technologies',
        category: 'Technology & Quality',
        question: 'What technologies do you specialize in?',
        answer:
          'Our core stack includes Next.js, React, React Native, Flutter, Node.js, NestJS, PostgreSQL, Supabase, and AWS/Cloudflare for infrastructure. For AI projects, we work with OpenAI, Anthropic Claude, LangChain, and custom ML pipelines. We deliberately stay current — our engineers are continuously trained on emerging technologies. We recommend the right tool for your specific problem, not just whatever we know best.',
      },
      {
        id: 'code-quality',
        category: 'Technology & Quality',
        question:
          'How do you ensure the code quality is maintainable long-term?',
        answer:
          'Every project follows strict engineering standards: TypeScript for type safety, comprehensive test coverage (unit, integration, and E2E tests), automated CI/CD pipelines, detailed code documentation, and mandatory peer code reviews. We deliver clean, well-structured codebases that your internal team or any future engineer can understand and extend without difficulty.',
      },
      {
        id: 'integrations',
        category: 'Technology & Quality',
        question:
          'Can you integrate with our existing systems and third-party tools?',
        answer:
          "Yes — systems integration is one of our core competencies. We regularly integrate with CRMs (Salesforce, HubSpot), payment gateways (Stripe, PayPal), communication platforms (Twilio, SendGrid), ERPs, analytics tools, and virtually any system with an API. If your existing tools matter to your business, we'll make them work seamlessly with your new platform.",
      },
      {
        id: 'standards',
        category: 'Technology & Quality',
        question: 'What performance and security standards do you target?',
        answer:
          "We target 95+ Lighthouse performance scores, WCAG 2.1 AA accessibility compliance, and OWASP Top 10 security standards on every project. This means fast load times, excellent Core Web Vitals, keyboard-accessible interfaces, secure authentication flows, encrypted data handling, and protection against the most common vulnerabilities. These aren't optional — they're built into our development process.",
      },
    ],
  },
  {
    id: 'pricing-commercial',
    label: 'Pricing & Commercial',
    items: [
      {
        id: 'pricing-structure',
        category: 'Pricing & Commercial',
        question: 'How is pricing structured?',
        answer:
          "We offer two engagement models: fixed-price projects (ideal for well-defined scope with predictable budgets) and time-and-materials retainers (ideal for ongoing development, scaling teams, or evolving requirements). All pricing is transparent — no hidden fees, no surprise invoices. You'll receive a detailed cost breakdown before any commitment.",
      },
      {
        id: 'investment-range',
        category: 'Pricing & Commercial',
        question: 'What is the typical investment range for a project?',
        answer:
          'Project investments vary significantly based on scope and complexity. A focused MVP typically starts from $15,000–$40,000. A full-featured web or mobile application ranges from $40,000–$120,000. Enterprise systems and AI platforms are scoped individually based on requirements. We focus on ROI — most clients see their investment returned within 6–12 months of launch.',
        links: [{ phrase: 'scoped individually', href: '/contact' }],
      },
      {
        id: 'payment-schedule',
        category: 'Pricing & Commercial',
        question: 'Do you require full payment upfront?',
        answer:
          'No. We use milestone-based payment schedules tied to project phases: typically 30% to begin, 40% at development milestone, and 30% on final delivery. For larger projects, we structure more granular payment milestones. This aligns our incentives with yours — you pay as we deliver, not before.',
      },
      {
        id: 'retainers',
        category: 'Pricing & Commercial',
        question: 'Do you offer retainer or ongoing support packages?',
        answer:
          'Yes. After project delivery, we offer monthly retainer packages ranging from light-touch monitoring and bug fixing to full dedicated engineering team extensions. Retainer clients get priority support response times, a dedicated Slack channel, monthly performance reports, and proactive recommendations for product improvements. Many of our best client relationships started as a single project and evolved into long-term partnerships.',
        links: [{ phrase: 'monthly retainer packages', href: '/contact' }],
      },
    ],
  },
];
