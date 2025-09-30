"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { useEffect, useState } from "react";
import { BoxReveal } from "./magicui/box-reveal";
import Image from "next/image";

export default function AboutSpave() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullText, setShowFullText] = useState(false);

  const fullText = `The IEEE-USA Student Professional Awareness Activities (SPAA) is focused on boosting the leadership, career, and professional development skills of engineering students. The IEEE SPAx builds upon the legacy of previous Student Professional Awareness Conferences and Ventures to address the constantly evolving world we live in today. The “x” in SPAx is a flexible component that can be adapted as needed. The IEEE AIUB Student Branch will organize the “IEEE Student Professional Awareness Venture” by replacing “x” with “Ve”. The objective of this successful venture is to educate and enrich the minds of future engineering leaders, helping them to sustain a successful career in their field. The venture includes day-long workshops, seminars, and technical talks by industry experts to support students’ professional growth. The motivation behind this flagship event is to educate students on securing a long-term career in engineering.`;

  const charLimit = 250;
  const truncatedText =
    fullText.length > charLimit
      ? fullText.substring(0, charLimit) + "..."
      : fullText;
  const needsTruncation = fullText !== truncatedText;

  const images = [
    {
      src: "/images/content/_AR_9203.JPG",
      alt: "SPAVe Image 1",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/content/_AR_9464.JPG",
      alt: "SPAVe Image 2",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/content/_AR_9471.JPG",
      alt: "SPAVe Image 3",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/content/_AR_9508.JPG",
      alt: "SPAVe Image 4",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/content/_AR_9813.png",
      alt: "SPAVe Image 5",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/content/_AR_9871.JPG",
      alt: "SPAVe Image 6",
      width: 1200,
      height: 800,
    },
  ];

  useEffect(() => {
    if (!api) return;

    const onChange = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    api.on("select", onChange);
    onChange();

    return () => {
      api.off("select", onChange);
    };
  }, [api]);

  return (
    <div className="container max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto pb-4 px-4">
      <div className="flex flex-col items-center justify-center px-2">
        <BoxReveal boxColor={"#C400E2"}>
          <h1 className="py-2 text-4xl text-left font-extrabold bg-gradient-to-r from-fuchsia-500 to-fuchsia-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
            What is SPAVe?
          </h1>
        </BoxReveal>

        <div className="mt-6 space-y-6 text-gray-500 w-full">
          {/* Full text on medium+ screens */}
          <p className="hidden md:block text-lg text-justify mx-auto">
            {fullText}
          </p>

          {/* Mobile-only: truncated text + button */}
          <div className="md:hidden w-full">
            <p className="text-lg text-justify mx-auto">
              {showFullText ? fullText : truncatedText}
            </p>
            {needsTruncation && (
              <button
                onClick={() => setShowFullText(!showFullText)}
                className={`mt-4 px-6 py-2 font-medium transition-colors duration-200 ${
                  showFullText
                    ? " hover:bg-gray-600 text-fuchsia-900"
                    : " hover:bg-fuchsia-200 text-fuchsia-900"
                }`}
              >
                {showFullText ? "View Less" : "View More"}
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-3xl mx-auto">
        <Carousel
          setApi={setApi}
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
              stopOnLastSnap: false,
            }),
          ]}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="p-4">
                <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex justify-center items-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index
                  ? "bg-fuchsia-600 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
