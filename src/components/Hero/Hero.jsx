import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0a0a0f] text-white px-6 py-10 md:px-12 lg:px-20"
    >
      {/* Mesh Glow Layer */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] h-[500px] w-[500px] rounded-full bg-violet-600/30 blur-[150px]" />

        <div className="absolute bottom-[-100px] right-[-100px] h-[500px] w-[500px] rounded-full bg-blue-600/25 blur-[150px]" />

        <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/20 blur-[120px]" />
      </div>

      {/* Grid Layer */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124,92,252,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,92,252,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Dot Layer */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(124,92,252,0.5) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/30 to-[#0a0a0f]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid min-h-[85vh] items-center gap-16 lg:grid-cols-2">
          <HeroContent />
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

export default Hero;