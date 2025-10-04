"use client";
import { useState, useMemo } from "react";
import SearchForm from "@/components/SearchForm.jsx";

const mockAmbassadors = [
  { firstName: "Arnob", lastName: "Aich", universityName: "American International University-Bangladesh" },
  { firstName: "Max", lastName: "Payne", universityName: "BRAC University" },
  { firstName: "Max", lastName: "Doe", universityName: "North South University" },
  { firstName: "John", lastName: "Wick", universityName: "North South University" },
  { firstName: "Raymond", lastName: "Reddington", universityName: "Independent University, Bangladesh" },
  { firstName: "Christopher", lastName: "Smith", universityName: "University of Asia Pacific" },
  { firstName: "Diana", lastName: "Burnwood", universityName: "East West University" },
];

export default function AmbassadorList() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAmbassadors = useMemo(() => {
    return mockAmbassadors.filter((ambassador) =>
      `${ambassador.firstName} ${ambassador.lastName} ${ambassador.universityName}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);
  return (
    <div className="py-10 min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl flex flex-col items-center text-center mb-8 bg-gradient-to-r from-[#a602c6] to-[#3b0766] bg-clip-text text-transparent">
          SPAVE 8.0 Ambassadors
        </h1>
        <div className="mb-8">
          <SearchForm value={searchTerm} onChange={setSearchTerm} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredAmbassadors.map((ambassador, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-10 border border-gray-200 min-h-[150px] flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {ambassador.firstName} {ambassador.lastName}
              </h2>
              <p className="text-lg text-gray-600">{ambassador.universityName}</p>
            </div>
          ))}
        </div>
        {filteredAmbassadors.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            No ambassadors found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}