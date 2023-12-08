import React from "react";

function IconCardButton({ title, description, icon }) {
  return (
    <div className="group w-[355px] px-12 py-10 bg-[#192230bf] rounded-lg border border-primary flex flex-col items-center gap-4 hover:bg-gradient-to-r from-cyan-500 to-blue-700 hover:border-secondary">
      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-700 rounded-full text-3xl flex justify-center items-center group-hover:bg-secondary">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-center">{description}</p>
      <button className="text-secondary bg-primary rounded-full px-10 py-3">
        Read More
      </button>
    </div>
  );
}

export default IconCardButton;
