'use client';

import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { motion } from '@/lib/framer-motion';
import { getIcon } from '@/lib/icon-map';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { cn } from '@/lib/utils';
type Color = 'blue' | 'cyan' | 'purple';
interface TechGroup {
  category: string;
  color: Color;
  icon: string;
  tools: { description: string; name: string }[];
}
const groups: TechGroup[] = [
  {
    category: 'Large Language Models',
    color: 'blue',
    icon: 'Brain',
    tools: [
      ['OpenAI GPT-4o', 'Reasoning and generation'],
      ['Anthropic Claude', 'Long-context analysis and safety'],
      ['Google Gemini', 'Multimodal understanding'],
      ['Llama 3', 'On-premise deployments'],
    ].map(([name, description]) => ({ name, description })),
  },
  {
    category: 'AI Frameworks',
    color: 'purple',
    icon: 'Code2',
    tools: [
      ['LangChain', 'LLM application orchestration'],
      ['LlamaIndex', 'Data framework for LLM apps'],
      ['CrewAI', 'Multi-agent systems'],
      ['AutoGen', 'Conversational AI agents'],
    ].map(([name, description]) => ({ name, description })),
  },
  {
    category: 'Vector Databases',
    color: 'cyan',
    icon: 'Database',
    tools: [
      ['Pinecone', 'High-scale vector search'],
      ['pgvector', 'PostgreSQL vector extension'],
      ['Weaviate', 'Semantic search at scale'],
      ['Chroma', 'Open-source embedding store'],
    ].map(([name, description]) => ({ name, description })),
  },
  {
    category: 'ML & Data',
    color: 'blue',
    icon: 'TrendingUp',
    tools: [
      ['Python / FastAPI', 'AI backend services'],
      ['scikit-learn', 'Classical ML models'],
      ['Hugging Face', 'Open-source model hub'],
      ['Apache Kafka', 'Real-time data streaming'],
    ].map(([name, description]) => ({ name, description })),
  },
  {
    category: 'AI Infrastructure',
    color: 'purple',
    icon: 'Cloud',
    tools: [
      ['AWS Bedrock', 'Managed AI/ML services'],
      ['Vercel AI SDK', 'Full-stack AI integration'],
      ['Docker / Kubernetes', 'Workload orchestration'],
      ['Supabase pgvector', 'Postgres-native vectors'],
    ].map(([name, description]) => ({ name, description })),
  },
];
const colorMap: Record<
  Color,
  { border: string; bg: string; text: string; dot: string }
> = {
  blue: {
    border: 'hover:border-brand-blue/50 hover:shadow-glow-blue',
    bg: 'bg-brand-blue/10',
    text: 'text-brand-blue',
    dot: 'bg-brand-blue',
  },
  purple: {
    border: 'hover:border-brand-purple/50 hover:shadow-glow-purple',
    bg: 'bg-brand-purple/10',
    text: 'text-brand-purple',
    dot: 'bg-brand-purple',
  },
  cyan: {
    border: 'hover:border-brand-cyan/50 hover:shadow-glow-cyan',
    bg: 'bg-brand-cyan/10',
    text: 'text-brand-cyan',
    dot: 'bg-brand-cyan',
  },
};
export function AITechStack() {
  return (
    <Section id="tech-stack" variant="aurora">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="OUR AI STACK"
          title={
            <>
              The Technology Behind Our{' '}
              <span className="text-gradient">AI Solutions</span>
            </>
          }
          description="We choose the best model, framework, and infrastructure for your specific use case."
        />
        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-6"
          initial="hidden"
          variants={staggerContainer}
          viewport={{ once: true }}
          whileInView="visible"
        >
          {groups.map((group, index) => {
            const Icon = getIcon(group.icon),
              colors = colorMap[group.color];
            return (
              <motion.article
                className={cn(
                  'glass-panel rounded-xl2 p-6 transition duration-300 hover:-translate-y-2 lg:col-span-2',
                  index === 3 && 'lg:col-start-2',
                  colors.border,
                )}
                key={group.category}
                variants={fadeInUp}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      'flex size-10 items-center justify-center rounded-lg',
                      colors.bg,
                    )}
                  >
                    <Icon className={cn('size-5', colors.text)} />
                  </span>
                  <h3 className="font-semibold text-white">{group.category}</h3>
                </div>
                <ul className="mt-5 space-y-4">
                  {group.tools.map((tool) => (
                    <li className="flex gap-3" key={tool.name}>
                      <span
                        className={cn(
                          'mt-2 size-1.5 shrink-0 rounded-full',
                          colors.dot,
                        )}
                      />
                      <span>
                        <strong className="block text-sm font-medium text-white">
                          {tool.name}
                        </strong>
                        <span className="text-xs text-slate-500">
                          {tool.description}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
