import React from "react";

function IconCard({ title, description, icon }) {
  return (
    <div className="px-12 py-10 bg-[#192230bf] rounded-lg border border-primary flex flex-col items-center gap-4">
      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-700 rounded-full text-3xl flex justify-center items-center">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
}

export default IconCard;
