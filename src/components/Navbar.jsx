import { useEffect, useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  function handleNavigation() {
    setIsOpen(false);
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <nav
        className="mx-auto max-w-7xl px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={handleNavigation}
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Digital<span className="text-indigo-600">Boost</span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-7 md:flex">
            {links.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-indigo-600"
                      : "text-gray-700 hover:text-indigo-600"
                  }`}
                  aria-current={
                    isActive ? "page" : undefined
                  }
                >
                  {link.name}

                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-indigo-600" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 md:inline-flex"
          >
            Get Started
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-xl text-gray-900 transition hover:bg-gray-50 md:hidden"
            aria-label={
              isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-gray-100 py-5 md:hidden"
          >
            <div className="flex flex-col gap-2">

              {links.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleNavigation}
                    className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-indigo-50 text-indigo-600"
                        : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    }`}
                    aria-current={
                      isActive ? "page" : undefined
                    }
                  >
                    {link.name}
                  </a>
                );
              })}

              <a
                href="#contact"
                onClick={handleNavigation}
                className="mt-3 rounded-full bg-indigo-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Get Started
              </a>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;