import { motion } from "framer-motion";

const row1 = [
  { name: "React.js",         icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "JavaScript ES6+",  icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "HTML5",            icon: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "CSS3",             icon: "https://cdn.simpleicons.org/css3/1572B6" },
  { name: "Tailwind CSS",     icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Bootstrap",        icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
  { name: "Redux",            icon: "https://cdn.simpleicons.org/redux/764ABC" },
];

const row2 = [
  { name: "Python",           icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "C++",              icon: "https://cdn.simpleicons.org/cplusplus/00599C" },
  { name: "MongoDB Atlas",    icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "MySQL",            icon: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "JSON Handling",    icon: "https://cdn.simpleicons.org/json/ffffff" },
];

const row3 = [
  { name: "Git",              icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "GitHub",           icon: "https://cdn.simpleicons.org/github/ffffff" },
  { name: "Postman",          icon: "https://cdn.simpleicons.org/postman/FF6C37" },
  { name: "Docker",           icon: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Linux",            icon: "https://cdn.simpleicons.org/linux/FCC624" },
  { name: "Bash Scripting",   icon: "https://cdn.simpleicons.org/gnubash/ffffff" },
  { name: "Cron Jobs",        icon: "https://cdn.simpleicons.org/clockify/03A9F4" },
];

const row4 = [
  { name: "Figma",            icon: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "Canva",            icon: "https://cdn.simpleicons.org/canva/00C4CC" },
  { name: "VS Code",          icon: "https://cdn.simpleicons.org/visualstudiocode/007ACC" },
  { name: "Jupyter Notebook", icon: "https://cdn.simpleicons.org/jupyter/F37626" },
  { name: "Google Colab",     icon: "https://cdn.simpleicons.org/googlecolab/F9AB00" },
  { name: "FastAPI Integration", icon: "https://cdn.simpleicons.org/fastapi/009688" },
];

const categories = [
  { label: "Frontend",                color: "#61DAFB", row: row1, direction: "left",  speed: 28 },
  { label: "Languages & Data",        color: "#47A248", row: row2, direction: "right", speed: 32 },
  { label: "Tools & DevOps",          color: "#FCC624", row: row3, direction: "left",  speed: 36 },
  { label: "Design & Dev Environment",color: "#F24E1E", row: row4, direction: "right", speed: 24 },
];

function Pill({ name, icon }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white/80 whitespace-nowrap mx-2 flex-shrink-0"
      style={{
        background: "rgba(15, 14, 28, 0.8)",
        border: "0.5px solid rgba(124,92,252,0.35)",
      }}
    >
      <img
        src={icon}
        alt={name}
        className="w-4 h-4 object-contain flex-shrink-0"
        onError={(e) => { e.target.style.display = "none"; }}
      />
      {name}
    </span>
  );
}

function MarqueeRow({ items, direction, speed = 30 }) {
  const duplicated = [...items, ...items, ...items];
  const isLeft = direction === "left";

  return (
    <div className="relative overflow-hidden w-full max-w-7xl mx-auto">
      <div
        className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #0a0a0f, transparent)" }}
      />
      <div
        className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #0a0a0f, transparent)" }}
      />
      <motion.div
        className="flex"
        animate={{ x: isLeft ? ["0%", "-33.33%"] : ["-33.33%", "0%"] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {duplicated.map((item, i) => (
          <Pill key={`${item.name}-${i}`} name={item.name} icon={item.icon} />
        ))}
      </motion.div>
    </div>
  );
}

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 overflow-hidden"
      style={{ background: "#0a0a0f" }}
    >
      <div className="absolute top-20 right-20 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 h-64 w-64 rounded-full bg-violet-800/10 blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="px-6 md:px-12 lg:px-20 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.span
            className="inline-block text-violet-400 text-md uppercase tracking-widest mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Skills
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-semibold text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What I work with
          </motion.h2>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="flex flex-col gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, x: cat.direction === "left" ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
          >
            {/* Category label */}
            <div className="px-6 md:px-12 lg:px-20 mb-3">
              <div className="max-w-7xl mx-auto flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: cat.color }}
                />
                <span
                  className="text-xs font-medium uppercase tracking-widest"
                  style={{ color: cat.color, opacity: 0.85 }}
                >
                  {cat.label}
                </span>
              </div>
            </div>

            <MarqueeRow items={cat.row} direction={cat.direction} speed={cat.speed} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;