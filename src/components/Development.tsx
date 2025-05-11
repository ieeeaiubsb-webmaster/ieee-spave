import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";

export default function Development() {
  const words = ["Professional", "Career", "Networking", "Leadership"];
  return (
    <div className="mx-auto grid grid-cols-1 md:grid-cols-4 max-w-5xl justify-center items-center">
      <div className={`col-span-3 relative justify-center items-center px-4`}>
        <h2
          className={`mx-auto text-neutral-900 mb-4 text-3xl font-light md:font-bold md:text-5xl text-center`}
        >
          Enhance Your{" "}
          <span className="mx-auto">
            <FlipWords words={words} className={`text-[#C400E2]`} />
          </span>
          <br />
          Skills
        </h2>
      </div>
      <Link
        href={"/registration"}
        className="flex flex-col items-center justify-center"
      >
        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Register Now
          </div>
        </button>
      </Link>
    </div>
  );
}
