"use client";
import { useState, useMemo } from "react";
import SearchForm from "@/components/SearchForm.jsx";

const logoMap = {
  "Ahsanullah University of Science and Technology": "/logos/Ahsanullah_University_of_Science_and_Technology_Logo.svg.png",
  "United International University": "/logos/United_International_University_Monogram.svg.png",
  "Daffodil International University": "/logos/Daffodil.png",
  "International University Of Business Agriculture and Technology": "/logos/IUBAT2.png",
  "University of Asia Pacific": "/logos/University_of_Asia_Pacific_Bangladesh_logo.png",
  "Bangladesh University Of Professionals": "/logos/Bangladesh_University_of_Professionals_BUP_Logo.svg.png",
  "North South University": "/logos/North_South_University_Monogram.svg.png",
  "Southeast University": "/logos/SEU_logo.png",
  "Jagannath University": "/logos/Jagannat_University_Logo.svg.png",
  "Sylhet Engineering College": "/logos/Sylhet_Engineering_College.png",
  "East Delta University": "/logos/Seal_of_East_Delta_University.png",
  "Bangladesh University of Business and Technology": "/logos/bubt-logo-png_seeklogo-498306.png",
  "Green University of Bangladesh": "/logos/Green_University_of_Bangladesh_logo.svg.png",
  "Brac University": "/logos/BRAC_University_monogram.svg.png",
  "Hajee Mohammad Danesh Science and Technology University": "/logos/HSTU_Logo.png",
  "International Islamic University Chittagong": "/logos/international-islamic-university-chittagong-logo-621AE899AB-_SLZLgOb.png",
  "Chittagong University of Engineering and Technology": "/logos/CUET_Vector_ogo.svg.png",
  "American International University-Bangladesh": "/logos/American_International_University-Bangladesh_Monogram.svg.png",
};

const ambassadors = [
  { firstName: "Tanveer", lastName: "Zubair", universityName: "Ahsanullah University of Science and Technology", logo: logoMap["Ahsanullah University of Science and Technology"] },
  { firstName: "Azmain", lastName: "Muksit Anam", universityName: "Ahsanullah University of Science and Technology", logo: logoMap["Ahsanullah University of Science and Technology"] },
  { firstName: "Md Ashfaqur", lastName: "Rahman", universityName: "United International University", logo: logoMap["United International University"] },
  { firstName: "Rakesh", lastName: "Karmaker", universityName: "Daffodil International University", logo: logoMap["Daffodil International University"] },
  { firstName: "Anik", lastName: "Sarker", universityName: "Daffodil International University", logo: logoMap["Daffodil International University"] },
  { firstName: "Arafat", lastName: "Islam", universityName: "Daffodil International University", logo: logoMap["Daffodil International University"] },
  { firstName: "Md Uzzol", lastName: "Hossain", universityName: "International University Of Business Agriculture and Technology", logo: logoMap["International University Of Business Agriculture and Technology"] },
  { firstName: "Md", lastName: "Akash", universityName: "International University Of Business Agriculture and Technology", logo: logoMap["International University Of Business Agriculture and Technology"] },
  { firstName: "Swaronika", lastName: "Sarker", universityName: "University of Asia Pacific", logo: logoMap["University of Asia Pacific"] },
  { firstName: "Md Nahedul", lastName: "Islam", universityName: "University of Asia Pacific", logo: logoMap["University of Asia Pacific"] },
  { firstName: "Md Hemel", lastName: "Parvej", universityName: "Bangladesh University Of Professionals", logo: logoMap["Bangladesh University Of Professionals"] },
  { firstName: "Mishkatul", lastName: "Rahman", universityName: "North South University", logo: logoMap["North South University"] },
  { firstName: "Areebah", lastName: "Hasnat", universityName: "North South University", logo: logoMap["North South University"] },
  { firstName: "Sumaia", lastName: "Abedin", universityName: "North South University", logo: logoMap["North South University"] },
  { firstName: "Aria", lastName: "Farhan", universityName: "Southeast University", logo: logoMap["Southeast University"] },
  { firstName: "Samia", lastName: "Jannat", universityName: "Jagannath University", logo: logoMap["Jagannath University"] },
  { firstName: "Fahim", lastName: "Faisal", universityName: "Sylhet Engineering College", logo: logoMap["Sylhet Engineering College"] },
  { firstName: "Samia Mahjabeen", lastName: "Shama", universityName: "East Delta University", logo: logoMap["East Delta University"] },
  { firstName: "Humayra", lastName: "Akter", universityName: "Bangladesh University of Business and Technology", logo: logoMap["Bangladesh University of Business and Technology"] },
  { firstName: "Jobayer", lastName: "Ahmed", universityName: "Green University of Bangladesh", logo: logoMap["Green University of Bangladesh"] },
  { firstName: "Zaara Farhin", lastName: "Monsur", universityName: "Brac University", logo: logoMap["Brac University"] },
  { firstName: "Md. Mahamudul", lastName: "Islam", universityName: "Hajee Mohammad Danesh Science and Technology University", logo: logoMap["Hajee Mohammad Danesh Science and Technology University"] },
  { firstName: "Masud Talukder", lastName: "Sakil", universityName: "International Islamic University Chittagong", logo: logoMap["International Islamic University Chittagong"] },
  { firstName: "Zaber Ahsan", lastName: "Bhuiyan", universityName: "Chittagong University of Engineering and Technology", logo: logoMap["Chittagong University of Engineering and Technology"] },
  { firstName: "Md Reduwan Ahmed", lastName: "Jihan", universityName: "American International University-Bangladesh", logo: logoMap["American International University-Bangladesh"] },
  { firstName: "Md. Sadman", lastName: "Hossain", universityName: "American International University-Bangladesh", logo: logoMap["American International University-Bangladesh"] },
  { firstName: "Rokeya", lastName: "Binta Seraj", universityName: "American International University-Bangladesh", logo: logoMap["American International University-Bangladesh"] },
  { firstName: "Kazi", lastName: "Afnan", universityName: "American International University-Bangladesh", logo: logoMap["American International University-Bangladesh"] },
];

export default function AmbassadorList() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAmbassadors = useMemo(() => {
    return ambassadors.filter((ambassador) =>
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
            <div key={index} className="bg-white rounded-lg shadow-md p-10 border border-gray-200 min-h-[200px] flex flex-col justify-center items-center">
              {ambassador.logo && (
                <img src={ambassador.logo} alt={`${ambassador.universityName} logo`} className="w-20 h-20 mb-4" />
              )}
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                {ambassador.firstName} {ambassador.lastName}
              </h2>
              <p className="text-lg text-gray-600 text-center">{ambassador.universityName}</p>
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