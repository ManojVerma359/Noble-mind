import React from "react";
import Image from "next/image";

const NewsLetter = () => {
  return (
  <section className="max-md:bg-[#8a56d5]">
      <div className="relative z-[1] max-w-[1920px] mx-auto">
      <Image
        className="absolute left-[2%] top-0 max-md:hidden z-[-1]"
        src={"/assets/image/ellipse_img.webp"}
        width={70}
        height={94}
        alt="ellips"
      />

      <div className="container px-3 md:min-h-[318px]   mx-auto md:px-12 2xl:px-[108px]  md:mb-[-90px] mt-[40px] sm:mt-[70px] md:mt-[100px] lg:mt-[150px] ">
        <div className="md:bg-[url(/assets/image/nwslatter_bgimg.webp)] bg-cover bg-no-repeat bg-center py-[50px] sm:py-[60px] rounded-[20px]">
          <h6 className="text-white text-[26px] sm:text-[48px] font-light leading-[120%] ff_outfit text-center">
            Subscribe to our{" "}
            <span className="ff_outfit font-semibold ">Newsletter!</span>
          </h6>
          <p className="text-[16px] ff_exo2 text-[#fdfdfd] leading-[150%] pt-[8px] text-center">
            Be the first to get exclusive offers and the latest news.
          </p>
          <div class="max-w-[280px] sm:max-w-[448px] mx-auto border border-solid border-[#fdfdff33] rounded-md bg-[#8c62db] md:ps-6 md:pe-2.5 sm:px-2 sm:py-2 p-1 flex justify-between mt-[36px]">
            <input
              type="text"
              placeholder="Enter your email"
              className="ff_outfit font-semibold text-[16px] leading-[24px] placeholder:text-[#FDFDFF] bg-transparent  text-[#FDFDFF] outline-none w-full"
              autocomplete="off"
            />
            <button className="ff_outfit font-semibold text-[16px] leading-[24px] text-[#FDFDFF] hover:text-[#985FEC] transition-all duration-300 ease-linear hover:bg-white sm:px-6 px-3 sm:py-[13px] py-3 border border-solid border-[#FDFDFF] rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default NewsLetter;
