import { useNavigate } from "react-router-dom";
import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import BlogSkeleton from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";
import { useEffect } from "react";

const Blogs = () => {
  const navigate = useNavigate();
  const { loading, blogs } = useBlogs();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/signin");
    }
  }, []);

  if (loading)
    return (
      <div>
        <Appbar authorName="Anonymous" />
        <div className="flex justify-center mt-8">
          <div className="flex flex-col justify-center max-w-xl">
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );

  return (
    <div>
      <Appbar />
      <div className="flex justify-center mt-8">
        <div className="flex flex-col justify-center max-w-xl">
          {blogs.map((blog) => {
            return (
              <BlogCard
                key={blog.id}
                id={blog.id}
                authorName={blog.author.name ? blog.author.name : "Anonymous"}
                title={blog.title}
                content={blog.content}
                publishedDate="Jan 10, 2024"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
