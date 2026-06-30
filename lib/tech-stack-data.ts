import {
  Atom,
  Blocks,
  BrainCircuit,
  Braces,
  Cloud,
  CloudCog,
  Container,
  Database,
  Network,
  PanelsTopLeft,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

export interface TechItem {
  icon: LucideIcon;
  name: string;
}

// Placeholder icons will be replaced with official technology brand SVG logos later.
export const techStack: readonly TechItem[] = [
  { name: 'React', icon: Atom },
  { name: 'Next.js', icon: PanelsTopLeft },
  { name: 'Flutter', icon: Smartphone },
  { name: 'Node.js', icon: Network },
  { name: 'TypeScript', icon: Braces },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Docker', icon: Container },
  { name: 'AWS', icon: CloudCog },
  { name: 'OpenAI', icon: BrainCircuit },
  { name: 'Claude', icon: Sparkles },
  { name: 'Supabase', icon: Blocks },
  { name: 'Cloudflare', icon: Cloud },
];
