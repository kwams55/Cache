"use client";

import React, { useState } from "react";
import NewRoomPopup from "./NewRoomPopup";

export default function AddButton() {
  const [seen, setSeen] = useState(false);

  const togglePop = () => {
    setSeen(!seen);
  };

  return (
    <div>
      <button
        title="Add New"
        onClick={togglePop}
        className="group cursor-pointer outline-none hover:rotate-90 duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70px"
          height="70px"
          viewBox="0 0 24 24"
          className="stroke-black fill-none group-active:stroke-black group-active:fill-[#262626] group-active:duration-0 duration-300"
        >
          <path
            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            strokeWidth="1.5"
          ></path>
          <path d="M8 12H16" strokeWidth="1.5"></path>
          <path d="M12 16V8" strokeWidth="1.5"></path>
        </svg>
      </button>
      {seen ? <NewRoomPopup toggle={togglePop} /> : null}
    </div>
  );
}
