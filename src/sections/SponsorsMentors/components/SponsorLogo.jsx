export default function SponsorLogo({ sponsor }) {
  return (
    <div
      className="
        flex
        items-center
        justify-center

        w-32
        h-20

        md:w-40
        md:h-24

        shrink-0
      "
    >
      <img
        src={sponsor.logo}
        alt={sponsor.name}
        className="
          max-w-full
          max-h-full
          object-contain
        "
      />
    </div>
  );
}