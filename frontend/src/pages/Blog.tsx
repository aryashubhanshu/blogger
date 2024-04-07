import { useEffect } from "react";
import Appbar from "../components/Appbar";
import BlogPost from "../components/BlogPost";
import Spinner from "../components/Spinner";
import { useBlog } from "../hooks";
import { useNavigate, useParams } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const idString = id ? id.toString() : "";
  const { loading, blog } = useBlog({ id: idString });

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/signin");
    }
  }, []);

  if (loading) {
    return (
      <div>
        <Appbar authorName="Anonymous" />
        <div className="w-full h-[70vh] flex items-center justify-center">
          <Spinner />
        </div>
      </div>
    );
  }

  return <BlogPost blog={blog} />;
};

export default Blog;
