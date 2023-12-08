import React from "react";
import TitleLine from "@/components/title_line";
import ApprCard from "@/components/appr_card";
import Image from "next/image";

function Approach() {
  const cardsInfo = [
    {
      title: "Trending IN Security",
      description:
        "Solve emerging workforce needs with headsets that combine commercial quality with consumer design. Poly's Voyager wireless headset series and the Poly Free 60+ offer flawless function...",
    },
    {
      title: "Trending IN Cloud",
      description:
        "Solve emerging workforce needs with headsets that combine commercial quality with consumer design. Poly's Voyager wireless headset series and the Poly Free 60+ offer flawless function...",
    },
    {
      title: "Trending IN Digestants Formation",
      description:
        "Solve emerging workforce needs with headsets that combine commercial quality with consumer design. Poly's Voyager wireless headset series and the Poly Free 60+ offer flawless function...",
    },
    {
      title: "Trending IN Digestants Formation",
      description:
        "Solve emerging workforce needs with headsets that combine commercial quality with consumer design. Poly's Voyager wireless headset series and the Poly Free 60+ offer flawless function...",
    },
  ];

  return (
    <div className="mt-28 mb-28 flex flex-col items-center gap-4">
      <TitleLine title="Our Approach" />
      <h1 className="text-3xl font-bold tracking-wide">
        Our Approach To Security
      </h1>
      <p className="w-1/3 text-sm text-center">
        Source Point Delivers Next Generation Technology Services Designed To
        Optimize Your Business Via Secure & Redundant Cloud-based
        Infrastructure.
      </p>
      <div className="w-2/3">
        <div className="relative w-full h-[700px]">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[900px] h-[900px] rounded-full border border-gray-600 blur"></div>
          </div>
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[750px] h-[750px] rounded-full border border-gray-600 blur"></div>
          </div>
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[600px] h-[600px] rounded-full border border-gray-600 blur"></div>
          </div>
          <div className="absolute inset-0 flex justify-center items-center">
            <Image
              src="/bg/server_101.png"
              alt="Server Room"
              width={530}
              height={530}
            />
          </div>
          <div className="absolute inset-0">
            <div className="flex flex-col justify-between h-full">
              <div className="flex justify-around h-fit mb-10">
                <ApprCard
                  title={cardsInfo[0].title}
                  description={cardsInfo[0].description}
                />
                <ApprCard
                  title={cardsInfo[1].title}
                  description={cardsInfo[1].description}
                />
              </div>
              <div className="flex justify-around h-fit">
                <ApprCard
                  title={cardsInfo[0].title}
                  description={cardsInfo[0].description}
                />
                <ApprCard
                  title={cardsInfo[1].title}
                  description={cardsInfo[1].description}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Approach;
