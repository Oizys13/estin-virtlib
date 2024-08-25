import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type NavigationItemsType = {
  className?: string;
  navigationIcons?: string;
  dontMakeMeThink?: string;
  steveKrug2000?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propMinWidth?: CSSProperties["minWidth"];
};

const NavigationItems: NextPage<NavigationItemsType> = ({
  className = "",
  propLeft,
  navigationIcons,
  dontMakeMeThink,
  steveKrug2000,
  propMinWidth,
}) => {
  const navigationItemsStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const steveKrug20002Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`absolute top-[187px] left-[0px] rounded-3xs bg-white w-[308px] h-[260px] overflow-hidden z-[2] text-left text-3xs text-dimgray-600 font-inter ${className}`}
      style={navigationItemsStyle}
    >
      <img
        className="absolute top-[16px] left-[15px] rounded-8xs w-[123px] h-[170px] object-cover"
        alt=""
        src={navigationIcons}
      />
      <div className="absolute top-[198px] left-[15px] text-xs leading-[128.52%] inline-block w-[130px] h-3.5">
        {dontMakeMeThink}
      </div>
      <div
        className="absolute top-[217px] left-[15px] leading-[14px] inline-block w-[101px] h-3.5"
        style={steveKrug20002Style}
      >
        {steveKrug2000}
      </div>
      <div className="absolute top-[236px] left-[15px] leading-[128.52%] inline-block w-[101px] h-[11px]">
        <span>4.5</span>
        <span className="text-darkgray-200">/5</span>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-darkgray-300 absolute top-[141px] left-[163px] rounded-8xs w-[125px] h-10">
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-darkgray-300 w-full h-full hidden" />
        <div className="absolute top-[9px] left-[16px] text-mini leading-[21px] font-semibold font-inter text-white text-center inline-block w-[97px] h-[21px] z-[1]">
          Borrowed
        </div>
      </button>
      <div className="absolute top-[196px] left-[163px] rounded-8xs bg-white border-tomato-100 border-[1px] border-solid box-border w-[125px] h-10 text-center text-mini text-tomato-100">
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-white border-tomato-100 border-[1px] border-solid box-border w-full h-full hidden" />
        <div className="absolute top-[9px] left-[16px] leading-[21px] font-semibold inline-block w-[97px] h-[21px] z-[1]">
          Return
        </div>
      </div>
      <div className="absolute top-[25px] left-[168px] text-mini leading-[128.52%] inline-block w-[95px] h-[19px] min-w-[95px]">{`Borrowed on `}</div>
      <div className="absolute top-[54px] left-[168px] leading-[13px] text-dimgray-100 inline-block w-[114px] h-[13px] min-w-[114px] whitespace-nowrap">
        2 Mar 2023 09:00 AM
      </div>
      <div className="absolute top-[111px] left-[168px] leading-[13px] inline-block w-[114px] h-[13px] min-w-[114px] text-dimgray-100">
        <span>{`13 Mar 2023 `}</span>
        <span className="text-crimson">(Over Due)</span>
      </div>
      <div className="absolute top-[82px] left-[168px] text-mini leading-[128.52%] inline-block w-[120px] h-[19px] min-w-[120px]">
        Submission Due
      </div>
      <div className="absolute top-[11px] left-[288px] rounded-[50%] bg-tomato-400 w-2.5 h-2.5" />
    </div>
  );
};

export default NavigationItems;
