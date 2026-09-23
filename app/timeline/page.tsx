import { experienceData } from "@/lib/data/experience";
import {
  Building2,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Award,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function TimelinePage() {
  const employmentItems = experienceData.filter((e) => e.type === "employment");
  const educationItems = experienceData.filter((e) => e.type === "education");

  return (
    <div className="space-y-12 py-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neu-pill text-xs font-semibold text-blue-600 dark:text-sky-400">
          <Calendar className="w-3.5 h-3.5" />
          <span>Chronological Record</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Professional Career Journey & Education
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
          Detailed operational history across Cognizant, Rax Tech International, Eubix Technologies, and electrical engineering academic background.
        </p>
      </div>

      {/* Employment Timeline */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200/50 dark:border-slate-800/50 pb-2">
          <Building2 className="w-5 h-5 text-blue-500" />
          <span>Procurement & Engineering Work Experience</span>
        </div>

        <div className="relative border-l-2 border-slate-300 dark:border-slate-800 ml-4 sm:ml-6 space-y-8 pl-6 sm:pl-8">
          {employmentItems.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full neu-card-sm flex items-center justify-center bg-[var(--card-bg)] text-blue-600 dark:text-sky-400 group-hover:scale-110 transition-transform">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-sky-400" />
              </div>

              <div className="neu-card p-6 sm:p-8 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/50 dark:border-slate-800/50 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-blue-600 dark:text-sky-400 flex items-center gap-2 mt-0.5">
                      <span>{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-xs">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <span className="neu-inset-sm px-3.5 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>

                {/* Metrics */}
                {exp.metrics && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {exp.metrics.map((metric, m) => (
                      <div key={m} className="neu-inset-sm p-3 text-center">
                        <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                          {metric.label}
                        </div>
                        <div className="text-sm sm:text-base font-extrabold text-emerald-600 dark:text-emerald-400 mt-0.5">
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Responsibilities */}
                <div className="space-y-2.5">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500">
                    Core Deliverables & Responsibilities
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {exp.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills tags */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {exp.skills.map((skill, s) => (
                    <span
                      key={s}
                      className="neu-pill px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="space-y-6 pt-6">
        <div className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200/50 dark:border-slate-800/50 pb-2">
          <GraduationCap className="w-5 h-5 text-purple-500" />
          <span>Education Credentials & Technical Foundation</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationItems.map((edu) => (
            <div key={edu.id} className="neu-card p-6 sm:p-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="neu-inset-sm px-3 py-1 text-xs font-bold text-slate-700 dark:text-slate-300">
                  {edu.period}
                </span>
                <Award className="w-4 h-4 text-purple-500" />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {edu.role}
                </h3>
                <div className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-sky-400 mt-0.5">
                  {edu.company} — {edu.location}
                </div>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {edu.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {edu.skills.map((skill, s) => (
                  <span
                    key={s}
                    className="neu-pill px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recruiter Callout */}
      <div className="neu-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h4 className="text-base font-bold text-slate-900 dark:text-white">
            Need an official PDF copy of Gowtham's resume?
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
            Download the ATS-optimized resume or view his printable CV sheet.
          </p>
        </div>
        <Link
          href="/resume"
          className="neu-btn-primary px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 self-start sm:self-auto shrink-0"
        >
          <span>Open Resume Hub</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
