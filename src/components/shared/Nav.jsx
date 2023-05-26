import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import Devider from "../Home/styles/Devider";
import { AuthContext } from "../../Provider/AuthProvider";
import ActiveLink from "../../ActiveLink/ActiveLink";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const { user , logOut} = useContext(AuthContext);
  return (
    <div>
      <div className="flex justify-between md:mx-10 mx-5 md:mb-0 mb-20">
        <div>
          <img
            src="https://htmldemo.net/kidol/kidol/assets/img/logo.png"
            alt=""
          />
        </div>
        <div className="flex items-center absolute md:static top-16 left-1/2 -translate-x-1/2 md:translate-x-0">
          <div className="flex space-x-1">
            <input
              type="text"
              className="block lg:w-[500px] md:w-[300px] w-[220px] px-4 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Search..."
            />
            <button className="px-4 text-white bg-purple-600 rounded-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex gap-2 justify-end items-center w-36">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            {!open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
          <div className="flex items-center">
            <div>
              {user &&
                  <div className="relative">
                  <div className="rounded-full mr-2 overflow-hidden w-6 h-6 md:w-8 md:h-8">
                    <img src={user?.photoURL} alt="" />
                  </div>
                  <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
                </div>
              }
            </div>
            <div>
              {!user ? (
                <span>
                  <Link to="/login">
                    <button>Login</button>
                  </Link>
                </span>
              ) : (
                <span>
                  <button onClick={logOut}>LogOut</button>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`md:opacity-100 md:visible font-bold nav z-50 flex duration-500 md:justify-center md:gap-10 md:flex-row md:mt-4 absolute md:static flex-col  border md:border-none pr-36 pl-5 pt-10 gap-5 pb-36 md:p-0 rounded bg-white shadow-2xl${
          open ? " top-20 right-0 opacity-100 " : " top-44 right-0 opacity-0 invisible"
        }`}
      >
        <ActiveLink className="links" to="/">
          Home
        </ActiveLink>
        <ActiveLink className="links" to="/about">
          About
        </ActiveLink>
        <ActiveLink className="links" to="/alltoys">
          All Toys
        </ActiveLink>
        <ActiveLink className="links" to="/mytoys">
          My Toys
        </ActiveLink>
        <ActiveLink className="links" to="/addtoy">
          Add A Toy
        </ActiveLink>
        <ActiveLink className="links" to="/Blog">
          Blog
        </ActiveLink>
      </div>
      <div className="">
        <Devider></Devider>
      </div>
    </div>
  );
};

export default Nav;
