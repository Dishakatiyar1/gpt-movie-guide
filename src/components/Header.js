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
      <div className="absolute w-full px-2 md:px-8 lg:px-12 items-center py-2 md:py-4 bg-gradient-to-b from-black z-10">
        <div className="flex justify-between items-center w-full">
          <img
            src={logo_url}
            alt="logo"
            className="w-24 md:w-32 h-12 md:h-16"
          />
          <div>
            {user && (
              <div className="flex items-center">
                <p className="text-white mr-4">{user?.displayName}</p>
                <FaRegUserCircle className="w-10 h-10 md:w-12 md:h-12 text-white" />
                <button
                  onClick={handleSignOut}
                  className="ml-4 font-semibold text-red-600 border-2 border-red-600 rounded-md py-1 px-4"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
