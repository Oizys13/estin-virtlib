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
  rectangle12,
  rectangle121,
  rectangle122,
  rectangle123,
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
      className={`h-[235px] flex-1 rounded-3xs bg-white border-tomato-300 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start min-w-[561px] max-w-full z-[1] text-left text-6xl text-white font-inter mq800:min-w-full mq1100:h-auto ${className}`}
      style={newsNewArrivalsStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-start shrink-0 max-w-full [row-gap:20px] mq1100:flex-wrap">
        <div className="h-[233px] w-[58px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs [background:linear-gradient(rgba(0,_0,_0,_0.1),_rgba(0,_0,_0,_0.1)),_linear-gradient(182.98deg,_#eb5231,_#571fcf)] flex flex-row items-start justify-start pt-9 px-[13px] pb-10 box-border">
          <div className="h-[233px] w-[58px] relative rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs [background:linear-gradient(rgba(0,_0,_0,_0.1),_rgba(0,_0,_0,_0.1)),_linear-gradient(182.98deg,_#eb5231,_#571fcf)] hidden" />
          <h1 className="m-0 h-8 w-[157px] relative text-inherit leading-[128.52%] font-medium font-[inherit] inline-block shrink-0 [transform:_rotate(-90deg)] z-[1] mq450:text-xl mq450:leading-[26px]">
            New Arrivals
          </h1>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start min-w-[522px] max-w-full mq800:min-w-full">
          <div className="w-[803px] overflow-x-auto flex flex-row items-start justify-start py-[13px] px-[35px] box-border gap-12 max-w-full mq450:gap-6">
            <div className="h-[203px] w-[167px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white overflow-hidden shrink-0">
              <img
                className="absolute top-[16px] left-[22px] rounded-8xs w-[123px] h-[170px] object-cover"
                loading="lazy"
                alt=""
                src={newsImagePair}
              />
            </div>
            <div className="h-[203px] w-[167px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[19px] rounded-8xs w-[130px] h-[171.8px] object-cover"
                loading="lazy"
                alt=""
                src={newsImagePair1}
              />
            </div>
            <div className="h-[203px] w-[167px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[19px] rounded-8xs w-[130px] h-[171.8px] object-cover"
                loading="lazy"
                alt=""
                src={newsImagePair2}
              />
            </div>
            <div className="h-[203px] w-[167px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
                loading="lazy"
                alt=""
                src={newsImagePair3}
              />
            </div>
          </div>
          <div className="self-stretch overflow-x-auto flex flex-row items-start justify-start pt-3.5 px-[35px] pb-4 gap-12 mq450:gap-6">
            <div className="h-[203px] w-[167px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white overflow-hidden shrink-0">
              <img
                className="absolute top-[16px] left-[22px] rounded-8xs w-[123px] h-[170px] object-cover"
                alt=""
                src={rectangle12}
              />
            </div>
            <div className="h-[203px] w-[167px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[19px] rounded-8xs w-[130px] h-[171.8px] object-cover"
                alt=""
                src={rectangle121}
              />
            </div>
            <div className="h-[203px] w-[167px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[19px] rounded-8xs w-[130px] h-[171.8px] object-cover"
                alt=""
                src={rectangle122}
              />
            </div>
            <div className="h-[203px] w-[167px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.8px] object-cover"
                alt=""
                src={rectangle123}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[58px] h-[157px] flex flex-row items-start justify-start py-0 px-[13px] box-border shrink-0 mt-[-193px] text-center">
        <h1 className="m-0 h-8 w-[157px] relative text-inherit leading-[128.52%] font-medium font-[inherit] inline-block shrink-0 [transform:_rotate(-90deg)] mq450:text-xl mq450:leading-[26px]">
          News Rack
        </h1>
      </div>
    </div>
  );
};

export default NewsNewArrivals;
