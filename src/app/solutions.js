import React from "react";
import Image from "next/image";
import { IoBugSharp } from "react-icons/io5";

function Solutions() {
  const solutions = [
    { icon: <IoBugSharp />, text: "AI and Data Topics Solutions" },
    { icon: <IoBugSharp />, text: "Automation & orchestration Solutions" },
    { icon: <IoBugSharp />, text: "cloud data  Solutions" },
    { icon: <IoBugSharp />, text: "Sedulity Transformation Solutions" },
    { icon: <IoBugSharp />, text: "Digital workspace Solutions" },
    { icon: <IoBugSharp />, text: "Networking Solutions" },
  ];

  return (
    <div className="relative w-full h-[500px]">
      <Image
        className="object-cover transform -scale-x-100 brightness-50 blur-sm"
        src="/bg/bg_101.png"
        alt="bg cover"
        fill
      />
      <div className="z-10 absolute inset-0 flex justify-center items-center">
        <div className="w-3/5 flex">
          <div className="w-1/2 flex items-center">
            <div>
              <h1 className="mb-2 text-4xl font-bold">
                Cyber Security Solutions
              </h1>
              <p className="mb-2 w-4/5">
                Your business is at risk every year as new cybersecurity threats
                emerge. There is no immunity in the world of security breaches.
              </p>
              <button className="text-secondary bg-primary rounded-full px-10 py-3">
                Read More
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col divide-y divide-gray-600">
              {solutions.map((solution) => (
                <div
                  className="flex items-center text-primary p-2"
                  key={solution.text}
                >
                  {solution.icon}
                  <p className="ml-4 text-white">{solution.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solutions;
