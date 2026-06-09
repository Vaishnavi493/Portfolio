import { motion } from 'framer-motion';

const techStack = [
  'React.js',
  'Redux',
  'Tailwind CSS',
  'REST APIs',
  'Figma → Code',
];

const openResume = () => {
  window.open('/resume_vaishnavi.pdf', '_blank');
}

const HeroContent = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{
        once: false,
        amount: 0.3,
    }}
    transition={{ duration: 0.8 }}
    >
      <div className="flex items-center gap-3 mb-8">
        <span className="w-2 h-2 rounded-full bg-violet-500" />
        <span className="text-violet-400 text-md uppercase tracking-widest">
          Available For Opportunities
        </span>
      </div>

      <h1 className="font-bold leading-none">
        <span className="block text-5xl md:text-7xl lg:text-8xl">
          Vaishnavi
        </span>

        <span
          className="block text-5xl md:text-7xl lg:text-8xl mt-2"
          style={{
            color: 'transparent',
            WebkitTextStroke: '1.5px #7c5cfc',
          }}
        >
          Adsure
        </span>
      </h1>

      <h2 className="mt-6 text-xl text-violet-400">
        Frontend Developer
      </h2>

      <p className="mt-6 text-gray-400 max-w-xl text-lg leading-relaxed">
        Building production-grade React interfaces and automation systems.
        Experience working in AI/ML product environments with a strong focus
        on scalable frontend development.
      </p>

      <div className="flex flex-wrap gap-2 mt-6">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 mt-8">
        <button className="px-6 py-3 rounded-lg bg-violet-600 hover:bg-violet-700 transition" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
          Get in Touch
        </button>

        <button className="px-6 py-3 rounded-lg border border-violet-500/30 text-violet-400 hover:bg-violet-500/10 transition" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
          View Work
        </button>

        <button className="px-6 py-3 rounded-lg border border-violet-500/30 text-violet-400 hover:bg-violet-500/10 transition" onClick={openResume}>
          Resume
        </button>
      </div>
    </motion.div>
  );
}

export default HeroContent;