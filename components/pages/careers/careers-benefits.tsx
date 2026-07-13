'use client';
import {
  Clock,
  Coffee,
  DollarSign,
  Globe,
  Heart,
  Laptop,
  Shield,
  Star,
  TrendingUp,
  Umbrella,
  Users,
  Zap,
} from 'lucide-react';

import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { motion } from '@/lib/framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion';
const benefits = [
  [
    DollarSign,
    'Competitive Compensation',
    'Global market-rate salaries reviewed annually.',
  ],
  [Globe, '100% Remote', 'Work from anywhere, with no relocation required.'],
  [
    Clock,
    'Flexible Hours',
    'Manage your schedule around your productive hours.',
  ],
  [
    TrendingUp,
    '$2,000 Learning Budget',
    'Courses, conferences, books, and development.',
  ],
  [Heart, 'Health Coverage', 'Comprehensive coverage for you and your family.'],
  [
    Laptop,
    'Equipment Stipend',
    '$1,500 home-office setup and regular upgrades.',
  ],
  [Umbrella, 'Generous PTO', '25 paid days plus local public holidays.'],
  [Users, 'Annual Team Retreat', 'Meet, work, bond, and recharge together.'],
  [
    Zap,
    'Fast Career Growth',
    'Visible impact without corporate org-chart limits.',
  ],
  [Shield, 'Equity Options', 'Long-term alignment with company success.'],
  [Coffee, 'Co-working Stipend', '$200 monthly for a workspace outside home.'],
  [
    Star,
    'Performance Bonuses',
    'Quarterly bonuses tied to meaningful milestones.',
  ],
] as const;
export function CareersBenefits() {
  return (
    <Section id="benefits" variant="aurora">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="BENEFITS & PERKS"
          title={
            <>
              What We Offer <span className="text-gradient">Our Team</span>
            </>
          }
          description="A package built for senior engineers who want to do great work, grow, and be rewarded fairly."
        />
        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          variants={staggerContainer}
          viewport={{ once: true }}
          whileInView="visible"
        >
          {benefits.map(([Icon, title, description], index) => (
            <motion.article
              className="glass-panel rounded-xl2 p-6 transition hover:-translate-y-1 hover:border-brand-cyan/40"
              key={title}
              variants={fadeInUp}
            >
              <span
                className={`flex size-11 items-center justify-center rounded-lg ${index % 3 === 0 ? 'bg-brand-blue/10 text-brand-blue' : index % 3 === 1 ? 'bg-brand-purple/10 text-brand-purple' : 'bg-brand-cyan/10 text-brand-cyan'}`}
              >
                <Icon className="size-5" />
              </span>
              <h3 className="mt-4 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
