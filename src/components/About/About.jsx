import ExperienceTimeline from "./ExperienceTimeline";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen px-6 py-20 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 right-20 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl grid gap-20 lg:grid-cols-2 items-start">
        {/* Left */}
        <div>
          <span className="mb-10 text-md inline-block text-violet-400 uppercase tracking-widest">
            About Me
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold">
            A developer who builds things that ship
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            I’m a Computer Engineering graduate from SPPU with hands-on
            experience building <span className="text-violet-400 text-xl">React applications</span> in an AI/ML product
            environment.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Beyond UI, I have built <span className="text-violet-400 text-xl">Linux-based automation systems</span> with cron
            jobs, MS Teams webhooks, and SMTP alerts.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Currently open to full-time frontend or full-stack roles and enjoy
            crafting clean, responsive interfaces with strong attention to
            detail.
          </p>
        </div>

        {/* Right */}
        <ExperienceTimeline />
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1440 240"
          className="w-full h-[180px]"
          preserveAspectRatio="none"
        >
          {/* Back Layer */}
          <path
            d="
            M0 240
            L180 180
            L320 210
            L500 140
            L680 190
            L860 100
            L1040 160
            L1240 50
            L1440 120
            L1440 240
            Z
            "
            fill="rgba(124,92,252,0.06)"
          />

          {/* Middle Layer */}
          <path
            d="
            M0 240
            L160 200
            L340 160
            L520 190
            L700 110
            L900 150
            L1120 60
            L1280 90
            L1440 30
            L1440 240
            Z
            "
            fill="rgba(124,92,252,0.10)"
          />

          {/* Front Layer */}
          <path
            d="
            M0 240
            L140 210
            L320 170
            L500 140
            L700 90
            L900 70
            L1120 40
            L1280 25
            L1440 0
            L1440 240
            Z
            "
            fill="rgba(124,92,252,0.16)"
          />
        </svg>
      </div>
    </section>
  );
}

export default About;