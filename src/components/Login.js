import React, {useRef, useState} from "react";
import Header from "./Header";
import {checkDataValidation} from "../utils/validate";
import {Link} from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [isError, setIsError] = useState("");
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleForms = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = e => {
    e.preventDefault();
    // validate the form data
    const err = checkDataValidation(
      email.current?.value,
      password.current?.value
    );
    console.log(email.current?.value, password.current?.value);
    setIsError(err);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="absolute w-full min-h-screen">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="bg-image"
          className="min-h-screen"
        />
      </div>
      <form className="absolute p-8 md:p-16 pb-32 sm:pb-auto bg-black w-full md:w-6/12 lg:w-4/12 h-auto my-36 mx-auto right-0 left-0 rounded-md bg-opacity-95 md:bg-opacity-85">
        <p className="text-2xl text-white font-semibold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </p>
        {!isSignInForm && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-2 mb-2 mt-4 rounded-md outline-none w-full bg-gray-600 text-white"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          ref={email}
          className="p-2 mb-2 mt-4 rounded-md outline-none w-full bg-gray-600 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          ref={password}
          className="p-2 my-2 rounded-md outline-none w-full bg-gray-600 text-white"
        />
        <p className="text-red-700">{isError}</p>
        <button
          className="px-6 py-2 mt-4 bg-red-600 text-white rounded-md w-full"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex justify-between opacity-80 mt-1">
          <div>
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe" className="text-white text-sm">
              {" "}
              Remember Me?
            </label>
          </div>
          <p className="text-white text-sm hover:underline"> Need Help?</p>
        </div>

        <div className="flex mt-12">
          <p className="text-white text-base opacity-80">
            {isSignInForm ? "New to Netflix?" : "Already Registered?"}
          </p>
          <p className="text-white ml-2 hover:underline" onClick={toggleForms}>
            {isSignInForm ? "Sign up now." : "Sign in"}
          </p>
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
