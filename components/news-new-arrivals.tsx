"use client"
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type NewsNewArrivalsType = {
  className?: string;
  newsImagePair?: string;
  newsImagePair1?: string;
  newsImagePair2?: string;
  newsImagePair3?: string;
  rectangle12?: string;
  rectangle121?: string;
  rectangle122?: string;
  rectangle123?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const NewsNewArrivals: NextPage<NewsNewArrivalsType> = ({
  className = "",
  propFlex,
  propMinWidth,
  propAlignSelf,
  newsImagePair,
  newsImagePair1,
  newsImagePair2,
  newsImagePair3,

}) => {
  const newsNewArrivalsStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propMinWidth, propAlignSelf]);

  return (
    <div
      className={`h-[233px] w-[831px] flex-1 rounded-tl-[10px] rounded-[11px] bg-white  border-[#842e80] border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start min-w-[803px] max-w-full z-[1] text-left text-6xl text-white font-inter mq800:min-w-full mq1100:h-auto ${className}`}
      style={newsNewArrivalsStyle}
    >
      <div className="self-stretch w- flex flex-row items-start justify-start shrink-0 max-w-full [row-gap:20px] mq1100:flex-wrap">
        <div className="h-[233px] w-[58px] rounded-tl-[10px] rounded-bl-[10px] rounded-tr-none rounded-br-none rounded-bl-3xs [background:linear-gradient(rgba(0,_0,_0,_0.1),_rgba(0,_0,_0,_0.1)),_linear-gradient(182.98deg,_#eb5231,_#571fcf)] flex flex-row items-center justify-center pt-9 px-[13px] pb-10 box-border">
          <h1 className="h-[32px] text-20pt relative text-inherit leading-[128.52%] font-medium font-[inherit] whitespace-nowrap inline-block shrink-0 [transform:_rotate(-90deg)] z-[1] mq450:text-xl mq450:leading-[26px]">
            New Arrivals
          </h1>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start  min-w-[522px] max-w-full mq800:min-w-full">
          <div className="w-[803px] overflow-x-auto flex flex-row items-start justify-start py-[13px] px-[35px] box-border gap-12 max-w-full mq450:gap-6">
            <div className="h-[203px] w-[167px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-[10px] bg-white overflow-hidden shrink-0">
              <img
                className="absolute top-[16px] left-[22px] rounded-[5px] w-[123px] h-[170px] object-cover"
                loading="lazy"
                alt=""
                src="rectangle-12@2x.png"
              />
            </div>
            <div className="h-[203px] w-[167px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-[10px] bg-white overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[19px] rounded-[5px] w-[123px] h-[170px] object-cover"
                loading="lazy"
                alt=""
                src="rectangle-12-1@2x.png"
              />
            </div>
            <div className="h-[203px] w-[167px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-[10px] bg-white overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[19px] rounded-[5px] w-[123px] h-[170px] object-cover"
                loading="lazy"
                alt=""
                src="rectangle-12-2@2x.png"
              />
            </div>
            <div className="h-[203px] w-[167px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-[10px] bg-white overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[15px] rounded-[5px] w-[123px] h-[170px] object-cover"
                loading="lazy"
                alt=""
                src="rectangle-12-5@2x.png"
              />
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default NewsNewArrivals;
