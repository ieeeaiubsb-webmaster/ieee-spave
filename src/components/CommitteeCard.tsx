
"use client";

import { FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";


export type CommitteeMember = {
  id: string;
  name: string;
  position: string;
  imageUrl?: string;
  mail?: string;
  facebookUrl?: string;
  linkedinUrl?: string;
  priority_order?: number;
};

interface CommitteeCardProps {
  member: CommitteeMember;
}

export default function CommitteeCard({ member }: CommitteeCardProps) {
  return (
    <div className="bg-white border-3 border-fuchsia-900 rounded-2xl h-fit w-72 sm:w-80 text-center shadow-lg hover:shadow-fuchsia-700/50 transition-all overflow-hidden duration-300 pb-4">
      
        <img
          src={member.imageUrl}
          alt={member.name}
          className="w-full max-h-80  object-cover mb-4"
        />
      
      <h2 className="text-lg text-fuchsia-900 font-semibold">{member.name}</h2>
      <p className="text-sm text-fuchsia-900 mb-3">{member.position}</p>

      <div className="flex justify-center gap-5 text-xl">
        
          <a
            href={member.facebookUrl ? member.facebookUrl : "#"}
            className=" text-fuchsia-900 hover:text-fuchsia-600 transition"
           
           
          >
            <FaFacebook />
          </a>
      
        
          <a
            href={member.linkedinUrl? member.linkedinUrl : "#"}
            className="text-fuchsia-900 hover:text-fuchsia-600 transition"
           
          >
            <FaLinkedin />
          </a>
       
        
          <a
            href={`mailto:${member.mail}`}
            className="text-fuchsia-900 hover:text-fuchsia-600 transition"
          >
            <FaEnvelope />
          </a>
       
      </div>
    </div>
  );
}
