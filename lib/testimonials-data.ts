export type TestimonialColor = 'blue' | 'purple' | 'cyan';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  avatar: string | null;
  rating: number;
  quote: string;
  project: string;
  result: string;
  color: TestimonialColor;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'James Carter',
    role: 'VP of Sales',
    company: 'NovaTech Solutions',
    industry: 'Technology',
    avatar: null,
    rating: 5,
    quote:
      "Arizonix didn't just build us a CRM — they redesigned our entire sales operation. Lead response time dropped from hours to seconds. We closed 40% more deals in the first quarter after launch.",
    project: 'AI Sales Automation Platform',
    result: '40% increase in closed deals',
    color: 'blue',
  },
  {
    id: 't2',
    name: 'Dr. Sarah Patel',
    role: 'Clinical Director',
    company: 'MediCore Group',
    industry: 'Healthcare',
    avatar: null,
    rating: 5,
    quote:
      'We went from managing patient records in spreadsheets to a fully automated, HIPAA-compliant system in 10 weeks. Our staff now spends their time on patients, not paperwork. The ROI has been extraordinary.',
    project: 'Patient Management System',
    result: '60% reduction in admin time',
    color: 'cyan',
  },
  {
    id: 't3',
    name: 'Emma Rodriguez',
    role: 'CEO',
    company: 'BrightCart Retail',
    industry: 'E-commerce',
    avatar: null,
    rating: 5,
    quote:
      'Our old platform was costing us sales every single day. Arizonix rebuilt the entire storefront in 8 weeks and our conversion rate jumped 55%. Page load time went from 3 seconds to under 1 second. Phenomenal work.',
    project: 'High-Performance E-commerce Platform',
    result: '55% conversion rate improvement',
    color: 'purple',
  },
  {
    id: 't4',
    name: 'Michael Torres',
    role: 'Operations Director',
    company: 'BuildPro Group',
    industry: 'Construction',
    avatar: null,
    rating: 5,
    quote:
      'Managing 200+ construction sites with spreadsheets was a nightmare. The platform Arizonix built gave us real-time visibility across every project. We saved millions in the first year from prevented delays alone.',
    project: 'Field Operations Platform',
    result: '35% operational cost reduction',
    color: 'blue',
  },
  {
    id: 't5',
    name: 'Rachel Kim',
    role: 'Head of Product',
    company: 'FinVault',
    industry: 'Finance',
    avatar: null,
    rating: 5,
    quote:
      'We needed a fintech platform built to bank-grade security standards in an impossible timeline. Arizonix delivered everything on time, passed our security audit on the first attempt, and the code quality was exceptional.',
    project: 'Fintech Banking Platform',
    result: 'Passed security audit first attempt',
    color: 'cyan',
  },
  {
    id: 't6',
    name: 'David Osei',
    role: 'Founder & CEO',
    company: 'LogiTrack Africa',
    industry: 'Logistics',
    avatar: null,
    rating: 5,
    quote:
      "As a startup, we needed enterprise-quality software without enterprise prices. Arizonix gave us exactly that. Our logistics tracking platform now handles 10,000+ daily shipments. Couldn't have scaled without them.",
    project: 'Logistics Tracking Platform',
    result: '10,000+ daily shipments handled',
    color: 'purple',
  },
  {
    id: 't7',
    name: 'Priya Sharma',
    role: 'CTO',
    company: 'EduSpark',
    industry: 'Education',
    avatar: null,
    rating: 5,
    quote:
      'Arizonix built our entire learning management system from scratch — including AI-powered personalized learning paths. Student engagement increased 70% and our platform now serves 50,000 active learners monthly.',
    project: 'AI-Powered Learning Platform',
    result: '70% increase in student engagement',
    color: 'blue',
  },
  {
    id: 't8',
    name: 'Carlos Mendes',
    role: 'Digital Transformation Lead',
    company: 'Grupo Meridian',
    industry: 'Manufacturing',
    avatar: null,
    rating: 5,
    quote:
      'We had 15 disconnected legacy systems that no one could maintain. Arizonix unified everything into a single modern platform in 6 months. Our operational efficiency improved by 45% and our IT costs dropped significantly.',
    project: 'Enterprise System Modernization',
    result: '45% efficiency improvement',
    color: 'cyan',
  },
];
