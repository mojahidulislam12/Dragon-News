import LeftSideBar from "@/components/HomePage/News/LeftSideBar";
import NewsCard from "@/components/HomePage/News/NewsCard";
import RightSideBae from "@/components/HomePage/News/RightSideBae";
import { getCategory, getNewsByCategoryId } from "@/lib/data";
import React from "react";

const CategoryPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  const categories = await getCategory();
  const news = await getNewsByCategoryId(id);

  return (
    <div className="">
      <div className="grid grid-cols-12 gap-4 max-w-285 mx-auto mt-5">
        <div className="font-bold text-3xl bg-white  col-span-3">
          <LeftSideBar categories={categories} activeId={id}></LeftSideBar>
        </div>
        <div className="  bg-white col-span-6">
          <h1 className="font-semibold text-[20px] text-[#403F3F]">
            Dragon News Home
          </h1>
          <div className="space-y-4">
            {news.map((n, i) => (
              <NewsCard news={n} key={i}></NewsCard>
            ))}
          </div>
        </div>
        <div className=" bg-white col-span-3">
          <RightSideBae></RightSideBae>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
