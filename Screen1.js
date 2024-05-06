
import React from "react";
import hp_Logo from "../assets/hp_Logo.png";

// First screen - loading screen hplogo and spinner
const Screen1 = () => (
  <div className="screen1 h-full w-full flex flex-col justify-around items-center">
    <figure className="w-1/5 h-1/5">
      <img src={hp_Logo} alt="hp-logo" />
    </figure>
    <svg
      role="status"
      className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-black"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
     
