import React, { useState } from "react";

const LoginComponent = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const EmailhandleChange = (e) => {
    setEmail(e.target.value);
  };

  console.log(name);
  console.log(email);

  return (
    <div>
      <section className="h-[100vh] bg-green-700 flex flex-col gap-5 items-center justify-center mt-[-130px]">
        <h1 className="text-5xl font-extrabold mb-4">Login Page</h1>
        <form
          action="javascript:;"
          className="w-[30%] bg-white p-4 rounded-xl mx-auto"
        >
          <input
            className="block h-12 w-full p-2 mb-3 focus:outline-none border-[3px] border-black text-black placeholder:text-black"
            type="text"
            placeholder="Full Name"
            required
            onChange={handleChange}
            value={name}
          />
          <input
            className="block h-12 w-full p-2 mb-3 focus:outline-none border-[3px] border-black text-black placeholder:text-black"
            type="email"
            placeholder="email"
            required
            onChange={EmailhandleChange}
            value={email}
          />
          <button
            className="bg-black text-white w-full h-12"
            onClick={props.BtnProps}
            disabled={name === "" || email === ""}
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default LoginComponent;
