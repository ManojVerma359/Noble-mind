"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
const WhyChoose = () => {
  const Items = [
    {
      id: 1,
      title: "Customer-Centric",
      para: "Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.",
    },
    {
      id: 2,
      title: "Workplace Harmony",
      para: "Create a nurturing and peaceful environment for our staff, fostering growth, well-being, and unity. We are more than a team; we are a family.",
    },
    {
      id: 3,
      title: "Ethical Leadership",
      para: "Maintain the highest standards in all practices, ensuring our solutions are responsible, safe, and transparent.",
    },
    {
      id: 4,
      title: "Workplace Harmony",
      para: "Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.",
    },
  ];
  return (
   <>
   <section id="why">
   <div    className="relative max-w-[1920px] mx-auto">
  <Image className="absolute left-[2%] top-0 max-sm:hidden" src={'/assets/image/ellipse_img.webp'} width={70} height={94} alt="ellips"/>
  <Image className="absolute right-[2%] bottom-[2%] max-lg:hidden" src={'/assets/image/ellipse_img.webp'} width={70} height={94} alt="ellips"/>


      <div className="container px-3  mx-auto md:px-12 2xl:px-[108px] flex flex-col items-center justify-center overflow-hidden">
        <div className="flex items-center gap-[8px] justify-center">
          <Image
            src={"/assets/image/star_img.webp"}
            width={24.03}
            height={26.21}
            alt="star"
          />{" "}
          <p className="ff_exo2 font-normal text-[16px] text-[#131200]">
            Why Choose Us
          </p>
        </div>
        <h2 className="text-[26px] sm:text-[48px] font-light leading-[120%] ff_outfit pt-3 text-center pt-2">
          Driving Innovation &{" "}
          <span className="block ff_outfit font-semibold">
            Transforming Industries
          </span>
        </h2>
        <div className="flex flex-col w-full mt-[52px]">
          <Swiper
            spaceBetween={24}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
          }}
            pagination={{
              el: ".swiper-pagination",
              type: "bullets",
              clickable: true,
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            breakpoints={{
              1280:{slidesPerView:3,},
              1024:{slidesPerView:2,},
              767:{slidesPerView:2.2,},
              480:{slidesPerView:1.4,},
              300:{slidesPerView:1.1,},
          }}
            modules={[Pagination]}
            className="w-full"
          >
            {Items.map((items, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`border border-[#EEDDFB] rounded-xl p-[11px] max-w-[364px] w-full min-h-[208px] overflow-auto`}
                >
                  <span className="border-[7px] text-sm font-bold ff_outfit flex items-center justify-center rounded-full bg-gradient-to-tr from-[#A854E9] to-[#4F91FC] bg-clip-text text-transparent border-[#F4EAFC] h-9 w-9">
                    {items.id}
                  </span>
                  <p className="mt-3 text-[20px] font-normal ff_outfit text-[#131200]">
                    {items.title}
                  </p>
                  <p className="mt-1 ff_exo2 leading-[150%] text-[16px] text-[#131200]">
                    {items.para}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination mt-[10px]">
            <span className="swiper-pagination-bullet"></span>
          </div>
        </div>
        <Image
          className="w-full mt-6 rounded-3xl"
          src="/assets/image/industries_img.webp"
          alt="image"
          width={1000}
          height={1000}
          priority
        />
      </div>
    </div>
   </section>
   </>
  );
};

export default WhyChoose;
