import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { logout } from "../../features/auth/authSlice";
import auth from "../../firebase/firebase.config";

const Navbar = () => {
  const { email } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    signOut(auth).then(() => {
      dispatch(logout());
    });
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <div className="hidden lg:block">
            <Link to="/" className="btn btn-ghost normal-case text-xl">
              Job Point
            </Link>
          </div>
          <div className="">
            <Link to="/">
              <img
                className="h-10"
                src="https://tse3.mm.bing.net/th?id=OIP._2Q-CKorip31FVfhftjJ6wHaHa&pid=Api&P=0"
              />
            </Link>
          </div>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <div>
            <ul className="flex gap-5">
              <li>
                <Link className="hover:text-primary" to="/jobs">
                  Jobs
                </Link>
              </li>

              {email ? (
                <li>
                  <Link
                    className="border border-black px-2 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all "
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    className="border border-black px-2 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all "
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
              )}
              {email && (
                <li>
                  <Link
                    to="/dashboard"
                    className="border border-gray-700 px-2 py-1 rounded-full hover:border-primary bg-slate-100 hover:text-white hover:bg-primary hover:px-4 transition-all "
                  >
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
            {/* {email && (
              <div>
                <p className="text-xl-black overflow-hidden truncate w-11">
                  {email.user.email}
                </p>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
