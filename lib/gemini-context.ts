import { profileData } from "@/lib/data/profile";
import { experienceData } from "@/lib/data/experience";
import { projectsData } from "@/lib/data/projects";
import { skillsData } from "@/lib/data/skills";
import { workflowSteps } from "@/lib/data/workflow";

export function getProcurementContext(): string {
  const profileSummary = `
Candidate Name: ${profileData.name}
Role Title: ${profileData.role}
Summary: ${profileData.summary}
Total Experience: ${profileData.yearsExperience}
Contact Email: ${profileData.email}
Phone: ${profileData.phone}
LinkedIn: ${profileData.linkedin}
Current Location: ${profileData.location}
Current Employment Status: Currently not working (Actively seeking opportunities)
Notice Period: Immediately Joinable (0 Days Notice)
Preferred Work Locations: Chennai, Bangalore, Coimbatore
Key Metrics:
${profileData.stats.map((s) => `- ${s.label}: ${s.value} (${s.subtext})`).join("\n")}
`;

  const experienceSummary = experienceData
    .map(
      (exp) => `
Organization: ${exp.company}
Role: ${exp.role}
Period: ${exp.period}
Location: ${exp.location}
Type: ${exp.type}
Key Responsibilities & Highlights:
${exp.highlights.map((h) => `• ${h}`).join("\n")}
Key Competencies / Skills: ${exp.skills.join(", ")}
${exp.metrics ? `Metrics: ${exp.metrics.map((m) => `${m.label}: ${m.value}`).join(" | ")}` : ""}
`
    )
    .join("\n---\n");

  const projectsSummary = projectsData
    .map(
      (p) => `
Project / Case Study: ${p.title}
Organization: ${p.company} (${p.period})
Category: ${p.category}
Summary: ${p.summary}
Challenge Faced: ${p.challenge}
Solution Implemented: ${p.solution}
Key Results & Impact:
${p.impact.map((imp) => `• ${imp}`).join("\n")}
Tools & Frameworks: ${p.tools.join(", ")}
KPIs: ${p.kpis.map((k) => `${k.label}: ${k.value}`).join(" | ")}
`
    )
    .join("\n---\n");

  const skillsSummary = skillsData
    .map(
      (cat) => `
Category: ${cat.category}
Description: ${cat.description}
Skills: ${cat.skills.map((s) => `${s.name} (${s.proficiency})`).join(", ")}
`
    )
    .join("\n");

  const workflowSummary = workflowSteps
    .map(
      (step) => `
Stage ${step.step}: ${step.title}
Subtitle: ${step.subtitle}
SLA Threshold: ${step.sla}
Tools: ${step.tools.join(", ")}
Key Actions: ${step.keyActions.join("; ")}
Deliverable: ${step.deliverable}
`
    )
    .join("\n");

  return `
You are the AI Procurement Copilot for ${profileData.name}.
Your job is to answer questions from recruiters, hiring managers, and prospective employers about Gowtham's procurement expertise, work history, achievements, and availability.

RULES & GUIDELINES:
1. Always base your answers strictly on the verified facts in Gowtham's portfolio and resume.
2. Never invent details, companies, metrics, or degrees not mentioned in this profile.
3. Be professional, direct, concise, and highlight metrics (such as the 48-hour PO acknowledgement SLA, budget compliance, cost savings, and SAP MM expertise).
4. If asked how to contact Gowtham, provide his email (${profileData.email}), phone (${profileData.phone}), and LinkedIn.
5. If asked about his notice period or availability, state that he is actively exploring opportunities and can discuss immediate or short notice transitions directly.
6. Use clean Markdown formatting with bullet points and bold emphasis when listing competencies.

=== CANDIDATE PROFILE ===
${profileSummary}

=== EXPERIENCE & EMPLOYMENT ===
${experienceSummary}

=== FEATURED PROCUREMENT PROJECTS ===
${projectsSummary}

=== SKILLS MATRIX ===
${skillsSummary}

=== 5-STAGE PROCUREMENT LIFECYCLE ===
${workflowSummary}
`;
}

