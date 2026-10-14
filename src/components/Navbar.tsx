const navLinks = [
  { label: "Home", href: "#header" },
  { label: "About Me", href: "#about-me" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "My Projects", href: "#my-projects" },
  { label: "What I Can Do", href: "#what-i-can-do" },
  { label: "How I Build", href: "#how-i-build" },
];

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0908]/85 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand / Domain */}
        <a
          href="#header"
          className="flex shrink-0 items-center gap-2.5 text-sm font-semibold tracking-tight text-white transition-opacity hover:opacity-90"
        >
          <img
            src="/Interwoven White JR Monogram on Black.png"
            className="h-8 w-8 rounded-xl object-cover ring-1 ring-white/20"
            alt="Juan Luis stack logo"
          />
          <span className="hidden font-medium sm:inline-block">Juan Luis stack</span>
        </a>

        {/* Center Nav Links */}
        <nav
          aria-label="Primary navigation"
          className="mx-auto max-w-full overflow-hidden rounded-full border border-white/10 bg-white/[0.04] p-1 shadow-inner backdrop-blur-md"
        >
          <ul className="scrollbar-hidden flex items-center gap-0.5 overflow-x-auto whitespace-nowrap text-[11px] text-white/75 sm:gap-1 sm:text-xs">
            {navLinks.map((link) => (
              <li key={link.href} className="shrink-0">
                <a
                  className="block rounded-full px-2.5 py-1.5 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400 sm:px-3"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Let's Talk CTA */}
        <a
          href="#lets-talk"
          className="shrink-0 rounded-full bg-orange-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm shadow-orange-600/30 transition-all hover:bg-orange-500 hover:shadow-orange-600/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 sm:px-4 sm:py-2"
        >
          Let&apos;s Talk
        </a>
      </div>
    </header>
  );
}

export default Navbar;
