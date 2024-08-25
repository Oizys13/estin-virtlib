import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type BookItemFormatsType = {
  className?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const BookItemFormats: NextPage<BookItemFormatsType> = ({
  className = "",
  propWidth,
}) => {
  const bookItemFormatsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`w-[137px] flex flex-col items-start justify-start pt-[12.5px] pb-0 pl-0 pr-[30px] box-border text-left text-mini text-dimgray-600 font-inter ${className}`}
      style={bookItemFormatsStyle}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-2">
        <div className="self-stretch flex flex-col items-start justify-start gap-2">
          <div className="flex flex-row items-start justify-start gap-2">
            <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
              <img
                className="w-[15px] h-[15px] relative z-[1]"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className="relative inline-block min-w-[84px] z-[1]">
              Hard Copy
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[7px]">
            <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
              <img
                className="w-[15px] h-[15px] relative z-[1]"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className="flex-1 relative leading-[150%] z-[1]">E - Book</div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-1.5">
          <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
            <img
              className="w-[15px] h-[15px] relative z-[1]"
              alt=""
              src="/vector.svg"
            />
          </div>
          <div className="relative leading-[150%] inline-block min-w-[84px] z-[1]">
            Audio book
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookItemFormats;
