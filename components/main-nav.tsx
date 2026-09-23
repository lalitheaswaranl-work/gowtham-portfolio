"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/brand-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState, useEffect } from "react";
import { Menu, X, FileText, Send } from "lucide-react";
import { profileData } from "@/lib/data/profile";

const navSections = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "timeline", label: "Timeline" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function MainNav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dynamic Scroll-Spy to auto-activate menu based on scroll position
  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180; // Offset for sticky navbar

      for (let i = navSections.length - 1; i >= 0; i--) {
        const sectionId = navSections[i].id;
        const sectionElement = document.getElementById(sectionId);

        if (sectionElement) {
          const top = sectionElement.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname === "/") {
      e.preventDefault();
      const elem = document.getElementById(id);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        setActiveSection(id);
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <header className="sticky top-3 z-40 w-full px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-4">
      <div className="neu-card px-4 py-2.5 sm:px-5 flex items-center justify-between backdrop-blur-md bg-[var(--card-bg)]/95">
        {/* Brand with 3D G Logo + Profile Avatar */}
        <Link
          href="/#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <BrandLogo size={42} glow />
          {/* Profile Picture in Header alone */}
          <div className="relative w-10 h-10 rounded-full neu-inset p-0.5 shrink-0 overflow-hidden hidden sm:block">
            <img
              src={profileData.profileImage}
              alt={profileData.name}
              className="w-full h-full object-cover object-top rounded-full"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[var(--card-bg)]" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 tracking-tight leading-tight group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
              {profileData.name}
            </span>
            <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Immediate Joiner
            </span>
          </div>
        </Link>

        {/* Desktop Scroll-Spy Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
          {navSections.map((item) => {
            const isActive = pathname === "/" && activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`/#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "neu-inset text-blue-600 dark:text-sky-400 font-bold shadow-sm"
                    : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 hover:neu-btn"
                }`}
              >
                {item.label}
              </a>
            );
          })}

          {/* Standalone Resume Link */}
          <Link
            href="/resume"
            className="px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 hover:neu-btn transition-all flex items-center gap-1 ml-1"
          >
            <FileText className="w-3.5 h-3.5 text-blue-500 dark:text-sky-400" />
            <span>Resume</span>
          </Link>
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <a
            href={`mailto:${profileData.email}?subject=Opportunity%20Discussion%20with%20Gowtham%20Balamurugan`}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold neu-btn-primary"
          >
            <Send className="w-3 h-3" />
            <span>Connect</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full neu-btn flex items-center justify-center text-slate-700 dark:text-slate-200"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Scroll-Spy Active Indicators */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 neu-card p-4 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-3 p-2 mb-2 border-b border-slate-200/50 dark:border-slate-800/50">
            <div className="w-10 h-10 rounded-full neu-inset p-0.5 overflow-hidden">
              <img
                src={profileData.profileImage}
                alt={profileData.name}
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">{profileData.name}</div>
              <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                Immediately Joinable • 0 Days Notice
              </div>
            </div>
          </div>

          {navSections.map((item) => {
            const isActive = pathname === "/" && activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`/#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? "neu-inset text-blue-600 dark:text-sky-400 font-bold"
                    : "text-slate-700 dark:text-slate-200 hover:neu-btn"
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />}
              </a>
            );
          })}

          <Link
            href="/resume"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 hover:neu-btn"
          >
            <FileText className="w-4 h-4 text-blue-500" />
            <span>View &amp; Download Resume</span>
          </Link>

          <div className="pt-2">
            <a
              href={`tel:${profileData.phone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold neu-btn-primary"
            >
              Call (+91-6374844527)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
