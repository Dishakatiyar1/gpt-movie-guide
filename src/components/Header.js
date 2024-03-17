import {signOut} from "firebase/auth";
import React from "react";
import {FaRegUserCircle} from "react-icons/fa";
import {auth} from "../utils/firebase";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {removeUser} from "../utils/userSlice";
import {SUPPORTED_LANGUAGES, logo_url} from "../utils/constants";
import {toggleGptSearchView} from "../utils/gptSlice";
import {chooseLanguage} from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

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

  const handleGptSearchClick = () => {
    // GPT Search Click
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = e => {
    dispatch(chooseLanguage(e.target.value));
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
                {showGptSearch && (
                  <select
                    className="bg-gray-200 text-black rounded-md px-2 py-2 flex items-center mr-4 outline-none"
                    onChange={handleLanguageChange}
                  >
                    {SUPPORTED_LANGUAGES.map(lang => (
                      <option value={lang.identifier} key={lang.identifier}>
                        {lang.name}
                      </option>
                    ))}
                  </select>
                )}

                <button
                  className="bg-purple-700 text-white rounded-md px-6 py-2 flex items-center hover:bg-opacity-80"
                  onClick={handleGptSearchClick}
                >
                  {showGptSearch ? "Home Page" : "GPT Search"}
                </button>
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
