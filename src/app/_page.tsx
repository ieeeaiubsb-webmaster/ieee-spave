import Affiliation from "@/components/Affiliation";
import About from "@/components/About";
import Development from "@/components/Development";
import AboutSpave from "@/components/AboutSpave";
import PastSpax from "@/components/PastSpax";

export default function Page() {
  return (
    <div className={`container mx-auto max-w-8xl `}>
      <Affiliation />
      <About />
      <AboutSpave />
      <PastSpax />
      <Development />
    </div>
  );
}
