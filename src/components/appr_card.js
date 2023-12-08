import React from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";

function ApprCard({ title, description }) {
  return (
    <div className="w-[300px] p-7 bg-[#192230bf] backdrop-blur-sm rounded-lg border border-primary">
      <div className="mb-2 text-primary text-lg flex items-center">
        <AiFillSafetyCertificate />
        <h1 className="ml-2 font-semibold text-white">{title}</h1>
      </div>
      <p className="text-sm">{description}</p>
    </div>
  );
}

export default ApprCard;
