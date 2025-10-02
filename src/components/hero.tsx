"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Component is now mounted (safe to access window)
    setIsMounted(true);

    const checkMobile = () => {
      // Tailwind's 'md' breakpoint is 768px
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    checkMobile();

    // Listen for resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Don't render anything until mounted (avoids hydration mismatch)
  if (!isMounted) {
    return null;
  }

  // Mobile View
  if (isMobile) {
    return (
      <div className="relative isolate overflow-hidden hero-background-mobile flex flex-col justify-center items-center min-h-screen w-full gap-6 px-4">
        <Image
          src="/images/for-the-8th-time.png"
          alt="For the 8th Time"
          width={1920}
          height={1080}
          className="w-full max-w-[320px] h-auto object-contain"
        />
        <Image
          src="/images/ieee-bd-region-10-01.png"
          alt="IEEE Bangladesh Section"
          width={1920}
          height={1080}
          className="w-full max-w-[320px] h-auto object-contain"
        />
        <Image
          src="/logos/Spave8 Logo-01.png"
          alt="SPAVE 8.0 Logo"
          width={1920}
          height={1080}
          className="w-full max-w-[250px] h-auto object-contain"
        />
        <Image
          src="/images/Aiub.png"
          alt="AIUB Logo"
          width={1920}
          height={1080}
          className="w-full max-w-[320px] h-auto object-contain"
        />
      </div>
    );
  }

  // Desktop View
  return (
    <div className="relative isolate overflow-hidden hero-background flex flex-col justify-start items-center min-h-screen w-full">
      <div className="flex flex-col my-auto gap-16 sm:gap-12 md:gap-16 lg:gap-3 max-w-[1400px] md:px-12 h-full w-full">
        <Image
          src="/images/for-the-8th-time.png"
          alt="For the 8th Time"
          width={1920}
          height={1080}
          className="w-full max-w-full h-auto object-contain mx-auto px-[8%] md:px-[12%] lg:px-0 lg:max-w-[600px] 2xl:max-w-[400px]"
        />
        <Image
          src="/images/ieee-bd-region-10-01.png"
          alt="IEEE Bangladesh Section"
          width={1920}
          height={1080}
          className="px-1 md:px-[5%] w-full max-w-full h-auto object-contain mx-auto lg:px-0 lg:max-w-[800px] 2xl:max-w-[1000px]"
        />
        <Image
          src="/images/spave-8.0.png"
          alt="SPAVE 8.0"
          width={1920}
          height={1080}
          className="px-[10%] md:px-[20%] w-full"
        />
        <Image
          src="/images/Aiub.png"
          alt="AIUB Logo"
          width={1920}
          height={1080}
          className="px-[10%] md:px-[20%] w-full object-contain"
        />
      </div>
    </div>
  );
}
