"use client";
import React from "react";
import Image from "next/image";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
function Icon({ id, open }) {
  return (
    <svg
      width="11"
      height="6"
      viewBox="0 0 11 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-[6.55] w-[11.5] transition-transform `}
    >
      <path
        d="M6.44902 6.69038C6.31569 6.69038 6.18636 6.66538 6.06102 6.61538C5.93569 6.56538 5.83169 6.49871 5.74902 6.41538L1.14902 1.81538C0.96569 1.63205 0.874023 1.39871 0.874023 1.11538C0.874023 0.832047 0.96569 0.598714 1.14902 0.41538C1.33236 0.232047 1.56569 0.140381 1.84902 0.140381C2.13236 0.140381 2.36569 0.232047 2.54902 0.41538L6.44902 4.31538L10.349 0.41538C10.5324 0.232047 10.7657 0.140381 11.049 0.140381C11.3324 0.140381 11.5657 0.232047 11.749 0.41538C11.9324 0.598714 12.024 0.832047 12.024 1.11538C12.024 1.39871 11.9324 1.63205 11.749 1.81538L7.14902 6.41538C7.04902 6.51538 6.94069 6.58638 6.82402 6.62838C6.70736 6.67038 6.58236 6.69105 6.44902 6.69038Z"
        fill="#5A5A4D"
      />
    </svg>
  );
}

const MyAccordion = () => {
  const handleOpen = (value) => setOpen(open === value ? "" : value);
  const [open, setOpen] = React.useState(0);
  const Myaccordion = [
    {
      id: 1,
      accordionTitle: "What is Artificial Intelligence (AI)?",
      accordionDetail:
        "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.",
    },
    {
      id: 2,
      accordionTitle: "How does AI benefit our company?",
      accordionDetail:
        "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.",
    },
    {
      id: 3,
      accordionTitle:
        "What types of AI technologies are relevant to our industry?",
      accordionDetail:
        "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.",
    },
    {
      id: 4,
      accordionTitle: "How can our employees adapt to AI integration?",
      accordionDetail:
        "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.",
    },
    {
      id: 5,
      accordionTitle: "How can our company ensure data security with AI?",
      accordionDetail:
        "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.",
    },
  ];
  return (
    <>
   <section id="faq">
   <div  className="relative max-w-[1920px] mx-auto">
      <Image className="absolute left-[2%] top-0 max-sm:hidden" src={'/assets/image/ellipse_img.webp'} width={70} height={94} alt="ellips"/>
  <Image className="absolute right-[2%] bottom-[15%] max-lg:hidden" src={'/assets/image/ellipse_img.webp'} width={70} height={94} alt="ellips"/>
        <div className="container px-3  mx-auto md:px-12 2xl:px-[108px]">
          <h5 className="text-[26px] sm:text-[48px] font-light ff_outfit text-[#131200] leading-[120%] text-center">
            Frequently{" "}
            <span className="font-semibold ff_outfit"> Asked Questions</span>
          </h5>
          <p className="ff_exo2 text-[16px] text-[#131200] font-normal leading-[150%] text-center pt-[16px]">
            Lorem ipsum dolor sit amet consectetur. Orci augue mollis eu{" "}
            <span className="sm:block ff_exo2">
              volutpat mi leo. Nibh nisl consequat metus.
            </span>
          </p>
          <div className="flex flex-col gap-[18px] mt-[30px] sm:mt-[52px] max-w-[774px] mx-auto">
            {Myaccordion.map((e, id) => (
              <Accordion
                key={id}
                className={`${
                  open === id
                    ? " border-[1px] border-b-[7px] border-[#A854E9]"
                    : "border-[1px]"
                } p-6 rounded-[6px]  border-solid`}
                open={open === id}
                icon={<Icon id={id} open={open} />}
              >
                <AccordionHeader
                  className={`text-[16px] font-medium text-start overflow-hidden  ff_outfit leading-[150%]  ${
                    open === id ? "text-black" : "text-[#4D4D4D]"
                  }`}
                  onClick={() => handleOpen(id)}
                >
                  {e.accordionTitle}
                </AccordionHeader>
                <AccordionBody className="mt-3 ff_exo2 text-[#4D4D4D] leading-[150%] font-normal">
                  {e.accordionDetail}
                </AccordionBody>
              </Accordion>
            ))}
            
          </div>
        </div>
      </div>
   </section>
    </>
  );
};

export default MyAccordion;
