import React from "react";

function TitleLine({ title }) {
  return (
    <div className="flex items-center">
      <div className="w-[60px] h-[4px] bg-gradient-to-r from-cyan-500 to-blue-500 mr-2"></div>
      <p>{title}</p>
    </div>
  );
}

export default TitleLine;
