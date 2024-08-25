"use client"
import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import { useRouter } from "next/navigation";

export type BookItemContainerType = {
  className?: string;
  rectangle12?: string;
  dontMakeMeThink?: string;
  steveKrug2000?: string;

  /** Style props */
  dontMakeMeWidth?: CSSProperties["width"];
  spanHeight?: CSSProperties["height"];
  spanDisplay?: CSSProperties["display"];
  propHeight?: CSSProperties["height"];
  propHeight1?: CSSProperties["height"];

  /** Action props */
  onBookItemContainerClick?: () => void;
};

const BookItemContainer: NextPage<BookItemContainerType> = ({
  className = "",
  onBookItemContainerClick,
  dontMakeMeWidth,
  rectangle12,
  dontMakeMeThink,
  spanHeight,
  spanDisplay,
  steveKrug2000,
  propHeight,
  propHeight1,
}) => {
  const bookItemContainerStyle: CSSProperties = useMemo(() => {
    return {
      width: dontMakeMeWidth,
    };
  }, [dontMakeMeWidth]);

  const dontMakeMeStyle: CSSProperties = useMemo(() => {
    return {
      height: spanHeight,
      display: spanDisplay,
    };
  }, [spanHeight, spanDisplay]);

  const steveKrug2000Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const bookRatingsStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const router = useRouter();

  const onBookItemContainerClick1 = useCallback(() => {
    router.push("/book-preview");
  }, [router]);

  return (
    <div
      className={`w-40 rounded-3xs bg-white overflow-hidden shrink-0 flex flex-col items-end justify-start pt-4 px-[15px] pb-[13px] box-border gap-3 cursor-pointer text-left text-3xs text-dimgray-600 font-inter ${className}`}
      onClick={onBookItemContainerClick}
      style={bookItemContainerStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[5px] pr-0.5">
        <img
          className="h-[170px] flex-1 relative rounded-8xs max-w-full overflow-hidden object-cover"
          loading="lazy"
          alt=""
          src={rectangle12}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
        <div
          className="self-stretch relative text-xs leading-[128.52%]"
          style={dontMakeMeStyle}
        >
          {dontMakeMeThink}
        </div>
        <div
          className="w-[101px] relative leading-[14px] inline-block"
          style={steveKrug2000Style}
        >
          {steveKrug2000}
        </div>
        <div
          className="w-[101px] relative leading-[128.52%] inline-block"
          style={bookRatingsStyle}
        >
          <span>4.5</span>
          <span className="text-darkgray-200">/5</span>
        </div>
      </div>
    </div>
  );
};

export default BookItemContainer;
