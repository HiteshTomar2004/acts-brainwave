import { sponsors } from "./data";
import SponsorLogo from "./components/SponsorLogo";

export default function SponsorsCarousel() {
  return (
    <div
      className="
            rounded-3xl
            overflow-hidden

            bg-linear-to-r
            from-[#DFFF4F]/30
            via-[#F5FFD8]/20
            to-white/10

            backdrop-blur-xl

            border
            border-white/10

            shadow-xl

            py-8

            transition-all
            duration-300

            hover:border-lime-300/40
            hover:shadow-[0_0_30px_rgba(217,255,56,0.25)]
            hover:scale-[1.01]
        "
    >
      <div className="carousel-track">
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          <SponsorLogo
            key={`${sponsor.id}-${index}`}
            sponsor={sponsor}
          />
        ))}
      </div>
    </div>
  );
}