import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type BookItemLocationsType = {
  className?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const BookItemLocations: NextPage<BookItemLocationsType> = ({
  className = "",
  propWidth,
}) => {
  const bookItemLocationsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`w-[116px] flex flex-col items-start justify-start pt-[18px] pb-0 pl-0 pr-[18px] box-border text-center text-mini text-white font-inter ${className}`}
      style={bookItemLocationsStyle}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
        <div className="w-[85px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-forestgreen-100 flex flex-row items-start justify-start pt-[5px] px-0 pb-1 box-border z-[1]">
          <div className="h-[26px] w-[85px] relative rounded-8xs bg-forestgreen-100 hidden" />
          <div className="flex-1 relative z-[1]">In-Shelf</div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-px text-left text-dimgray-600">
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/heroiconsminimappin1@2x.png"
          />
          <div className="flex-1 relative leading-[24px] z-[1]"> CS A-15</div>
        </div>
      </div>
    </div>
  );
};

export default BookItemLocations;
