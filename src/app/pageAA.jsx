import Hero from "@/components/hero";
import Affiliates from "@/components/affiliates";
import SectionM from "@/components/sectionm";
import SectionR from "@/components/sectionr";
import SectionL from "@/components/sectionl";
import CTA from "@/components/cta";
import Content from "@/components/content1";
import Content2 from "@/components/content2";
import Previous from "@/components/previous.";
import Sponsors from "@/components/sponsors";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionM />
      <Affiliates />
      {/* <Content /> */}
      <SectionR />
      <Content />
      {/* <SectionL /> */}
      <Previous />
      {/* <Sponsors /> */}
      <CTA />
    </>
  );
}
