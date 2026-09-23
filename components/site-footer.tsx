import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { profileData } from "@/lib/data/profile";
import { Mail, Phone, MapPin, Linkedin, FileText, ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="w-full mt-20 border-t border-slate-200/50 dark:border-slate-800/50 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
        {/* Brand & Bio */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <BrandLogo size={42} glow />
            <div>
              <div className="text-base font-bold text-slate-800 dark:text-slate-100">{profileData.name}</div>
              <div className="text-xs text-blue-600 dark:text-sky-400 font-semibold">{profileData.role}</div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
            {profileData.summary}
          </p>
          <div className="flex items-center gap-3 pt-1">
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl neu-btn flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="w-9 h-9 rounded-xl neu-btn flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${profileData.phone}`}
              className="w-9 h-9 rounded-xl neu-btn flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400"
              aria-label="Call Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Nav */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500">
            Page Sections
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li>
              <Link href="/#home" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#skills" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/#experience" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400">
                Experience
              </Link>
            </li>
            <li>
              <Link href="/#projects" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/#timeline" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400">
                Timeline
              </Link>
            </li>
            <li>
              <Link href="/#education" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400">
                Education
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact info card */}
        <div className="md:col-span-4 space-y-3">
          <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500">
            Direct Contact
          </h4>
          <div className="neu-card-sm p-4 space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <a href={`mailto:${profileData.email}`} className="truncate hover:underline">
                {profileData.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <a href={`tel:${profileData.phone}`} className="hover:underline">
                {profileData.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{profileData.location}</span>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold neu-btn w-full justify-center text-slate-700 dark:text-slate-200"
            >
              <FileText className="w-3.5 h-3.5 text-blue-500" />
              <span>View & Download Resume</span>
              <ArrowUpRight className="w-3 h-3 ml-auto opacity-60" />
            </Link>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-slate-200/40 dark:border-slate-800/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
        <p>© {new Date().getFullYear()} Gowtham Balamurugan. All rights reserved.</p>
        <p className="flex items-center gap-1">
          <span>Modeled with Neumorphism UI & Google AI</span>
        </p>
      </div>
    </footer>
  );
}
