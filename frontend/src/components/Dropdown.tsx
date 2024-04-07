import { useNavigate } from "react-router-dom";

const Dropdown = () => {
  const navigate = useNavigate();

  return (
    <div className="absolute top-10 right-2 px-2 py-1 text-nowrap w-fit text-sm rounded-md">
      <button
        className="bg-red-600 px-2 py-1 rounded-full text-white"
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/signin");
        }}
      >
        Sign out
      </button>
    </div>
  );
};

export default Dropdown;
