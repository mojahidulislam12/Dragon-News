import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2, CiStar } from "react-icons/ci";
import { IoMdEye } from "react-icons/io";

const NewsCard = ({ news }) => {
  // console.log(news);
  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
        <div className="flex justify-between items-center bg-[#F3F3F3] h-20 rounded-md px-4">
          <div className="flex gap-4">
            <Image
              src={news.author?.img}
              alt={news.author?.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h2>{news.author.name}</h2>
              <h2>{news.author.published_date}</h2>
            </div>
          </div>
          <div className="flex gap-4 font-bold">
            <CiBookmark className="text-xl" />
            <CiShare2 className="text-xl" />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title"></h2>
          <p>{news.title}</p>
          <figure className="">
            <Image
              src={news.image_url}
              alt={news.author.title}
              width={518}
              height={262}
            />
          </figure>
          <p className="line-clamp-4">{news.details}</p>
          <div className="divider"></div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <CiStar className="text-yellow-300" />
              <p>{news.rating.number}</p>
            </div>
            <Link
              className="flex justify-center items-center gap-1"
              href={`/news/${news._id}`}
            >
              <IoMdEye />
              {news.total_view}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
