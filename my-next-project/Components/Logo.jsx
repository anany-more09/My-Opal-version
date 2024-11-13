import { motion } from "framer-motion";

export default function Subtitle({ label }) {
  // Animation settings for the Subtitle
  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.6 },
    viewport: { once: true, amount: 0.3 },
  };

  return (
    <div>
      <motion.img
        src="https://opalcamera.com/_next/static/media/logo-black.3ec16790.png"
        alt="Logo"
        {...fadeIn} // Apply fade-in animation
      />
    </div>
  );
}
