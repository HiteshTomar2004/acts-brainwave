import SectionHeading from "./components/SectionHeading";
import SponsorsCarousel from "./SponsorsCarousel";
import MentorsSection from "./MentorsCarousel";

import sponsorsHeading from "../../assets/images/sponsorsHeading.png";
import mentorsHeading from "../../assets/images/mentorsJudgesHeading.png";

import backgroundImage from "../../assets/images/sponsorsMentorsBG.png";
import topLeftSticker from "../../assets/stickers/faqSticker.png";
import topRightSticker from "../../assets/stickers/questionSticker.png";

export default function SponsorsMentors() {
    return (
        <section
            id="sponsors-mentors"
            className="
                relative
                bg-black
                text-white
                overflow-hidden
                pt-16
                pb-16
                md:pt-32
                md:pr-16
                md:pl-16
                md:pb-32
            "
        >

            {/* ---------------- Background Image ---------------- */}

            <img
                src={backgroundImage}
                alt=""
                className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    -top-4
                    object-cover
                    object-[center_20%]

                    opacity-70

                    z-0
                    pointer-events-none
                    select-none
                "
            />

            {/* ---------------- Background Decorations ---------------- */}

            <img
                src={topLeftSticker}
                alt=""
                className="
                    absolute

                    -top-4
                    left-2

                    w-28

                    md:w-36
                    lg:w-52

                    md:-top-4
                    lg:-top-4

                    md:left-4
                    lg:left-6

                    z-10
                "
            />

            <img
                src={topRightSticker}
                alt=""
                className="
                    absolute

                    top-2
                    right-2

                    w-32

                    md:w-40
                    lg:w-48

                    md:top-4
                    lg:top-6

                    md:right-4
                    lg:right-6

                    z-10
                "
            />

            {/* ---------------- Main Content ---------------- */}

            <div className="relative z-20 max-w-420 mx-auto px-4 sm:px-6 lg:px-8">

                {/* Sponsors */}

                <SectionHeading
                    image={sponsorsHeading}
                    alt="Sponsors"
                    className="mb-10"
                    imageClassName="max-w-[300px] md:max-w-3xl"
                />

                <SponsorsCarousel />

                {/* Mentors & Judges */}

                <SectionHeading
                    image={mentorsHeading}
                    alt="Mentors & Judges"
                    className="mt-20 mb-10"
                    imageClassName="max-w-[360px] md:max-w-5xl"
                />

                <MentorsSection />

            </div>

        </section>
    );
}