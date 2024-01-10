"use client";

import React, { useState } from "react";
import ImagesPopup from "./ImagesPopup";
import axios from "axios";

export default function InputBox() {
  const [keyCode, setKeyCode] = useState("");
  const [userImages, setUserImages] = useState([]);
  const [seen, setSeen] = useState(false);
  let userKeyCode = "";

  const togglePop = () => {
    setSeen(!seen);
  };

  const handleOnClick = () => {
    userKeyCode = keyCode;
    axios
      .get(`http://localhost:5004/rooms/${userKeyCode}`)
      .then((res) => {
        setUserImages(res.data.images);
        togglePop();
      })
      .catch((err) => console.log(err));

  };

  const handleOnChange = ({ target }) => {
    setKeyCode(target.value);
  };

  return (
    <div className="flex flex-col space-y-5 items-center">
      <div className="inputGroup m-4 max-w-[190px] relative">
        <input
          id="cachekey"
          type="text"
          autoComplete="off"
          placeholder="Cache Key"
          value={keyCode}
          onChange={handleOnChange}
          className="font-medium text-xl text-black shadow-md text-center border border-black shadow-black rounded-lg outline-none p-4 max-w-[190px] transition-[.4s] hover:shadow-lg focus:shadow-lg focus:shadow-black bg-transparent placeholder:text-black placeholder:text-center"
        />
      </div>
      <button
        onClick={handleOnClick}
        className="w-[50%] px-[0.5em] py-[0.5em] border border-black shadow-md shadow-black bg-black text-white rounded-lg hover:bg-transparent hover:text-white hover:shadow-lg hover:shadow-black active:translate-x-[0em] active:translate-y-[0.2em]"
      >
        Enter
      </button>
      {seen ? <ImagesPopup toggle={togglePop} images={userImages}/> : null}
    </div>
  );
}
