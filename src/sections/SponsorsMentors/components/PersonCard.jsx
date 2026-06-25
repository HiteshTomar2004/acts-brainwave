export default function PersonCard({
    person,
    reverse = false,
}) {
    return (
        <div
            className={`
                "w-[90%]"
                flex
                flex-col
                md:flex-row
                ${reverse ? "md:flex-row-reverse" : ""}

                items-center
                gap-4

                rounded-3xl

                bg-linear-to-r
                from-[#DFFF4F]/15
                via-white/10
                to-white/5

                backdrop-blur-xl

                border
                border-white/10

                shadow-xl

                p-5

                hover:-translate-y-1
                hover:border-lime-300/30
                hover:shadow-[0_0_20px_rgba(217,255,56,0.2)]

                transition-all
                duration-300
            `}
        >

            {/* Image */}

            <div className="shrink-0">
                <img
                    src={person.image}
                    alt={person.name}
                    className="
                        w-28
                        h-28
                        md:w-32
                        md:h-36

                        rounded-2xl
                        object-cover
                    "
                />
            </div>

            {/* Content */}

            <div
                className={`
                    flex-1

                    flex
                    flex-col
                    justify-center

                    text-center
                    md:text-left

                    ${reverse
                        ? "md:text-right md:pr-4"
                        : "md:text-left md:pl-4"
                    }
                `}
            >
                <h3 className="text-xl md:text-2xl font-bold">
                    {person.name}
                </h3>

                <p className="mt-2 text-sm md:text-base text-purple-400">
                    {person.role}
                </p>

                <p className="mt-1 text-sm md:text-base text-zinc-300">
                    {person.organization}
                </p>
            </div>

        </div>
    );
}