import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { portableTextComponents } from '@/lib/sanity/portable-text-components';
export function ServiceDetailContent({ content, serviceName }: { content?: PortableTextBlock[]; serviceName: string }) { return <Section className="py-12 md:py-16"><Container><div className="cms-prose mx-auto max-w-4xl">{content?.length ? <PortableText components={portableTextComponents} value={content} /> : <div className="glass-panel rounded-xl2 p-8 text-center"><p>Detailed content for {serviceName} is coming soon. In the meantime, contact us to learn more about how we approach this service.</p><Button className="mt-5" href="/contact" variant="outline">Contact Us</Button></div>}</div></Container></Section>; }
