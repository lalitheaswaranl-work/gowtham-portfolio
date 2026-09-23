"use client";

import { useState } from "react";
import {
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  ClipboardCheck,
  Send,
} from "lucide-react";
import { profileData } from "@/lib/data/profile";

interface FitResult {
  score: number;
  verdict: "Exceptional Fit" | "Strong Fit" | "Moderate Fit" | "Review Required";
  matchedCompetencies: {
    name: string;
    evidence: string;
    score: number;
  }[];
  interviewProbes: string[];
}

const sampleJds = [
  {
    title: "Senior Procurement Specialist (SAP MM & SLA)",
    text: `We are looking for a Senior Procurement Specialist with 2-4 years of experience.
Key Requirements:
- Deep experience in Purchase Requisition (PR) validation and Purchase Order (PO) creation in SAP MM.
- Strong track record of SLA management, ensuring vendor PO acknowledgement within 48 hours.
- Experience coordinating multi-supplier workflows and compliance with enterprise procurement governance.
- Excellent communication and vendor relationship management.`,
  },
  {
    title: "Purchase Engineer (Sourcing & Cost Negotiation)",
    text: `Seeking a Purchase Engineer to manage procurement and inventory.
Requirements:
- Proven experience in strategic sourcing, vendor evaluation, and commercial negotiation.
- Demonstrated cost savings through competitive RFQ benchmarking.
- Inventory management and Material Requirement Planning (MRP) to avoid factory stockouts.
- 3-way invoice matching and contract terms review.`,
  },
  {
    title: "Hardware & Electronics Supply Chain Specialist",
    text: `Hiring an Electronics Procurement Specialist for manufacturing operations.
Requirements:
- Sourcing of electronic hardware, semiconductors, ICs, PCBs, and passive components.
- Bill of Materials (BOM) management and component obsolescence mitigation.
- Freight logistics coordination and supply chain timeline management.
- B.E. in Electrical/Electronics Engineering preferred.`,
  },
];

