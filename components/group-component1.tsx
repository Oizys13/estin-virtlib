import type { NextPage } from "next";
import { useState } from "react";

export type GroupComponent1Type = {
  className?: string;
};

const GroupComponent1: NextPage<GroupComponent1Type> = ({ className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`self-stretch rounded-[10px] bg-white flex flex-row items-start justify-between py-[13px] pl-[23px] pr-[34px] box-border max-w-full max-h-[125px] gap-5 z-[1] text-left text-xl text-dimgray-600 font-inter mq1300:flex-wrap ${className}`}
    >
      <div className="h-[125px] w-[1454px] relative rounded-[10px] bg-white hidden max-w-full" />
      <div className="w-[347px] flex flex-col items-start justify-start py-0 pl-0 pr-[18px] box-border max-w-full">
        <div className="self-stretch flex flex-row items-center justify-start gap-[47px] z-[1] mq450:flex-wrap">
          <img
            className="h-[99px] w-[75px] relative rounded-8xs object-cover"
            alt=""
            src="/rectangle-16-1@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-between py-[9px] px-0 box-border min-w-[135px] min-h-[92px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-1.5">
              <div className="self-stretch text-[#4D4D4D] text-14pt relative leading-[128.52%] mq450:text-base mq450:leading-[21px]">
                The Design of EveryDay Things
              </div>
              <div className="self-stretch h-3.5 text-[#4D4D4D] text-10pt relative text-mini leading-[128.52%] inline-block shrink-0">
                Don Norman, 1988
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[60px] flex flex-col items-start justify-start pt-9 px-0 pb-0 box-border">
        <div className="self-stretch relative leading-[27px] z-[1]">
          <span className="text-[#4D4D4D] text-14pt">4.5</span>
          <span className="text-[#A7A7A7] text-12pt">/5</span>
        </div>
      </div>
      <div className="w-[198px] flex flex-col items-start justify-start pt-[21px] pb-0 pl-0 pr-[18px] box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[11px]">
          <div className="relative leading-[27px] text-[#4D4D4D] text-14pt z-[1] mq450:text-base mq450:leading-[21px]">
            Computer Science
          </div>
          <div className="self-stretch relative text-[#4D4D4D] text-14pt text-mini leading-[128.52%] z-[1]">
            UX Design
          </div>
        </div>
      </div>
      <div className="w-[137px] flex flex-col items-start justify-start pt-[12.5px] pb-0 pl-0 pr-[31px] box-border text-mini">
        <div className="self-stretch flex flex-col items-start justify-start gap-2">
          <div className="self-stretch flex flex-col items-start justify-start gap-2">
            <div className="flex flex-row items-start justify-start gap-1.5">
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <img
                  className="w-4 h-4 relative z-[1]"
                  alt=""
                  src="/subtract.svg"
                />
              </div>
              <span className="relative leading-[150%] inline-block text-10pt min-w-[84px] z-[1]">
                Hard Copy
              </span>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-1.5">
              <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                <img
                  className="w-[15px] h-[15px] relative z-[1]"
                  alt=""
                  src="/Vector1 (2).svg"
                />
              </div>
              <span className="flex-1 relative leading-[150%] text-10pt z-[1]">
                E - Book
              </span>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-1.5">
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <img
                className="w-4 h-4 relative z-[1]"
                alt=""
                src="/subtract.svg"
              />
            </div>
            <span className="relative leading-[150%] inline-block text-10pt min-w-[84px] z-[1]">
              Audio book
            </span>
          </div>
        </div>
      </div>
      <div className="w-[116px] flex flex-col items-start justify-start pt-[18px] pb-0 pl-0 pr-3.5 box-border text-center text-mini text-white">
        <div className="self-stretch flex flex-col items-center justify-center gap-[13px]">
          <div className="w-[85px]rounded-8xs bg-forestgreen-100 flex flex-row items-start justify-start pt-[5px] px-0 pb-1 box-border z-[1]">
            <div className="h-[26px] w-[85px] relative rounded-8xs bg-forestgreen-100 hidden" />
            <div className="flex-1 relative z-[1]">

            </div>

          </div>
          <img
            className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px] z-[1] hover:cursor-pointer"
            alt=""
            src={isHovered ? '/heart.svg' : '/heart-1.svg'}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
          <div className="self-stretch flex flex-row items-start justify-start gap-[5px] text-left text-dimgray-600">

            <div className="flex-1 relative leading-[24px] z-[1]"></div>
          </div>
        </div>
      </div>
      <div className="w-[200px] flex flex-col items-start justify-start pt-[34.5px] px-0 pb-0 box-border">
        <div className="self-stretch flex flex-row items-start justify-between gap-5">
          <button className="ml-[50px] pl-[13px] cursor-pointer text-12pt rounded-[5px] border-[#F76B56] text-[#F76B56] hover:text-white hover:bg-[#F76B56] border-[1px] border-solid py-1 pr-3 bg-[transparent] min-w-[85px] h-[30px] rounded-8xs box-border flex flex-row items-center justify-center z-[1] hover:bg-tomato-700 hover:border-tomato-500 hover:border-[1px] hover:border-solid hover:box-border">
            Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
