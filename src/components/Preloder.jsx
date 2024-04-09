"use client";
import React from "react";

const PreLoder = () => {
  setTimeout(() => {
    document.getElementById("preloder").classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }, 4000);
  return (
    <>
      <div
        id="preloder"
        className="min-h-screen fixed top-0 bg-[#a854e9]  start-0  w-full z-[500] flex justify-center flex-col items-center "
      >
          <div className="flex gap-[5px] items-center pt-[15px]">
        <svg class="h-10 w-10 animate-spin stroke-[#ffff]" viewBox="0 0 256 256">
        <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
        <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="24"></line>
        <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
        </line>
        <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="24"></line>
        <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
        </line>
        <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="24"></line>
        <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
        <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
        </line>
    </svg>
    <span class="text-4xl font-medium text-[#ffff]">Loading...</span>
        </div>
     
      </div>
    </>
  );
};

export default PreLoder;
