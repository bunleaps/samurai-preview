import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

function NewsCard({ image, title, description }) {
  return (
    <div className="group w-[550px] h-[240px] bg-[#192230bf] rounded-lg border border-primary flex">
      <Image
        className="w-1/3 rounded-l-lg object-cover"
        src={image}
        width={270}
        height={300}
        alt="image cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm my-2">{description}</p>
        <button className="text-primary border-primary border-2 rounded-full px-10 py-3 mt-1 flex items-center gap-3">
          Read More <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default NewsCard;
