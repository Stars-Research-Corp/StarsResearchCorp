import React from "react";
import Header from "./components/Header";

const officerTeams = [
  {
    year: "2025-2026",
    officers: [
      { name: "Dennis John", photo: "/StarsResearchCorp/officers/soham.jpg" },
      { name: "Rohan Vaz", photo:"/StarsResearchCorp/officers/alice.jpg" },
      { name: "Soham Desai", photo: "/StarsResearchCorp/src/assets/soham2.jpg" },
      { name: "Khang Nguyen", photo: "/StarsResearchCorp/officers/bob.jpg" },
      { name: "Miraage Wasti", photo: "/StarsResearchCorp/officers/bob.jpg" },
      { name: "Dennis Xu", photo: "/StarsResearchCorp/officers/bob.jpg" },
      { name: "Shreevanth Jayanti", photo: "/StarsResearchCorp/officers/bob.jpg" },
      
    ],
  },
];

const OfficerTeam = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {officerTeams.map((team) => (
            <section key={team.year} className="">
              <h2 className="text-2xl font-bold mb-6 text-left">
                {team.year} Officer Team
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {team.officers.map((officer) => (
                  <div
                    key={officer.name}
                    className="bg-white rounded-lg shadow flex flex-col items-center justify-center p-8 min-h-[120px]"
                  >
                    <div className="text-lg font-semibold text-gray-800 text-center">
                      {officer.name}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
};

export default OfficerTeam;
