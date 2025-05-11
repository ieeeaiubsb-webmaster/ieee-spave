"use client";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { motion } from "motion/react";
import Image from "next/image";

export default function About() {
  return (
    <div className="relative mt-20">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen "
          >
            <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-fuchsia-50 lg:right-72"></div>
            <motion.svg
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 1 }}
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width="404"
              height="392"
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-fuchsia-200"
                    fill="currentColor"
                  ></rect>
                </pattern>
              </defs>
              <rect
                width="404"
                height="392"
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              ></rect>
            </motion.svg>
          </div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1 }}
            className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20"
          >
            <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
              <Image
                className="rounded-lg object-cover"
                src="/images/_AR_9408.JPG"
                alt="Shameem sir"
                width={1500}
                height={1500}
              />
            </div>
          </motion.div>
        </div>

        <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <BoxReveal boxColor={"#C400E2"}>
              <h1
                className={`py-2 text-4xl text-left font-extrabold bg-gradient-to-r from-fuchsia-500 to-fuchsia-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl`}
              >
                What is "SPAA"?
              </h1>
            </BoxReveal>

            <div className="mt-6 space-y-6 text-gray-500">
              <p className="text-lg text-justify">
                IEEE, the world’s largest technical professional organization,
                prioritizes comprehensive development for students and
                professionals in technical fields. The IEEE Professional
                Awareness Programs highlight the significance of non-technical
                skills alongside technical expertise for a successful career.
                Through Student Professional Awareness Activities (SPAAs),
                students engage in structured events featuring experts
                discussing key areas of professional development. These areas
                include Career Development, Professional Integrity, Personal
                Skills, Engineers and Public Policy, Leadership in Professional
                Organizations, Innovation Practices, Communication Skills, and
                Humanitarian Grand Challenges. SPAAs incorporate presentations,
                panel discussions, and hands-on team activities to foster
                practical skills and expand personal networks. These experiences
                enhance students' non-technical competencies, paving the way for
                diverse job opportunities and enabling them to contribute
                meaningfully to society. Professional awareness underscores the
                integral approach to engineering education and empowers
                engineers and future professionals to excel in their careers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
