import { ProcurementWorkflowStep } from "@/lib/types";

export const workflowSteps: ProcurementWorkflowStep[] = [
  {
    step: 1,
    id: "pr-validation",
    title: "PR Validation & Budget Compliance",
    subtitle: "Demand review, account codes, and authorization check",
    description:
      "Every purchase requisition (PR) is systematically evaluated against approved budget line items, correct cost centers, and delegation of financial power (DoA) matrices before commit.",
    sla: "< 4 Hours",
    tools: ["Procurement ERP", "SAP MM (ME51N)", "MS Excel"],
    keyActions: [
      "Verify technical specifications and quantity requirement justifications",
      "Check current department budget allocations and general ledger codes",
      "Validate authorized manager sign-offs to prevent unauthorized requisitions",
      "Flag duplicate or redundant purchase demands across business units",
    ],
    deliverable: "Audit-compliant, approved Purchase Requisition ready for sourcing",
    color: "#2563eb",
  },
  {
    step: 2,
    id: "sourcing-rfq",
    title: "Strategic Sourcing & RFQ Execution",
    subtitle: "Vendor identification, price benchmarking, and quotes",
    description:
      "Issuing formal Requests for Quotation (RFQ) to vetted vendors from the master supplier registry. Benchmarking historical unit costs against prevailing market prices.",
    sla: "< 24 Hours",
    tools: ["Vendor Portal", "RFQ Matrix", "Spend Analytics"],
    keyActions: [
      "Select minimum 3 qualified suppliers matching ISO and delivery criteria",
      "Dispatch comprehensive RFQ with technical specs and incoterms",
      "Build comparative price & lead-time evaluation matrix",
      "Assess supplier capacity, quality track record, and financial reliability",
    ],
    deliverable: "Comprehensive Supplier Bid Evaluation & Recommendation Matrix",
    color: "#0284c7",
  },
  {
    step: 3,
    id: "negotiation-po",
    title: "Commercial Negotiation & PO Release",
    subtitle: "Price bargaining, terms agreement, and official PO creation",
    description:
      "Conducting tactical negotiations on unit pricing, volume rebates, warranty duration, and credit payment terms. Generating and releasing the legal Purchase Order (PO).",
    sla: "< 8 Hours",
    tools: ["SAP MM (ME21N)", "Contract Repository", "ERP Workflows"],
    keyActions: [
      "Negotiate tiered volume pricing and payment terms (Net 30/60 days)",
      "Secure agreed liquidated damage clauses for delivery delays",
      "Generate official PO with legally binding terms and delivery milestones",
      "Execute digital approval routing through enterprise ERP hierarchy",
    ],
    deliverable: "Legally binding Purchase Order dispatched to winning vendor",
    color: "#059669",
  },
  {
    step: 4,
    id: "supplier-sla",
    title: "Supplier SLA & PO Acknowledgement",
    subtitle: "Mandatory 48-hour order confirmation and manufacturing lock-in",
    description:
      "Enforcing strict supplier adherence to contractual Service Level Agreements (SLAs). Securing formal written order confirmation, part allocation, and shipping schedule.",
    sla: "< 48 Hours",
    tools: ["SLA Tracker", "Supplier Relationship Management (SRM)", "Email"],
    keyActions: [
      "Liaise with supplier sales and logistics coordinators immediately upon dispatch",
      "Secure formal PO acknowledgement within mandatory 48-hour window",
      "Verify production slot reservation and estimated time of dispatch (ETD)",
      "Establish milestone check-ins for long-lead manufacturing components",
    ],
    deliverable: "Signed PO Acknowledgement & Confirmed Dispatch Schedule",
    color: "#d97706",
  },
  {
    step: 5,
    id: "delivery-match",
    title: "Delivery Inward, Quality & 3-Way Match",
    subtitle: "GRN creation, physical inspection, and invoice reconciliation",
    description:
      "Coordinating receipt at destination dock, QA verification against purchase specs, Goods Received Note (GRN) generation in SAP MM, and 3-way invoice matching for accounting.",
    sla: "< 24 Hours post-dock",
    tools: ["SAP MM (MIGO & MIRO)", "Inventory Management", "Quality QA/QC"],
    keyActions: [
      "Inspect inbound cargo for transit damage, seal integrity, and quantity",
      "Record Goods Receipt (GRN) in SAP MM immediately upon inspection pass",
      "Perform automated 3-Way Match: PO vs GRN vs Vendor Invoice",
      "Resolve any line-item price or quantity variances before final payment release",
    ],
    deliverable: "Complete Goods Receipt, 100% Stock Inward & Clear Invoice Settlement",
    color: "#7c3aed",
  },
];
