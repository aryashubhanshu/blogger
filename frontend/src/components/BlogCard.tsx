import { Link } from "react-router-dom";
import Avatar from "./Avatar";

interface BlogCardProps {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="py-4 px-1 border-b border-zinc-200 cursor-pointer">
        <div className="flex gap-2 items-center flex-nowrap">
          <Avatar authorName={authorName} size={4} />
          <div className="text-zinc-600 text-sm">
            {authorName} ·{" "}
            <span className="font-extralight">{publishedDate}</span>
          </div>
        </div>
        <div className="font-extrabold text-xl my-2">{title}</div>
        <p className="text-zinc-600 mb-2 text-md font-thin">
          {content.slice(0, 100) + "..."}
        </p>
        <p className="text-zinc-600 font-extralight text-sm">{`${Math.ceil(
          content.length / 100
        )} mins read`}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
