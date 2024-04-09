import Image from "next/image";
import React from "react";
import CommonBtn from "./CommonBtn";


const About = () => {
  return (
    <>
      <section id="about" >
  <div className="max-w-[1920px] mx-auto relative py-[40px] sm:py-[70px] md:py-[100px] lg:py-[150px]">
  <Image className="absolute left-[2%] top-0 max-md:hidden" src={'/assets/image/ellipse_img.webp'} width={70} height={94} alt="ellips"/>
  <Image className="absolute right-[2%] bottom-[22%] max-lg:hidden" src={'/assets/image/ellipse_img.webp'} width={70} height={94} alt="ellips"/>
        <div className="container px-3  mx-auto md:px-12 2xl:px-[108px] flex justify-between gap-[32px] sm:gap-[75px] items-center max-lg:flex-wrap-reverse">
          <div className="lg:max-w-[544px] max-lg:w-full">
            <Image className="w-full"
              src={"/assets/image/about_img.webp"}
              width={544}
              height={567}
              alt="about"
            />
          </div>
          <div className="lg:max-w-[531px]">
            <div className="flex items-center gap-[8px]">
              <Image
                src={"/assets/image/star_img.webp"}
                width={24.03}
                height={26.21}
                alt="star"
              />
              <p className="ff_exo2 font-normal text-[16px] text-[#131200]">
              About Us
              </p>
            </div>
            <h1 className="text-[26px] sm:text-[48px] font-light leading-[120%] ff_outfit pt-3">
            Pioneering Vision &
              <span className="ff_outfit block">
                {" "}
                Mission-<span className="ff_outfit font-semibold">Driven Sectoral</span>
              </span>{" "}
              <span className="ff_outfit text-[26px] sm:text-[48px] font-semibold">
              Innovation
              </span>
            </h1>
            <p className="ff_exo2 font-normal text-[16px] leading-[150%] pt-3">
            Imagine a future in Saudi Arabia influenced by the potential of Al, with Noble Mind at the forefront of this transformation. Healthcare stands to gain with the promise of enhanced data precision. In education, there's the potential for individualized learning experiences. Finance could witness seamless transactions, and entertainment may revel in customized experiences. Through Al's promise, transportation could innovate and cities might adapt smarter infrastructures. In every domain, the vision of Noble Mind hints at a brighter, more efficient nation.
            </p>
            <div className="mt-[25px] sm:mt-[32px] md:mt-[42px]">
                  <CommonBtn btn1="Read More" btn="butn1" />
                </div>
          </div>
        </div>
  </div>
      </section>
    </>
  );
};

export default About;
