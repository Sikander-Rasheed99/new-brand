"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/Components/Header";
import LoginComponent from "@/Components/LoginComponent";

const Login = ({}) => {
  const router = useRouter();
  const [isloggedIn, setIsloggedIn] = useState(false);

  const OnHandle = () => {
    setIsloggedIn(true);
    router.push("/");
  };

  return (
    <>
      <Header header={isloggedIn} />
      <LoginComponent BtnProps= {OnHandle} />
    </>
  );
};

export default Login;
