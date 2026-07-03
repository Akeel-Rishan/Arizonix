export interface TeamMemberDisplay {
  id: string;
  name: string;
  role: string;
  department: string;
  bio?: string;
  avatarUrl?: string;
  social?: { linkedin?: string; github?: string; twitter?: string };
}
