import React from "react";

export default function ImagesPopup({toggle, images}) {
  const handleClose = () => {
    toggle();
  };

  return (
    <div className="fixed z-[1] left-0 top-0 w-full h-full overflow-auto bg-transparent">
      <div className="bg-white fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] p-4 rounded-lg shadow-md w-[30%]">
        <button onClick={handleClose} className="p-1 pt-2">
          <svg
            className="w-4 h-4 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
        <div className="grid grid-cols-3 justify-items-center p-2">
            {images ? images.map((image, i) => 
            <div key={i} className="">
                <ul>
                    <li>{image}</li>
                </ul>
            </div>) : 
            <h2 className="p-2 text-xl col-span-3 text-center">There are no images in this room yet or this room does not exist</h2>}
        </div>
      </div>
    </div>
  );
}
