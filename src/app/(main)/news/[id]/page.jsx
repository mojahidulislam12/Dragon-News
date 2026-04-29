import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { IoMdEye } from "react-icons/io";

const NewDetailsPage = async ({ params }) => {
  //console.log(params);
  const { id } = await params;
  console.log(id);
  const news = await getNewsDetailsById(id);
  console.log(news);
  return (
    <div>
      <div className="max-w-285 mx-auto my-8">
        <div className="card-body">
          <h2 className="card-title"></h2>
          <p>{news.title}</p>
          <figure className="">
            <Image src={news.image_url} alt="" width={300} height={300} />
          </figure>
          <p className="line-clamp-4">{news.details}</p>
          <div className="divider"></div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center"></div>
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

export default NewDetailsPage;
