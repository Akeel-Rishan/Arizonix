'use client';

import { TrendingUp } from 'lucide-react';
import { memo } from 'react';
import { useState } from 'react';

import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { AnimatePresence, motion } from '@/lib/framer-motion';
import { getIcon } from '@/lib/icon-map';
import { cn } from '@/lib/utils';

interface UseCase {
  aiSolution: string;
  problem: string;
  result: string;
  title: string;
}
interface IndustryCases {
  icon: string;
  industry: string;
  useCases: UseCase[];
}
const cases: IndustryCases[] = [
  {
    industry: 'Healthcare',
    icon: 'Heart',
    useCases: [
      {
        title: 'Patient Triage Automation',
        problem: 'Nurses spend 40% of time on administrative triage.',
        aiSolution: 'AI pre-screens patients, scores urgency, and routes care.',
        result: '60% reduction in admin triage time',
      },
      {
        title: 'Appointment Reminders',
        problem: 'A 20% no-show rate costs clinics thousands weekly.',
        aiSolution:
          'Personalized reminders adapt channel and timing to each patient.',
        result: '65% reduction in no-shows',
      },
      {
        title: 'Medical Record Processing',
        problem: 'Manual clinical-note extraction takes hours per patient.',
        aiSolution:
          'NLP converts unstructured notes into validated structured data.',
        result: '90% faster record processing',
      },
    ],
  },
  {
    industry: 'Finance',
    icon: 'DollarSign',
    useCases: [
      {
        title: 'Fraud Detection',
        problem:
          'Rule-based systems miss attacks and generate false positives.',
        aiSolution: 'ML detects transaction anomalies in real time.',
        result: '85% reduction in fraud losses',
      },
      {
        title: 'Credit Underwriting',
        problem: 'Manual assessments take 3–5 days.',
        aiSolution:
          'Alternative data and behavioral signals improve risk scoring.',
        result: '60% faster, 15% more accurate',
      },
      {
        title: 'Regulatory Reporting',
        problem: 'Quarterly reports consume two weeks of team time.',
        aiSolution: 'Connected data is aggregated and reported automatically.',
        result: 'Reports completed in 4 hours',
      },
    ],
  },
  {
    industry: 'Retail',
    icon: 'ShoppingBag',
    useCases: [
      {
        title: 'Demand Forecasting',
        problem: 'Static forecasts cause overstock and stockouts.',
        aiSolution:
          'Models combine sales, seasonality, weather, and campaigns.',
        result: '30% lower inventory waste',
      },
      {
        title: 'Personalized Merchandising',
        problem: 'Generic storefronts underperform for repeat buyers.',
        aiSolution: 'Real-time recommendations tailor every session.',
        result: '22% higher basket value',
      },
      {
        title: 'Returns Automation',
        problem: 'Manual return reviews delay refunds.',
        aiSolution: 'AI validates eligibility and flags fraud automatically.',
        result: '75% faster resolutions',
      },
    ],
  },
  {
    industry: 'Logistics',
    icon: 'Truck',
    useCases: [
      {
        title: 'Route Optimization',
        problem: 'Fixed routes waste fuel and delivery capacity.',
        aiSolution: 'AI replans routes from live traffic and load constraints.',
        result: '18% lower delivery cost',
      },
      {
        title: 'Shipment Exception AI',
        problem: 'Teams discover delays after customers do.',
        aiSolution: 'Predictive alerts identify at-risk shipments early.',
        result: '70% fewer surprise delays',
      },
      {
        title: 'Document Automation',
        problem: 'Freight documents require repetitive entry.',
        aiSolution: 'Document AI validates bills and customs forms.',
        result: '90% less data entry',
      },
    ],
  },
  {
    industry: 'Manufacturing',
    icon: 'Factory',
    useCases: [
      {
        title: 'Predictive Maintenance',
        problem: 'Unplanned downtime disrupts production.',
        aiSolution: 'Sensor models predict failures before breakdown.',
        result: '35% less unplanned downtime',
      },
      {
        title: 'Visual Quality Control',
        problem: 'Manual inspection misses subtle defects.',
        aiSolution: 'Computer vision inspects every unit in real time.',
        result: '99% defect detection accuracy',
      },
      {
        title: 'Production Scheduling',
        problem: 'Static schedules cannot absorb disruption.',
        aiSolution: 'AI dynamically balances orders, labor, and machines.',
        result: '20% more throughput',
      },
    ],
  },
  {
    industry: 'Professional Services',
    icon: 'Briefcase',
    useCases: [
      {
        title: 'Proposal Generation',
        problem: 'Senior staff spend days assembling proposals.',
        aiSolution: 'AI drafts tailored proposals from approved knowledge.',
        result: '80% faster proposal turnaround',
      },
      {
        title: 'Knowledge Search',
        problem: 'Expert knowledge is scattered across documents.',
        aiSolution: 'RAG provides sourced answers across firm content.',
        result: '10x faster research',
      },
      {
        title: 'Time & Billing Review',
        problem: 'Manual review delays invoices and leaks revenue.',
        aiSolution: 'AI classifies time entries and flags anomalies.',
        result: '12% more billable revenue captured',
      },
    ],
  },
];

const UseCaseCard = memo(function UseCaseCard({ item }: { item: UseCase }) {
  return (
    <article className="glass-panel rounded-xl2 p-6">
      <h3 className="font-bold text-white">{item.title}</h3>
      <p className="mt-5 text-xs font-semibold uppercase text-red-400">
        Problem
      </p>
      <p className="mt-1 text-sm leading-6 text-slate-400">{item.problem}</p>
      <p className="mt-4 text-xs font-semibold uppercase text-brand-cyan">
        AI Solution
      </p>
      <p className="mt-1 text-sm leading-6 text-slate-300">
        {item.aiSolution}
      </p>
      <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-400">
        <TrendingUp className="size-4" />
        {item.result}
      </p>
    </article>
  );
});

export function AIUseCasesTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = cases[activeIndex];
  return (
    <Section id="use-cases">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="USE CASES"
          title={
            <>
              AI Automation Across{' '}
              <span className="text-gradient">Every Industry</span>
            </>
          }
          description="Explore how AI automation solves specific, expensive operational problems."
        />
        <div
          aria-label="AI automation industry use cases"
          className="mt-10 flex gap-2 overflow-x-auto pb-3"
          role="tablist"
        >
          {cases.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <button
                aria-selected={index === activeIndex}
                className={cn(
                  'glass-panel flex min-h-11 shrink-0 items-center gap-2 rounded-full px-4 text-sm text-slate-300 focus-visible:ring-2 focus-visible:ring-brand-cyan',
                  index === activeIndex && 'gradient-border text-white',
                )}
                key={item.industry}
                onClick={() => setActiveIndex(index)}
                role="tab"
                type="button"
              >
                <Icon className="size-4" />
                {item.industry}
              </button>
            );
          })}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 grid gap-6 md:grid-cols-3"
            exit={{ opacity: 0, y: 8 }}
            initial={{ opacity: 0, y: 8 }}
            key={active.industry}
            role="tabpanel"
          >
            {active.useCases.map((item) => (
              <UseCaseCard item={item} key={item.title} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
