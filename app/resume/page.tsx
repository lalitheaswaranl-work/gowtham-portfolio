"use client";

import { profileData } from "@/lib/data/profile";
import { experienceData } from "@/lib/data/experience";
import { skillsData } from "@/lib/data/skills";
import {
  Download,
  Printer,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  FileText,
  CheckCircle2,
  Share2,
} from "lucide-react";
import { useState } from "react";

export default function ResumePage() {
  const [copied, setCopied] = useState(false);

  function handleShare() {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  function handlePrint() {
    if (typeof window !== "undefined") {
      window.print();
    }
  }

  return (
    <div className="space-y-8 py-6 max-w-4xl mx-auto">
      {/* Action Bar */}
      <div className="neu-card p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 print:hidden">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-500" />
            <span>Gowtham Balamurugan — Official Resume</span>
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Verified Procurement & Supply Chain Specialist Profile
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={handlePrint}
            className="neu-btn px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 text-slate-700 dark:text-slate-200"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save PDF</span>
          </button>
          <button
            onClick={handleShare}
            className="neu-btn px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1 text-slate-700 dark:text-slate-200"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copied ? "Copied Link!" : "Share"}</span>
          </button>
          <a
            href={`mailto:${profileData.email}?subject=Requesting%20Resume%20PDF%20-%20Gowtham%20Balamurugan`}
            className="neu-btn-primary px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Request PDF</span>
          </a>
        </div>
      </div>

      {/* Printable Sheet View */}
      <div className="neu-card-lg p-6 sm:p-12 space-y-8 bg-white dark:bg-[#161b26] text-slate-800 dark:text-slate-200 print:shadow-none print:border-none print:p-0">
        {/* Header */}
        <div className="border-b border-slate-300 dark:border-slate-700 pb-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl neu-inset p-1.5 shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-900 hidden sm:block">
              <img
                src={profileData.profileImage}
                alt={profileData.name}
                className="w-full h-full object-cover object-top rounded-xl"
              />
            </div>
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                  {profileData.name}
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  Immediate Joiner
                </span>
              </div>
              <p className="text-sm font-bold text-blue-600 dark:text-sky-400">
                SPE Procurement & Supply Chain Specialist
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                To secure a challenging position in a reputable organization where I can contribute my procurement and supply chain expertise while continuously developing my professional skills and helping the organization achieve its goals.
              </p>
              <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                <span><strong className="text-slate-700 dark:text-slate-300">Notice Period:</strong> 0 Days (Immediate)</span>
                <span>•</span>
                <span><strong className="text-slate-700 dark:text-slate-300">Preferred Locations:</strong> Chennai, Bangalore, Coimbatore</span>
              </div>
            </div>
          </div>

          <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 shrink-0">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span>{profileData.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>{profileData.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span className="truncate max-w-[200px]">linkedin.com/in/gowtham-balamurugan-283182234</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{profileData.location}</span>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="space-y-6">
          <h2 className="text-sm uppercase font-black tracking-wider text-blue-600 dark:text-sky-400 border-b border-slate-200 dark:border-slate-800 pb-1">
            Professional Experience
          </h2>

          <div className="space-y-6">
            {/* Cognizant */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-bold">
                <div>
                  <span className="text-slate-900 dark:text-white uppercase font-extrabold">SPE PROCUREMENT</span>
                  <span className="text-slate-500 dark:text-slate-400 font-normal"> — Cognizant, Chennai, Tamil Nadu, India</span>
                </div>
                <span className="text-slate-500 font-medium text-xs">Jan 2026 – Mar 2026</span>
              </div>
              <ul className="list-disc pl-4 space-y-1 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                <li>Reviewed and Validated Purchase requisition (PR) requests to ensure accuracy, budget compliance and approval readiness.</li>
                <li>Created and Released Purchase Orders (POs) in line with procurement policies and SLA requirements.</li>
                <li>Coordinate with suppliers to obtain PO acknowledgement and order confirmation within Two business days.</li>
                <li>Managed end-to-end procurement activities for multiple suppliers, ensuring timely purchase order processing and on-time material availability.</li>
              </ul>
            </div>

            {/* Rax Tech International */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-bold">
                <div>
                  <span className="text-slate-900 dark:text-white uppercase font-extrabold">PURCHASE ENGINEER</span>
                  <span className="text-slate-500 dark:text-slate-400 font-normal"> — Rax Tech International, Chennai, Tamil Nadu, India</span>
                </div>
                <span className="text-slate-500 font-medium text-xs">May 2025 – Dec 2025</span>
              </div>
              <ul className="list-disc pl-4 space-y-1 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                <li>Maintained supplier database and developed strong vendor relationships for better reliability and pricing.</li>
                <li>Monitored inventory levels and supported material planning to avoid stockouts or overstocking.</li>
                <li>Processed invoices, purchase requisitions, and ensured compliance with company procurement policies.</li>
                <li>Assisted in contract management by reviewing supplier terms and ensuring adherence to agreed conditions.</li>
                <li>Negotiated supplier pricing and delivery schedules to achieve cost savings while maintaining quality and delivery performance.</li>
              </ul>
            </div>

            {/* Eubix Technologies */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-bold">
                <div>
                  <span className="text-slate-900 dark:text-white uppercase font-extrabold">JUNIOR HARDWARE ENGINEER</span>
                  <span className="text-slate-500 dark:text-slate-400 font-normal"> — Eubix Technologies Private Limited, Chennai, Tamil Nadu, India</span>
                </div>
                <span className="text-slate-500 font-medium text-xs">July 2023 – Sep 2024</span>
              </div>
              <ul className="list-disc pl-4 space-y-1 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                <li>Supported procurement of electronic hardware and software components for manufacturing operations.</li>
                <li>Oversee the end-to-end supply chain process, ensuring the efficient flow of materials and components for manufacturing.</li>
                <li>Manage the procurement of electronic hardware and software components required for production.</li>
                <li>Coordinate the transportation and delivery of materials to meet production schedules.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-4">
          <h2 className="text-sm uppercase font-black tracking-wider text-blue-600 dark:text-sky-400 border-b border-slate-200 dark:border-slate-800 pb-1">
            Education
          </h2>

          <div className="space-y-3 text-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Bachelor Of Engineering in Electrical and Electronics (B.E. EEE)</span>
                <div className="text-slate-500">M. Kumarasamy College of Engineering, Karur, Tamil Nadu — <span className="font-semibold text-emerald-600">CGPA : 6.9</span></div>
              </div>
              <span className="text-slate-500 font-medium">Aug 2019 – May 2023</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Higher Secondary School (HSC)</span>
                <div className="text-slate-500">Vetri Vikaas Matric Higher Secondary School, Rasipuram, Namakkal — <span className="font-semibold text-emerald-600">54.4%</span></div>
              </div>
              <span className="text-slate-500 font-medium">Jun 2018 – Mar 2019</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Secondary School Leaving Certificate (SSLC)</span>
                <div className="text-slate-500">Vetri Vikaas Matric Higher Secondary School, Rasipuram, Namakkal — <span className="font-semibold text-emerald-600">81%</span></div>
              </div>
              <span className="text-slate-500 font-medium">Jun 2016 – Mar 2017</span>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="space-y-4">
          <h2 className="text-sm uppercase font-black tracking-wider text-blue-600 dark:text-sky-400 border-b border-slate-200 dark:border-slate-800 pb-1">
            Skills & Competencies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="space-y-1">
              <span className="font-bold text-slate-900 dark:text-white block">Procurement Skills</span>
              <ul className="text-slate-600 dark:text-slate-300 space-y-0.5">
                <li>• Supply Chain Management</li>
                <li>• Strategic Sourcing</li>
                <li>• Vendor Evaluation</li>
                <li>• Cost Analysis & Negotiation</li>
                <li>• Inventory Management</li>
                <li>• RFQ Management</li>
              </ul>
            </div>

            <div className="space-y-1">
              <span className="font-bold text-slate-900 dark:text-white block">Software Skills</span>
              <ul className="text-slate-600 dark:text-slate-300 space-y-0.5">
                <li>• Procurement ERP</li>
                <li>• SAP MM (Materials Mgmt)</li>
                <li>• Microsoft Excel</li>
                <li>• Microsoft PowerPoint</li>
              </ul>
            </div>

            <div className="space-y-1">
              <span className="font-bold text-slate-900 dark:text-white block">Interpersonal Skills</span>
              <ul className="text-slate-600 dark:text-slate-300 space-y-0.5">
                <li>• Adaptability</li>
                <li>• Problem-Solving</li>
                <li>• Time Management</li>
                <li>• Teamwork</li>
              </ul>
            </div>

            <div className="space-y-1">
              <span className="font-bold text-slate-900 dark:text-white block">Languages</span>
              <ul className="text-slate-600 dark:text-slate-300 space-y-0.5">
                <li>• English (Professional)</li>
                <li>• Tamil (Native)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
