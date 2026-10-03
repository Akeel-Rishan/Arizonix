import {
  MotionItem,
  MotionStagger,
} from '@/components/pages/about/about-motion';
import { TeamMemberCard } from '@/components/pages/about/team-member-card';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import type { TeamMemberDisplay } from '@/lib/about-types';
import { sanityImage } from '@/lib/sanity/image';
import type { SanityTeamMember } from '@/lib/sanity/types';
import { coreTeamMembers } from '@/lib/team';

function normalizeName(name: string) {
  return name.trim().toLocaleLowerCase();
}

export function TeamGrid({ teamMembers }: { teamMembers: SanityTeamMember[] }) {
  const cmsMembers: TeamMemberDisplay[] = teamMembers.map((member) => ({
    id: member._id,
    name: member.name,
    role: member.role,
    department: member.department,
    location: member.location,
    bio: member.bio,
    social: member.social,
    avatarUrl: member.photo
      ? sanityImage(member.photo, { width: 720, quality: 85 })
      : undefined,
  }));

  const coreNames = new Set(
    coreTeamMembers.map((member) => normalizeName(member.name)),
  );
  const members = [
    ...coreTeamMembers,
    ...cmsMembers.filter(
      (member) => !coreNames.has(normalizeName(member.name)),
    ),
  ];
  const leadership = members.filter(
    (member) => member.department === 'Leadership',
  );
  const team = members.filter((member) => member.department !== 'Leadership');

  return (
    <Section aria-labelledby="team-heading" id="team">
      <Container>
        <div id="team-heading">
          <SectionHeading
            description="Senior engineers, AI specialists, and designers focused on building thoughtful, reliable products for every client."
            eyebrow="THE TEAM"
            title={
              <>
                The People Behind{' '}
                <span className="text-gradient">Your Product</span>
              </>
            }
          />
        </div>

        <div className="mt-14">
          {leadership.length ? (
            <>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
                Leadership
              </p>
              <MotionStagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {leadership.map((member) => (
                  <MotionItem className="h-full" key={member.id}>
                    <TeamMemberCard featured member={member} />
                  </MotionItem>
                ))}
              </MotionStagger>
            </>
          ) : null}

          {leadership.length && team.length ? (
            <div className="my-8 border-t border-white/10" />
          ) : null}

          {team.length ? (
            <MotionStagger className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {team.map((member) => (
                <MotionItem className="h-full" key={member.id}>
                  <TeamMemberCard member={member} />
                </MotionItem>
              ))}
            </MotionStagger>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
