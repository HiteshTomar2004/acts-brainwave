export default function About() {
  return (
    <section id="about" className="bg-black text-white px-4 py-16 sm:px-6 md:py-24 lg:px-20">

      {/* Heading */}
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-none">
          BRAINWAVE
        </h2>
      </div>

      {/* Image Collage */}
      <div className="max-w-5xl mx-auto px-5 md:px-0 mb-12">

        {/* Mobile Layout */}
        <div className="grid grid-cols-2 gap-3 md:hidden">

          <div className="h-48 rounded-2xl overflow-hidden">
            <img src="https://picsum.photos/400/600?random=1" className="w-full h-full object-cover" />
          </div>

          <div className="h-48 rounded-2xl overflow-hidden">
            <img src="https://picsum.photos/400/600?random=2" className="w-full h-full object-cover" />
          </div>

          <div className="h-48 rounded-2xl overflow-hidden">
            <img src="https://picsum.photos/400/600?random=3" className="w-full h-full object-cover" />
          </div>

          <div className="h-48 rounded-2xl overflow-hidden">
            <img src="https://picsum.photos/400/600?random=4" className="w-full h-full object-cover" />
          </div>

          <div className="col-span-2 h-56 rounded-2xl overflow-hidden">
            <img src="https://picsum.photos/400/600?random=6" className="w-full h-full object-cover" />
          </div>

          <div className="h-36 rounded-2xl overflow-hidden">
            <img src="https://picsum.photos/400/600?random=5" className="w-full h-full object-cover" />
          </div>

          <div className="h-36 rounded-2xl overflow-hidden">
            <img src="https://picsum.photos/400/600?random=7" className="w-full h-full object-cover" />
          </div>

        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex gap-3">

          {/* Left Column */}
          <div className="w-1/4 flex flex-col gap-3">
            <div className="h-72 rounded-2xl overflow-hidden">
              <img src="https://picsum.photos/400/600?random=1" className="w-full h-full object-cover" />
            </div>

            <div className="h-32 rounded-2xl overflow-hidden">
              <img src="https://picsum.photos/400/600?random=5" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex flex-col gap-3">

            <div className="flex gap-3">
              <div className="w-1/5 h-52 rounded-2xl overflow-hidden">
                <img src="https://picsum.photos/400/600?random=2" className="w-full h-full object-cover" />
              </div>

              <div className="w-1/5 h-52 rounded-2xl overflow-hidden">
                <img src="https://picsum.photos/400/600?random=3" className="w-full h-full object-cover" />
              </div>

              <div className="flex-1 h-52 rounded-2xl overflow-hidden">
                <img src="https://picsum.photos/400/600?random=4" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-1 h-48 rounded-2xl overflow-hidden">
                <img src="https://picsum.photos/400/600?random=6" className="w-full h-full object-cover" />
              </div>

              <div className="w-1/4 h-48 rounded-2xl overflow-hidden">
                <img src="https://picsum.photos/400/600?random=7" className="w-full h-full object-cover" />
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Description */}
      <div className="max-w-5xl mx-auto px-2 sm:px-0">
        <p className="text-left text-zinc-300 text-base md:text-lg leading-relaxed">
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
