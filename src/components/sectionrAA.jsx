'use client';
export default function SectionR() {
  return (
    <>
      <style jsx>{`
        .image-container {
          transform: perspective(800px) rotateY(25deg) scale(0.9) rotateX(10deg);
          transition: 0.6s ease all;
        }

        .image-container:hover {
          transform: perspective(800px) rotateY(-15deg) translateY(-50px) rotateX(10deg) scale(1);
          filter: blur(0);
          opacity: 1;
        }
      `}</style>

      <div className="relative mt-20">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
          <div className="relative sm:py-16 lg:py-0">
            <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
              <div className="relative w-[570px] h-[570px] lg:w-[620px] lg:h-[620px] mx-auto image-container">
                <img
                  className="rounded-full object-cover w-full h-full relative z-10"
                  src="images/section r/_AR_9408.jpg"
                  alt="SPAA event"
                />
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h1 className="py-2 text-4xl text-left font-extrabold bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
                What is "SPAA"?
              </h1>
              <div className="mt-6 space-y-6 text-white">
                <p className="text-lg text-justify">
                  IEEE, the world’s largest technical professional organization,
                  prioritizes comprehensive development for students and
                  professionals in technical fields. The IEEE Professional
                  Awareness Programs highlight the significance of non-technical
                  skills alongside technical expertise for a successful career.
                  Through Student Professional Awareness Activities (SPAAs),
                  students engage in structured events featuring experts
                  discussing key areas of professional development. These areas
                  include Career Development, Professional Integrity, Personal
                  Skills, Engineers and Public Policy, Leadership in Professional
                  Organizations, Innovation Practices, Communication Skills, and
                  Humanitarian Grand Challenges. SPAAs incorporate presentations,
                  panel discussions, and hands-on team activities to foster
                  practical skills and expand personal networks. These experiences
                  enhance students' non-technical competencies, paving the way for
                  diverse job opportunities and enabling them to contribute
                  meaningfully to society. Professional awareness underscores the
                  integral approach to engineering education and empowers
                  engineers and future professionals to excel in their careers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}