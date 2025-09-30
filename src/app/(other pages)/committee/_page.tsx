// import { createClient } from "@supabase/supabase-js";
// import type { CommitteeMember } from "@/lib/supabase";
// import { CommitteeCard } from "@/components/committee-card";

// async function getCommitteeMembers() {
//   // Create a Supabase client specifically for server-side use
//   const supabase = createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//   );

//   const { data, error } = await supabase
//     .from("committee_members")
//     .select("*")
//     .order("inserted_at", { ascending: false });

//   if (error) {
//     console.error("Error fetching committee members:", error);
//     return [];
//   }

//   return data as CommitteeMember[];
// }

// export default async function Committee() {
//   const committeeMembers = await getCommitteeMembers();

//   //chair
//   const progChair = committeeMembers.filter(
//     (member) => member.role === "Program Chair",
//   );
//   const progCoChair = committeeMembers.filter(
//     (member) => member.role === "Program Co-Chair",
//   );

//   return (
//     <main className="container max-w-5xl mx-auto py-8">
//       <h1 className="text-3xl font-bold mb-8 text-center">
//         SPAVE 8.0 Organizing Committee
//       </h1>

//       {committeeMembers.length === 0 ? (
//         <div className="text-center p-8 border rounded-lg">
//           <p className="text-lg text-muted-foreground">Stay Tuned</p>
//         </div>
//       ) : (
//         <>
//           <div className={`mb-8`}>
//             <div className={`grid grid-cols-1 justify-items-center py-8`}>
//               {progChair.map((member) => (
//                 <CommitteeCard key={member.id} member={member} />
//               ))}
//             </div>
//             <div className={`grid grid-cols-2  justify-items-center py-8`}>
//               {progCoChair.map((member) => (
//                 <CommitteeCard key={member.id} member={member} />
//               ))}
//             </div>
//           </div>
//         </>
//       )}
//     </main>
//   );
// }
