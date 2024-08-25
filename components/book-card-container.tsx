import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type BookCardContainerType = {
  className?: string;
  bookCardElements?: string;
  dontMakeMeThink?: string;
  steveKrug2000?: string;
  prop?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
  propAlignSelf1?: CSSProperties["alignSelf"];
};

const BookCardContainer: NextPage<BookCardContainerType> = ({
  className = "",
  bookCardElements,
  dontMakeMeThink,
  propAlignSelf,
  steveKrug2000,
  propWidth,
  propDisplay,
  propAlignSelf1,
  prop,
}) => {
  const dontMakeMe1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const steveKrug20001Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
      alignSelf: propAlignSelf1,
    };
  }, [propWidth, propDisplay, propAlignSelf1]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-3 min-w-[84px] text-left text-3xs text-dimgray-600 font-inter ${className}`}
    >
      <img
        className="w-[123px] h-[170px] relative rounded-8xs object-cover"
        loading="lazy"
        alt=""
        src={bookCardElements}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
        <div
          className="self-stretch relative text-xs leading-[128.52%]"
          style={dontMakeMe1Style}
        >
          {dontMakeMeThink}
        </div>
        <div
          className="w-[101px] relative leading-[14px] inline-block"
          style={steveKrug20001Style}
        >
          {steveKrug2000}
        </div>
        <div className="w-[101px] relative leading-[128.52%] inline-block">
          <span>{prop}</span>
          <span className="text-darkgray-200">/5</span>
        </div>
      </div>
    </div>
  );
};

export default BookCardContainer;
