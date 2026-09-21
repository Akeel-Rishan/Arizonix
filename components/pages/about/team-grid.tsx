import { MotionItem, MotionStagger } from '@/components/pages/about/about-motion';
import { TeamMemberCard } from '@/components/pages/about/team-member-card';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { Skeleton } from '@/components/ui/skeleton';
import type { TeamMemberDisplay } from '@/lib/about-types';
import { sanityImage } from '@/lib/sanity/image';
import type { SanityTeamMember } from '@/lib/sanity/types';

export function TeamGrid({ teamMembers }: { teamMembers: SanityTeamMember[] }) {
  const members: TeamMemberDisplay[] = teamMembers.map((member) => ({ id: member._id, name: member.name, role: member.role, department: member.department, bio: member.bio, social: member.social, avatarUrl: member.photo ? sanityImage(member.photo, { width: 720, quality: 85 }) : undefined }));
  const leadership = members.filter((member) => member.department === 'Leadership');
  const team = members.filter((member) => member.department !== 'Leadership');
  return <Section aria-labelledby="team-heading" id="team"><Container><div id="team-heading"><SectionHeading description="Senior engineers, AI specialists, and designers who bring decades of combined experience to every project we take on." eyebrow="THE TEAM" title={<>The People Behind <span className="text-gradient">Your Product</span></>} /></div>{members.length === 0 ? <><div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{Array.from({ length: 6 }, (_, index) => <Skeleton className="aspect-[3/4] rounded-xl2" key={index} />)}</div><p className="mt-6 text-center text-sm text-slate-400">Team profiles coming soon</p></> : <div className="mt-14">{leadership.length ? <><p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">Leadership</p><MotionStagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{leadership.map((member) => <MotionItem className="h-full" key={member.id}><TeamMemberCard featured member={member} /></MotionItem>)}</MotionStagger><div className="my-8 border-t border-white/10" /></> : null}{team.length ? <MotionStagger className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">{team.map((member) => <MotionItem className="h-full" key={member.id}><TeamMemberCard member={member} /></MotionItem>)}</MotionStagger> : null}</div>}</Container></Section>;
}
