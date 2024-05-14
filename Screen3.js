import React, { useEffect, useState } from "react";
import profile from "../assets/Profile.png";
import user from "../assets/user.png";
import { BiFingerprint } from "react-icons/bi";

// Third screen - sign in screen of user
const Screen3 = ({ fingerScan, handleFourth }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [welcome, setWelcome] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [focus, setFocus] = useState(false);

  const onSubmit = () => {
    if (password !== "1234") {
      setError(true);
    } else {
      setError(false);
      setWelcome(true);
      setTimeout(() => {
        handleFourth();
      }, 2000);
    }
  };

  useEffect(() => {
    if (fingerScan) {
      setWelcome(true);
    } else {
      setWelcome(false);
    }
  }, [fingerScan]);

  const Left = () => {
    return (
      <div className="left basis-2/12 flex flex-col justify-end">
        <div className="user bg-red-600 flex items-center basis-[15%]">
          <img
            className="rounded-full w-1/2 h-full basis-1/4"
            src={profile}
            alt="profile"
          />
          <p className="basis-3/4 text-xxs text-white overflow-hidden">
            Rupesh Bavaskar
          </p>
        </div>
        <div className="user flex items-center basis-[15%] gap-1">
          <img
            className="rounded-full w-[45%] h-4/5 basis-1/4"
            src={user}
            alt="user profile"
          />
          <p className="basis-3/4 text-xxs text-white overflow-hidden">
            Other User
          </p>
        </div>
      </div>
    );
  };

const Right = () => {
    return (
      <div className="right basis-2/12 flex flex-col justify-end">
        <div className="basis-[10%] flex items-end cursor-pointer ml-auto text-slate-300 xs:gap-1 md:gap-2">
          <i title="Internet" className="fa fa-wifi hover:text-white "></i>
          <i
            title="Battery"
            className="fa fa-battery-full hover:text-white"
          ></i>
          <i
            title="Power"
            className="fa fa-power-off hover:text-white"
            aria-hidden="true"
          ></i>
        </div>
      </div>
    );
  };

  return (
    <div className="screen3 bg-cover bg-coverBlur bg-no-repeat bg-center h-full w-full flex p-[1%]">
      <Left />
      <div className="middle basis-8/12 text-white flex flex-col justify-center xs:gap-1 sm:gap-2 items-center">
        <img
          className={`${
            focus ? "xs:invisible" : "xs:visible"
          } sm:visible rounded-full w-[20%] h-1/4`}
          src={profile}
          alt="profile"
        />
        <h1>Rupesh Bavaskar</h1>

 
