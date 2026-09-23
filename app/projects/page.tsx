"use client";

import { useState } from "react";
import { projectsData } from "@/lib/data/projects";
import {
  Briefcase,
  Building2,
  CheckCircle2,
  TrendingDown,
  Layers,
  Wrench,
  ShieldCheck,
  Calendar,
} from "lucide-react";

const categories = ["All", "PR-PO SLA", "Strategic Sourcing", "BOM Procurement", "Inventory & ERP"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-10 py-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neu-pill text-xs font-semibold text-blue-600 dark:text-sky-400">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Procurement Evidence & Results</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Procurement Case Studies & Operations
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
          Detailed breakdown of real-world procurement scenarios, cost-saving initiatives, SLA management, and SAP MM implementations.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2.5">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isSelected
                  ? "neu-inset text-blue-600 dark:text-sky-400 border border-blue-500/20"
                  : "neu-btn text-slate-700 dark:text-slate-300"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="space-y-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="neu-card p-6 sm:p-8 space-y-6">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/50 dark:border-slate-800/50 pb-4">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="neu-inset-sm px-3 py-1 text-xs font-bold text-blue-600 dark:text-sky-400">
                    {project.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    {project.company}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {project.period}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-1">
                  {project.title}
                </h2>
              </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.kpis.map((kpi, k) => (
                <div key={k} className="neu-inset-sm p-3.5 text-center">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    {kpi.label}
                  </div>
                  <div className="text-base sm:text-lg font-black text-emerald-600 dark:text-emerald-400 mt-0.5">
                    {kpi.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="neu-inset p-5 rounded-2xl space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-500 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>The Operational Challenge</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="neu-inset p-5 rounded-2xl space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>The Sourcing & Process Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Verified Business Impact */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                <TrendingDown className="w-4 h-4 text-emerald-500" />
                <span>Quantifiable Results & Business Impact</span>
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {project.impact.map((point, i) => (
                  <div
                    key={i}
                    className="neu-inset-sm p-3 flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Used */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-400 flex items-center gap-1 mr-1">
                <Wrench className="w-3.5 h-3.5" />
                Tools:
              </span>
              {project.tools.map((tool, t) => (
                <span
                  key={t}
                  className="neu-pill px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
