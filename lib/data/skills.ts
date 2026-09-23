import { SkillCategory } from "@/lib/types";

export const skillsData: SkillCategory[] = [
  {
    category: "Procurement & Strategic Sourcing",
    description: "Core purchasing lifecycle, vendor management, SLA governance, and commercial negotiations.",
    skills: [
      { name: "Supply Chain Management", proficiency: "Expert", highlight: true },
      { name: "Strategic Sourcing", proficiency: "Expert", highlight: true },
      { name: "Vendor Evaluation & SRM", proficiency: "Expert", highlight: true },
      { name: "Cost Analysis & Negotiation", proficiency: "Expert", highlight: true },
      { name: "Inventory Management & MRP", proficiency: "Advanced", highlight: true },
      { name: "RFQ & RFP Management", proficiency: "Expert", highlight: true },
      { name: "PR to PO Lifecycle Execution", proficiency: "Expert", highlight: true },
      { name: "Contract Compliance & Terms", proficiency: "Advanced" },
      { name: "SLA Monitoring & Governance", proficiency: "Expert" },
      { name: "3-Way Invoice Matching", proficiency: "Advanced" },
    ],
  },
  {
    category: "Enterprise Software & ERP",
    description: "Enterprise resource planning, material management systems, and advanced analytical tools.",
    skills: [
      { name: "SAP MM (Materials Management)", proficiency: "Expert", highlight: true },
      { name: "Procurement ERP Platforms", proficiency: "Expert", highlight: true },
      { name: "Advanced Microsoft Excel", proficiency: "Expert", highlight: true },
      { name: "VLOOKUP / XLOOKUP & Pivot Tables", proficiency: "Expert" },
      { name: "Microsoft PowerPoint", proficiency: "Advanced" },
      { name: "Spend Data Modeling", proficiency: "Advanced" },
      { name: "PO Tracking & Workflow Systems", proficiency: "Advanced" },
    ],
  },
  {
    category: "Engineering & Hardware Domain",
    description: "Technical understanding of electronics manufacturing, BOM analysis, and component sourcing.",
    skills: [
      { name: "Electronic Hardware Procurement", proficiency: "Advanced", highlight: true },
      { name: "Bill of Materials (BOM) Sourcing", proficiency: "Expert", highlight: true },
      { name: "Component Cross-Referencing", proficiency: "Advanced" },
      { name: "Manufacturing Supply Lines", proficiency: "Advanced" },
      { name: "Freight & Logistics Coordination", proficiency: "Advanced" },
      { name: "Quality & ISO Standard Adherence", proficiency: "Advanced" },
    ],
  },
  {
    category: "Professional & Communication",
    description: "Cross-functional stakeholder coordination and multi-lingual fluency.",
    skills: [
      { name: "Cross-Functional Collaboration", proficiency: "Expert" },
      { name: "Vendor Conflict Resolution", proficiency: "Advanced" },
      { name: "Analytical Problem Solving", proficiency: "Expert" },
      { name: "Time & Lead-Time Management", proficiency: "Expert" },
      { name: "English (Professional Working)", proficiency: "Expert" },
      { name: "Tamil (Native / Bilingual)", proficiency: "Expert" },
    ],
  },
];
