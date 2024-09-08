import React from 'react';

const Quote = ({ quote, author }) => {
  return (
    <div>


      <div className="w-[218px] flex flex-row items-start justify-start py-0 px-[13px] box-border text-6xl">
        <h1 className="m-0 flex-1 relative text-inherit leading-[128.52%] font-medium text-24pt text-white  font-[inherit] mq450:text-xl mq450:leading-[26px]">
          Today’s Quote
        </h1>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[5px] pl-[13px] pr-px box-border max-w-full">
        <blockquote className="m-0 flex-1 relative leading-[150%] text-white text-14pt inline-block max-w-full mq450:text-base mq450:leading-[24px]">
          “{quote}”
        </blockquote>
      </div>
      
    </div>
  )
};

export default Quote;