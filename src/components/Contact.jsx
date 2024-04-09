import React from "react";
import Image from "next/image";
import CommonBtn from "./CommonBtn";

const Contact = () => {
  return (
    <>
      <section>
        <div className="container px-3  mx-auto md:px-12 2xl:px-[108px] py-[40px] sm:py-[70px] md:py-[100px] lg:py-[150px] flex justify-between gap-[64px] items-center max-lg:flex-wrap">
          <div className=" w-full lg:max-w-[478px] flex flex-col gap-4">
            <h4 className="font-semibold text-[26px] sm:text-[48px] ff_outfit text-[#131200] leading-[120%]">
              Contact <span className="ff_outfit font-light">Us</span>
            </h4>
            <p className="text-[16px] font-normal leading-[150%] text-[#131200]">
              Feel free to contact us any time . We will get back to you as soon
              as we can!{" "}
            </p>
            <form  className="max-lg:w-full lg:max-w-[593px] mx-auto lg:mx-0">
              <div class="sm:flex  pt-4">
                <div class="flex flex-col w-full sm:w-1/2 pt-2 sm:pt-0">
                  <label
                    for="Name" 
                    class="ff_exo2 font-normal text-sm sm:text-base leading-[150%] text-[#131200] opacity-70"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="Name"
                    required
                    class="ff_exo2 font-normal text-sm sm:text-base leading-[150%] text-[#131200] opacity-70 outline-none border border-[#13120033] rounded-lg p-[10px_12px] mt-[5px]"
                    name="Name"
                  />
                </div>
                <div class="flex flex-col w-full sm:w-1/2 pt-2 sm:pt-0 sm:ps-3">
                  <label
                    for="LastName"
                    class="ff_exo2 font-normal text-sm sm:text-base leading-[150%] text-[#131200] opacity-70"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    class="ff_exo2 font-normal text-sm sm:text-base leading-[150%] text-[#131200] opacity-70 outline-none border border-[#13120033] rounded-lg p-[10px_12px] mt-[5px]"
                    name="LastName"
                  />
                </div>
              </div>
              <div data-aos="fade-down" class="flex flex-col w-full pt-2">
                <label
                  for="email"
                  class="ff_exo2 font-normal text-sm sm:text-base leading-[150%] text-[#131200] opacity-70 "
                >
                  Email
                </label>
                <input
                  type="mail"
                  required
                  class="ff_exo2 font-normal text-sm sm:text-base leading-[150%] text-[#131200] opacity-70 outline-none border border-[#13120033] rounded-lg p-[10px_12px] mt-[5px]"
                  name="email"
                />
              </div>
              <div data-aos="fade-down" class="flex flex-col w-full pt-2">
                <label
                  for="Message"
                  class="ff_exo2 font-normal text-sm sm:text-base leading-[150%] text-[#131200] opacity-70 "
                >
                  Message
                </label>
                <textarea
                  type="message"
                  name="message"
                  required
                  class="ff_exo2 font-normal text-sm sm:text-base leading-[150%] text-[#131200] opacity-70 outline-none border border-[#13120033] rounded-lg p-[10px_12px] mt-[5px] min-h-[135px]"
                ></textarea>
              </div>
              <div className="mt-[24px]">
                <CommonBtn btn1="Submit" btn="butn1" />
              </div>
            </form>
          </div>
          <div className="max-lg:w-full">
            <Image className="max-lg:w-full"
              src={"/assets/image/contact_img.webp"}
              height={572}
              width={598}
              alt="img"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
