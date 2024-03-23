
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
      
