"use client";

import Input from "postcss/lib/input";
import React, { useState } from "react";

export default function Popup(props) {
  const [name, setName] = useState(null);
  const [keyCode, setKeyCode] = useState(null);
  const labelStyle = "block mb-[10px] text-xl";
  const inputStyle =
    "w-full p-[5px] rounded-[5px] border border-[#ccc] border-sm mb-[10px] outline-none";

  const handleClose = () => {
    props.toggle();
  };

  const handleUpload = () => {};

  const handleName = ({ target }) => {
    setName(target.value);
  };

  const handleKeyCode = ({ target }) => {
    setKeyCode(target.value);
  };

  return (
    <div className="fixed z-[1] left-0 top-0 w-full h-full overflow-auto bg-transparent">
      <div className="bg-white fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] p-4 pb-8 rounded-lg shadow-md w-[30%]">
        <button onClick={handleClose} className="p-4">
          <svg
            class="w-4 h-4 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl">New Room</h2>
          <form>
            <label className={`${labelStyle}`}>
              Name:
              <input
                type="text"
                value={name}
                onChange={handleName}
                className={`${inputStyle}`}
              />
            </label>
            <label className={`${labelStyle}`}>
              Key Code:
              <input
                type="text"
                value={keyCode}
                onChange={handleKeyCode}
                className={`${inputStyle}`}
              />
            </label>
            {/* {Upload button comes here} */}
          </form>
        </div>
      </div>
    </div>
  );
}
