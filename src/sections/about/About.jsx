import brainwaveLogo from "../../assets/logos/brainwaveLogoAbout.png";

import about1 from "../../assets/images/about1.png";
import about2 from "../../assets/images/about2.png";
import about3 from "../../assets/images/about3.png";
import about4 from "../../assets/images/about4.png";
import about5 from "../../assets/images/about5.png";

import smiley from "../../assets/stickers/smiley.png";
import cautionTape from "../../assets/stickers/cautionTape2.png";
import sparkElement from "../../assets/stickers/sparkBlazeElement14.png";

export default function About() {
  return (
    <section id="about" className="bg-black text-white px-4 py-16 sm:px-6 md:py-24 lg:px-20 relative z-10">
      <img
        src={smiley}
        alt=""
        className="
          absolute
          -left-5
          top-25
          w-40
          
          md:w-72
          md:-left-5
          md:top-42.5
          xl:w-96
          -z-10
        "
      />
      <img
        src={cautionTape}
        alt=""
        className="
          absolute
          right-0
          bottom-40
          w-60

          md:right-0
          md:bottom-24
          md:w-72
          xl:w-80
          xl:bottom-0
          -z-10
        "
      />
      <img
        src={sparkElement}
        alt=""
        className="
          absolute
          top-40
          right-0
          w-32

          md:top-40
          md:right-0
          md:w-60
          xl:top-32
          xl:w-96

          -z-10
        "
      />

      {/* Heading */}
      <div className="text-center mb-10 md:mb-14">
        <img
          src={brainwaveLogo}
          alt="Brainwave"
          className="mx-auto max-w-90 md:max-w-lg lg:max-w-3xl xl:max-w-5xl object-contain"
        />
      </div>

      {/* Image Collage */}
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-5 md:px-0 mb-12">

        {/* Mobile Layout */}
        <div className="grid grid-cols-2 gap-3 md:hidden">

          <div className="h-48 rounded-2xl overflow-hidden">
            <img src={about5} className="w-full h-full object-cover" />
          </div>

          <div className="h-48 rounded-2xl overflow-hidden">
            <img src={about4} className="w-full h-full object-cover" />
          </div>

          <div className="h-48 rounded-2xl overflow-hidden">
            <img src={about2} className="w-full h-full object-cover" />
          </div>

          <div className="h-48 rounded-2xl overflow-hidden">
            <img src="https://picsum.photos/400/600?random=4" className="w-full h-full object-cover" />
          </div>

          <div className="col-span-2 h-56 rounded-2xl overflow-hidden">
            <img src={about1} className="w-full h-full object-cover" />
          </div>

          <div className="h-36 rounded-2xl overflow-hidden">
            <img src="https://picsum.photos/400/600?random=5" className="w-full h-full object-cover" />
          </div>

          <div className="h-36 rounded-2xl overflow-hidden">
            <img src={about3} className="w-full h-full object-cover" />
          </div>

        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex gap-3">

          {/* Left Column */}
          <div className="w-1/4 flex flex-col gap-3">
            <div className="h-72 rounded-2xl overflow-hidden">
              <img src={about5} className="w-full h-full object-cover" />
            </div>

            <div className="h-32 rounded-2xl overflow-hidden">
              <img src="https://picsum.photos/400/600?random=5" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex flex-col gap-3">

            <div className="flex gap-3">
              <div className="w-1/5 h-52 rounded-2xl overflow-hidden">
                <img src={about4} className="w-full h-full object-cover" />
              </div>

              <div className="w-1/5 h-52 rounded-2xl overflow-hidden">
                <img src={about2} className="w-full h-full object-cover" />
              </div>

              <div className="flex-1 h-52 rounded-2xl overflow-hidden">
                <img src="https://picsum.photos/400/600?random=3" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-1 h-48 rounded-2xl overflow-hidden">
                <img src={about1} className="w-full h-full object-cover" />
              </div>

              <div className="w-1/4 h-48 rounded-2xl overflow-hidden">
                <img src={about3} className="w-full h-full object-cover" />
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Description */}
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-2 sm:px-0">
        <p className="text-left text-zinc-300 text-base md:text-lg leading-relaxed ">
          Brainwave is the premier annual technical festival of Guru Gobind
          Singh Indraprastha University (East Delhi Campus), proudly hosted by
          ACTS (Advanced Coding & Technology Society), the campus's flagship
          tech club. Designed to bridge the gap between imagination and
          execution, Brainwave is a celebration of tech-driven creativity,
          teamwork, and modern problem-solving. This isn't just an event—it's
          an ecosystem built for students who want to break things, fix
          things, and build things that matter.
        </p>
      </div>

    </section>
  );
}
