export interface TeamMemberDisplay {
  id: string;
  name: string;
  role: string;
  department: string;
  location?: string;
  bio?: string;
  avatarUrl?: string;
  imagePosition?: string;
  social?: { linkedin?: string; github?: string; twitter?: string };
}
