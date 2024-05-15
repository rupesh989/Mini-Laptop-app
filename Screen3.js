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



