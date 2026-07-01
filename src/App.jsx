import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Timeline from "./sections/Timeline/Timeline";
import WaveIn from "./sections/WaveIn/WaveIn";
import PrizePool from "./sections/PrizePool/PrizePool";
import Registration from "./sections/Registration/Registration";
import SponsorsMentors from "./sections/SponsorsMentors/SponsorsMentors";
import FAQ from "./sections/FAQ/FAQ";
import FooterSection from "./sections/FooterSection/FooterSection";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <WaveIn />
      <Timeline />
      <PrizePool />
      <Registration />
      <SponsorsMentors />
      <FAQ />
      <FooterSection />
    </>
  );
}

export default App;