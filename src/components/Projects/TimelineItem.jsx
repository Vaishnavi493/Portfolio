import { motion } from "framer-motion";
import { Rocket, Code2, Cpu, Briefcase } from "lucide-react";

const icons = [Rocket, Code2, Cpu, Briefcase];

const TimelineItem = ({ item, index }) => {
  const isLeft = index % 2 === 0;

  const Icon = icons[index % icons.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className={`relative flex ${
        isLeft ? "justify-start" : "justify-end"
      }`}
    >
      {/* Node */}
      <div className="absolute left-1/2 top-8 -translate-x-1/2 z-20">
        <div
          className="
            h-14
            w-14
            rounded-full
            border
            border-violet-500/30
            bg-[#12121a]
            flex
            items-center
            justify-center
            shadow-[0_0_25px_rgba(124,92,252,0.4)]
          "
        >
          <Icon size={20} className="text-violet-400" />
        </div>
      </div>

      {/* Card */}
      <motion.div
        whileHover={{
          y: -8,
          borderColor: "rgba(124,92,252,0.4)",
        }}
        className="
          w-full
          md:w-[42%]
          rounded-3xl
          border
          border-violet-500/20
          bg-violet-500/5
          backdrop-blur-md
          p-6
          transition-all
        "
      >
        <span className="text-sm text-violet-400">
          {item.year}
        </span>

        <h3 className="mt-2 text-2xl font-semibold">
          {item.project}
        </h3>

        <p className="mt-2 text-gray-400">
          {item.title} • {item.company}
        </p>

        <p className="mt-4 text-gray-400 leading-relaxed">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {item.tech.map((tech) => (
            <span
              key={tech}
              className="
                px-3
                py-1
                rounded-full
                text-sm
                bg-violet-500/10
                text-violet-300
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
      {/* Preview */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ amount: 0.4 }}
  transition={{ duration: 0.7 }}
  whileHover={{
    rotateY: 8,
    scale: 1.03,
  }}
  className={`
    hidden lg:block
    absolute top-0
    ${isLeft ? "right-0" : "left-0"}
    w-[36%]
  `}
>
  <div className="bg-[#0d0d12]">
  <div className="flex gap-2 px-4 py-3 border-b border-violet-500/10">
    <div className="h-3 w-3 rounded-full bg-red-500" />
    <div className="h-3 w-3 rounded-full bg-yellow-500" />
    <div className="h-3 w-3 rounded-full bg-green-500" />
  </div>

  <img
    src={item.image}
    alt={item.project}
    className="w-full h-[220px] object-cover"
  />
</div>
</motion.div>
    </motion.div>
    
  );
};

export default TimelineItem;