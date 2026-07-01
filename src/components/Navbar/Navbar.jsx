import{ useState, useLayoutEffect, useRef, useCallback } from "react";

/**
 * Navbar — esports/gaming style navigation bar
 *
 * - Hexagonal "pointed cap" silhouette on the left/right ends via clip-path,
 *   sized with clamp() so it scales smoothly down to mobile widths.
 * - The active-link underline is a single absolutely-positioned bar that
 *   measures the active link's position/width and animates (CSS transition)
 *   to it on click, instead of being re-mounted per item.
 * - Mobile: nav links collapse behind a hamburger toggle that opens a
 *   slide-down panel; the decorative dot-grid icon has been removed
 *   entirely (desktop and mobile).
 */
export default function Navbar() {
  const links = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Prize Pool", href: "#prize" },
    { label: "Contact Us", href: "#contact" },
  ];

  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navRef = useRef(null);
  const linkRefs = useRef([]);
  const [underline, setUnderline] = useState({ left: 0, width: 0, ready: false });

 
  const TIP = "clamp(12px, 4vw, 22px)";

  const measureUnderline = useCallback(() => {
    const idx = links.findIndex((l) => l.label === active);
    const el = linkRefs.current[idx];
    if (el) {
      setUnderline({ left: el.offsetLeft, width: el.offsetWidth, ready: true });
    }
  }, [active]);

  useLayoutEffect(() => {
    measureUnderline();
    window.addEventListener("resize", measureUnderline);
    return () => window.removeEventListener("resize", measureUnderline);
  }, [measureUnderline]);

  const selectLink = (label) => {
    setActive(label);
    setMobileOpen(false);
  };

  return (
    <nav className="w-full bg-transparent md:bg-[#050505] py-3 sm:py-4 px-3 sm:px-6">
      <div className="relative mx-auto w-full max-w-6xl">
        {/* ---------- Mobile: just the hamburger icon ---------- */}
        <div className="md:hidden flex justify-end mt-6 mr-4">
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex flex-col items-end gap-[5px] w-6 shrink-0"
          >
            <span
              className={`block h-[2px] bg-gray-200 rounded-full transition-all duration-300 ${
                mobileOpen ? "w-5 rotate-45 translate-y-[7px]" : "w-5"
              }`}
            />
            <span
              className={`block h-[2px] bg-gray-200 rounded-full transition-all duration-300 ${
                mobileOpen ? "opacity-0" : "w-3.5 opacity-100"
              }`}
            />
            <span
              className={`block h-[2px] bg-gray-200 rounded-full transition-all duration-300 ${
                mobileOpen ? "w-5 -rotate-45 -translate-y-[7px]" : "w-5"
              }`}
            />
          </button>
        </div>

        {/* ---------- Desktop: hexagon bar ---------- */}
        <div
          className="relative hidden md:block"
          style={{
            clipPath: `polygon(${TIP} 0%, calc(100% - ${TIP}) 0%, 100% 50%, calc(100% - ${TIP}) 100%, ${TIP} 100%, 0% 50%)`,
          }}
        >
          {/* Outer glow / hairline edge */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.14) 0%, rgba(196,255,0,0.18) 100%)",
            }}
          />

          {/* Left tip accent glow */}
          <div
            className="absolute top-0 bottom-0 left-0 w-28 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(196,255,0,0.6) 0%, rgba(196,255,0,0) 100%)",
              filter: "blur(10px)",
            }}
          />
          {/* Right tip accent glow */}
          <div
            className="absolute top-0 bottom-0 right-0 w-40 pointer-events-none"
            style={{
              background:
                "linear-gradient(270deg, rgba(196,255,0,0.85) 0%, rgba(196,255,0,0) 100%)",
              filter: "blur(12px)",
            }}
          />

          {/* Inset border frame, 1.5px smaller all around */}
          <div
            className="relative m-[1.5px]"
            style={{
              clipPath: `polygon(calc(${TIP} - 1.5px) 0%, calc(100% - ${TIP} + 1.5px) 0%, 100% 50%, calc(100% - ${TIP} + 1.5px) 100%, calc(${TIP} - 1.5px) 100%, 0% 50%)`,
            }}
          >
            {/* Main body fill */}
            <div className="relative bg-gradient-to-b from-[#181818] via-[#0d0d0d] to-[#050505]">
              {/* Diagonal sheen highlight */}
              <div
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background:
                    "linear-gradient(115deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0) 18%, rgba(255,255,255,0) 70%, rgba(255,255,255,0.05) 100%)",
                }}
              />

              {/* Bottom accent glow line */}
              <div
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(196,255,0,0) 0%, rgba(196,255,0,0.55) 50%, rgba(196,255,0,0) 100%)",
                }}
              />

              {/* Content row */}
              <div
                className="relative flex items-center justify-center h-14 sm:h-16 md:h-[68px]"
                style={{
                  paddingLeft: `calc(${TIP} + 14px)`,
                  paddingRight: `calc(${TIP} + 14px)`,
                }}
              >
                {/* Desktop nav links — centered */}
                <div ref={navRef} className="flex relative">
                  <ul className="flex items-center gap-10 lg:gap-14">
                    {links.map((link, i) => {
                      const isActive = active === link.label;
                      return (
                        <li key={link.label}>
                          <a
                            ref={(el) => (linkRefs.current[i] = el)}
                            href={link.href}
                            onClick={(e) => {
                              e.preventDefault();
                              selectLink(link.label);
                            }}
                            className={`text-[13px] tracking-wide font-bold uppercase transition-colors duration-200 whitespace-nowrap ${
                              isActive
                                ? "text-[#cdf500]"
                                : "text-gray-200 hover:text-[#cdf500]"
                            }`}
                          >
                            {link.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Sliding underline — animates left/width via CSS transition */}
                  <span
                    className="absolute -bottom-[20px] h-[2px] rounded-full transition-all duration-300 ease-out"
                    style={{
                      left: underline.left,
                      width: underline.width,
                      opacity: underline.ready ? 1 : 0,
                      background:
                        "linear-gradient(90deg, rgba(205,245,0,0) 0%, #cdf500 50%, rgba(205,245,0,0) 100%)",
                      boxShadow: "0 0 8px 1px rgba(205,245,0,0.7)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Mobile dropdown panel ---------- */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            mobileOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
          }`}
        >
            <div className="bg-[#0d0d0d] border border-white/10 rounded-xl px-5 py-3 flex flex-col divide-y divide-white/5">
            {links.map((link) => {
              const isActive = active === link.label;
              return (
                <li key={link.label}>
                      <a
                          key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      selectLink(link.label);
                    }}
                    className={`block py-3 text-[13px] tracking-wide font-bold uppercase transition-colors duration-200 ${
                      isActive ? "text-[#cdf500]" : "text-gray-200"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}