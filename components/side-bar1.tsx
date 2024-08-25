"use client"
import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import { useRouter } from "next/navigation";

export type SideBar1Type = {
  className?: string;
  group3?: string;

  /** Style props */
  propTextDecoration?: CSSProperties["textDecoration"];
  propTextDecoration1?: CSSProperties["textDecoration"];
};

const SideBar1: NextPage<SideBar1Type> = ({
  className = "",
  group3,
  propTextDecoration,
  propTextDecoration1,
}) => {
  const aboutStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const searchStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration1,
    };
  }, [propTextDecoration1]);

  const router = useRouter();

  const onHomeMenuContainerClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  const onSearchMenuContainerClick = useCallback(() => {
    router.push("/search");
  }, [router]);

  const onMyShelfMenuClick = useCallback(() => {
    router.push("/my-shelf");
  }, [router]);

  const onFavouriteMenuContainerClick = useCallback(() => {
    router.push("/contribute");
  }, [router]);

  return (
    <div
      className={`absolute top-[48px] left-[35px] w-[306px] h-[994px] z-[1] text-left text-xl text-gray-200 font-inter ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] rounded-tl-[18px] rounded-tr-none rounded-br-none rounded-bl-3xs bg-white w-full h-full overflow-hidden">
        <img
          className="absolute top-[38px] left-[68px] w-[120px] h-[74.2px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src={group3}
        />
        <a
          className="[text-decoration:none] absolute top-[856px] left-[68px] text-mini text-[inherit] inline-block w-[134px] h-[19px] z-[2]"
          style={aboutStyle}
        >{`About `}</a>
        <div className="absolute top-[890px] left-[68px] text-mini inline-block w-[134px] h-[19px] z-[2]">
          Support
        </div>
        <div className="absolute top-[924px] left-[68px] text-mini inline-block w-[134px] h-[19px] z-[2]">{`Terms & Condition`}</div>
        <div
          className="absolute top-[212px] left-[66px] w-[174px] flex flex-row items-center justify-start gap-3 cursor-pointer z-[2]"
          onClick={onHomeMenuContainerClick}
        >
          <img
            className="h-[23px] w-[23px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/heroiconsminihome1.svg"
          />
          <a className="[text-decoration:none] flex-1 relative text-[inherit] mq450:text-base">
            Home
          </a>
        </div>
        <div
          className="absolute top-[271px] left-[67.5px] w-[171px] flex flex-row items-center justify-start gap-[11px] cursor-pointer z-[2]"
          onClick={onSearchMenuContainerClick}
        >
          <img
            className="h-[23px] w-[23px] relative"
            alt=""
            src="/search-1.svg"
          />
          <a
            className="[text-decoration:none] flex-1 relative text-[inherit] mq450:text-base"
            style={searchStyle}
          >
            Search
          </a>
        </div>
        <div
          className="absolute top-[330px] left-[69px] w-[168px] flex flex-row items-center justify-start gap-3 cursor-pointer z-[2]"
          onClick={onMyShelfMenuClick}
        >
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/bookshelf.svg"
          />
          <div className="flex-1 relative mq450:text-base">My Shelf</div>
        </div>
        <div
          className="absolute top-[389px] left-[68.5px] w-[169px] flex flex-row items-center justify-start gap-3 cursor-pointer z-[2]"
          onClick={onFavouriteMenuContainerClick}
        >
          <img
            className="h-[21px] w-[21px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/give-gift.svg"
          />
          <div className="flex-1 relative shrink-0 mq450:text-base">
            Contribute
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar1;
