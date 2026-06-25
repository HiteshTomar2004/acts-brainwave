export default function PersonCard({ person }) {
  return (
    <div
      className="
        w-52
        h-85

        sm:w-56
        sm:h-95

        md:w-72
        md:h-115

        lg:w-80
        lg:h-127.5

        flex
        flex-col

        rounded-4xl
        overflow-hidden

        bg-linear-to-b
        from-white/8
        via-white/4
        to-transparent

        shadow-2xl

        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_0_35px_rgba(180,255,80,0.22)]
      "
    >
      {/* Image */}
      <div className="relative h-[60%] md:h-[68%] shrink-0">
        <img
          src={person.image}
          alt={person.name}
          className="w-full h-full object-cover"
        />

        <div
          className="
            absolute
            inset-x-0
            bottom-0

            h-16
            md:h-24

            bg-linear-to-t
            from-black
            via-black/70
            to-transparent
          "
        />
      </div>

      {/* Info */}
      <div
        className="
          flex-1
          p-3
          md:p-5

          bg-linear-to-b
          from-zinc-700
          via-zinc-900/90
          to-black

          border-t
          border-white/10

          flex
          flex-col
          justify-between
        "
      >
        <div>
          <h3 className="text-base md:text-xl font-bold text-white leading-tight">
            {person.name}
          </h3>

          <p className="mt-3 text-xs md:text-base text-zinc-400 leading-tight">
            {person.organization}
          </p>
        </div>

        <span
          className="
            inline-flex
            w-fit

            rounded-full

            bg-lime-300/10
            border
            border-lime-300/20

            px-3
            md:px-4

            py-1

            text-[11px]
            md:text-sm

            font-medium
            text-lime-300
        "
        >
          {person.role}
        </span>
      </div>
    </div>
  );
}