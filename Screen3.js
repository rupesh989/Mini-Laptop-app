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

