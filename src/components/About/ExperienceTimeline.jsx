import { motion } from "framer-motion";

const experiences = [
  {
    title: "Trainee Engineer",
    company: "Actin Technologies Pune",
    date: "July 2025 - Apr 2026",
  },
  {
    title: "AI/ML Intern",
    company: "Actin Technologies Pune",
    date: "Feb 2025 - June 2025",
  },
  {
    title: "BE Computer Engineering",
    company: "SPPU - 8.61 CGPA",
    date: "Graduated 2025",
  },
];

const ExperienceTimeline = () => {
  return (
    <div className="relative">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.title}
          initial={{
            opacity: 0,
            y: 40,
            }}
            whileInView={{
            opacity: 1,
            y: 0,
            }}
          viewport={{ once: false }}
          transition={{
            duration: 0.6,
            delay: index * 0.2,
          }}
          className="relative flex gap-8 pb-20"
        >
          {/* Timeline */}
          <div className="relative flex flex-col items-center">
            <div className="h-6 w-6 rounded-full bg-violet-500 border border-violet-300 shadow-[0_0_20px_rgba(139,92,246,0.5)]" />

            {index !== experiences.length - 1 && (
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: false }}
                transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                }}
                className="mt-2 w-[1px] bg-violet-500/50"
                />
            )}
          </div>

          {/* Content */}
          <div>
            <p className="text-gray-400 text-lg">
              {exp.date}
            </p>

            <h3 className="text-2xl font-medium mt-1">
              {exp.title}
            </h3>

            <p className="text-gray-400 text-lg mt-1">
              {exp.company}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default ExperienceTimeline;