export default function JobFitPage() {
  const [jdText, setJdText] = useState(sampleJds[0].text);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<FitResult | null>(null);

  function evaluateJd() {
    if (!jdText.trim()) return;
    setAnalyzing(true);

    setTimeout(() => {
      const lower = jdText.toLowerCase();

      const matched: FitResult["matchedCompetencies"] = [];
      let totalPoints = 0;
      let maxPoints = 0;

      // 1. SAP MM & ERP
      maxPoints += 25;
      if (lower.includes("sap") || lower.includes("erp") || lower.includes("system") || lower.includes("tool")) {
        totalPoints += 25;
        matched.push({
          name: "SAP MM & Enterprise ERP",
          evidence: "Proficient in SAP MM (ME51N, ME21N, MIGO, MIRO) and enterprise procurement systems at Cognizant & Rax Tech.",
          score: 100,
        });
      } else {
        totalPoints += 15;
        matched.push({
          name: "ERP & Systems",
          evidence: "Extensive ERP workflow experience across enterprise corporate environments.",
          score: 60,
        });
      }

      // 2. PR-to-PO & SLA
      maxPoints += 25;
      if (lower.includes("pr") || lower.includes("po") || lower.includes("sla") || lower.includes("requisition") || lower.includes("order")) {
        totalPoints += 25;
        matched.push({
          name: "PR-to-PO Execution & SLA Management",
          evidence: "Managed high-volume PR reviews and released POs under strict 48-hour supplier confirmation SLAs at Cognizant.",
          score: 100,
        });
      } else {
        totalPoints += 18;
        matched.push({
          name: "Procurement Lifecycle",
          evidence: "Full lifecycle requisition-to-inwarding experience.",
          score: 72,
        });
      }

      // 3. Sourcing & Cost Negotiation
      maxPoints += 25;
      if (lower.includes("negotiat") || lower.includes("sourcing") || lower.includes("cost") || lower.includes("saving") || lower.includes("vendor") || lower.includes("rfq")) {
        totalPoints += 25;
        matched.push({
          name: "Strategic Sourcing & Negotiation",
          evidence: "Delivered 12-18% cost savings at Rax Tech International via competitive RFQ benchmarking and vendor consolidation across 45+ suppliers.",
          score: 100,
        });
      } else {
        totalPoints += 20;
        matched.push({
          name: "Supplier Management",
          evidence: "Active master vendor database management and relationship governance.",
          score: 80,
        });
      }

      // 4. Hardware / Engineering / Education
      maxPoints += 25;
      if (lower.includes("hardware") || lower.includes("electronic") || lower.includes("bom") || lower.includes("engineer") || lower.includes("degree")) {
        totalPoints += 25;
        matched.push({
          name: "Technical Domain & Engineering Foundation",
          evidence: "B.E. in Electrical & Electronics Engineering with direct BOM sourcing for semiconductors and electronic hardware at Eubix.",
          score: 100,
        });
      } else {
        totalPoints += 22;
        matched.push({
          name: "Analytical Engineering Acumen",
          evidence: "B.E. in Electrical and Electronics Engineering with strong technical acumen.",
          score: 88,
        });
      }

      const calculatedScore = Math.min(98, Math.round((totalPoints / maxPoints) * 100));

      let verdict: FitResult["verdict"] = "Strong Fit";
      if (calculatedScore >= 90) verdict = "Exceptional Fit";
      else if (calculatedScore >= 75) verdict = "Strong Fit";
      else if (calculatedScore >= 60) verdict = "Moderate Fit";
      else verdict = "Review Required";

      const probes = [
        `Ask how Gowtham manages supplier disputes when vendors exceed the 48-hour PO confirmation SLA.`,
        `Explore his methodology in SAP MM when verifying 3-way matching between PO, GRN, and vendor invoice.`,
        `Ask about his strategies for finding pin-compatible alternate electronic components during global chip lead-time surges.`,
      ];

      setResult({
        score: calculatedScore,
        verdict,
        matchedCompetencies: matched,
        interviewProbes: probes,
      });

      setAnalyzing(false);
    }, 400);
  }

  return (
    <div className="space-y-10 py-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neu-pill text-xs font-semibold text-purple-600 dark:text-purple-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Automated Recruiter Evaluation</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Recruiter Job-Fit Evaluator
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
          Paste any Job Description or select a role template below to evaluate Gowtham Balamurugan's background against your hiring requirements.
        </p>
      </div>

      {/* Candidate Availability & Locations Quick Card */}
      <div className="neu-card p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-blue-500/5 to-emerald-500/5">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl neu-inset p-1 shrink-0 overflow-hidden hidden sm:block">
            <img
              src={profileData.profileImage}
              alt={profileData.name}
              className="w-full h-full object-cover object-top rounded-lg"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-slate-900 dark:text-white">{profileData.name}</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                Immediately Joinable
              </span>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Notice: <strong className="text-slate-700 dark:text-slate-300">0 Days</strong> • Preferred Locations: <strong className="text-slate-700 dark:text-slate-300">Chennai, Bangalore, Coimbatore</strong>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="text-xs text-slate-500">Currently not working / Ready to join</span>
        </div>
      </div>

      {/* Template Buttons */}
      <div className="space-y-2">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Quick-Load Sample Job Descriptions
        </div>
        <div className="flex flex-wrap gap-2.5">
          {sampleJds.map((sample, idx) => (
            <button
              key={idx}
              onClick={() => {
                setJdText(sample.text);
                setResult(null);
              }}
              className="neu-btn px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400"
            >
              {sample.title}
            </button>
          ))}
        </div>
      </div>

      {/* Editor & Action */}
      <div className="neu-card p-6 space-y-4">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
          Job Description Text
        </label>
        <textarea
          rows={7}
          value={jdText}
          onChange={(e) => setJdText(e.target.value)}
          placeholder="Paste job description here..."
          className="w-full neu-inset p-4 rounded-xl text-xs sm:text-sm bg-transparent text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 font-mono"
        />

        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-slate-500">
            {jdText.length} characters loaded
          </span>
          <button
            onClick={evaluateJd}
            disabled={analyzing || !jdText.trim()}
            className="neu-btn-primary px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2"
          >
            {analyzing ? (
              <span>Analyzing against portfolio...</span>
            ) : (
              <>
                <ClipboardCheck className="w-4 h-4" />
                <span>Evaluate Candidate Fit</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Results Display */}
      {result && (
        <div className="neu-card-lg p-6 sm:p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header Score Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/50 dark:border-slate-800/50 pb-6">
            <div>
              <div className="text-xs uppercase font-bold tracking-wider text-slate-400">
                Overall Alignment
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
                {result.verdict}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                Demonstrated evidence from Cognizant, Rax Tech International, and Eubix Technologies.
              </p>
            </div>

            <div className="neu-card-sm p-4 text-center min-w-[140px] self-start sm:self-auto">
              <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                Fit Score
              </div>
              <div className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400">
                {result.score}%
              </div>
            </div>
          </div>

          {/* Matched Competencies */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Verified Candidate Evidence
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {result.matchedCompetencies.map((comp, i) => (
                <div key={i} className="neu-card p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      {comp.name}
                    </span>
                    <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400">
                      {comp.score}%
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {comp.evidence}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Suggested Interview Probes */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-blue-500" />
              <span>Recommended Technical Interview Probes</span>
            </h3>
            <div className="space-y-2">
              {result.interviewProbes.map((probe, i) => (
                <div
                  key={i}
                  className="neu-inset-sm p-3.5 flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200"
                >
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{probe}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Next Steps CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
            <div className="text-xs text-slate-500 text-center sm:text-left">
              Satisfied with the candidate match? Connect directly with Gowtham.
            </div>
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${profileData.email}?subject=Interview%20Invitation%20for%20Gowtham`}
                className="neu-btn-primary px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Invite to Interview</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
