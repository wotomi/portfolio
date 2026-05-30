import HeroSection from "./components/HeroSection";
import WorkSection from "./components/WorkSection";
import ContradictionSection from "./components/ContradictionSection";
import CurrentlySection from "./components/CurrentlySection";
import ContactSection from "./components/ContactSection";
import ScrollProgress from "./components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <main>
        <HeroSection />
        <WorkSection />
        <ContradictionSection />
        <CurrentlySection />
        <ContactSection />
      </main>
    </>
  );
}
