import { AuroraText } from "./magicui/aurora-text";

export default function Development() {
  return (
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
  );
}
