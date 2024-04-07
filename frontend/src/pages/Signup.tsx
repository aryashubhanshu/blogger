import Auth from "../components/Auth";
import Quote from "../components/Quote";

const Signup = () => {
  return (
    <div className="flex items-center justify-between w-screen h-screen">
      <div className="h-full w-1/2 max-md:w-full">
        <Auth type="signup" />
      </div>
      <div className="w-1/2 h-full max-md:hidden">
        <Quote />
      </div>
    </div>
  );
};

export default Signup;
