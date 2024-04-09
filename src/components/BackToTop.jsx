"use client";
import React from "react";

function BackToTop() {
  const [backTop, setBackTop] = React.useState(false);
  const moveToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
      setBackTop(true);
    } else {
      setBackTop(false);
    }
  });
  return (
    <div className="">
      {backTop ? (
        <button
          id="text"
          onClick={moveToTop}
          className="transition-all delay-300 fixed bg-[white]  bottom-0 end-0 me-5 mb-4  pointer z-10 border-[3px] border-[#a854e9] rounded-[70px]  py-1 px-1  animate-bounce"
        >
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            fill="#a854e9"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
          </svg>
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default BackToTop;
