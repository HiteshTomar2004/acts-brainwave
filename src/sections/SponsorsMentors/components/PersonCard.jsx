export default function PersonCard({ person }) {
  return (
    <div
      className="
        w-72
        h-115

        md:w-80
        md:h-127.5

        flex
        flex-col

        rounded-4xl
        overflow-hidden

       bg-linear-to-b
        from-white/8
        via-white/4
        to-transparent

        shadow-2xl

        hover:border-lime-300/40
        hover:shadow-[0_20px_50px_rgba(180,255,80,0.18)]

        transition-all
        duration-300
      "
    >
      {/* Image */}
      <div className="relative h-[68%] shrink-0">
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
            h-24

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

          p-5

         bg-linear-to-b
        from-zinc-600
        via-zinc-900/92
        to-black/95

          border-t
          border-lime-300/90

          flex
          flex-col
        "
      >
        <h3 className="text-xl font-bold text-white">
          {person.name}
        </h3>

        <p className="mt-1 text-zinc-400">
          {person.organization}
        </p>

        <span
          className="
            inline-flex
            w-fit

            mt-4

            rounded-full

            bg-lime-300/10
            border
            border-lime-300/25

            px-4
            py-1

            text-sm
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