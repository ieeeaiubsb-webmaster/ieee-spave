import dynamic from "next/dynamic";
import MyNavbar from "@/components/Navbar";
import Hero from "@/components/hero";
import PageWrapper from "@/components/wrapper";

// Lazy load components that are below the fold
// These will be code-split automatically by Next.js
const Affiliation = dynamic(() => import("@/components/Affiliation"));
const About = dynamic(() => import("@/components/About"));
const Development = dynamic(() => import("@/components/Development"));
const AboutSpave = dynamic(() => import("@/components/AboutSpave"));
const PastSpax = dynamic(() => import("@/components/PastSpax"));
const Footer = dynamic(() => import("@/components/footer"));

export default function Page() {
  return (
    <PageWrapper>
      <div className={`mx-auto w-full`}>
        <MyNavbar />
        <Hero />
        <Affiliation />
        <About />
        <AboutSpave />
        <Development />
        <PastSpax />
        <Footer />
      </div>
    </PageWrapper>
  );
}
