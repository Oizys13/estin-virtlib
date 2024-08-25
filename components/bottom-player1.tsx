import type { NextPage } from "next";
import Skip from "./skip";

export type BottomPlayer1Type = {
  className?: string;
};

const BottomPlayer1: NextPage<BottomPlayer1Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-t-none rounded-b-3xs bg-dimgray-600 flex flex-row items-start justify-between pt-[29px] pb-5 pl-6 pr-[132px] box-border max-w-full gap-5 z-[1] text-left text-sm text-white font-inter mq1125:flex-wrap ${className}`}
    >
      <div className="h-[109px] w-[1544px] relative rounded-t-none rounded-b-3xs bg-dimgray-600 hidden max-w-full" />
      <div className="flex flex-row items-end justify-start gap-4">
        <img
          className="h-12 w-12 relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/minicover@2x.png"
        />
        <div className="flex flex-col items-start justify-start gap-[3px]">
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
      </div>
      <div className="w-[608px] flex flex-row items-start justify-start py-0 pl-0 pr-[33px] box-border gap-[9px] max-w-full text-xs text-gray-700 mq800:flex-wrap">
        <div className="flex flex-col items-start justify-start pt-[45px] px-0 pb-0">
          <div className="relative font-thin inline-block min-w-[32px] whitespace-nowrap z-[1]">
            00:00
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start gap-2 min-w-[347px] max-w-full mq800:flex-wrap mq800:min-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-3.5 min-w-[322px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <div className="w-32 flex flex-row items-end justify-between gap-5">
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[11px]">
                  <Skip
                    propTransform=" rotate(180deg)"
                    propTransform1=" rotate(-180deg)"
                  />
                </div>
                <img
                  className="h-9 w-9 relative z-[1]"
                  alt=""
                  src="/play-1.svg"
                />
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[11px]">
                  <Skip />
                </div>
              </div>
            </div>
            <div className="self-stretch h-1.5 relative rounded-8xs bg-gray-600 z-[1]" />
          </div>
          <div className="flex flex-col items-start justify-start pt-[45px] px-0 pb-0">
            <div className="relative font-thin inline-block min-w-[30px] whitespace-nowrap z-[1]">
              02:18
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[29px] px-0 pb-0">
        <div className="flex flex-row items-start justify-start gap-4">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px] z-[1]"
            loading="lazy"
            alt=""
            src="/heroiconssolidheart.svg"
          />
          <input
            className="m-0 h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px] z-[1]"
            type="checkbox"
          />
        </div>
      </div>
    </div>
  );
};

export default BottomPlayer1;
