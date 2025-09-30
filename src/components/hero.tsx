import Image from "next/image";

export default function Hero() {
  return (
    <div
      className={`md:my-0 mx-auto w-full relative isolate overflow-hidden hero-background flex flex-col justify-start items-center min-h-screen h-full`}
    >
      <div className="hidden md:block flex flex-col my-auto gap-16 sm:gap-12 md:gap-16 lg:gap-3 max-w-[1600px] md:px-12 h-full">
        <Image
          src={"/images/for-the-8th-time.png"}
          alt={"banner-text"}
          width={1920}
          height={1080}
          className="px-[8%] md:px-[20%] w-full object-contain "
        />
        <Image
          src={"/images/ieee-bd-region-10-01.png"}
          alt={"banner-logo"}
          width={1920}
          height={1080}
          className="px-1 md:px-[5%] w-full object-contain"
        />
        <Image
          src={"/images/spave-8.0.png"}
          alt={"banner-logo"}
          width={1920}
          height={1080}
          className="px-[10%] md:px-[20%] w-full "
        />
        <Image
          src={"/images/Aiub.png"}
          alt={"banner-logo"}
          width={1920}
          height={1080}
          className="px-[10%] md:px-[20%] w-full object-contain"
        />
      </div>
      <div className="block md:hidden relative">
        <Image
          src={"/MobileBG-01.png"}
          alt={"banner"}
          width={1920}
          height={1080}
          className="mx-auto object-cover w-full "
        />
        <Image
          src={"/logos/Spave8 Logo-01.png"}
          alt={"banner"}
          width={1920}
          height={1080}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4"
        />
      </div>
    </div>
  );
}
