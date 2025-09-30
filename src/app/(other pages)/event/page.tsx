// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// //----------Poster images for speaker profile section-----------
// // const images = [
// //   "fattah_sir.jpg",
// //   "shameem_sir.jpg",
// //   "sumdany.jpg",
// //   "Celia Maam SP.png",
// //   "Bari Sir SP.png",
// // ];

// const tableData = [
//   { serial: 1, eventTitle: "Booth setting & kits distribution", venue: "Annex-7 Multipurpose Hall", time: "09:00-10:00 AM" },
//   { serial: 2, eventTitle: "Inauguration", venue: "Annex-7 Multipurpose Hall", time: "10:00-10:30 AM" },
//   { serial: 3, eventTitle: 'Seminar on "How to Choose Research Projects Aligned with UN Sustainable Development Goals" by Dr. Shameem Ahmad', venue: "Annex-7 Multipurpose Hall", time: "10:30-11:30 AM" },
//   { serial: 4, eventTitle: 'Discussion on "The Mechanics of Power Distribution: Inside Substation Operations" by Engr. SK. Abid Hossain', venue: "Annex-7 Multipurpose Hall", time: "11:30-12:15 PM" },
//   { serial: 5, eventTitle: "Interactive Q&A session by Gigabyte Bangladesh", venue: "Annex-7 Multipurpose Hall", time: "12:15-01:00 PM" },
//   { serial: 6, eventTitle: "Lunch & Prayer Break", venue: "Annex-7 Multipurpose Hall", time: "01:00-02:00 PM" },
//   { serial: 7, eventTitle: 'Seminar on "Women at The Forefront: Catalyzing Progress for the SDGS" by Prof. Dr. Celia Shahnaz', venue: "Annex-7 Multipurpose Hall", time: "02:00-03:00 PM" },
//   { serial: 8, eventTitle: 'Seminar on "AI Driven Smart Technology for Smart Future" by Prof. Dr. Shaikh Anowarul Fattah', venue: "Annex-7 Multipurpose Hall", time: "03:00-04:00 PM" },
//   { serial: 9, eventTitle: 'Seminar on "Navigating the Workforce: A Guide for STEM Graduates" by Muhammad Abdul Bari', venue: "Annex-7 Multipurpose Hall", time: "04:00-04:45 PM" },
//   { serial: 10, eventTitle: "A discussion session by IEEE Bangladesh Section", venue: "Annex-7 Multipurpose Hall", time: "04:45-05:15 PM" },
//   { serial: 11, eventTitle: 'Seminar on "Innovative Minds: Cultivating Entrepreneurship in the Modern Era" by Ghulam Sumdany Don', venue: "Annex-7 Multipurpose Hall", time: "05:15-06:00 PM" },
//   { serial: 12, eventTitle: "Snacks & certificate distribution, closing, Cultural program, prize giving ceremony", venue: "Annex-7 Multipurpose Hall", time: "06:00 PM Onwards" },
// ];

// export default function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-black via-[#1a001e] to-black text-white font-sans px-4 py-12">
//       <motion.h1
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-[#C400E2] to-pink-500 text-transparent bg-clip-text"
//       >
//         Event Schedule
//       </motion.h1>
//     <div className="overflow-x-auto w-full">
//       <div className="min-w-[1000px] mx-auto bg-gradient-to-br from-black via-[#18001d] to-black rounded-2xl shadow-xl border border-[#C400E2]/30 p-5">
//         <table className="min-w-full text-sm text-white text-left rounded-xl overflow-hidden">
//           <thead className="text-lg text-left">
//             <tr
//               className="bg-[#C400E2]/30 backdrop-blur-md text-white text-base grid"
//               style={{ gridTemplateColumns: "100px 1fr 300px 150px" }}
//             >
//               <th className="py-4 px-6 border-b border-white/10 text-left">Serial</th>
//               <th className="py-4 px-6 border-b border-white/10 text-left">Event</th>
//               <th className="py-4 px-6 border-b border-white/10 text-left">Venue</th>
//               <th className="py-4 px-6 border-b border-white/10 text-left">Time</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tableData.map((row, index) => (
//               <motion.tr
//                 key={row.serial}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.05, duration: 0.4 }}
//                 whileHover={{
//                   scale: 1.01,
//                   boxShadow: "0px 4px 30px rgba(196, 0, 226, 0.25)",
//                 }}
//                 className={`group grid transition duration-300 rounded-xl ${
//                   index % 2 === 0 ? "bg-white/5" : "bg-white/0"
//                 }`}
//                 style={{ gridTemplateColumns: "50px 1fr 300px 200px" }}
//               >
//                 <td className="px-6 py-4 font-semibold text-lg">{row.serial}</td>
//                 <td className="px-6 py-4">{row.eventTitle}</td>
//                 <td className="px-6 py-4">
//                   <span className="bg-gradient-to-r from-[#C400E2] to-pink-500 bg-clip-text text-transparent font-medium">
//                     {row.venue}
//                   </span>
//                 </td>
//                 <td className="px-3 py-4 text-center">
//                   <div className="inline-block mx-auto px-3 py-1 rounded-full border border-[#C400E2]/50 group-hover:border-[#C400E2] transition duration-200 text-sm font-semibold">
//                     {row.time}
//                   </div>
//                 </td>
//               </motion.tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       </div>

//       <motion.h1
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.5, duration: 0.8 }}
//         className="text-5xl font-extrabold text-center my-14 bg-gradient-to-r from-[#C400E2] to-pink-500 text-transparent bg-clip-text"
//       >
//         Speaker Profiles
//       </motion.h1>

//     {/* speaker poster images will be added */}
//       {/* <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
//         {images.map((img, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.2, duration: 0.5 }}
//             whileHover={{ scale: 1.05 }}
//             className="rounded-xl overflow-hidden bg-white/5 border border-white/10 shadow-lg backdrop-blur-lg hover:shadow-[#C400E2]/40 transition duration-300"
//           >
//             <img
//               src={img}
//               alt={`Speaker ${i + 1}`}
//               className="w-full h-full object-cover rounded-xl"
//             />
//           </motion.div>
//         ))}
//       </div> */}
//     </div>
//   );
// }

import { AuroraText } from "@/components/magicui/aurora-text";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-col bg-white pt-16 pb-12">
      <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8">
        <div className="flex flex-shrink-0 justify-center"></div>
        <div className="py-16 mt-12">
          <div className="text-center">
            <p className="text-base font-semibold text-cyan-600"></p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Will be updated{" "}
              <AuroraText colors={["#c41ad1", "#0824a0", "#7928CA", "#1d094e"]}>
                Soon
              </AuroraText>
            </h1>

            <div className="mt-28">
              <Link
                href="/"
                className="text-base font-medium text-black hover:text-fuchsia-500"
              >
                Go back home
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
