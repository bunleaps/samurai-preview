import React from "react";
import Image from "next/image";
import TitleLine from "@/components/title_line";

function Partnered() {
  return (
    <div className="relative w-full h-[1000px]">
      <Image
        className="object-cover"
        src="/bg/partners/partnered.png"
        alt="bg cover"
        fill
      />
      <div className="bg-gradient-to-t from-transparent from-70% to-secondary z-10 absolute inset-0 flex justify-center items-center"></div>
      <div className="bg-gradient-to-b from-transparent to-secondary z-10 absolute inset-0 flex justify-center items-center">
        <div className="w-2/3 flex flex-col gap-4">
          <TitleLine title="Jbarrows" />
          <h1 className="text-3xl font-bold tracking-wide">
            Partnered With Jbarrows
          </h1>
          <p className="w-1/3 text-sm">
            This is a placeholder, we can solve the Cyber security our mission
            here. In partnership with JBarrows Sales Training, we Crna Ren tense
          </p>
          <p className="w-1/3 text-sm">
            BOT UU CUE Ue CR ius el ULC Le Pes ani Ker aie ie eta eas products
            and services that unlock efficiency and drive velocity Reston sues .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Partnered;
