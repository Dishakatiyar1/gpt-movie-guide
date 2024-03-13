import {onAuthStateChanged, signOut} from "firebase/auth";
import React, {useEffect} from "react";
import {FaRegUserCircle} from "react-icons/fa";
import {auth} from "../utils/firebase";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";
import {logo_url} from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  // Note - navigating here so that only registered user can goto browser page
  // means when user is not null
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, user => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/auth.user
  //       navigate("/browse");
  //     } else {
  //       // User is signed out
  //       navigate("/");
  //     }
  //   });
  //   return () => unsubscribe();
  // }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/");
      })
      .catch(error => {
        // An error happened.
        console.log("Error while signing out!");
        navigate("/error");
      });
  };

  return (
    <>
      <div className="absolute px-2 md:px-8 py-1 md:py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
        <img src={logo_url} alt="logo" className="w-48 md:w-56 h-18 md:h-24" />
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
