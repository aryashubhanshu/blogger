import { IoAddCircleOutline } from "react-icons/io5";
import Appbar from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/signin");
    }
  }, []);

  return (
    <div>
      <Appbar authorName="Anonymous" />
      <div className="grid grid-cols-12 px-[6vw] mt-8">
        <div className="grid items-start col-span-2 justify-items-end">
          <button
            onClick={async () => {
              const response = await axios.post(
                `${BACKEND_URL}/api/v1/blog`,
                { title, content },
                {
                  headers: {
                    Authorization: localStorage.getItem("token"),
                  },
                }
              );
              navigate(`/blog/${response.data.id}`);
            }}
            className="text-zinc-400 hover:text-zinc-800 font-extrabold text-4xl mb-2"
          >
            <IoAddCircleOutline />
          </button>
        </div>
        <div className="col-span-10 px-2">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Title"
              className="outline-none font-extrabold text-4xl w-3/4"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <textarea
              placeholder="Tell your story..."
              className="outline-none w-3/4 h-[70vh]"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publish;
