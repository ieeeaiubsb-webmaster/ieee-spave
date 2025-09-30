// "use client";
// import { Particles } from "@/components/magicui/particles";
// import { FlipText } from "@/components/magicui/flip-text";
// import { motion } from "motion/react";
// import { AuroraText } from "@/components/magicui/aurora-text";

// export default function ComingSoon() {
//   return (
//     <div className="flex h-screen w-full items-center justify-center bg-black text-white">
//       <Particles
//         className="absolute inset-0 z-0"
//         quantity={100}
//         ease={80}
//         color={`#ffffff`}
//         refresh
//       />
//       <div className="container flex flex-col items-center justify-center px-4 ">
//         <FlipText className="text-lg -tracking-widest text-white md:text-xl">
//           Coming Soon
//         </FlipText>

//         <motion.div
//           className={`text-lg text-white flex flex-col items-center justify-center gap-6`}
//           animate={{ y: 20 }}
//           transition={{ type: "spring", stiffness: 100 }}
//         >
//           <AuroraText
//             className={`text-5xl font-bold `}
//             colors={["#AA076B", "#61045F", "#ff0084", "#AA076B"]}
//           >
//             SPAVE 8.0
//           </AuroraText>
//           Student Professional Awareness Venture
//         </motion.div>
//       </div>
//     </div>
//   );
// }
