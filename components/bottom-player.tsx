import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

export type BottomPlayerType = {
  className?: string;
};

const BottomPlayer: NextPage<BottomPlayerType> = ({ className = "" }) => {
  const router = useRouter();

  const onBackActionContainerClick = useCallback(() => {
    router.push("/book-preview");
  }, [router]);

  const onGroupContainerClick = useCallback(() => {
    router.push("/read-now-view");
  }, [router]);

  return (
    <div
      className={`self-stretch h-24 rounded-t-none rounded-b-3xs flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border max-w-full z-[1] text-left text-3xs text-white font-inter mq800:h-auto ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
        <div className="h-[25px] w-[13px] absolute !m-[0] right-[81px] bottom-[73px] rounded-3xs bg-white opacity-[0] z-[1]" />
        <div className="flex-1 shadow-[0px_-1px_0px_#000] bg-dimgray-600 flex flex-row items-start justify-between pt-[23px] pb-[782px] pl-[193px] pr-[72px] box-border relative max-w-full gap-5 mq800:flex-wrap">
          <div className="h-[878px] w-[1544px] relative shadow-[0px_-1px_0px_#000] bg-dimgray-600 hidden max-w-full z-[0]" />
          <div className="flex flex-col items-start justify-start gap-[3px] text-sm">
            <div className="relative font-medium inline-block min-w-[109px] z-[1]">
              INTRODUCTION
            </div>
            <div className="relative text-xs font-medium inline-block min-w-[122px] z-[1]">
              Don’t Make Me Think
            </div>
            <div className="relative text-3xs font-thin text-gray-700 inline-block min-w-[79px] z-[1]">
              Steve Kurg, 2000
            </div>
          </div>
          <div className="w-[117px] flex flex-col items-start justify-start pt-[49px] px-0 pb-0 box-border text-center">
            <div className="self-stretch flex flex-row items-start justify-start gap-[4.5px] mq450:flex-wrap">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[1]"
                loading="lazy"
                alt=""
                src="/heroiconsoutlinechevronleft.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border min-w-[39px]">
                <div className="self-stretch relative inline-block min-w-[60px] z-[1]">{`1 & 2 of 200`}</div>
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[1]"
                loading="lazy"
                alt=""
                src="/heroiconsoutlinechevronright.svg"
              />
            </div>
          </div>
          <div className="w-[180px] !m-[0] absolute top-[34px] left-[18px] flex flex-row items-start justify-start text-mini">
            <img
              className="h-12 w-12 absolute !m-[0] right-[21px] bottom-[-19px] object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/minicover@2x.png"
            />
            <div
              className="flex-1 flex flex-row items-start justify-start gap-[9px] cursor-pointer z-[2] mq450:flex-wrap"
              onClick={onBackActionContainerClick}
            >
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                loading="lazy"
                alt=""
                src="/heroiconsoutlinearrowsmallleft.svg"
              />
              <div className="flex-1 relative leading-[128.52%] inline-block min-w-[27px]">
                Back
              </div>
            </div>
          </div>
          <div className="w-[244px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border text-center">
            <div className="self-stretch flex flex-row items-start justify-center gap-[22px] mq450:flex-wrap">
              <img
                className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px] z-[1]"
                loading="lazy"
                alt=""
                src="/heart.svg"
              />
              <button
                className="cursor-pointer border-white border-[1px] border-solid py-1.5 pl-[13px] pr-3 bg-[transparent] flex-[0.8529] rounded-8xs box-border flex flex-row items-start justify-start min-w-[55px] whitespace-nowrap z-[1] hover:bg-gainsboro-500 hover:border-gainsboro-100 hover:border-[1px] hover:border-solid hover:box-border mq450:flex-1"
                onClick={onBackActionContainerClick}
              >
                <div className="h-[30px] w-[85px] relative rounded-8xs border-white border-[1px] border-solid box-border hidden" />
                <div className="flex-1 relative text-3xs font-inter text-white text-center inline-block min-w-[60px] z-[1]">
                  Full Screen
                </div>
              </button>
              <div
                className="flex-1 rounded-8xs border-white border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 pl-2 pr-[7px] min-w-[55px] cursor-pointer z-[1]"
                onClick={onGroupContainerClick}
              >
                <div className="h-[30px] w-[85px] relative rounded-8xs border-white border-[1px] border-solid box-border hidden z-[1]" />
                <div className="w-[60px] relative inline-block shrink-0 z-[1]">
                  View
                </div>
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 ml-[-5px]">
                  <img
                    className="w-[13px] h-[6.9px] relative rounded-12xs object-contain z-[1]"
                    alt=""
                    src="/polygon-1-3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomPlayer;
