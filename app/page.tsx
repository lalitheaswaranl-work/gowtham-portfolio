import Link from "next/link";
import { profileData } from "@/lib/data/profile";
import { experienceData } from "@/lib/data/experience";
import { projectsData } from "@/lib/data/projects";
import { skillsData } from "@/lib/data/skills";
import { ProcurementCanvas } from "@/components/procurement-canvas";
import {
  FileText,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building2,
  Clock,
  CheckCircle2,
  TrendingDown,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Zap,
  GraduationCap,
  Award,
  Calendar,
  Layers,
  Send,
} from "lucide-react";

export default function HomePage() {
  const employmentItems = experienceData.filter((e) => e.type === "employment");
  const educationItems = experienceData.filter((e) => e.type === "education");

  return (
    <div className="space-y-20 py-4 sm:py-6">
      {/* ═════════════════════════════════════════════════════════════════ */}
      {/* 1. HOME / HERO SECTION                                           */}
      {/* ═════════════════════════════════════════════════════════════════ */}
      <section id="home" className="relative scroll-mt-24">
        <div className="neu-card-lg p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          {/* Subtle Ambient Decorative Glows */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-6 relative z-10 max-w-4xl">
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full neu-pill text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Immediately Joinable (0 Days Notice)</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full neu-inset-sm text-xs font-semibold text-slate-600 dark:text-slate-300">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                <span>Currently Not Working • Ready to Join</span>
              </div>
            </div>

            {/* Name & Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {profileData.name}
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-sky-400">
                {profileData.role}
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed pt-1">
                {profileData.summary}
              </p>
            </div>

            {/* Preferred Work Locations */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 block">
                Preferred Work Locations & Relocation
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {profileData.preferredLocations.map((loc, idx) => (
                  <span
                    key={idx}
                    className="neu-inset-sm px-3.5 py-1 text-xs font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-1"
                  >
                    <MapPin className="w-3 h-3 text-blue-500" />
                    {loc}
                  </span>
                ))}
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium pl-1">
                  (On-site / Hybrid / Remote)
                </span>
              </div>
            </div>

            {/* Contact Pills */}
            <div className="flex flex-wrap gap-2.5 pt-1 text-xs">
              <a
                href={`tel:${profileData.phone}`}
                className="neu-btn px-3.5 py-2 flex items-center gap-2 text-slate-700 dark:text-slate-300 font-semibold hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-500" />
                <span>{profileData.phone}</span>
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="neu-btn px-3.5 py-2 flex items-center gap-2 text-slate-700 dark:text-slate-300 font-semibold hover:text-blue-600 dark:hover:text-sky-400"
              >
                <Mail className="w-3.5 h-3.5 text-blue-500" />
                <span>{profileData.email}</span>
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="neu-btn px-3.5 py-2 flex items-center gap-2 text-slate-700 dark:text-slate-300 font-semibold hover:text-blue-600 dark:hover:text-sky-400"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                <span>LinkedIn Profile</span>
              </a>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Link
                href="/resume"
                className="neu-btn-primary px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg"
              >
                <FileText className="w-4 h-4" />
                <span>View &amp; Download Resume</span>
              </Link>
              <Link
                href="#projects"
                className="neu-btn px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold flex items-center gap-2 text-slate-800 dark:text-slate-200"
              >
                <span>Explore Procurement Cases</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/job-fit"
                className="neu-btn px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold flex items-center gap-2 text-purple-600 dark:text-purple-400"
              >
                <Sparkles className="w-4 h-4" />
                <span>Recruiter Job-Fit Review</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Key Metrics / KPIs Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {profileData.stats.map((stat, i) => (
            <div key={i} className="neu-card p-5 space-y-1">
              <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
                {stat.label}
              </div>
              <div className="text-2xl sm:text-3xl font-black tracking-tight text-blue-600 dark:text-sky-400">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════ */}
      {/* 2. SKILLS SECTION                                                */}
      {/* ═════════════════════════════════════════════════════════════════ */}
      <section id="skills" className="space-y-6 scroll-mt-24">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neu-pill text-xs font-semibold text-blue-600 dark:text-sky-400 mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Procurement &amp; Technical Skills
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Expertise in strategic sourcing, SAP MM operations, supplier negotiations, and electronics hardware procurement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((cat, i) => (
            <div key={i} className="neu-card p-6 space-y-4">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {cat.category}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {cat.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, s) => (
                  <span
                    key={s}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold ${
                      skill.highlight
                        ? "neu-inset text-blue-600 dark:text-sky-400 border border-blue-500/20"
                        : "neu-pill text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════ */}
      {/* 3. EXPERIENCE SECTION                                            */}
      {/* ═════════════════════════════════════════════════════════════════ */}
      <section id="experience" className="space-y-6 scroll-mt-24">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neu-pill text-xs font-semibold text-blue-600 dark:text-sky-400 mb-2">
            <Building2 className="w-3.5 h-3.5" />
            <span>Work History</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Proven track record across enterprise procurement operations at Cognizant, Rax Tech International, and Eubix Technologies.
          </p>
        </div>

        <div className="space-y-6">
          {employmentItems.map((exp) => (
            <div key={exp.id} className="neu-card p-6 sm:p-8 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/50 dark:border-slate-800/50 pb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-sky-400 flex items-center gap-2 mt-0.5">
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
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {exp.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.skills.map((skill, s) => (
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
      </section>

      {/* ═════════════════════════════════════════════════════════════════ */}
      {/* 4. PROJECTS / CASE STUDIES SECTION                               */}
      {/* ═════════════════════════════════════════════════════════════════ */}
      <section id="projects" className="space-y-6 scroll-mt-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neu-pill text-xs font-semibold text-blue-600 dark:text-sky-400 mb-2">
              <TrendingDown className="w-3.5 h-3.5" />
              <span>Measurable Impact</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Featured Procurement Case Studies
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Concrete evidence across high-volume ERP requisitioning, vendor negotiations, and hardware BOM supply lines.
            </p>
          </div>
          <Link
            href="/projects"
            className="neu-btn px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 self-start sm:self-auto text-slate-800 dark:text-slate-200"
          >
            <span>Dedicated Projects Page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <div key={project.id} className="neu-card p-6 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold neu-inset-sm text-blue-600 dark:text-sky-400">
                    {project.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Building2 className="w-3 h-3 text-slate-400" />
                    {project.company}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* KPIs */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200/50 dark:border-slate-800/50">
                {project.kpis.map((kpi, k) => (
                  <div key={k} className="neu-inset-sm p-2.5 text-center">
                    <div className="text-[10px] text-slate-400 uppercase font-bold truncate">
                      {kpi.label}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">
                      {kpi.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 pt-1">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Key Results:
                </div>
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                  {project.impact.slice(0, 2).map((point, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════ */}
      {/* 5. TIMELINE & INTERACTIVE PROCUREMENT CANVAS                     */}
      {/* ═════════════════════════════════════════════════════════════════ */}
      <section id="timeline" className="space-y-6 scroll-mt-24">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neu-pill text-xs font-semibold text-blue-600 dark:text-sky-400 mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>Interactive Operational Timeline</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Career Progression &amp; Procurement Lifecycle
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            A step-by-step visual of Gowtham's career milestones and end-to-end procurement methodology.
          </p>
        </div>

        {/* 5-Stage Procurement Lifecycle Canvas Component */}
        <ProcurementCanvas />

        {/* Milestone Progression Strip */}
        <div className="neu-card p-6 space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-500" />
            <span>Career Milestones Summary</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="neu-inset p-4 rounded-xl space-y-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase">2026</span>
              <div className="text-sm font-bold text-slate-900 dark:text-white">Cognizant</div>
              <div className="text-xs text-blue-600 dark:text-sky-400 font-semibold">SPE Procurement</div>
              <div className="text-[11px] text-slate-500">PR/PO Validation, 48h SLA &amp; Vendor Management</div>
            </div>

            <div className="neu-inset p-4 rounded-xl space-y-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase">2025</span>
              <div className="text-sm font-bold text-slate-900 dark:text-white">Rax Tech International</div>
              <div className="text-xs text-blue-600 dark:text-sky-400 font-semibold">Purchase Engineer</div>
              <div className="text-[11px] text-slate-500">Strategic Sourcing, Price Negotiation &amp; 15%+ Cost Savings</div>
            </div>

            <div className="neu-inset p-4 rounded-xl space-y-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase">2023 – 2024</span>
              <div className="text-sm font-bold text-slate-900 dark:text-white">Eubix Technologies</div>
              <div className="text-xs text-blue-600 dark:text-sky-400 font-semibold">Junior Hardware Engineer</div>
              <div className="text-[11px] text-slate-500">Electronic Components, BOM Sourcing &amp; Supply Chain</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════ */}
      {/* 6. EDUCATION SECTION                                             */}
      {/* ═════════════════════════════════════════════════════════════════ */}
      <section id="education" className="space-y-6 scroll-mt-24">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neu-pill text-xs font-semibold text-purple-600 dark:text-purple-400 mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education Credentials
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Engineering foundation in electrical and electronics providing strong technical acumen for component procurement and BOM validation.
          </p>
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
      </section>

      {/* ═════════════════════════════════════════════════════════════════ */}
      {/* 7. CONTACT SECTION                                               */}
      {/* ═════════════════════════════════════════════════════════════════ */}
      <section id="contact" className="scroll-mt-24">
        <div className="neu-card-lg p-8 sm:p-10 text-center space-y-6 bg-gradient-to-br from-blue-600/5 to-emerald-600/5">
          <div className="space-y-2 max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full neu-pill text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Immediate Joiner • Ready for Discussion</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Connect with Gowtham Balamurugan
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Available immediately for Procurement, Strategic Sourcing, and Supply Chain roles across Chennai, Bangalore, and Coimbatore.
            </p>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto pt-2">
            <a
              href={`mailto:${profileData.email}`}
              className="neu-card p-4 space-y-1 hover:scale-[1.02] transition-transform text-center group"
            >
              <Mail className="w-5 h-5 text-blue-500 mx-auto" />
              <div className="text-[11px] text-slate-400 uppercase font-bold">Email</div>
              <div className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate group-hover:text-blue-500">
                {profileData.email}
              </div>
            </a>

            <a
              href={`tel:${profileData.phone}`}
              className="neu-card p-4 space-y-1 hover:scale-[1.02] transition-transform text-center group"
            >
              <Phone className="w-5 h-5 text-emerald-500 mx-auto" />
              <div className="text-[11px] text-slate-400 uppercase font-bold">Phone</div>
              <div className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-500">
                {profileData.phone}
              </div>
            </a>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="neu-card p-4 space-y-1 hover:scale-[1.02] transition-transform text-center group"
            >
              <Linkedin className="w-5 h-5 text-blue-600 mx-auto" />
              <div className="text-[11px] text-slate-400 uppercase font-bold">LinkedIn</div>
              <div className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600">
                View Profile
              </div>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <a
              href={`mailto:${profileData.email}?subject=Procurement%20Opportunity%20Discussion%20with%20Gowtham`}
              className="neu-btn-primary px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Send Direct Inquiry</span>
            </a>
            <Link
              href="/resume"
              className="neu-btn px-6 py-3 rounded-2xl text-xs sm:text-sm font-semibold flex items-center gap-2 text-slate-800 dark:text-slate-200"
            >
              <FileText className="w-4 h-4 text-blue-500" />
              <span>Download Official Resume</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
