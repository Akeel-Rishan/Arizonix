'use client';

import { ExternalLink, Github, Twitter } from 'lucide-react';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import type { TeamMemberDisplay } from '@/lib/about-types';
import { cn, getInitials } from '@/lib/utils';

const colorMap = {
  blue: { avatar: 'from-brand-blue to-brand-purple', role: 'text-brand-blue', glow: 'hover:shadow-glow-blue' },
  purple: { avatar: 'from-brand-purple to-brand-cyan', role: 'text-brand-purple', glow: 'hover:shadow-glow-purple' },
  cyan: { avatar: 'from-brand-cyan to-brand-blue', role: 'text-brand-cyan', glow: 'hover:shadow-glow-cyan' },
} as const;
const colors = ['blue', 'purple', 'cyan'] as const;

export function TeamMemberCard({ featured = false, member }: { featured?: boolean; member: TeamMemberDisplay }) {
  const color = colorMap[colors[member.name.charCodeAt(0) % colors.length]];
  const links = [{ href: member.social?.linkedin, label: 'LinkedIn', icon: ExternalLink }, { href: member.social?.github, label: 'GitHub', icon: Github }, { href: member.social?.twitter, label: 'Twitter/X', icon: Twitter }];
  return <article className={cn('glass-panel group h-full overflow-hidden rounded-xl2 transition duration-300 hover:-translate-y-1', color.glow)}><div className="relative aspect-[4/3] overflow-hidden bg-white/5">{member.avatarUrl ? <Image alt={`${member.name}, ${member.role} at Arizonix`} className="size-full object-cover transition duration-500 group-hover:scale-105" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" src={member.avatarUrl} /> : <div aria-hidden="true" className="flex size-full items-center justify-center"><span className={cn('flex size-28 items-center justify-center rounded-full bg-gradient-to-br text-3xl font-bold text-white shadow-xl transition duration-500 group-hover:scale-105', color.avatar)}>{getInitials(member.name)}</span></div>}<div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-950 to-transparent" /></div><div className="p-6"><h3 className="text-lg font-bold text-white">{member.name}</h3><p className={cn('mt-1 text-sm font-medium', color.role)}>{member.role}</p><Badge className="mt-2" variant="outline">{member.department}</Badge>{member.bio ? <p className={cn('mt-3 text-xs leading-6 text-slate-400', featured ? 'line-clamp-4' : 'line-clamp-3')}>{member.bio}</p> : null}<div className="mt-4 flex gap-3">{links.map(({ href, icon: Icon, label }) => href ? <a aria-label={`${member.name}'s ${label} profile`} className="glass-panel flex size-11 items-center justify-center !rounded-full text-slate-400 opacity-60 transition hover:text-white group-hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan" href={href} key={label} rel="noopener noreferrer" target="_blank"><Icon className="size-4" /></a> : null)}</div></div></article>;
}
