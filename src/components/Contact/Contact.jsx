import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useState } from "react";
import { Mail, FileDown, ArrowUpRight} from "lucide-react";
import { FaGithub ,FaLinkedin} from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const links = [
  {
    label: "vsadsure123@gmail.com",
    icon: Mail,
    href: "mailto:vsadsure123@gmail.com",
  },
  {
    label: "GitHub",
    icon: FaGithub,
    href: "https://github.com/Vaishnavi493",
  },
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/vaishnavi-adsure/",
  },
  {
    label: "Download Resume (PDF)",
    icon: FileDown,
    href: "/resume_vaishnavi.pdf",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});


const Contact = () => {
  const [isSending, setIsSending] = useState(false);

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    setIsSending(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Your message has been sent successfully. I'll get back to you soon!");

      form.current.reset();
    } catch (error) {
      console.error(error);

      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-6 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{ background: "#0a0a0f" }}
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-violet-700/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* Left */}
        <div>
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white leading-tight"
            {...fadeUp(0)}
          >
            Let's build something 
            <span className="text-violet-500"> great.</span>
          </motion.h2>

          <motion.p
            className="mt-6 text-[#9a98b0] text-base leading-relaxed max-w-sm"
            {...fadeUp(0.1)}
          >
            Open to full-time frontend roles, internships, and freelance
            projects. I reply within 24 hours.
          </motion.p>

          {/* Contact links */}
          <motion.div
            className="mt-10 flex flex-col gap-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } } }}
          >
            {links.map(({ label, icon: Icon, href }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center justify-between px-4 py-3.5 rounded-xl text-white/80 text-sm font-medium transition-colors"
                style={{
                  background: "rgba(15,14,28,0.6)",
                  border: "0.5px solid rgba(124,92,252,0.2)",
                }}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{
                  borderColor: "rgba(124,92,252,0.6)",
                  backgroundColor: "rgba(124,92,252,0.08)",
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(124,92,252,0.15)" }}
                  >
                    <Icon size={14} className="text-violet-400" />
                  </span>
                  {label}
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-violet-500/50 group-hover:text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right — Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4"
          {...fadeUp(0.15)}
        >
          {/* Name */}
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-white/30 mb-1.5 font-medium">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="e.g. Rahul Sharma"
              className="w-full px-4 py-3 rounded-xl text-sm text-white/80 placeholder-white/20 outline-none transition-colors"
              style={{
                background: "rgba(15,14,28,0.6)",
                border: "0.5px solid rgba(124,92,252,0.2)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(124,92,252,0.55)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(124,92,252,0.2)")}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-white/30 mb-1.5 font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-xl text-sm text-white/80 placeholder-white/20 outline-none transition-colors"
              style={{
                background: "rgba(15,14,28,0.6)",
                border: "0.5px solid rgba(124,92,252,0.2)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(124,92,252,0.55)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(124,92,252,0.2)")}
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-white/30 mb-1.5 font-medium">
              Message
            </label>
            <textarea
              rows={5}
              name="message"
              required
              placeholder="Hi Vaishnavi, I'd love to..."
              className="w-full px-4 py-3 rounded-xl text-sm text-white/80 placeholder-white/20 outline-none resize-none transition-colors"
              style={{
                background: "rgba(15,14,28,0.6)",
                border: "0.5px solid rgba(124,92,252,0.2)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(124,92,252,0.55)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(124,92,252,0.2)")}
            />
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={isSending}
            className="w-full py-3.5 rounded-xl text-sm font-medium text-white flex items-center justify-center gap-2 mt-1 disabled:opacity-70 disabled:cursor-not-allowed"
            style={{ background: "rgba(124,92,252,0.75)" }}
          >
            <Mail size={14} />

            {isSending ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>

      </div>
    </section>
  );
};

export default Contact;