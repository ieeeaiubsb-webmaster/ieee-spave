import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: FingerPrintIcon,
  },
  {
    name: "Powerful API.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ",
    icon: ServerIcon,
  },
];

export default function SectionM() {
  return (
    <div className="bg-black py-24 sm:py-32" id="sectionm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-white">
            Engage. Explore. Experience.
          </h2>
          <h1 className="mt-1 text-4xl text-center font-extrabold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
            ABOUT SPAVe 7.0
          </h1>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            src="Spave-7.0-Logo(Alt).png"
            alt="App screenshot"
            className="px-16"
            width={2432}
            height={1442}
          />
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <p className="mt-6 text-lg leading-8 text-white text-justify">
          In 2014, the IEEE-USA launched the Student Professional Awareness
          Experience (SPAx) program with the goal of “Engaging, Exploring, and
          Experiencing.” The “x” in SPAx is a flexible component that can be
          tailored to meet specific needs. By replacing “x” with “Ve,” the
          program becomes the “IEEE Student Professional Awareness Venture.”
          This successful venture aims to educate and inspire future engineering
          leaders, helping them build successful careers. The venture consists
          of day-long workshops, seminars, and technical talks by industry
          experts to promote professional growth among students. This flagship
          event aims to teach students how to secure a lifelong career in
          engineering. The Student Professional Awareness Activities (SPAA) are
          structured to include presentations, sessions, team-oriented
          activities, and more, focusing on career development, professional
          integrity, personal and leadership skills, innovation, communication,
          and humanitarian grand challenges. The IEEE AIUB Student Branch is the
          largest and one of the most successful student branches in both the
          IEEE Bangladesh Section and IEEE Region 10. As a leader in membership
          development and professional and technical activities, the IEEE AIUB
          Student Branch has made history by organizing the first-ever Student
          Professional Awareness Venture (SPAVe) under the IEEE-USA SPAx program
          in the IEEE Bangladesh Section in 2016. The successful event was
          followed by SPAVe 2.0 in 2017, SPAVe 3.0 in 2018, SPAVe 4.0 in 2019,
          and SPAVe 5.0 in 2021 and SPAVe 6.0 in 2023. The SPAVe program under
          the IEEE AIUB Student Branch has been widely attended since its
          inception and has consistently drawn a large audience. Building upon
          the success and positive response of the previous year, the IEEE AIUB
          Student Branch has taken the ambitious step of conducting the 7th
          edition of their flagship event, “IEEE SPAVe 7.0,” in 2024. Like
          previous years, the event is supported by IEEE USA, IEEE Region 10,
          the IEEE Bangladesh Section, IEEE Young Professionals Bangladesh, and
          the IEEE Region-10 Student Activities Committee.
        </p>
      </div>
    </div>
  );
}