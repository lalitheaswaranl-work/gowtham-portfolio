"use client";

import { useState } from "react";
import { workflowSteps } from "@/lib/data/workflow";
import { CheckCircle2, Clock, Wrench, ShieldCheck, ArrowRight, Layers } from "lucide-react";

export function ProcurementCanvas() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = workflowSteps[activeStepIndex];

  return (
    <section id="workflow" className="w-full my-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neu-pill text-xs font-semibold text-blue-600 dark:text-sky-400 mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Operational Engine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            End-to-End Procurement Lifecycle Canvas
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            A production-proven, 5-stage procurement workflow ensuring budget compliance, rapid supplier turnarounds, and zero-defect inventory inwarding.
          </p>
        </div>

        {/* Current SLA Chip */}
        <div className="neu-card-sm px-4 py-2 flex items-center gap-3 self-start md:self-auto">
          <Clock className="w-4 h-4 text-emerald-500 animate-pulse" />
          <div className="text-left">
            <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
              Active SLA Target
            </div>
            <div className="text-sm font-bold text-slate-800 dark:text-slate-100">
              {currentStep.sla}
            </div>
          </div>
        </div>
      </div>

      {/* Step Selector Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
        {workflowSteps.map((step, idx) => {
          const isSelected = activeStepIndex === idx;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-3.5 rounded-2xl text-left transition-all cursor-pointer relative overflow-hidden ${
                isSelected
                  ? "neu-inset border border-blue-500/30 dark:border-sky-500/30"
                  : "neu-card hover:scale-[1.02]"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    isSelected
                      ? "bg-blue-600 dark:bg-sky-500 text-white"
                      : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {step.step}
                </span>
                <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                  {step.sla}
                </span>
              </div>
              <h4 className="text-xs font-bold line-clamp-1 text-slate-900 dark:text-slate-100">
                {step.title.split("&")[0]}
              </h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                {step.tools[0]}
              </p>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Canvas Display */}
      <div className="neu-card-lg p-6 sm:p-8 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Details Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center">
                {currentStep.step}
              </span>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {currentStep.title}
                </h3>
                <p className="text-xs sm:text-sm text-blue-600 dark:text-sky-400 font-medium">
                  {currentStep.subtitle}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {currentStep.description}
            </p>

            {/* Checklist */}
            <div className="space-y-2.5">
              <h5 className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                Operational Execution Steps
              </h5>
              <div className="grid grid-cols-1 gap-2">
                {currentStep.keyActions.map((action, i) => (
                  <div
                    key={i}
                    className="neu-inset-sm p-3 flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{action}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Architecture & Tooling Stack */}
          <div className="lg:col-span-5 space-y-5">
            {/* Deliverable Box */}
            <div className="neu-inset p-5 rounded-2xl border-l-4 border-emerald-500">
              <div className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-1">
                Verified Deliverable
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                {currentStep.deliverable}
              </div>
            </div>

            {/* Systems & Tools Used */}
            <div className="neu-card p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-slate-400">
                <Wrench className="w-3.5 h-3.5 text-blue-500" />
                <span>Enterprise Systems & Modules</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentStep.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-xl text-xs font-semibold neu-pill text-slate-800 dark:text-slate-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-2">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                className={`neu-btn px-4 py-2 rounded-xl text-xs font-semibold ${
                  activeStepIndex === 0 ? "opacity-40 cursor-not-allowed" : ""
                }`}
              >
                Previous Stage
              </button>
              <button
                disabled={activeStepIndex === workflowSteps.length - 1}
                onClick={() =>
                  setActiveStepIndex((prev) => Math.min(workflowSteps.length - 1, prev + 1))
                }
                className={`neu-btn-primary px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 ${
                  activeStepIndex === workflowSteps.length - 1
                    ? "opacity-40 cursor-not-allowed"
                    : ""
                }`}
              >
                <span>Next Stage</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
