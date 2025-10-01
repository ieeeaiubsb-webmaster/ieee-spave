import Link from "next/link";
import { AuroraText } from "./magicui/aurora-text";
import { Button } from "./ui/button";

export default function Development() {
  return (
    <div>
    <div className="flex justify-center w-full">
      <h2 className="text-center text-3xl font-light text-neutral-900 md:text-5xl md:font-bold max-w-4xl px-4 pb-8">
        Where{" "}
        <AuroraText
          className="inline"
          colors={["#1d094e", "#7928CA", "#c41ad1", "#0824a0"]}
        >
          Academia
        </AuroraText>{" "}
        meets{" "}
        <AuroraText
          className="inline"
          colors={["#c41ad1", "#0824a0", "#7928CA", "#1d094e"]}
        >
          Industry
        </AuroraText>
      </h2>
      
    </div>
    <div className="flex w-full mx-auto justify-center p-5">
      <Link href={"/registration"}>
    <Button
          className="
            
            bg-gradient-to-r from-fuchsia-500 to-fuchsia-700 
            font-bold text-white 
            px-6 py-3 rounded-lg 
            animate-pulse-zoom
            shadow-lg cursor-pointer
            hover:scale-105 transition-transform
          "
        >
          Register a seat now
        </Button>
        </Link>
    </div>
    </div>
  );
}
