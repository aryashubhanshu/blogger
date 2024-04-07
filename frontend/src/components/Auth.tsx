import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { SignupInputs } from "@aryashubhanshu/blogger-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [inputs, setInputs] = useState<SignupInputs>({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        inputs
      );
      const { jwt } = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
      alert("Error signing up, please try again");
    }
  }

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold my-2">
        {type === "signup" ? "Create an account" : "Welcome back"}
      </h1>
      <p className="text-zinc-600">
        {type === "signup"
          ? "Already have an account?"
          : "Don't have an account?"}{" "}
        <Link
          className="underline"
          to={type === "signup" ? "/signin" : "/signup"}
        >
          {type === "signup" ? "Sign in" : "Sign up"}
        </Link>
      </p>
      <div className="py-8 w-1/2">
        {type === "signup" && (
          <LabelledInput
            label={"Name"}
            placeholder={"John Doe"}
            type="text"
            onChange={(e) => {
              setInputs({ ...inputs, name: e.target.value });
            }}
          />
        )}
        <LabelledInput
          label={"Email"}
          placeholder={"john_doe@mail.com"}
          type="email"
          onChange={(e) => {
            setInputs({ ...inputs, email: e.target.value });
          }}
        />
        <LabelledInput
          label={"Password"}
          placeholder={"Secret"}
          type="password"
          onChange={(e) => {
            setInputs({ ...inputs, password: e.target.value });
          }}
        />
        <button
          type="button"
          className="w-full bg-black hover:bg-gray-800 text-white rounded-md py-2 mt-2"
          onClick={sendRequest}
        >
          {type === "signup" ? "Sign Up" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default Auth;

interface LabelledInput {
  label: string;
  placeholder: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const LabelledInput = ({
  label,
  placeholder,
  type,
  onChange,
}: LabelledInput) => {
  return (
    <div className="flex flex-col w-full py-2">
      <label className="font-semibold mb-1">{label}</label>
      <input
        className="px-4 py-2 border border-zinc-200 rounded-md outline-none"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
};
