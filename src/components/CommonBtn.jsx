import React from 'react'

const CommonBtn = (props) => {
  return (
    <>
    <div>
    <button className= {`${props.btn} bg_btn px-[24px] flex inline-block py-[14px] rounded-[4px] text-white ff_outfit font-semibold text-[16px] hover:text-[#a854e9] border-[1px] hover:border-[#a854e9] transition-all duration-400`}>{props.btn1}</button>

    </div>
        </>
  )
}

export default CommonBtn 