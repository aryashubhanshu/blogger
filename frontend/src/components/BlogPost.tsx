import { Blog } from "../hooks";
import Appbar from "./Appbar";
import Avatar from "./Avatar";

const BlogPost = ({ blog }: Blog) => {
  return (
    <div>
      <Appbar authorName="Anonymous" />
      <div className="grid grid-cols-12 px-[6vw] mt-8">
        <div className="col-span-8">
          <h1 className="font-extrabold text-4xl mb-2">{blog.title}</h1>
          <p className="text-zinc-400 text-sm">Posted on Jan 10, 2024</p>
          <p className="mt-4 text-zinc-600">{blog.content}</p>
        </div>
        <div className="col-span-4">
          <h2 className="text-sm text-zinc-400">Author</h2>
          <div className="flex items-center gap-4 my-2 flex-nowrap">
            <div>
              <Avatar authorName={blog.author.name || "Anonymous"} size={8} />
            </div>
            <div>
              <h2 className="text-lg font-bold">
                {blog.author.name || "Anonymous"}
              </h2>
              <p className="text-sm text-zinc-600 w-3/4">
                Random catch phrase about the author's ability to grab the
                user's attention
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
