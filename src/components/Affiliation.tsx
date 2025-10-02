import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

export default function Affiliation() {
  const logos = [
    {
      src: "/logos/aiub.png",
      alt: "Acme Inc",
      width: 120,
      height: 40,
    },
    {
      src: "/logos/aiubcs.png",
      alt: "Acme Inc",
      width: 120,
      height: 40,
    },
    {
      src: "/logos/aiubembs.png",
      alt: "Acme Inc",
      width: 120,
      height: 40,
    },
    {
      src: "/logos/aiubmtts.png",
      alt: "Acme Inc",
      width: 120,
      height: 40,
    },
    {
      src: "/logos/aiubias.png",
      alt: "Acme Inc",
      width: 120,
      height: 40,
    },
    {
      src: "/logos/aiubwie.png",
      alt: "Acme Inc",
      width: 120,
      height: 40,
    },
    {
      src: "/logos/bds.png",
      alt: "Acme Inc",
      width: 120,
      height: 40,
    },
    {
      src: "/logos/bdsSac.png",
      alt: "Acme Inc",
      width: 120,
      height: 40,
    },
    {
      src: "/logos/cs.png",
      alt: "Acme Inc",
      width: 120,
      height: 40,
    },
    {
      src: "/logos/yp.png",
      alt: "Acme Inc",
      width: 120,
      height: 40,
    },
  ];

  return (
    <div className={`flex justify-center w-full py-8`}>
      <Marquee>
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className={`object-contain h-50 w-50 p-4 shrink-0`}
          />
        ))}
      </Marquee>
    </div>
  );
}
