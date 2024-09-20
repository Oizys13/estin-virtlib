import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type TopMain1Type = {
  className?: string;

  /** Style props */
  polygonIconTop?: CSSProperties["top"];
  polygonIconPosition?: CSSProperties["position"];
  polygonIconAlignSelf?: CSSProperties["alignSelf"];
  polygonIconLeft?: CSSProperties["left"];
  polygonIconFlex?: CSSProperties["flex"];
  searchLabelOverflow?: CSSProperties["overflow"];
  email?: string;
  username?: string;
};

const TopMain1: NextPage<TopMain1Type> = ({
  className = "",
  polygonIconTop,
  polygonIconPosition,
  polygonIconAlignSelf,
  polygonIconLeft,
  polygonIconFlex,
  searchLabelOverflow,
  email,
  username,
}) => {
  const topMainStyle: CSSProperties = useMemo(() => {
    return {
      top: polygonIconTop,
      position: polygonIconPosition,
      alignSelf: polygonIconAlignSelf,
      left: polygonIconLeft,
      flex: polygonIconFlex,
    };
  }, [
    polygonIconTop,
    polygonIconPosition,
    polygonIconAlignSelf,
    polygonIconLeft,
    polygonIconFlex,
  ]);

  return (
    <header
      className={`self-stretch flex flex-row items-center justify-center w-full max-w-full z-[2] text-left text-xl text-dimgray-600 font-inter ${className}`}
    >
      <div
        className="flex-1 self-stretch justify-between  rounded-tl-none rounded-tr-3xs rounded-b-none [background:linear-gradient(180deg,_#fff,_#f3f3f7_66.67%,_rgba(243,_243,_247,_0.88))] overflow-hidden flex flex-row items-center  pt-[38px] pb-6 pl-[46px] pr-[45px] box-border gap-7 max-w-full"
      >
        <div className="flex-1 rounded-[40px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-21xl bg-white flex flex-row items-start justify-between py-0 pl-0 pr-[17px] box-border max-w-[541px] gap-5 z-[1]">
          <div className="self-stretch w-[541px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-21xl bg-white hidden max-w-full" />
          <div className="w-[352px] flex flex-row items-center justify-center gap-[21px] max-w-full">
            <div className="rounded-tl-21xl bg-[#F7F7FA] rounded-[40px] rounded-tr-none rounded-br-none rounded-bl-21xl bg-whitesmoke-100 flex flex-row items-center justify-center  py-[14px] px-[20px] pr-[11px] gap-2.5 z-[1]">
              
              <div className="relative leading-[128.52%] inline-block min-w-[27px] z-[1]">
                All
              </div>
              <div className="flex flex-col items-center justify-center  px-0 box-border w-[17px] h-[17px]">
                <img
                  className="w-[17px] relative rounded-12xs object-contain z-[1]"
                  alt=""
                  src="/search-icon.svg"
                />
              </div>
            </div>
            <input
              className="w-full [border:none] [outline:none] bg-[transparent] h-9 flex-1 flex flex-col items-center justify-center box-border font-inter text-xl text-silver-100 min-w-[137px]"
              placeholder="Search"
              type="text"
            />
          </div>
          <div className="flex flex-col items-center justify-center pt-2 px-0 pb-0">
            <div className="h-[33px] flex flex-row items-center justify-center gap-[9.5px]">
              <div className="w-5 flex flex-col items-center justify-center pt-[7px] px-0 pb-0 box-border">
                <img
                  className="w-5 h-5 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/search.svg"
                />
              </div>
              
              
            </div>
          </div>
        </div>
        
        <span className="text-30pt font-[inter] font-medium text-[#4D4D4D] py-[20px]">Welcome Back, our dear student</span>
        
        <div className="w-[50px] rounded-[40px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-14xl bg-white flex flex-row items-center justify-center   box-border z-[1]">
          
          <div className="flex flex-col items-center justify-center">
            <img
              className="w-[50px] h-[50px] relative rounded-[50%] object-cover z-[1]"
              alt=""
              src="/profile-picture@2x.png"
            />
         
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopMain1;