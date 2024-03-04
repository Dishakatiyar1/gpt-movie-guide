import React from "react";
import Header from "./Header";
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="bg-image"
          className="w-full"
        />
      </div>
      <form className="absolute p-16 bg-black w-4/12 my-36 mx-auto right-0 left-0 rounded-md bg-opacity-85">
        <p className="text-2xl text-white font-semibold">Sign In</p>
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 mb-2 mt-4 rounded-md outline-none w-full bg-gray-600 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 rounded-md outline-none w-full bg-gray-600 text-white"
        />
        <button className="px-6 py-2 mt-4 bg-red-600 text-white rounded-md w-full">
          Sign In
        </button>
        <div className="flex justify-between opacity-80 mt-1">
          <div>
            <input type="checkbox" id="rememberMe" />
            <label for="rememberMe" className="text-white text-sm">
              {" "}
              Remember Me?
            </label>
          </div>
          <Link className="text-white text-sm hover:underline">
            {" "}
            Need Help?
          </Link>
        </div>

        <div className="flex mt-12">
          <p className="text-white text-base opacity-80">New to Netflix?</p>
          <Link className="text-white ml-2 hover:underline">Sign up now.</Link>
        </div>

        <p className="text-white text-sm mt-4 opacity-80">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <Link className="underline text-blue-700"> Learn more.</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
