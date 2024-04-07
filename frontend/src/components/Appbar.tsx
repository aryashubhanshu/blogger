import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import Dropdown from "./Dropdown";

const Appbar = ({ authorName }: { authorName: string }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="flex items-center justify-between py-[2vh] px-[4vw] border-b border-zinc-100">
      <Link to={`/blogs`}>
        <div className="flex gap-[0.5px] cursor-pointer">
          <div className="flex flex-col">
            <div className="h-4 w-4 bg-black rounded-r-full rounded-tl-full"></div>
            <div className="h-4 w-4 bg-black rounded-r-full rounded-bl-full"></div>
          </div>
          <div className="h-8 w-3 bg-black rounded-full"></div>
          <div className="h-8 w-8 bg-black rounded-full"></div>
        </div>
      </Link>
      <div className="flex items-center gap-8">
        <Link to="/publish">
          <button className="text-xs bg-green-600 hover:bg-green-700 text-white rounded-full px-2 py-1">
            Publish
          </button>
        </Link>
        <div className="flex gap-2 items-center justify-between">
          <Avatar authorName={authorName} size={8} />
          <span
            onClick={() => setShowDropdown(!showDropdown)}
            className="text-xl relative"
          >
            <RiArrowDropDownLine />
            {showDropdown && <Dropdown />}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
