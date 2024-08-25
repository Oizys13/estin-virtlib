import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type GroupComponent3Type = {
  className?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propGap?: CSSProperties["gap"];
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propOverflowX?: CSSProperties["overflowX"];
  propFlexWrap?: CSSProperties["flexWrap"];
  propTextDecoration?: CSSProperties["textDecoration"];
};

const GroupComponent3: NextPage<GroupComponent3Type> = ({
  className = "",
  propAlignSelf,
  propGap,
  propPosition,
  propTop,
  propLeft,
  propWidth,
  propOverflowX,
  propFlexWrap,
  propTextDecoration,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      gap: propGap,
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
      overflowX: propOverflowX,
    };
  }, [
    propAlignSelf,
    propGap,
    propPosition,
    propTop,
    propLeft,
    propWidth,
    propOverflowX,
  ]);

  const featuredDetailsStyle: CSSProperties = useMemo(() => {
    return {
      flexWrap: propFlexWrap,
    };
  }, [propFlexWrap]);

  const previewStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <div
      className={`self-stretch rounded-3xs bg-white overflow-x-auto flex flex-row items-start justify-between py-[13px] pl-[23px] pr-[34px] shrink-0 gap-5 z-[1] text-left text-xl text-dimgray-600 font-inter ${className}`}
      style={groupDivStyle}
    >
      <div className="h-[125px] w-[1454px] relative rounded-3xs bg-white shrink-0 hidden" />
      <div className="w-[347px] shrink-0 flex flex-col items-start justify-start py-0 pl-0 pr-[18px] box-border">
        <div
          className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[47px] z-[1]"
          style={featuredDetailsStyle}
        >
          <img
            className="h-[99px] w-[75px] relative rounded-8xs object-cover"
            alt=""
            src="/rectangle-16@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-2.5 min-w-[135px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-2">
              <div className="self-stretch relative leading-[26px] mq450:text-base mq450:leading-[21px]">{`Don’t Make Me Think `}</div>
              <div className="w-[140px] h-3.5 relative text-mini leading-[128.52%] inline-block shrink-0">
                Steve Krug, 2000
              </div>
            </div>
            <div className="w-[140px] h-3.5 relative text-3xs leading-[128.52%] inline-block shrink-0">
              Second Edition
            </div>
          </div>
        </div>
      </div>
      <div className="w-[60px] shrink-0 flex flex-col items-start justify-start pt-9 px-0 pb-0 box-border">
        <div className="self-stretch h-[27px] relative leading-[128.52%] inline-block shrink-0 z-[1]">
          <span>4.5</span>
          <span className="text-mini text-darkgray-200">/5</span>
        </div>
      </div>
      <div className="w-[198px] shrink-0 flex flex-col items-start justify-start pt-[21px] pb-0 pl-0 pr-[18px] box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[11px]">
          <div className="self-stretch h-[27px] relative leading-[128.52%] inline-block shrink-0 z-[1] mq450:text-base mq450:leading-[21px]">
            Computer Science
          </div>
          <div className="self-stretch h-[19px] relative text-mini leading-[128.52%] inline-block shrink-0 z-[1]">
            UX Design
          </div>
        </div>
      </div>
      <div className="h-[86.5px] w-[137px] shrink-0 flex flex-col items-start justify-start pt-[12.5px] pb-0 pl-0 pr-[30px] box-border text-mini">
        <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-1.5">
          <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
            <div className="flex flex-col items-start justify-start gap-[12.5px]">
              <img
                className="w-[15px] h-[15px] relative z-[1]"
                alt=""
                src="/vector.svg"
              />
              <img
                className="w-[15px] h-[15px] relative z-[1]"
                alt=""
                src="/vector.svg"
              />
              <img
                className="w-[15px] h-[15px] relative z-[1]"
                alt=""
                src="/vector.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-2">
            <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pl-0.5 pr-0">
              <div className="self-stretch flex-1 relative z-[1]">
                Hard Copy
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 px-px">
              <div className="self-stretch flex-1 relative leading-[150%] z-[1]">
                E - Book
              </div>
            </div>
            <div className="w-[84px] h-5 relative leading-[150%] inline-block shrink-0 z-[1]">
              Audio book
            </div>
          </div>
        </div>
      </div>
      <div className="h-[81px] w-[116px] shrink-0 flex flex-col items-start justify-start pt-[18px] pb-0 pl-0 pr-[18px] box-border text-center text-mini text-white">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[13px]">
          <div className="w-[85px] h-[26px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-forestgreen-100 flex flex-row items-start justify-start pt-[5px] px-0 pb-1 box-border z-[1]">
            <div className="h-[26px] w-[85px] relative rounded-8xs bg-forestgreen-100 hidden" />
            <div className="self-stretch flex-1 relative z-[1]">In-Shelf</div>
          </div>
          <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-px text-left text-dimgray-600">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 object-cover z-[1]"
              alt=""
              src="/heroiconsminimappin1@2x.png"
            />
            <div className="self-stretch flex-1 relative leading-[150%] z-[1]">
              {" "}
              CS A-15
            </div>
          </div>
        </div>
      </div>
      <div className="w-[179px] shrink-0 flex flex-col items-start justify-start pt-[34.5px] px-0 pb-0 box-border text-center text-mini text-tomato-100">
        <div className="self-stretch flex flex-row items-start justify-between gap-5">
          <img
            className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px] z-[1]"
            alt=""
            src="/heart.svg"
          />
          <div className="h-[30px] w-[85px] rounded-8xs border-tomato-100 border-[1px] border-solid box-border flex flex-row items-start justify-start py-1.5 pl-[13px] pr-3 z-[1]">
            <div className="h-[30px] w-[85px] relative rounded-8xs border-tomato-100 border-[1px] border-solid box-border hidden" />
            <div
              className="self-stretch flex-1 relative z-[1]"
              style={previewStyle}
            >
              Preview
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent3;
