import { ProcurementProject } from "@/lib/types";

export const projectsData: ProcurementProject[] = [
  {
    id: "cognizant-sla-governance",
    slug: "cognizant-sla-governance",
    title: "Enterprise PR-to-PO SLA Optimization & Governance",
    company: "Cognizant",
    period: "Jan 2026 – Mar 2026",
    category: "PR-PO SLA",
    summary:
      "Instituted a high-velocity requisition validation workflow and supplier SLA tracking framework, compressing PO release turnaround and establishing 100% adherence to corporate procurement policies.",
    challenge:
      "High influx of purchase requisitions from diverse business units with recurring missing cost center allocations, leading to delayed vendor dispatch and extended approval cycle times.",
    solution:
      "Introduced a pre-validation checklist and automated audit rules in ERP for PR budget verification. Structured automated 48-hour SLA timers for vendor order confirmations and PO acknowledgement tracking.",
    impact: [
      "Cut average PR validation and PO dispatch time by 35%.",
      "Achieved 99.4% SLA adherence across all Tier-1 and Tier-2 supplier contracts.",
      "Zero budget discrepancy audit findings during quarterly compliance reviews.",
    ],
    tools: ["SAP MM", "Procurement ERP", "MS Excel Advanced", "SLA Dashboards"],
    kpis: [
      { label: "Turnaround SLA", value: "< 48 Hours" },
      { label: "Audit Accuracy", value: "100%" },
      { label: "PR Cycle Reduction", value: "35%" },
    ],
  },
  {
    id: "rax-tech-vendor-rationalization",
    slug: "rax-tech-vendor-rationalization",
    title: "Strategic Vendor Sourcing & Cost Optimization",
    company: "Rax Tech International",
    period: "May 2025 – Dec 2025",
    category: "Strategic Sourcing",
    summary:
      "Re-engineered the vendor database and initiated multi-supplier RFQ competitive benchmarking, securing double-digit cost reductions while consolidating delivery schedules.",
    challenge:
      "Legacy supplier dependency with fragmented pricing, fluctuating lead times, and lack of transparency on bulk volume discount brackets.",
    solution:
      "Executed a comprehensive RFQ matrix across 45+ domestic vendors, evaluated supplier reliability, quality scores, and financial stability, and renegotiated annual master service agreements (MSAs).",
    impact: [
      "Generated an overall 14.8% net procurement spend reduction across major line items.",
      "Consolidated supplier base by 20%, dramatically reducing administrative overhead.",
      "Introduced guaranteed 15-day buffer stock agreements with key suppliers.",
    ],
    tools: ["Strategic Sourcing", "RFQ Matrix", "Contract Negotiation", "Vendor Scorecards"],
    kpis: [
      { label: "Net Cost Savings", value: "14.8%" },
      { label: "Active Suppliers", value: "45+" },
      { label: "Lead Time Improvement", value: "25%" },
    ],
  },
  {
    id: "eubix-hardware-bom-sourcing",
    slug: "eubix-hardware-bom-sourcing",
    title: "Mission-Critical Electronics BOM & Component Sourcing",
    company: "Eubix Technologies Private Limited",
    period: "July 2023 – Sep 2024",
    category: "BOM Procurement",
    summary:
      "Managed the end-to-end procurement of electronic components, microchips, and passive parts for manufacturing lines, overcoming component obsolescence through engineering cross-referencing.",
    challenge:
      "Global supply chain shortages and lead-time spikes of up to 26 weeks for specific microcontroller units, threatening active PCB assembly and manufacturing production stops.",
    solution:
      "Collaborated closely with hardware engineering to evaluate pin-to-pin compatible alternate components, secured authorized distributor allocations, and expedited multimodal logistics.",
    impact: [
      "Prevented factory line stoppages with zero production downtime across four production quarters.",
      "Identified and qualified 15+ alternate component suppliers with compliant ISO standards.",
      "Optimized inbound freight logistics to shave 10 days off standard transit durations.",
    ],
    tools: ["BOM Management", "Electronics Component Sourcing", "Logistics Coordination", "Vendor Auditing"],
    kpis: [
      { label: "Factory Downtime", value: "0 Hours" },
      { label: "Alternate ICs Qualified", value: "15+" },
      { label: "BOM Fulfillment", value: "100%" },
    ],
  },
  {
    id: "sap-mm-inventory-controls",
    slug: "sap-mm-inventory-controls",
    title: "SAP MM Material Master & Inventory Controls Optimization",
    company: "Cross-Organizational Initiative",
    period: "2024 – 2026",
    category: "Inventory & ERP",
    summary:
      "Standardized SAP MM and ERP material masters, re-order points (ROP), and 3-way invoice reconciliation to balance liquidity with material availability.",
    challenge:
      "Improper stock level alerts in ERP causing intermittent shortages of high-turnover parts paired with dead capital locked in obsolete items.",
    solution:
      "Recalibrated Safety Stock parameters, economic order quantities (EOQ), and automated Goods Receipt (GR) vs Invoice Verification (IV) matching rules.",
    impact: [
      "Eliminated emergency spot-buys by 40%, preventing premium freight charges.",
      "Maintained 99.8% material availability for operational requirements.",
      "Streamlined invoice dispute resolution turnaround from 14 days to 3 days.",
    ],
    tools: ["SAP MM", "Procurement ERP", "Inventory Control", "3-Way Match"],
    kpis: [
      { label: "Spot-Buy Drop", value: "40%" },
      { label: "Availability", value: "99.8%" },
      { label: "Dispute Resolution", value: "3 Days" },
    ],
  },
];
