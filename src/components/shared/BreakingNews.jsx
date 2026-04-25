import React from "react";
import Marquee from "react-fast-marquee";
const BreakingNews = () => {
  return (
    <div className="max-w-285 mx-auto p-4 bg-[#F3F3F3] flex justify-center items-center gap-4 mt-7.5">
      <button className="btn bg-[#D72050] text-white">Latest</button>
      <Marquee>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default BreakingNews;
