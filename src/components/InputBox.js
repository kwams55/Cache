"use client";

import React, { useState } from "react";

export default function InputBox() {
  const [keyCode, setKeyCode] = useState("");

  let userKeyCode = "";

  const handleOnClick = () => {
    userKeyCode = keyCode;
    console.log(userKeyCode);
  };

  const handleOnChange = ({ target }) => {
    setKeyCode(target.value);
  };

  return (
    <div className="flex flex-col space-y-5 items-center">
      <div className="inputGroup font-[Segoe UI] m-4 max-w-[190px] relative">
        <input
        id="cachekey"
          type="text"
          autoComplete="off"
          placeholder="Cache Key"
          value={keyCode}
          onChange={handleOnChange}
          className="font-medium text-xl text-white shadow-md border border-black shadow-black rounded-lg outline-none p-4 max-w-[190px] transition-[.4s] hover:shadow-lg focus:shadow-lg focus:shadow-black bg-transparent placeholder:text-white"
        />
      </div>
      <button
        onClick={handleOnClick}
        className="w-[50%] px-[0.5em] py-[0.5em] border border-black shadow-md shadow-black bg-white text-black rounded-lg hover:bg-transparent hover:text-white hover:shadow-lg hover:shadow-black active:translate-x-[0em] active:translate-y-[0.2em]"
      >
        Enter
      </button>
    </div>
  );
}
