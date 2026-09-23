export interface Profile {
  name: string;
  initials: string;
  role: string;
  tagline: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  profileImage: string;
  availability: string;
  noticePeriod: string;
  preferredLocations: string[];
  yearsExperience: string;
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  type: "employment" | "education";
  highlights: string[];
  skills: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface ProcurementProject {
  id: string;
  slug: string;
  title: string;
  company: string;
  period: string;
  category: "Strategic Sourcing" | "PR-PO SLA" | "BOM Procurement" | "Inventory & ERP";
  summary: string;
  challenge: string;
  solution: string;
  impact: string[];
  tools: string[];
  kpis: {
    label: string;
    value: string;
  }[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    proficiency: "Expert" | "Advanced" | "Skilled";
    highlight?: boolean;
  }[];
}

export interface ProcurementWorkflowStep {
  step: number;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  sla: string;
  tools: string[];
  keyActions: string[];
  deliverable: string;
  color: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp?: string;
}
