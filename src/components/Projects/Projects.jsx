import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TimelineItem from "./TimelineItem";
import { projects } from "./ProjectsData";

const Projects = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 0.8],
    ["0%", "100%"]
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative px-6 py-24 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 h-96 w-96 rounded-full bg-violet-600/10 blur-[160px]" />

      <div className="max-w-7xl mx-auto">
        <span className="text-violet-400 uppercase tracking-widest">
          Projects
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-semibold">
          My Developer Journey
        </h2>

        <p className="mt-4 max-w-2xl text-gray-400">
          A timeline of projects, learning experiences, and systems I've built
          throughout my engineering journey.
        </p>

        {/* Timeline */}
        <div className="relative mt-24">

          <div className="relative">

            {/* Static Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-violet-500/10 -translate-x-1/2" />

            {/* Animated Line */}
            <motion.div
              style={{ height: lineHeight }}
              className="
                absolute
                left-1/2
                top-0
                w-[3px]
                bg-gradient-to-b
                from-violet-400
                via-fuchsia-500
                to-blue-500
                -translate-x-1/2
                rounded-full
              "
            />

            {/* Timeline Items */}
            <div className="space-y-28">
              {projects.map((project, index) => (
                <TimelineItem
                  key={project.project}
                  item={project}
                  index={index}
                />
              ))}
            </div>

            {/* End Node */}
            <div className="flex justify-center mt-16">
              <motion.div
                animate={{
                  scale: [1, 1.25, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  h-6
                  w-6
                  rounded-full
                  bg-violet-500
                  shadow-[0_0_40px_rgba(124,92,252,1)]
                "
              />
            </div>
          </div>

          {/* Connector */}
          <div className="flex flex-col items-center">
            <div className="h-20 border-l border-dashed border-violet-500/40" />
          </div>

          {/* Next Chapter */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div
              className="
                max-w-xl
                rounded-3xl
                border
                border-violet-500/20
                bg-violet-500/5
                backdrop-blur-md
                p-8
                text-center
              "
            >
              <h3 className="text-2xl font-semibold">
                Next Chapter
              </h3>

              <p className="mt-4 text-gray-400">
                Currently looking for opportunities to build impactful products
                and grow as a frontend engineer.
              </p>

              <div className="mt-6 font-mono text-violet-400">
                {"> awaiting_opportunity_"}
                <span className="animate-pulse">|</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Projects;