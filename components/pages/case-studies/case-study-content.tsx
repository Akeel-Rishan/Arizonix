import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { portableTextComponents } from '@/lib/sanity/portable-text-components';
export function CaseStudyContent({ content }: { content?: PortableTextBlock[] }) { return <Section className="py-16"><Container><div className="cms-prose mx-auto max-w-3xl">{content?.length ? <PortableText components={portableTextComponents} value={content} /> : <p className="text-center italic text-slate-400">Full case study content is coming soon.</p>}</div></Container></Section>; }
