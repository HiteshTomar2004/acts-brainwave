import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PiDotsNineBold } from "react-icons/pi";
const navLinks = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT US", href: "#about" },
  { name: "PRIZE POOL", href: "#prize" },
  { name: "CONTACT US", href: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("HOME");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-5 left-0 w-full z-50 flex flex-col items-center">
      <div className="relative w-full">
        {/* Glow line top */}
        <div
          className="absolute top-0 left-[5%] right-[5%] h-px pointer-events-none"
          
        />

        {/* Main nav bar */}
        <div
          className="relative flex items-center max-sm:justify-end justify-center px-[clamp(1rem,4vw,3rem)] h-[70px] max-md:h-[60px] border-b border-[rgba(200,255,0,0.15)] max-md:border-none max-md:rounded-none"
          
        >
          {/* Logo */}
          {/* <div className="shrink-0 w-[50px] h-[36px] flex items-center justify-center">
            <svg
              viewBox="0 0 60 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M10 30C10 30 15 10 30 8C35 7.5 40 12 42 15C44 18 48 20 55 18C55 18 50 22 45 25C40 28 30 32 20 30L10 30Z"
                fill="white"
              />
              <path
                d="M5 25C5 25 12 18 22 16"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>*/}

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-[clamp(1.5rem,3vw,3rem)]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-[0.85rem] font-semibold tracking-[0.12em] uppercase no-underline py-2 transition-colors duration-200 ${
                  active === link.name
                    ? "text-[#c8ff00] drop-shadow-[0_0_12px_rgba(200,255,0,0.5)]"
                    : "text-white/70 hover:text-white"
                }`}
                onClick={() => setActive(link.name)}
              >
                {link.name}
                {active === link.name && (
                  <motion.div
                    className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 w-[60%] h-[2px] rounded-full"
                    style={{
                      background: "#c8ff00",
                      boxShadow:
                        "0 0 8px rgba(200,255,0,0.6), 0 0 20px rgba(200,255,0,0.3)",
                    }}
                    layoutId="navIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden bg-transparent  rounded-md text-[#c8ff00] text-[1.3rem] p-[0.4rem_0.5rem] cursor-pointer hover:bg-[rgba(200,255,0,0.1)] hover:border-[#c8ff00] transition-all duration-200"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <PiDotsNineBold />
          </button>
        </div>

        {/* Glow line bottom */}
        <div
        
          className={ `bottom-0 left-[5%] right-[5%] h-px pointer-events-none`}
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(200,255,0,0.5) 20%, rgba(200,255,0,0.8) 50%, rgba(200,255,0,0.5) 80%, transparent 100%)",
            boxShadow:
              "0 0 8px rgba(200,255,0,0.4), 0 0 20px rgba(200,255,0,0.15)",
          }}
        />

        {/* Left angled tip */}
        {/* <div
          className="absolute top-1/2 -translate-y-1/2 left-0 w-5 h-[60%] pointer-events-none max-md:hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(200,255,0,0.3), transparent)",
            clipPath: "polygon(100% 0%, 100% 100%, 0% 80%, 0% 20%)",
          }}
        />*/}

        {/* Right angled tip */}
        {/* <div
          className="absolute top-1/2 -translate-y-1/2 right-0 w-5 h-[60%] pointer-events-none max-md:hidden"
          style={{
            background:
              "linear-gradient(-135deg, rgba(200,255,0,0.3), transparent)",
            clipPath: "polygon(0% 0%, 0% 100%, 100% 80%, 100% 20%)",
          }}
        />*/}
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="w-full flex flex-col bg-[rgba(10,10,10,0.98)] border-b border-[rgba(200,255,0,0.2)] p-4 gap-3 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[0.9rem] font-semibold tracking-[0.1em] uppercase no-underline py-[0.6rem] border-b border-white/5 transition-colors duration-200 ${
                  active === link.name
                    ? "text-[#c8ff00] drop-shadow-[0_0_10px_rgba(200,255,0,0.4)]"
                    : "text-white/70"
                }`}
                onClick={() => {
                  setActive(link.name);
                  setMobileOpen(false);
                }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
