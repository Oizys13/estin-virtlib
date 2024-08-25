"use client"
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

export type BackgroundContainerType = {
  className?: string;
  bGVector?: string;
  group3?: string;
};

const BackgroundContainer: NextPage<BackgroundContainerType> = ({
  className = "",
  bGVector,
  group3,
}) => {
  const router = useRouter();

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
      className={`w-[306px] flex flex-row items-start justify-start relative mt-[-994px] text-left text-xl text-gray-200 font-inter ${className}`}
    >
      <img
        className="h-[1143.5px] w-[1994.3px] absolute !m-[0] top-[-115px] right-[-1616.3px]"
        alt=""
        src={bGVector}
      />
      <div className="flex-1 rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-white overflow-hidden flex flex-col items-start justify-start pt-[38px] px-[66px] pb-[51px] gap-[442px] z-[1] mq450:gap-[221px] mq450:pl-5 mq450:pr-5 mq450:box-border mq800:pb-[21px] mq800:box-border mq1100:pt-[1014px] mq1100:pb-[33px] mq1100:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[99.8px]">
          <div className="flex flex-row items-start justify-start py-0 px-0.5">
            <img
              className="h-[74.2px] w-[120px] relative object-cover shrink-0 z-[2]"
              loading="lazy"
              alt=""
              src={group3}
            />
          </div>
          <div className="self-stretch flex flex-col items-center justify-start shrink-0 z-[2]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[34px]">
              <div className="self-stretch flex flex-row items-center justify-start py-0 pl-0 pr-px gap-3 text-dimgray-600">
                <img
                  className="h-[23px] w-[23px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/heroiconsminihome.svg"
                />
                <a className="[text-decoration:none] flex-1 relative text-[inherit] mq450:text-base">
                  Home
                </a>
              </div>
              <div
                className="self-stretch flex flex-row items-center justify-start py-0 px-px gap-[11px] cursor-pointer"
                onClick={onSearchMenuContainerClick}
              >
                <img
                  className="h-[23px] w-[23px] relative"
                  loading="lazy"
                  alt=""
                  src="/search-1.svg"
                />
                <h1 className="m-0 flex-1 relative text-inherit font-normal font-[inherit] mq450:text-base">
                  Search
                </h1>
              </div>
              <div
                className="self-stretch flex flex-row items-center justify-start py-0 px-[3px] gap-3 cursor-pointer"
                onClick={onMyShelfMenuClick}
              >
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/bookshelf.svg"
                />
                <h1 className="m-0 flex-1 relative text-inherit font-normal font-[inherit] mq450:text-base">
                  My Shelf
                </h1>
              </div>
              <div
                className="self-stretch flex flex-row items-center justify-start py-0 px-0.5 gap-3 cursor-pointer"
                onClick={onFavouriteMenuContainerClick}
              >
                <img
                  className="h-[21px] w-[21px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/give-gift.svg"
                />
                <h1 className="m-0 flex-1 relative text-inherit font-normal font-[inherit] mq450:text-base">
                  Contribute
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[138px] flex flex-row items-start justify-start py-0 px-0.5 box-border text-mini">
          <div className="flex-1 flex flex-col items-start justify-start gap-[15px]">
            <h3 className="m-0 self-stretch relative text-inherit font-normal font-[inherit]">{`About `}</h3>
            <h3 className="m-0 self-stretch relative text-inherit font-normal font-[inherit]">
              Support
            </h3>
            <h3 className="m-0 relative text-inherit font-normal font-[inherit]">{`Terms & Condition`}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundContainer;
