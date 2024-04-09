"use client";
import Image from "next/image";
import React from "react";
import CommonBtn from "./CommonBtn";
import { useState } from "react";
import Hamburger from "hamburger-react";
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [Show, setShow] = useState(false);
  if (Show === true) {
    document.body.classList.add("max-lg:overflow-hidden");
  } else {
    document.body.classList.remove("max-lg:overflow-hidden");
  }
  const moment = () => {
    setShow(!Show);
    setOpen(!isOpen);
  };
  const navbarmap = [
    {
      title: "Home",
      id: "#home",
    },
    { title: "About Us", id: "#about" },
    { title: "Services", id: "#services" },
    { title: "Why Choose Us", id: "#why" },
    { title: "Blogs", id: "#blogs" },
    { title: "FAQ", id: "#faq" },
  ];
  return (
    <>
      <section id="home" className="hero_bgimg  lg:h-[810px]  lg:bg-[url('/assets/image/hero_bgimg.webp')] bg-contain bg-center  bg-no-repeat flex justify-center flex-col items-center">

        <div className="container px-3  mx-auto md:px-12 2xl:px-[108px]">
          <nav className="h-[90px] flex items-center justify-between ">
            <Image className="cursor-pointer"
              src={"/assets/image/logo.webp"}
              width={221.86}
              height={38.43}
              alt="logo"
            />
            <div className="flex items-center">
              <ul
                className={`flex gap-[40px] lg:gap-[24px]  ${
                  Show ? "left-0" : "left-[-100%]  "
                } h-full  w-full  flex-col lg:flex-row top-0 text-center justify-center max-lg:bg-[#ffff] z-[2]   items-center duration-500 fixed lg:static`}
              >
                {navbarmap.map((e) => {
                  return (
                    <>
                      <li className="relative inline-block ">
                        <a
                          onClick={moment}
                          className=" font-normal text-[16px] text-[#5a594d] ff_exo2 leading-[150%] hover:text-[#131200] transition duration-300 ease-out "
                          href={e.id}
                        >
                          {e.title}
                        </a>
                      </li>
                    </>
                  );
                })}
                <div className="lg:ml-[40px]">
                  <CommonBtn btn1="Contact Us" btn="butn1" />
                </div>
              </ul>

              <div
                className="z-30 lg:hidden text-black"
                onClick={() => setShow(!Show)}
              >
                <button>
                  <Hamburger toggled={isOpen} toggle={setOpen} />
                </button>
              </div>
            </div>
          </nav>
        </div>
        <div className="container px-3 md:px-12 2xl:px-[108px] mx-auto grow flex justify-center flex-col max-lg:pt-[100px] max-sm:pt-[60px]">
          
          <div className="flex items-center gap-[8px]">
            <Image
              src={"/assets/image/star_img.webp"}
              width={24.03}
              height={26.21}
              alt="star"
            />
            <p className="ff_exo2 font-normal text-[16px] text-[#131200]">
              AI With Noble Mind
            </p>
          </div>
          <h1 className="sm:text-[40px] text-[27px] md:text-[64px] font-light leading-[120%] ff_outfit pt-3">
            Inspiring Innovation,
            <span className="ff_outfit lg:block"> Elevating Solutions –</span>{" "}
            <span className="ff_outfit text-[26px]  sm:text-[48px] font-semibold">
              Noble Mind"
            </span>
          </h1>
          <p className="ff_exo2 font-normal text-[16px] leading-[150%] pt-3">
            At Noble Mind is a forward-thinking AI specialised company dedicated
            to{" "}
            <span className="ff_exo2 lg:block">
              reshaping the future of how we live, work, and learn. Our mission
              is to create
            </span>{" "}
            ground-breaking AI solutions for Healthcare, Education, and beyond,
            aligning{" "}
            <span className="ff_exo2 lg:block">
              with Saudi Arabia’s Vision 2030.”
            </span>
          </p>
          <Image
          className="w-full h-full  top-[0] z-[-1] lg:hidden max-lg:pt-3"
          src={"/assets/image/hero_imgs.png"}
          width={1400}
          height={810}
        />
        </div>
      </section>
    </>
  );
};

export default Header;