export function generateLocalFallbackAnswer(query: string): string {
  const lower = query.toLowerCase();

  if (lower.includes("sap") || lower.includes("mm") || lower.includes("erp")) {
    return `**Gowtham's SAP MM & ERP Expertise:**
- **System Proficiency:** Hands-on experience with **SAP MM (Materials Management)** and enterprise Procurement ERPs across his roles at **Cognizant** and **Rax Tech International**.
- **Transactions & Operations:** Expert in Purchase Requisition verification (ME51N), official Purchase Order creation & release (ME21N), Goods Receipt tracking (MIGO), and 3-way invoice verification (MIRO).
- **Inventory Control:** Managed master material records, safety stock levels, and automated reorder points to prevent stockouts while preventing overstocking.
- **Audit & Compliance:** 100% adherence to procurement policies and corporate SLA benchmarks.`;
  }

  if (lower.includes("cognizant") || lower.includes("spe") || lower.includes("po") || lower.includes("pr") || lower.includes("sla")) {
    return `**Gowtham's Role as SPE Procurement at Cognizant (Jan 2026 – Mar 2026):**
- **PR Validation:** Reviewed and validated incoming Purchase Requisitions (PR) for budget compliance, proper accounting codes, and approval readiness.
- **PO Creation & Release:** Generated and released formal Purchase Orders (PO) in full alignment with corporate procurement governance and strict SLA guidelines.
- **Supplier SLA Management:** Coordinated with suppliers to ensure mandatory **PO acknowledgement and order confirmation within 2 business days (48 Hours)**.
- **End-to-End Execution:** Managed multi-supplier purchasing workflows, ensuring timely material readiness and 99.4% SLA adherence.`;
  }

  if (lower.includes("cost") || lower.includes("saving") || lower.includes("negotiat") || lower.includes("rax tech")) {
    return `**Gowtham's Cost Savings & Commercial Negotiation Experience:**
- At **Rax Tech International**, Gowtham negotiated unit pricing and delivery schedules across **45+ domestic suppliers**, delivering **12% to 18% measurable cost savings** across major line items.
- Developed strong vendor relationships and volume tier agreements, improving delivery timelines by 25%.
- Implemented competitive RFQ benchmarking against historical price trends before contract sign-off.
- Monitored real-time factory inventory to eliminate stockouts with zero production downtime.`;
  }

  if (lower.includes("hardware") || lower.includes("eubix") || lower.includes("electronic") || lower.includes("bom")) {
    return `**Gowtham's Hardware & Supply Chain Experience at Eubix Technologies (Jul 2023 – Sep 2024):**
- Spearheaded direct procurement of critical **electronic hardware components** (semiconductors, microcontrollers, passive components, PCBs) and engineering software tools.
- Managed **Bill of Materials (BOM)** sourcing for active hardware manufacturing lines.
- Mitigated component obsolescence by collaborating with engineers to qualify **15+ alternate ICs and pin-compatible parts**.
- Managed freight forwarding and transportation logistics to achieve 100% on-schedule production milestones.`;
  }

  if (lower.includes("education") || lower.includes("degree") || lower.includes("college") || lower.includes("school")) {
    return `**Gowtham's Education Credentials:**
- **Bachelor of Engineering (B.E.) in Electrical & Electronics Engineering (EEE)**:
  - *Institution:* M. Kumarasamy College of Engineering, Karur, Tamil Nadu (Aug 2019 – May 2023)
  - *CGPA:* 6.9
- **Higher Secondary Certificate (HSC - 12th)**:
  - *School:* Vetri Vikaas Matric Higher Secondary School, Rasipuram (2018 – 2019)
  - *Score:* 54.4%
- **Secondary School Leaving Certificate (SSLC - 10th)**:
  - *School:* Vetri Vikaas Matric Higher Secondary School (2016 – 2017)
  - *Score:* 81.0%`;
  }

  if (lower.includes("notice") || lower.includes("immediate") || lower.includes("join") || lower.includes("working") || lower.includes("availab") || lower.includes("bangalore") || lower.includes("coimbatore") || lower.includes("relocat")) {
    return `**Gowtham's Availability & Location Preferences:**
- **Current Employment Status:** Currently not working / actively seeking new opportunities.
- **Notice Period:** **Immediately Joinable (0 Days Notice)** — ready for instantaneous onboarding.
- **Preferred Work Locations:** **Chennai, Bangalore, Coimbatore** (Open to On-site, Hybrid, and Remote procurement/sourcing roles).
- **Relocation Readiness:** 100% ready to relocate to Bangalore or Coimbatore for suitable roles.
- **Target Roles:** SPE Procurement, Strategic Sourcing Specialist, Purchase Engineer, Supply Chain Specialist.`;
  }

  if (lower.includes("contact") || lower.includes("email") || lower.includes("phone") || lower.includes("reach") || lower.includes("hire") || lower.includes("linkedin")) {
    return `**How to Contact Gowtham Balamurugan:**
- **Email:** [gowthambalamurugan02@gmail.com](mailto:gowthambalamurugan02@gmail.com)
- **Phone:** [+91-6374844527](tel:+916374844527)
- **LinkedIn:** [linkedin.com/in/gowtham-balamurugan-283182234](https://www.linkedin.com/in/gowtham-balamurugan-283182234)
- **Current Status:** **Immediately Joinable** | Currently not working
- **Preferred Locations:** Chennai, Bangalore, Coimbatore`;
  }

  return `**Gowtham Balamurugan — SPE Procurement & Supply Chain Specialist**

With over **2.5+ years of experience** across **Cognizant**, **Rax Tech International**, and **Eubix Technologies**, Gowtham specializes in:
- **PR to PO Execution:** End-to-end requisition validation and 48-hour supplier acknowledgement SLA governance.
- **Enterprise ERP & SAP MM:** Materials management, purchasing master data, and 3-way invoice matching.
- **Strategic Sourcing & Negotiation:** Achieving double-digit cost reductions (12-18%) through competitive RFQs and vendor relationship management.
- **Electronics & Hardware Procurement:** Bill of Materials (BOM) sourcing, component obsolescence management, and manufacturing supply logistics.

Feel free to ask about his specific company experience, SAP MM workflows, negotiation track record, or education!`;
}
