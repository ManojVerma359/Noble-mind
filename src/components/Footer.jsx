import React from "react";
import Image from "next/image";
import Icon, { Instagram, Linkdin, Twitter } from "./Icon";

const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
  return (
    <>
      <section className="bg-[url('/assets/image/footer_bgimg.webp')] bg-cover bg-no-repeat relative z-0 pt-[40px] md:pt-[138px]">

        <div className="container px-3  mx-auto md:px-12 2xl:px-[108px] flex justify-between max-md:flex-wrap gap-[40px]">
          <div>
            <Image className="cursor-pointer"
              src={"/assets/image/footer_logo.webp"}
              width={221.86}
              height={38.43}
              alt="logo"
            />
            <p className="pt-[28px] text-white ff_exo2 font-normal text-[16px] leading-[150%]">
              Follow Us
            </p>
            <div className="flex items-center gap-[16px] pt-[8px]">
              <Icon />
              <Instagram />
              <Twitter />
              <Linkdin />
            </div>
          </div>
          <div className="flex items-center gap-[64px]">
            <ul className="flex flex-col gap-[15px]">
              <li className="ff_outfit text-[16px] font-semibold text-white">
                Maine
              </li>
              <li>
                <a
                  className="ff_exo2 font-normal text-[16px] text-[#b7b7b4] hover:text-[#a854e9] transition-all duration-300"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="ff_exo2 font-normal text-[16px] text-[#b7b7b4] hover:text-[#a854e9] transition-all duration-300"
                  href="#about"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="ff_exo2 font-normal text-[16px] text-[#b7b7b4] hover:text-[#a854e9] transition-all duration-300"
                  href="#services"
                >
                  services
                </a>
              </li>
              <li>
                <a
                  className="ff_exo2 font-normal text-[16px] text-[#b7b7b4] hover:text-[#a854e9] transition-all duration-300"
                  href="#why"
                >
                  Why Choose Us
                </a>
              </li>
            </ul>
            <ul className="flex flex-col gap-[15px]">
              <li className="ff_outfit text-[16px] font-semibold text-white">
                Legal
              </li>
              <li>
                <a
                  className="ff_exo2 font-normal text-[16px] text-[#b7b7b4] hover:text-[#a854e9] transition-all duration-300"
                  href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/"
                >
                  Term & Conduction
                </a>
              </li>
              <li>
                <a
                  className="ff_exo2 font-normal text-[16px] text-[#b7b7b4] hover:text-[#a854e9] transition-all duration-300"
                  href="https://nobleminds.org/privacy-policy/"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="ff_exo2 font-normal text-[16px] text-[#b7b7b4] hover:text-[#a854e9] transition-all duration-300"
                  href=""
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="ff_exo2 font-normal text-[16px] text-[#b7b7b4] hover:text-[#a854e9] transition-all duration-300"
                  href=""
                >
                  (629) 555-0129
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className=" bg-[#5a5a50] w-full mt-[52px] " />
        <p className="text-[16px] font-normal ff_exo2 text-[#b7b7b4] pt-[16px] pb-[35px] text-center">
          © Copyright {year} Noble Mind | All rights reserved.{" "}
        </p>
      </section>
    </>
  );
};

export default Footer;
