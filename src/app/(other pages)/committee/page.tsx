import { supabase } from "../../../lib/supabase";
import CommitteeCard from "../../../components/CommitteeCard";

export const revalidate = 0; 

export default async function CommitteePage() {
  const { data: members, error } = await supabase
    .from("committee_members")
    .select("*")
    .order("priority_order", { ascending: true });

  if (error) {
    console.error("Error fetching members:", error.message);
    return <div className="text-red-500 text-center">Failed to load members.</div>;
  }

  if (!members || members.length === 0) {
    return <div className="text-gray-400 text-center">No members found.</div>;
  }

  const advisor = members.find((m) => m.priority_order === 1)
  const programChair = members.find((m) => m.priority_order === 2);
  const coChair = members.find((m) => m.priority_order === 3);
  const financeChair = members.find((m) => m.priority_order === 5);
  const eventChair = members.find((m) => m.priority_order === 6);
  const localChair = members.find((m) => m.priority_order === 4);
  const others = members.filter((m) => m.priority_order >=7);

  return (
    <div className="w-full min-h-screen bg-white text-fuchsia-600 px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 tracking-wide">
        SPAVE 8.0 Organizing Committee
      </h1>

      {/* Row 1 - Advisor */}
      {advisor && (
        <div className="flex justify-center mb-10">
          <CommitteeCard member={advisor} />
        </div>
      )}
      {/* Row 2 - Program Chair */}
      {programChair && (
        <div className="flex justify-center mb-10">
          <CommitteeCard member={programChair} />
        </div>
      )}





      {/* Row 3 - coChair and local arrangment chair*/}
      <div className="flex flex-wrap justify-center gap-8 mb-10">
        {coChair && <CommitteeCard member={coChair} />}
        {localChair && <CommitteeCard member={localChair} />}
      </div>

      {/* Row 4 - finance chair and event chair */}
      <div className="flex flex-wrap justify-center gap-8 mb-10">
        {financeChair && <CommitteeCard member={financeChair} />}
        {eventChair && <CommitteeCard member={eventChair} />}
      </div>

      {/* Remaining members */}
      <div className="flex flex-col items-center gap-10">
        {(() => {
          const rows = [];
          for (let i = 0; i < others.length; i += 4) {
            rows.push(others.slice(i, i + 4));
          }
          return rows.map((rowMembers, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap justify-center gap-8">
              {rowMembers.map((m) => (
                <CommitteeCard key={m.id} member={m} />
              ))}
            </div>
          ));
        })()}
      </div>
    </div>
  );
}

