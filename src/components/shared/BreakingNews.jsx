import React from "react";
import Marquee from "react-fast-marquee";

const news = [
  {
    _id: "1",
    title: "Breaking News: Major Event Unfolds in the City",
  },
  {
    _id: "2",
    title: "Breaking News: New Policy Announced by the Government",
  },
  {
    _id: "3",
    title: "Breaking News: Sports Tem Wins Championship",
  },
];
const BreakingNews = () => {
  return (
    <div className="max-w-285 mx-auto p-4 bg-[#F3F3F3] flex justify-between items-center gap-4 mt-7.5">
      <button className="btn bg-[#D72050] text-white">Latest</button>
      <Marquee className="gap-10" pauseOnHover={true}>
        {news.map((n, i) => (
          <span key={i}> {n.title}</span>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
