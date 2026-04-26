import Link from "next/link";
import React from "react";

const LeftSideBar = ({ categories, activeId }) => {
  return (
    <div>
      <h1 className="font-semibold text-[20px] text-[#403F3F]">All Category</h1>
      <ul className="flex flex-col gap-3 bg-white mt-7.5 space-y-7">
        {categories.news_category.map((category, i) => (
          <li
            className={`${activeId === category.category_id ? "bg-[#F3F3F3] " : ""}font-medium text-[20px] text-center text-[#9F9F9F] h-7`}
            key={i}
          >
            <Link href={`/category/${category.category_id}`} className="block">
              {category.category_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideBar;
