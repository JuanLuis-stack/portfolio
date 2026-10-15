function Header() {
  return (
    <header
      id="header"
      className="relative isolate flex h-[100svh] min-h-[640px] items-center overflow-hidden bg-[#0b0908] px-6 pt-16 text-white sm:px-10"
    >
      <img
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[12%_center] sm:object-[20%_center] md:object-center"
        src="/Professional Portrait in Warm Gradient.png"
        alt=""
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/30 via-black/20 to-black/75 md:from-transparent md:via-black/25 md:to-black/70"
      />

      <div className="relative z-10 ml-auto mt-28 w-full min-w-0 max-w-2xl text-left md:mr-[4vw] md:mt-12 md:text-right">
        <p
          style={{ animationDelay: "150ms" }}
          className="animate-hero-item mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/65 md:ml-auto"
        >
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-green-400"
          />
          Available for hire
        </p>
        <h1
          style={{ animationDelay: "300ms" }}
          className="animate-hero-item mb-2 text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m{" "}
          <span className="text-shimmer font-serif italic text-orange-400 px-1">
            Juan Luis.
          </span>
        </h1>
        <p
          style={{ animationDelay: "450ms" }}
          className="animate-hero-item mb-5 text-xs font-medium uppercase tracking-[0.22em] text-white/55 sm:text-sm"
        >
          Full Stack Software Developer
        </p>
        <p
          style={{ animationDelay: "600ms" }}
          className="animate-hero-item ml-auto max-w-xl text-sm leading-relaxed text-white/75 sm:text-base"
        >
          I&apos;m a self-driven developer passionate about solving problems,
          writing clean code, and continuously learning. I focus on
          understanding the why behind every solution and turning knowledge into
          real-world applications.
        </p>

        <div
          style={{ animationDelay: "750ms" }}
          className="animate-hero-item mt-7 flex flex-wrap gap-3 md:justify-end"
        >
          <a
            href="https://www.linkedin.com/in/juan-luis-arias-rojas-b21693339/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Juan Luis on LinkedIn"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-4 py-2.5 text-sm text-white transition-colors hover:border-orange-400/60 hover:bg-black/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18V9.7H5.58V18h2.76ZM6.96 8.57a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2ZM18.42 18v-4.54c0-2.43-.52-4.3-3.34-4.3a2.93 2.93 0 0 0-2.64 1.45h-.04V9.7H9.75V18h2.76v-4.1c0-1.08.2-2.12 1.54-2.12 1.32 0 1.34 1.23 1.34 2.19V18h3.03Z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/JuanLuis-stack"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Juan Luis on GitHub"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-4 py-2.5 text-sm text-white transition-colors hover:border-orange-400/60 hover:bg-black/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.68-3.75-1.32-3.75-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.92.1-.72.39-1.21.71-1.49-2.47-.28-5.06-1.23-5.06-5.49 0-1.21.43-2.2 1.15-2.98-.11-.28-.5-1.41.11-2.94 0 0 .94-.3 3.06 1.14a10.63 10.63 0 0 1 5.57 0c2.13-1.44 3.06-1.14 3.06-1.14.61 1.53.23 2.66.11 2.94.72.78 1.15 1.77 1.15 2.98 0 4.27-2.6 5.21-5.08 5.48.4.35.75 1.02.75 2.06v3.1c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
