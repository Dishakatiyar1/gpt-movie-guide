import {signOut} from "firebase/auth";
import React, {useDebugValue} from "react";
import {FaRegUserCircle} from "react-icons/fa";
import {auth} from "../utils/firebase";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch(error => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <>
      <div className="absolute px-2 md:px-8 py-1 md:py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
          className="w-48 md:w-56 h-18 md:h-24"
        />
        {user && (
          <div className="mt-4">
            <p className="text-white">{user?.displayName}</p>
            <FaRegUserCircle className="w-12 h-12 rounded-full fill-white" />
            <button
              onClick={handleSignOut}
              className="font-semibold text-red-600 border-2 border-red-600 rounded-md p-1 m-2"
            >
              {" "}
              Sign Out{" "}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
