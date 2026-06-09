import { motion } from "framer-motion";
import profile from "../../assets/vaishnavi.jpeg";

const HeroVisual = () => {
  return (
    <div className="relative  lg:flex items-center justify-center h-[650px]">
      <motion.div
  animate={{ y: [0, -8, 0] }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="relative"
  style={{
    perspective: "1200px",
  }}
>
    <div
  className="relative"
  style={{
    transformStyle: "preserve-3d",
    transform: "rotateY(-18deg)",
  }}
>

      {/* Glass Layer 3 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{
            once: false,
            amount: 0.3,
        }}
        transition={{ delay: 0.4 }}
        className="
          absolute
          w-[380px]
          h-[500px]
          rounded-3xl
          bg-white/2
          backdrop-blur-lg
          border border-white/10
          rotate-[12deg]
          translate-x-14
          -translate-y-2
        "
        style={{
        transform: "translateZ(-60px)",
        }}
      />

      {/* Glass Layer 2 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{
            once: false,
            amount: 0.3,
        }}
        transition={{ delay: 0.3 }}
        className="
          absolute
          w-[380px]
          h-[500px]
          rounded-3xl
          bg-white/5
          backdrop-blur-lg
          border border-white/10
          rotate-[6deg]
          translate-x-8
        "
        style={{
        transform: "translateZ(-40px)",
        }}
      />

      {/* Glass Layer 1 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{
            once: false,
            amount: 0.3,
        }}
        transition={{ delay: 0.2 }}
        className="
          absolute
          w-[380px]
          h-[500px]
          rounded-3xl
          bg-white/5
          backdrop-blur-lg
          border border-white/10
          rotate-[2deg]
        "
        style={{
        transform: "translateZ(-20px)",
        }}
      />

      {/* Main Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{
            once: false,
            amount: 0.3,
        }}
        transition={{ duration: 0.8 }}
        className="
          relative
          z-20
          w-[380px]
          h-[500px]
          overflow-hidden
          rounded-3xl
          border border-white/10
          shadow-[0_20px_60px_rgba(0,0,0,0.6)]
        "
        style={{
        transform: "translateZ(30px)",
        }}
      >
        <img
          src={profile}
          alt="Vaishnavi Adsure"
          className="
            w-full
            h-full
            object-cover
            grayscale
            contrast-125
            brightness-90
            hover:grayscale-0
          "
        />

        {/* Purple Overlay */}
        <div className="absolute inset-0 bg-violet-500/10" />
      </motion.div>

      {/* Code Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{
            once: false,
            amount: 0.3,
        }}
        transition={{ delay: 0.5 }}
        className="
            absolute
            z-30
            left-[-150px]
            top-[10px]
            text-violet-300/70
            text-[11px]
            font-mono
            leading-5
        }}"
        
        style={{
        transform: "translateZ(60px)",
        }}
      >
        <pre>
            {
            `
            <react_component>

            fetch('/api/opportunities')

            const Hero = () => {
            return (
                <Portfolio />
            )
            }

            </react_component>`}
        </pre>
      </motion.div>

      {/* UI Wireframe Overlay */}
      <motion.div
        
        className="
          absolute
          z-30
          right-[-70px]
            bottom-[2px]
          w-48
          rounded-xl
          border
          border-violet-400/40
          bg-violet-500/5
          backdrop-blur-sm
          p-4
        "
        style={{
  transform: "translateZ(80px)",
}}
      >
        <div className="space-y-3">

          <div className="h-2 rounded bg-violet-400/30" />

          <div className="h-20 rounded border border-violet-400/30" />

          <div className="grid grid-cols-3 gap-2">
            <div className="h-10 rounded border border-violet-400/30" />
            <div className="h-10 rounded border border-violet-400/30" />
            <div className="h-10 rounded border border-violet-400/30" />
          </div>

        </div>
      </motion.div>
</div>
</motion.div>

    </div>
  );
}

export default HeroVisual;