import React from "react";
import TitleLine from "@/components/title_line";
import NewsCard from "@/components/news_card";

function News() {
  const cardsInfo = [
    {
      image: "/bg/news_101.png",
      title: "The future of the financial services industry is...",
      description:
        "Financial institutions are increasingly adopting innovative IT solutions to help meet the demands of a rapidly changing and competitive industry.",
    },
    {
      image: "/bg/news_101.png",
      title: "The future of the financial services industry is...",
      description:
        "Financial institutions are increasingly adopting innovative IT solutions to help meet the demands of a rapidly changing and competitive industry.",
    },
  ];

  return (
    <div className="my-16 flex flex-col items-center gap-4">
      <TitleLine title="Industries" />
      <h1 className="text-3xl font-bold tracking-wide">
        News For our Industries
      </h1>
      <p className="w-1/3 text-sm text-center">
        Source Point Delivers Next Generation Technology Services Designed To
        Optimize Your Business Via Secure & Redundant Cloud-based
        Infrastructure.
      </p>
      <div className="w-3/5 mt-4 flex flex-wrap justify-center gap-8">
        {cardsInfo.map((cardInfo) => (
          <NewsCard
            key={cardInfo.title}
            image={cardInfo.image}
            title={cardInfo.title}
            description={cardInfo.description}
            icon={cardInfo.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default News;
